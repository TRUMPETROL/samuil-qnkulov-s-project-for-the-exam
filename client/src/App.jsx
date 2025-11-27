import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import TutorialsPage from "./components/TutorialPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import LogoutPage from "./components/LogoutConfirmPage.jsx";

function App() {
  const tutorials = [
    { 
      image: "/images/modeling.jpg", 
      description: "Character modeling.", 
      buttonText: "Get Started", 
      link: "/tutorials?category=modeling" 
    },
    { 
      image: "/images/3D-Texturing-1.jpg", 
      description: "Textures and materials.", 
      buttonText: "Get Started", 
      link: "/tutorials?category=texturing" 
    },
    { 
      image: "/images/topology.jpg", 
      description: "Proper topology and polycounts.", 
      buttonText: "Get Started", 
      link: "/tutorials?category=topology" 
    },
    { 
      image: "/images/animation01.jpg", 
      description: "Creating animations.", 
      buttonText: "Get Started", 
      link: "/tutorials?category=animation" 
    },
    { 
      image: "/images/weightpaint.jpg", 
      description: "Weight painting and skeletons.", 
      buttonText: "Get Started", 
      link: "/tutorials?category=weightpaint" 
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<HomePage tutorials={tutorials} />} />
      <Route path="/tutorials" element={<TutorialsPage />} />
       <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
    </Routes>
  );
}

export default App;