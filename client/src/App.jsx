import Footer from "./components/Footer.jsx";
import IntroductionArea from "./components/IntroductionArea.jsx";
import Sidebar from "./components/Sidebar.jsx";
import RegistrationBar from "./components/RegistrationBar.jsx";
import TutorialSection from "./components/TutorialSection.jsx";
import AboutSection from "./components/AboutSection.jsx";


function App() {
 const tutorials = [
  { image: "/images/modeling.jpg", description: "Character modeling.", buttonText: "Get Started", link: "/tutorial1.html" },
  { image: "/images/3D-Texturing-1.jpg", description: "Textures and materials.", buttonText: "Get Started", link: "/tutorial1.html" },
  { image: "/images/topology.jpg", description: "Proper topology and polycounts.", buttonText: "Get Started", link: "/tutorial1.html" },
  { image: "/images/animation01.jpg", description: "Creating animations.", buttonText: "Get Started", link: "/tutorial1.html" },
  { image: "/images/weightpaint.jpg", description: "Weight painting and skeletons.", buttonText: "Get Started", link: "/tutorial1.html" },
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