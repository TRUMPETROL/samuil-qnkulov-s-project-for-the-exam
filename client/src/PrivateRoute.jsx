import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";


//if i knew it would be that simple i would have added it earlier
export default function PrivateRoute({ children }) {
    const { isAuthenticated } = useContext(UserContext);

  //i will redirect the user directly to the login for convenience(how do you spell convenience? I think i actually got it first try)
    if (!isAuthenticated) {
        //!!remember!!
        //replace doesnt allow you to hit back to go back to the protected page
        return <Navigate to="/login" replace />;
    }

    return children;
}