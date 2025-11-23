import Footer from "./components/Footer.jsx";
import IntroductionArea from "./components/IntroductionArea.jsx";
import Sidebar from "./components/Sidebar.jsx";
import RegistrationBar  from "./components/RegistrationBar.jsx";
import TutorialSection from "./components/TutorialSection.jsx";
import AboutSection from "./components/AboutSection.jsx";

function App() {
  const tutorials = [
    { image: "/images/modeling.jpg", description: "Learn how to model a character.", buttonText: "Get Started", onClick: () => {} },
    { image: "/images/3D-Texturing-1.jpg", description: "Texturing tips and tricks.", buttonText: "Get Started", onClick: () => {} },
    { image: "/images/topology.jpg", description: "Proper topology and polycounts.", buttonText: "Get Started", onClick: () => {} },
    { image: "/images/animation01.jpg", description: "Creating animations.", buttonText: "Get Started", onClick: () => {} },
    { image: "/images/weightpaint.jpg", description: "Weight painting and skeletons.", buttonText: "Get Started", onClick: () => {} },
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <RegistrationBar />
      <div className="main-content">
        <IntroductionArea />
        <TutorialSection id="tutorials" tutorials={tutorials} />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;