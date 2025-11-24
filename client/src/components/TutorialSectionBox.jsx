export default function TutorialSectionBox({ image, description, buttonText, onClick, link }) {
  const handleClick = () => {
    if (link) {
      window.location.href = link; // navigate to the new page
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="tutorial-box">
      <div className="tutorial-box-image">
        <img src={image} alt="tutorial" />
      </div>
      <div className="tutorial-box-description">{description}</div>
      <button className="tutorial-box-button" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}