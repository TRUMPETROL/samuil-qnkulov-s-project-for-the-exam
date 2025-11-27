import { useNavigate } from "react-router-dom";
import "/public/css/register.css";
import { Link } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Are you shure you want to log out?</h1>
        <div className="yes-no-container">
        <Link to="/">
        <button className="yes-btn">Yes</button>
        </Link>
        <button className="no-btn" onClick={() => navigate(-1)}>No</button>
        </div>
      </div>
    </div>
  );
}