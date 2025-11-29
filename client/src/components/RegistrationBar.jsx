import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import "/public/css/RegistrationBar.css"; 

export default function RegistrationBar() {
    const { isAuthenticated } = useUserContext();

    return (
        <div className="registration-bar">
            <div className="registration-inner">
                <Link
                    className={`registration-item ${isAuthenticated ? 'disabled' : ''}`}
                    to={isAuthenticated ? "#" : "/register"}
                >
                    Register
                </Link>
                <Link
                    className={`registration-item ${isAuthenticated ? 'disabled' : ''}`}
                    to={isAuthenticated ? "#" : "/login"}
                >
                    Login
                </Link>
                <Link
                    className={`registration-item ${!isAuthenticated ? 'disabled' : ''}`}
                    to={!isAuthenticated ? "#" : "/logout"}
                >
                    Logout
                </Link>
                <Link
                    className={`registration-item ${!isAuthenticated ? 'disabled' : ''}`}
                    to={!isAuthenticated ? "#" : "/profile"}
                >
                    Profile
                </Link>
            </div>
        </div>
    );
}