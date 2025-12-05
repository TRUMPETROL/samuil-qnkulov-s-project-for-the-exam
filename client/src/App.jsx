import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import TutorialsPage from "./components/TutorialPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import LogoutPage from "./components/LogoutConfirmPage.jsx";
import TutorialCreationPage from "./components/tutorialPageComponents/TutorialCreationPage.jsx";
import { useContext, useState } from "react";
import UserContext from "/src/contexts/UserContext.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import TutorialView from "./components/TutorialView.jsx";



function App() {
  const { user } = useContext(UserContext);

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
        <Route path="/tutorial/:id" element={<TutorialView />} />
        

      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <LogoutPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/tutorials/create"
        element={
          <PrivateRoute>
            <TutorialCreationPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}


export default App;