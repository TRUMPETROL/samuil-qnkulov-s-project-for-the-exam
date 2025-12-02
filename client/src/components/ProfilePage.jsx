import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "/public/css/register.css"; 

export default function ProfilePage() {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useContext(UserContext);

   
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    if (!user) return null; 

    return (
        <div className="auth-page">
            <div className="auth-box">
                <h1>Your Profile</h1>

                <div className="profile-info">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>User ID:</strong> {user._id}</p>
                    <p><strong>Created On:</strong> {new Date(user._createdOn).toLocaleString()}</p>
                </div>

                <button className="back-btn" onClick={() => navigate("/")}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}