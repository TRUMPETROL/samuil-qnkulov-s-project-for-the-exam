import { useNavigate } from "react-router-dom";
import "/public/css/register.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Register</h1>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <Link to="/">
        <button className="confirm-btn">Confirm Register</button>
        </Link>
        <p>Already registered?</p>
        <a onClick={() => navigate("/login")}>Then go to Login</a>
        <Link to="/">
        <button className="back-btn">Home Page</button>
        </Link>
      </div>
    </div>
  );
}