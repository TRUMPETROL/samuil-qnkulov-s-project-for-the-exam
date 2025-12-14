import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import UserContext from "../../contexts/UserContext";
import useRequest from "../../hooks/useRequest";
import "/public/css/commentcreate.css";

export default function CreateComment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { request } = useRequest();

    const [comment, setComment] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!comment.trim()) return alert("Comment cannot be empty.");

        const newComment = {
            author: user.email,
            message: comment,
            tutorialId: id,
            createdAt: new Date().toISOString(),
        };

        try {
            await request("/data/comments", "POST", newComment, { accessToken: user.accessToken });
            setComment("");
            alert("Comment published successfully!");
            navigate(`/tutorial/${id}/comments`);
        } catch (err) {
            alert(err.message || "Failed to publish comment.");
        }
    };

    return (
        <div className="cc-container">
            <button className="cc-back-btn" onClick={() => navigate(`/tutorial/${id}/comments`)}>
                &larr; Back to Comments
            </button>

            <label className="cc-label">Add New Comment:</label>
            <form className="cc-form" onSubmit={submitHandler}>
                <textarea
                    className="cc-textarea"
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <input
                    type="submit"
                    className="cc-submit-btn"
                    value="Add Comment"
                    disabled={!user}
                />
            </form>
        </div>
    );
}