import Tutorial from "./Tutorial.jsx";

export default function TutorialSelection({ selectedCategory, selectedPlatform, searchTerm, tutorials }) {
    const filtered = tutorials.filter(t =>
        (selectedCategory === "All" || t.category === selectedCategory) &&
        (selectedPlatform === "All" || t.platform === selectedPlatform) &&
        t.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="tutorial-main-menu">
            <div className="tutorial-browser">
                {filtered.map((tut) => (
                    <Tutorial
                        key={tut._id || tut.id}
                        title={tut.title}
                        image={tut.coverImage}
                        link={`/tutorial/${tut._id || tut.id}`}
                    />
                ))}
            </div>
        </div>
    );
}