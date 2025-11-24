
import RegistrationBar from "./components/RegistrationBar.jsx";
import TutorialPFooter from "./components/tutorialPageComponents/TutorialPFooter.jsx";
import TutorialSection from "./components/TutorialSection.jsx";


function AppTPage1() {
   
  return (
    <div className="app-container">
      
      <RegistrationBar /> {/* Registration bar is reused :) */}
      
      <div className="main-content">
        {/* Tutorial-specific content aka introduction message */}
     
        {/* The tutorial themselves */}
        
        
        <TutorialPFooter />
      </div>
    </div>
  );
}

export default AppTPage1;