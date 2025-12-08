import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "/public/css/tutorialcreate.css";
import UserContext from "../../contexts/UserContext";


async function compressImage(file, maxWidth = 800, maxHeight = 600, quality = 0.6) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;

            img.onload = () => {
                let { width, height } = img;

                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }

                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                const compressed = canvas.toDataURL("image/jpeg", quality);
                resolve(compressed);
            };
        };
    });
}

export default function TutorialEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Modeling");
    const [platform, setPlatform] = useState("Blender");
    const [coverImage, setCoverImage] = useState(null);
    const [steps, setSteps] = useState([{ title: "", description: "", image: null }]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("tutorials")) || [];
        const found = stored.find(t => String(t.id) === id);

        if (!found) {
            alert("Tutorial not found.");
            return navigate("/tutorials");
        }

       
        setTitle(found.title);
        setCategory(found.category);
        setPlatform(found.platform);
        setCoverImage(found.coverImage);
        setSteps(found.steps);
    }, [id]);

    const updateStep = (index, field, value) => {
        setSteps(prev => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        });
    };

    const addStep = () =>
        setSteps(prev => [...prev, { title: "", description: "", image: null }]);

    const saveChanges = () => {
        if (!title.trim()) return alert("Tutorial title is required.");
        if (!coverImage) return alert("Please add a cover image.");
        if (!steps.length) return alert("Add at least one step.");

        for (let i = 0; i < steps.length; i++) {
            if (!steps[i].title.trim()) return alert(`Step ${i + 1} needs a title.`);
            if (!steps[i].description.trim()) return alert(`Step ${i + 1} needs a description.`);
        }

        const existingTutorials = JSON.parse(localStorage.getItem("tutorials")) || [];
        const index = existingTutorials.findIndex(t => String(t.id) === id);

        if (index === -1) return alert("cannot save changes.");

        existingTutorials[index] = {
            ...existingTutorials[index],
            title,
            category,
            platform,
            coverImage,
            steps,
        };

        localStorage.setItem("tutorials", JSON.stringify(existingTutorials));
        alert("Tutorial updated successfully!");
        navigate(`/tutorial/${id}`);
    };

    return (
        <div className="tutorial-creation-page__container">
            <div className="tutorial-creation-page__main">
                <button
                    className="tutorial-creation-page__back-btn"
                    onClick={() => navigate(`/tutorial/${id}`)}
                >
                    Back to Tutorial
                </button>

                <div className="tutorial-creation-page__scrollable">
                    <div className="tutorial-creation-page__content">
                        <h2>Edit Tutorial</h2>

                        <input
                            type="text"
                            placeholder="Tutorial Title"
                            className="tutorial-creation-page__title-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <h3>Cover Image</h3>

                        <img
                            src={coverImage}
                            style={{ width: "200px", marginBottom: "10px", borderRadius: "10px" }}
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                                const file = e.target.files[0];
                                if (!file) return;
                                const compressed = await compressImage(file);
                                setCoverImage(compressed);
                            }}
                        />

                        <h3>Category</h3>
                        <select
                            className="tutorial-creation-page__select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Modeling</option>
                            <option>Textures/Materials</option>
                            <option>Topology/Polycount</option>
                            <option>Animating</option>
                            <option>Weight paint/Skeletons</option>
                        </select>

                        <h3>Platform</h3>
                        <select
                            className="tutorial-creation-page__select"
                            value={platform}
                            onChange={(e) => setPlatform(e.target.value)}
                        >
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

                                {step.image && (
                                    <img
                                        src={step.image}
                                        alt=""
                                        style={{ width: "150px", marginBottom: "10px", borderRadius: "10px" }}
                                    />
                                )}

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="tutorial-creation-page__step-image"
                                    onChange={async (e) => {
                                        const file = e.target.files[0];
                                        if (!file) return;
                                        const compressed = await compressImage(file);
                                        updateStep(index, "image", compressed);
                                    }}
                                />

                                <textarea
                                    placeholder={`Step ${index + 1} Description`}
                                    className="tutorial-creation-page__step-content"
                                    value={step.description}
                                    onChange={(e) => updateStep(index, "description", e.target.value)}
                                />
                            </div>
                        ))}

                        <button
                            className="tutorial-creation-page__add-step-btn"
                            onClick={addStep}
                        >
                            + Add Step
                        </button>
                    </div>
                </div>
            </div>

            <div className="tutorial-creation-page__sidebar">
                <button className="tutorial-creation-page__publish-btn" onClick={saveChanges}>
                    Save Changes
                </button>
            </div>
        </div>
    );
}