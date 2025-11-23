export default function TutorialSectionBox({ image, description, buttonText, onClick }) {
  return (
    <div className="tutorial-box">
      <div className="tutorial-box-image">
        <img src={image} alt="tutorial" />
      </div>
      <div className="tutorial-box-description">{description}</div>
      <button className="tutorial-box-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}