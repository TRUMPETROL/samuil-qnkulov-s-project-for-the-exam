export default function LeftBar({ selectedCategory, setSelectedCategory,  selectedPlatform,
  setSelectedPlatform }) {
  return (
    <div className="tutorial-left-sidebar">
      
      <div className="filter">
        <label>Search</label>
        <input type="text" placeholder="Type to search..." />
      </div>

      
      <div className="filter">
        <label>Platform</label>
        <select 
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option>All</option>
          <option>Blender</option>
          <option>Zbrush</option>
          <option>Maya</option>
          <option>Substance Painter</option>
        </select>
      </div>

     

      <div className="filter">
        <label>Category</label>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} 
        >
          <option>All</option>
          <option>Modeling</option>
          <option>Textures/Materials</option>
          <option>Topology/Polycount</option>
          <option>Animating</option>
          <option>Weight paint/Skeletons</option>
        </select>
      </div>

    </div>
  );
}