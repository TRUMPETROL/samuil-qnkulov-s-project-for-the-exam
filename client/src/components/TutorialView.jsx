import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "/public/css/TutorialView.css";
export default function TutorialView() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [tutorial, setTutorial] = useState(null);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("tutorials")) || [];
        const found = stored.find(t => String(t.id) === id);
        if (!found) {
            setTutorial(null);
        } else {
            setTutorial(found);
        }
    }, [id]);

    if (!tutorial) {
        return (
            <div>
                <h2>Tutorial not found.</h2>
                <button onClick={() => navigate("/tutorials")}>Back to Tutorials</button>
            </div>
        );
    }

    return (
        <div className="tutorial-view">
              <button onClick={() => navigate("/tutorials")}>Back to Tutorials</button>
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