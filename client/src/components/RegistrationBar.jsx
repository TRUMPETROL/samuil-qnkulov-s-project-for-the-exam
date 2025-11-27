import { Link } from "react-router-dom";

export default function RegistrationBar() {
  return (
    <div className="registration-bar">
      <div className="registration-inner">
        <Link className="registration-item" to="/register">Register</Link>
        <Link className="registration-item" to="/login">Login</Link>
        <Link className="registration-item" to="/logout">Logout</Link>
        <Link className="registration-item" to="#">Profile</Link>
      </div>
    </div>
  );
}