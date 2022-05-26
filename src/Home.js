import { LoginContext } from "./LoginContext";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const {loggedIn} = useContext(LoginContext);
    const nav = useNavigate();
    
    return (
        <>
            {loggedIn.token ? (<Navigate to="/dashboard" />) : (
            <main>
                <h1>
                    stonks!
                </h1>
                <button onClick={() => nav("/login")}> login </button>
                <button onClick={() => nav("/register")}> register </button>
            </main>
            )}
        </>
    )
}

export default Home