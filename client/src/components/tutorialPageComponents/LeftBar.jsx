export default function LeftBar() {
  return (
    <div className="tutorial-left-sidebar">
      <div className="filter">
        <label>Search</label>
        <input type="text" placeholder="Type to search..." />
      </div>
      <div className="filter">
        <label>Platform</label>
        <select>
          <option>All</option>
          <option>Blender</option>
          <option>Zbrush</option>
          <option>Maya</option>
        </select>
      </div>
      <div className="filter">
        <label>Type</label>
        <select>
          <option>All</option>
          <option>Image + Text</option>
          <option>Video + Text</option>
        </select>
      </div>
    </div>
  );
}