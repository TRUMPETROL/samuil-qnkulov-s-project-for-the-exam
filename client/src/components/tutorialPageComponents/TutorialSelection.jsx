import Tutorial from "./tutorial.jsx";

export default function TutorialBrowser({ selectedCategory, selectedPlatform, searchTerm }) {

  const tutorials = [
    {
      title: "Character Modeling",
      image: "/images/modeling.jpg",
      date: "2025-11-26",
      platform: "Blender",
      category: "Modeling",
      creator: "User1",
    },
    {
      title: "3D Texturing",
      image: "/images/3D-Texturing-1.jpg",
      date: "2025-11-25",
      platform: "Substance Painter",
      category: "Textures/Materials",
      creator: "User2",
    },
    {
      title: "Topology Basics",
      image: "/images/topology.jpg",
      date: "2025-11-24",
      platform: "Maya",
      category: "Topology/Polycount",
      creator: "User3",
    },
    {
      title: "Character Modeling",
      image: "/images/modeling.jpg",
      date: "2025-11-26",
      platform: "Maya",
      category: "Modeling",
      creator: "User4",
    },
    {
      title: "3D Texturing",
      image: "/images/3D-Texturing-1.jpg",
      date: "2025-11-25",
      platform: "Substance Painter",
      category: "Textures/Materials",
      creator: "User5",
    },
    {
      title: "Topology Basics",
      image: "/images/topology.jpg",
      date: "2025-11-24",
      platform: "Maya",
      category: "Topology/Polycount",
      creator: "User6",
    },
  ];


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
            {...tut}
            link={`/tutorial/${tut.creator.toLowerCase()}-${tut.title.replace(/\s+/g, "-").toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  );
}