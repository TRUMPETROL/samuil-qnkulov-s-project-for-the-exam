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
    registerHandler() {},
    loginHandler() {},
    logoutHandler() {},
});

export function UserProvider({ children }) {

    // load the user from the session storage intead on first render
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const { request } = useRequest();

    // keep the user in sessionStorage or remove if he no longer exists
    useEffect(() => {
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
        } else {
            sessionStorage.removeItem("user");
        }
    }, [user]);

    // validate token on a refresh
    useEffect(() => {
        async function validateSession() {
            if (!user?.accessToken) return;

            try {
                await request('/users/me', 'GET', null, {
                    accessToken: user.accessToken
                });
            } catch (err) {
                console.log("Session expired — logging out.");
                setUser(null);
                sessionStorage.removeItem("user");
            }
        }

        validateSession();
    }, []);

    const registerHandler = async (email, password) => {
        const result = await request('/users/register', 'POST', { email, password });
        setUser(result);
    };

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password });
        setUser(result);
    };

    const logoutHandler = () => {
        return request('/users/logout', 'GET', null, {
            accessToken: user?.accessToken
        }).finally(() => {
            setUser(null);
            sessionStorage.removeItem("user");
        });
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