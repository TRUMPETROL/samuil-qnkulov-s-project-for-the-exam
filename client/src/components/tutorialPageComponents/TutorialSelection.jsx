import Tutorial from "./tutorial.jsx";

export default function TutorialSelection({ selectedCategory, selectedPlatform, searchTerm }) {
    const storedTutorials = JSON.parse(localStorage.getItem("tutorials")) || [];

    const filtered = storedTutorials.filter(t =>
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
                        link={`/tutorial/${tut.creator.toLowerCase()}-${tut.title.replace(/\s+/g, "-").toLowerCase()}`}
                    />
                ))}
            </div>
        </div>
    );
}