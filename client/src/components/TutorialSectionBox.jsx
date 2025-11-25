import { Link } from "react-router-dom";

export default function TutorialSectionBox({ image, description, buttonText, link }) {
  return (
    <div className="tutorial-box">
      <img src={image} alt={description} className="tutorial-image" />
      <p className="tutorial-description">{description}</p>
      {link ? (
        <Link to={link} className="tutorial-link">
          <button className="tutorial-button">{buttonText}</button>
        </Link>
      ) : (
        <button className="tutorial-button">{buttonText}</button>
      )}
    </div>
  );
}