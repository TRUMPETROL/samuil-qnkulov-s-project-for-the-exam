import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import RegistrationBar from "./RegistrationBar.jsx";
import BackHomeButton from "./tutorialPageComponents/BackHomeButton.jsx";
import LeftBar from "./tutorialPageComponents/LeftBar.jsx";
import RightBar from "./tutorialPageComponents/RightBar.jsx";
import TutorialFooter from "./tutorialPageComponents/TutorialPFooter.jsx";
import "/public/css/tutorials.css";
import TutorialSelection from "./tutorialPageComponents/TutorialSelection.jsx";
import useRequest from "../hooks/useRequest";

export default function TutorialsPage() {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [tutorials, setTutorials] = useState([]);

    const { request } = useRequest();

    const fetchTutorials = useCallback(async () => {
        try {
            const data = await request("/data/tutorials", "GET");
            setTutorials(data);
        } catch (err) {
            alert(err.message);
        }
    }, [request]);

    useEffect(() => {
        fetchTutorials();
    }, [fetchTutorials]);

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
                    selectedPlatform={selectedPlatform}
                    setSelectedPlatform={setSelectedPlatform}
                    searchTerm={searchTerm}           
                    setSearchTerm={setSearchTerm}     
                />
                <TutorialSelection
                    selectedCategory={selectedCategory}
                    selectedPlatform={selectedPlatform}
                    searchTerm={searchTerm}  
                    tutorials={tutorials} 
                />
                <RightBar />
            </div>

            <TutorialFooter />
        </div>
    );
}