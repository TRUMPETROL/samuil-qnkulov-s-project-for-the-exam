import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "/public/css/commentsview.css";
import useRequest from "../../hooks/useRequest";
import UserContext from "../../contexts/UserContext";

export default function CommentView({ refresh }) {
    const { id: tutorialId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { request } = useRequest();

    const [comments, setComments] = useState([]);
    const [tutorialTitle, setTutorialTitle] = useState("");

    const fetchComments = async () => {
        try {
            const tutorial = await request(`/data/tutorials/${tutorialId}`, "GET");
            setTutorialTitle(tutorial.title);

            const commentsData = await request(`/data/comments`);
            const tutorialComments = commentsData.filter(c => c.tutorialId === tutorialId);
            setComments(tutorialComments);
        } catch (err) {
            alert("Failed to load comments or tutorial info.");
            navigate("/tutorials");
        }
    };

    useEffect(() => {
        fetchComments();
    }, [tutorialId, refresh]);

    const deleteComment = async (commentId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
        if (!confirmDelete) return;

        try {
            await request(`/data/comments/${commentId}`, "DELETE", null, { accessToken: user.accessToken });
            fetchComments(); 
        } catch (err) {
            alert(err.message || "Failed to delete comment.");
        }
    };

    return (
        <div className="cv-comments-page">
            <div className="cv-header">
                <button className="cv-back-btn" onClick={() => navigate(`/tutorial/${tutorialId}`)}>
                    &larr; Back to Tutorial
                </button>
                {user && (
                    <Link to={`/tutorial/${tutorialId}/comments/create`}>
                        <button className="cv-add-btn">Add Comment</button>
                    </Link>
                )}
            </div>

            <h2 className="cv-title">Comments for: {tutorialTitle}</h2>

            {comments.length === 0 ? (
                <p className="cv-no-comments">No comments</p>
            ) : (
                <ul className="cv-comment-list">
                    {comments.map(c => (
                        <li key={c._id} className="cv-comment-card">
                            <div className="cv-comment-author">
                                <strong>{c.author}</strong>{" "}
                                <span className="cv-comment-date">{new Date(c.createdAt).toLocaleString()}</span>
                            </div>
                            <p className="cv-comment-message">{c.message}</p>
                            {user && user.email === c.author && (
                                <button
                                    className="cv-delete-btn"
                                    onClick={() => deleteComment(c._id)}
                                >
                                    Delete
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}