
import RegistrationBar from "./components/RegistrationBar";
import BackHomeButton from "./components/tutorialPageComponents/BackHomeButton.jsx";
import LeftBar from "./components/tutorialPageComponents/LeftBar.jsx";
import RightBar from "./components/tutorialPageComponents/RightBar";
import TutorialFooter from "./components/tutorialPageComponents/TutorialPFooter.jsx";
import TutorialBrowser from "./components/tutorialPageComponents/TutorialSelection.jsx";

export default function AppTPage1() {
  return (

    <div className="tutorial-page-container">
      {/* Registration bar fixed at top */}
      <RegistrationBar />

      {/* Main content */}

      <div className="tutorial-page-content">
        <BackHomeButton />
        <LeftBar/>
        <TutorialBrowser />
        <RightBar />
      </div>

      {/* Footer */}
      <TutorialFooter />
    </div>
  );
}