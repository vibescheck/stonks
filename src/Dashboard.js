import { LoginContext } from "./LoginContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);

    const userdetails = '/users/details';
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
