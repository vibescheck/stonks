import { useRef, useState, useEffect, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { userRegister } from "./api/userService.js"

const Register = () => {
    const nameRef = useRef();

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        setErrMsg('')
        setSuccess(false)
        e.preventDefault();
        try {
            const response = await userRegister({
                "username": user, 
                "email": email,
                "password": pwd,
                "name": name
                })
            console.log(response.data)
            const token = response?.data?.token
            /* AUTH */
            setPwd('')
            setSuccess(true)
        } catch (err) {
            console.log(err)
            setErrMsg("Register Failed.")
            setUser('')
            setPwd('')
            setName('')
            setEmail('')
            nameRef.current.focus();
        }
    }
    
    return (
    <>
        (
            <main>
                <p className={errMsg ? "errmsg" : "offscreen"}>
                    {errMsg}
                </p>
        
                <h2>register</h2>
                <form onSubmit={handleSubmit}>
                    <div> <input
                        type="text"
                        id="name"
                        placeholder="name"
                        ref={nameRef}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    /> </div>
                    <div> <input
                        type="text"
                        id="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    /> </div>
                    <div> <input
                        type="text"
                        id="username"
                        placeholder="username"
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
                    <button>register</button>
                </form>        

                <p className={!success ? "deez" : "offscreen"}>
                    return to <Link to="/login">login</Link>
                </p>

                <p className={success ? "success" : "offscreen"}>
                    You have successfully registered.
                    <p className="deez">
                    go to <Link to="/login">login</Link>
                    </p>
                </p>

                <div className='footer'>
                        <Link to="/" className="stonks"> stonks! </Link>
                </div> 
            </main>
        )
    </>
  )
}

export default Register

