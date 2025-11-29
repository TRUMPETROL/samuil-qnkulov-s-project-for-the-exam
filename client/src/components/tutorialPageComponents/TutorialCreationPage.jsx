import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/public/css/tutorialcreate.css";

//add a category selection options (Modeling,Textures/Materials,Topology/Polycount,Animating,Weight paint/Skeletons)
//add a platform selection options(Blender,Zbrush,Maya,SubstancePainter)
//add a way to save the user that made the project
//send all the information in a way that will allow you to load it into a page

export default function TutorialCreationPage() {
    const navigate = useNavigate();

    return (
        <div className="tutorial-creation-page__container">
            <div className="tutorial-creation-page__main">
                <button
                    className="tutorial-creation-page__back-btn"
                    onClick={() => navigate("/tutorials")}
                >
                    &larr; Back to Tutorial Browser
                </button>

                <div className="tutorial-creation-page__scrollable">
                    <div className="tutorial-creation-page__content">
                        <h2>Create Your Tutorial</h2>


                        <input
                            type="text"
                            placeholder="Tutorial Title"
                            className="tutorial-creation-page__title-input"
                        />

                        <h3>Steps</h3>

                        <div className="tutorial-creation-page__step">
                            <input
                                type="text"
                                placeholder={`Step Title`}
                                className="tutorial-creation-page__step-title"
                            />
                            <textarea
                                placeholder={`Step Description`}
                                className="tutorial-creation-page__step-content"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                className="tutorial-creation-page__step-image"
                            />
                        </div>


                        <button className="tutorial-creation-page__add-step-btn" >
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
                        <li>Add steps and optional images.</li>
                        <li>Press Publish to save.</li>
                    </ol>
                </div>
                <button className="tutorial-creation-page__publish-btn" onClick={() => alert("Publish will be implemented later")}>
                    Publish Tutorial
                </button>
            </div>
        </div>
    );
}