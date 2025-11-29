import { useNavigate } from "react-router-dom";
import "/public/css/register.css";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import UserContext from "/src/contexts/UserContext";


export default function RegisterPage() {
    const navigate = useNavigate();
    const { registerHandler } = useContext(UserContext)

    const registerSubmitHandler = async (values) => {
        const {email, password,  repassword } = values;

        
        if (!email || !password) {
            return alert('All fields are required!');
        }

        if (password !==  repassword) {
            return alert('Password missmatch!');
        }

        try {
           
            await registerHandler(email, password);

            
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    }

    const {
        register,
        formAction,
    } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        repassword: '',
    });


  return (
    <form id="register" action={formAction}>
      <div className="auth-page">
        <div className="auth-box">
          <h1>Register</h1>
          <input type="email" id="email" {...register('email')} placeholder="Email" />
          <input type="password" id="register-password" {...register('password')} placeholder="Password" />
          <input type="password" id="confirm-password" {...register('repassword')} placeholder="Repeat Password" />
            <input type="submit" className="confirm-btn"></input> 
          <p>Already registered?</p>
          <a onClick={() => navigate("/login")}>Then go to Login</a>
          <Link to="/">
            <button className="back-btn">Home Page</button>
          </Link>
        </div>
      </div>
    </form>
  );
}