export default function IntroductionArea() {
  return (
    <div className="introduction" id="introduction">
      <h1>
        <div className="welcome" id="welcome">
          Welcome to <strong>Game Ready</strong>
        </div>
        <br />
        <div className="description" id="description">
          the place where professional developers, beginners, and everyone in between can share
          information about making <strong>Game Ready Models</strong> on various 3D modeling platforms.
        </div>
      </h1>
      <a href="#about" className="introductionButton" id="introductionButton">
        Read More
      </a>
    </div>
  );
}