import { useRef, useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import LoginContext from "./LoginContext";
import { userLogin } from "../api/userService.js";
import Footer from "./Footer";

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const usernameInputRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  // Start with focusing input field for username
  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrMessage("");
    try {
      const response = await userLogin({
        username,
        password,
      });
      const token = response?.data?.token; // TODO
      setLoggedIn({ username, password, token }); // TODO
    } catch (err) {
      console.log(err);
      setErrMessage("Login Failed.");
      setUsername("");
      setPassword("");
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
      {/* Change if possible */}
      {loggedIn.token ? (
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
            <button>login</button>
          </form>

          <p className="deez">
            not a username yet? 
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
