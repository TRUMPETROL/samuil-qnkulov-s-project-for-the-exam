import { useEffect, useState } from "react";
import Tutorial from "./Tutorial.jsx";

//useEffect has been added to get data on the spot in order to fix a bug where on refresh the pre-selected category would update before the tutorial got loaded so you would get no results from the pre-selected category untill manually selecting it 

export default function TutorialSelection({ selectedCategory, selectedPlatform, searchTerm }) {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("tutorials")) || [];
        setTutorials(stored);
    }, []); 

    const filtered = tutorials.filter(t =>
        (selectedCategory === "All" || t.category === selectedCategory) &&
        (selectedPlatform === "All" || t.platform === selectedPlatform) &&
        t.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="tutorial-main-menu">
            <div className="tutorial-browser">
                {filtered.map((tut, index) => (
                    <Tutorial
                        key={index}
                        title={tut.title}
                        image={tut.coverImage}
                        link={`/tutorial/${tut.id}`}
                    />
                ))}
            </div>
        </div>
    );
}