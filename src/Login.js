import { useRef, useState, useEffect, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { LoginContext } from "./LoginContext";

const Login = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const userRef = useRef();
    // const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // TODO: check auth else throw error
            setLoggedIn(true);
        } catch (err) {
            // setErrMsg('Login Failed');
            // errRef.current.focus();
        }
    }

    return (
    <>
        {loggedIn ? (<Navigate to="/dashboard" />) : (
            <main>
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    <div> <input
                        type="text"
                        id="username"
                        placeholder="username"
                        ref={userRef}
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    /> </div>
                    <div> <input
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    /> </div>
                    <button>login</button>
                </form>    
                    
                <p className="deez">
                    not a user yet? <br />
                    <Link to="/register">register</Link>
                </p>

                <div className='footer'>
                    <Link to="/" className="stonks"> stonks! </Link>
                </div>  
            </main>
            
        )}
    </>
    )
}

export default Login
