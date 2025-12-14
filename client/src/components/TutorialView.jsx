import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "/public/css/TutorialView.css";
import UserContext from "../contexts/UserContext";
import useRequest from "../hooks/useRequest";

export default function TutorialView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tutorial, setTutorial] = useState(null);
    const { user } = useContext(UserContext);
    const { request } = useRequest();

    useEffect(() => {
        async function fetchTutorial() {
            try {
                const result = await request(`/data/tutorials/${id}`, "GET");
                setTutorial(result);
            } catch (err) {
                alert("Tutorial not found or failed to load.");
                navigate("/tutorials");
            }
        }
        fetchTutorial();
    }, [id, request, navigate]);

    // delete btn
    const deleteTutorial = async () => {
        if (!confirm("Are you sure you want to delete the tutorial?")) return;
        try {
            await request(`/data/tutorials/${id}`, "DELETE", null, { accessToken: user?.accessToken });
            alert("Tutorial deleted.");
            navigate("/tutorials");
        } catch (err) {
            alert("Failed to delete tutorial: " + err.message);
        }
    };

    // edit btn
    const editTutorial = () => {
        navigate(`/tutorials/edit/${id}`);
    };

    if (!tutorial) {
        return (
            <div>
                <h2>Loading tutorial...</h2>
            </div>
        );
    }

    const isCreator = user?._id === tutorial._ownerId;

    return (
        <div className="tutorial-view">
            <div className="tutorial-view-top">
                <button onClick={() => navigate("/tutorials")}>&larr; Back to Tutorials</button>
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


            {tutorial.coverImage && (
                <div className="tutorial-cover">
                    <img src={tutorial.coverImage} alt={tutorial.title} />
                </div>
            )}


            {tutorial.steps.map((step, index) => (
                <div className="tutorial-step" key={index}>
                    <h3>{step.title}</h3>
                    {step.image && <img src={step.image} alt={step.title} />}
                    <p>{step.description}</p>
                </div>
            ))}


            <div className="tutorial-comments-btn">
                <Link to={`/tutorial/${tutorial._id}/comments`}>
                    <button>View Comments</button>
                </Link>
            </div>


        </div>
    );
}