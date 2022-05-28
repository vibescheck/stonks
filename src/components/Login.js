import { useRef, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userLogin } from "../services/userService.js";
import Footer from "./Footer";

const Login = () => {
  const usernameInputRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Start with focusing input field for username
  useEffect(() => {
    if (usernameInputRef) {
      usernameInputRef.current.focus();
    }   
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrMessage("");
    setLoading(true);
    try {
      const response = await userLogin({
        username,
        password,
      })
      /* Currently adopted 'bad' practice' */
      sessionStorage.setItem("token", response.data.token)
      navigate("/dashboard")
      // window.location.reload()
    } catch (err) {
      console.log(err);
      setErrMessage("Login Failed.");
      setUsername("");
      setPassword("");
      setLoading(false);
      usernameInputRef.current.focus();
    }
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      {sessionStorage.getItem("token") ? (
        <Navigate to="/dashboard" />
      ) : (
        <main>
          <p className={errMessage ? "errmsg" : "offscreen"}>{errMessage}</p>

          <h2>login to stonks</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="username"
                placeholder="username"
                ref={usernameInputRef}
                onChange={onChangeUsername}
                value={username}
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="password"
                onChange={onChangePassword}
                value={password}
                required
              />
            </div>
            {loading ? <span>Loading...</span>
                     : <button>login</button>}
          </form>

          <p className="deez">
            not a user yet? 
            <br />
            <Link to="/register">register</Link>
          </p>

          <Footer />
        </main>
      )}
    </>
  );
};

export default Login;
