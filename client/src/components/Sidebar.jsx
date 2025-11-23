import { FaHome, FaCog, FaInfoCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FaHome className="icon" />
          <a href="#introduction" className="text">Begining</a>
        </li>
        <li>
          <FaCog className="icon" />
          <a href="#tutorials" className="text">Tutorials</a>
        </li>
        <li>
          <FaInfoCircle className="icon" />
           <a href="#about" className="text">About</a>
        </li>
      </ul>
    </div>
  );
}