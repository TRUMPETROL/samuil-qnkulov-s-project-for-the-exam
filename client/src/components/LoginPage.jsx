import { useNavigate } from "react-router-dom";
import "/public/css/register.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/">
        <button className="confirm-btn">Confirm Login</button>
        </Link>
        <p>Not registered yet?</p>
        <a onClick={() => navigate("/register")}>Then go to Register</a>
        <Link to="/">
        <button className="back-btn">Home Page</button>
        </Link>
      </div>
    </div>
  );
}