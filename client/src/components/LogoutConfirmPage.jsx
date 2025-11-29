import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "/public/css/register.css"; 
import UserContext from "/src/contexts/UserContext";

export default function LogoutPage() {
    const { logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const confirmLogout = async () => {
        try {
            await logoutHandler();
            navigate('/');
        } catch (err) {
            alert('Problem with logout');
            navigate('/');
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-box">
                <h1>Are you sure you want to log out?</h1>
                <div className="yes-no-container">
                    <button className="yes-btn" onClick={confirmLogout}>Yes</button>
                    <button className="no-btn" onClick={() => navigate(-1)}>No</button>
                </div>
            </div>
        </div>
    );
}