import { Link } from "react-router-dom";

export default function RightBar() {
  return (
    <div
      className="tutorial-right-sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", 
        gap: "20px", 
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: "24px", 
          fontWeight: "600",
        }}
      >
        Want to share your knowledge?
      </div>

      <Link to="/tutorials/create" className="back-home-button">
        Make A Tutorial
      </Link>
    </div>
  );
}