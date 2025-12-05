import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "/public/css/tutorialcreate.css";
import UserContext from "../../contexts/UserContext";



export default function TutorialCreationPage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Modeling");
    const [platform, setPlatform] = useState("Blender");
    const [coverImage, setCoverImage] = useState(null); 
    const [steps, setSteps] = useState([{ title: "", description: "", image: null }]);


    //add a step object
    const addStep = () => setSteps(prev => [...prev, { title: "", description: "", image: null }]);
    const updateStep = (index, field, value) => {
        setSteps(prev => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    };


    //save the tutorial to the LocalStorage while checking for the basic requirements(missing title...) along the way
    const publishTutorial = () => {
        if (!title.trim()) return alert("Tutorial title is needed.");
        if (!coverImage) return alert("Please add a cover image for your tutorial.");
        if (!steps.length) return alert("Add at least one step.");
        for (let i = 0; i < steps.length; i++) {
            if (!steps[i].title.trim()) return alert(`Step ${i + 1} needs a title.`);
            if (!steps[i].description.trim()) return alert(`Step ${i + 1} needs a description.`);
        }

        const newTutorial = {
            title,
            category,
            platform,
            coverImage, 
            steps,
            creator: user?.email || "unidentified user?",
            date: new Date().toISOString()
        };

        const existingTutorials = JSON.parse(localStorage.getItem("tutorials")) || [];
        localStorage.setItem("tutorials", JSON.stringify([...existingTutorials, newTutorial]));

        localStorage.removeItem("tutorialDraft");
        alert("Tutorial published successfully!");
        navigate("/tutorials");
    };

    return (
        <div className="tutorial-creation-page__container">
            <div className="tutorial-creation-page__main">
                <button className="tutorial-creation-page__back-btn" onClick={() => navigate("/tutorials")}>
                    &larr; Back to Tutorial Browser
                </button>

                <div className="tutorial-creation-page__scrollable">
                    <div className="tutorial-creation-page__content">
                        <h2>Create Your Tutorial</h2>

                        <input
                            type="text"
                            placeholder="Tutorial Title"
                            className="tutorial-creation-page__title-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <h3>Cover Image</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (!file) return;
                                const reader = new FileReader();
                                reader.onloadend = () => setCoverImage(reader.result);
                                reader.readAsDataURL(file); 
                            }}
                        />

                        <h3>Category</h3>
                        <select className="tutorial-creation-page__select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Modeling</option>
                            <option>Textures/Materials</option>
                            <option>Topology/Polycount</option>
                            <option>Animating</option>
                            <option>Weight paint/Skeletons</option>
                        </select>

                        <h3>Platform</h3>
                        <select className="tutorial-creation-page__select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
                            <option>Blender</option>
                            <option>Zbrush</option>
                            <option>Maya</option>
                            <option>Substance Painter</option>
                        </select>

                        <h3>Steps</h3>
                        {steps.map((step, index) => (
                            <div className="tutorial-creation-page__step" key={index}>
                                <input
                                    type="text"
                                    placeholder={`Step ${index + 1} Title`}
                                    className="tutorial-creation-page__step-title"
                                    value={step.title}
                                    onChange={(e) => updateStep(index, "title", e.target.value)}
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="tutorial-creation-page__step-image"
                                    onChange={(e) => updateStep(index, "image", e.target.files[0])}
                                />
                                <textarea
                                    placeholder={`Step ${index + 1} Description`}
                                    className="tutorial-creation-page__step-content"
                                    value={step.description}
                                    onChange={(e) => updateStep(index, "description", e.target.value)}
                                />
                            </div>
                        ))}

                        <button className="tutorial-creation-page__add-step-btn" onClick={addStep}>
                            + Add Step
                        </button>
                    </div>
                </div>
            </div>

            <div className="tutorial-creation-page__sidebar">
                <div className="tutorial-creation-page__instructions">
                    <h2>How to Create a Tutorial</h2>
                    <ol>
                        <li>Enter tutorial title.</li>
                        <li>Add cover image.</li>
                        <li>Select category and platform.</li>
                        <li>Add steps and optional images.</li>
                        <li>Press Publish to save.</li>
                    </ol>
                </div>

                <button className="tutorial-creation-page__publish-btn" onClick={publishTutorial}>
                    Publish Tutorial
                </button>
            </div>
        </div>
    );
}