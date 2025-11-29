import { useNavigate } from "react-router-dom";
import "/public/css/register.css";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm"; 
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function LoginPage() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext);

    const submitHandler = async ({ email, password }) => {
        if (!email || !password) {
            return alert("Email and password are required!");
        }

        try {
            await loginHandler(email, password);
            navigate("/"); 
        } catch (err) {
            alert(err.message);
        }
    };

    const { register, formAction } = useForm(submitHandler, {
        email: "",
        password: "",
    });

    return (
        <div className="auth-page">
            <form id="login" action={formAction}>
                <div className="auth-box">
                    <h1>Login</h1>
                    <input type="email" {...register("email")} placeholder="Your Email" />
                    <input type="password" {...register("password")} placeholder="Password" />
                    <input type="submit" className="confirm-btn" />
                    <p>Not registered yet?</p>
                    <a onClick={() => navigate("/register")}>Then go to Register</a>
                    <Link to="/">
                        <button className="back-btn">Home Page</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}