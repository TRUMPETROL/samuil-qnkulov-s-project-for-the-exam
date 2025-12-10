import { createContext, useContext, useState, useEffect } from "react";
import useRequest from "/src/hooks/useRequest";


const UserContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        password: '',
        _createdOn: 0,
        _id: '',
        accessToken: ''
    },
    registerHandler() { },
    loginHandler() { },
    logoutHandler() { },
});



export function UserProvider({ children }) {

//the user is also stored in local storage to keep him after refresh
 
//adds the current user to local storage
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const { request } = useRequest();

    //if loged in save the user if not remove them
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);


    //checks if the user token is valid if not the users no longer exists in the server so he gets removed from the local storage 
useEffect(() => {
    async function validateSession() {
        if (!user?.accessToken) return;

        try {
           
            await request('/users/me', 'GET', null, { accessToken: user.accessToken });
        } catch (err) {
            console.log("Session expired — logging out.");
            setUser(null);       
            localStorage.removeItem("user"); 
        }
    }

    validateSession();
}, []);  



    const registerHandler = async (email, password) => {
        const newUser = { email, password };
        const result = await request('/users/register', 'POST', newUser);
        setUser(result);      
    };

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password });
        setUser(result);      
    };

    const logoutHandler = () => {
        return request('/users/logout', 'GET', null, { accessToken: user?.accessToken })
            .finally(() => setUser(null)); 
    };

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandler,
    };

    return (
        <UserContext.Provider value={userContextValues}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}

export default UserContext;