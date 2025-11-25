import Footer from "./Footer.jsx";
import IntroductionArea from "./IntroductionArea.jsx";
import Sidebar from "./Sidebar.jsx";
import RegistrationBar from "./RegistrationBar.jsx";
import TutorialSection from "./TutorialSection.jsx";
import AboutSection from "./AboutSection.jsx";
import "/public/css/main.css"
export default function HomePage({ tutorials }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="reg-home">
      <RegistrationBar />
      </div>
      
      <div className="main-content">
        <IntroductionArea />
        <TutorialSection id="tutorials" tutorials={tutorials} />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}