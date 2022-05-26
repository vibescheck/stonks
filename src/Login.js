import { useRef, useState, useEffect, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { LoginContext } from "./LoginContext";
import { userLogin } from "./api/userService.js"

const Login = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const userRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        setErrMsg('')
        e.preventDefault();
        try {
            const response = await userLogin({"username": user, "password": pwd})
            const token = response?.data?.token
            setLoggedIn({user, pwd, token})
        } catch (err) {
            console.log(err)
            setErrMsg("Login Failed.")
            setUser('')
            setPwd('')
            userRef.current.focus();
        }
    }

    return (
    <>
        {loggedIn.token ? (<Navigate to="/dashboard" />) : (
            <main>
                <p className={errMsg ? "errmsg" : "offscreen"}>
                    {errMsg}
                </p>

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
