import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "/public/css/TutorialView.css";
import UserContext from "../contexts/UserContext";
 

export default function TutorialView() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [tutorial, setTutorial] = useState(null);


    const { user } = useContext(UserContext);   


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("tutorials")) || [];
        const found = stored.find(t => String(t.id) === id);
        if (!found) {
            setTutorial(null);
        } else {
            setTutorial(found);
        }
    }, [id]);




    //THE DELETE BUTTON WITH FUNCTIONALITY DIRECTLY INSIDE THE PAGE

    const deleteTutorial = () => {
        if (!confirm("Are you shure you want to delete the tutorial?")) return;

        const stored = JSON.parse(localStorage.getItem("tutorials")) || [];
        const filtered = stored.filter(t => String(t.id) !== id);
        localStorage.setItem("tutorials", JSON.stringify(filtered));

        alert("Tutorial deleted.");
        navigate("/tutorials");
    };


    // EDIT BUTTON
    const editTutorial = () => {
        navigate(`/tutorials/edit/${id}`);
    };




    if (!tutorial) {
        return (
            <div>
                <h2>Tutorial not found.</h2>
                <button onClick={() => navigate("/tutorials")}>Back to Tutorials</button>
            </div>
        );
    }


    const isCreator = user?.email === tutorial.creator;   


    return (
        <div className="tutorial-view">

            <div className="tutorial-view-top">
                <button onClick={() => navigate("/tutorials")}>Back to Tutorials</button>
                
                {isCreator && (
                    <div className="owner-controls">
                        <button className="edit-btn" onClick={editTutorial}>Edit</button>
                        <button className="delete-btn" onClick={deleteTutorial}>Delete</button>
                    </div>
                )}
            </div>


            <h1>{tutorial.title}</h1>

            <div className="tutorial-meta">
                <span>Platform: {tutorial.platform}</span>
                <span>Category: {tutorial.category}</span>
                <span>Creator: {tutorial.creator}</span>
            </div>

            <div className="tutorial-cover">
                <img src={tutorial.coverImage} alt={tutorial.title} />
            </div>

            {tutorial.steps.map((step, index) => (
                <div className="tutorial-step" key={index}>
                    <h3>{step.title}</h3>
                    {step.image && <img src={step.image} alt={step.title} />}
                    <p>{step.description}</p>
                </div>
            ))}
        </div>
    );
}