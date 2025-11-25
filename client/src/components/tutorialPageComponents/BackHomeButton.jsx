import { Link } from "react-router-dom";

export default function BackHomeButton() {
  return (
    <div className="back-home-container">
      <Link to="/" className="back-home-button">
        Back to Home Page
      </Link>
    </div>
  );
}