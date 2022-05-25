import { LoginContext } from "./LoginContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

//usecontext to check if user is logged in, else redir to login

export default function Dashboard() {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const name = 'Duzai';
    return (
    <>
        {!loggedIn ? (<Navigate to="/login" />) : (
            <main>
                <h1>Welcome, {name}.</h1>

                <button onClick={() => setLoggedIn(false)}> logout </button>
            </main>
        )}
    </>
    )
}
