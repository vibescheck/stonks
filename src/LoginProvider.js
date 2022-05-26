import { useState } from "react";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState({});

    return (
        <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}