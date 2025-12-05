import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext"; 

export default function RightBar() {
  const { user, isAuthenticated } = useContext(UserContext);

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

      {isAuthenticated ? (
        <Link to="/tutorials/create" className="back-home-button">
          Make A Tutorial
        </Link>
      ) : (
        <div style={{ color: "#ccc", fontSize: "20px" }}>
          Log in to create a tutorial
        </div>
      )}
    </div>
  );
}