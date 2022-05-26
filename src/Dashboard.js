import { LoginContext } from "./LoginContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { getUserDetails } from "./api/userService.js"

export default function Dashboard() {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);

    /* await getUserDetails(auth) */

    return (
    <>
        {!loggedIn.token ? (<Navigate to="/login" />) : (
            <main>
                <h1>Welcome, {loggedIn.user}.</h1>

                <button onClick={() => setLoggedIn('')}> logout </button>
            </main>
        )}
    </>
    )
}
