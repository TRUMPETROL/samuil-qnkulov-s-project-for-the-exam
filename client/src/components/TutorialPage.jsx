import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import RegistrationBar from "./RegistrationBar.jsx";
import BackHomeButton from "./tutorialPageComponents/BackHomeButton.jsx";
import LeftBar from "./tutorialPageComponents/LeftBar.jsx";
import TutorialBrowser from "./tutorialPageComponents/TutorialSelection.jsx";
import RightBar from "./tutorialPageComponents/RightBar.jsx";
import TutorialFooter from "./tutorialPageComponents/TutorialPFooter.jsx";
import "/public/css/tutorials.css"

export default function TutorialsPage() {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get("category");

        if (category) {

            const formatted = {
                modeling: "Modeling",
                texturing: "Textures/Materials",
                topology: "Topology/Polycount",
                animation: "Animating",
                weightpaint: "Weight paint/Skeletons"
            }[category];

            if (formatted) setSelectedCategory(formatted);
        }
    }, [location.search]);

    return (
        <div className="tutorial-page-container">
            <div className="reg-tutorials">
                <RegistrationBar />
            </div>

            <div className="tutorial-page-content">
                <BackHomeButton />
                <LeftBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <TutorialBrowser />
                <RightBar />
            </div>

            <TutorialFooter />
        </div>
    );
}