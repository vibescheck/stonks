import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../services/userService.js";
import Footer from "./Footer.js";

const Register = () => {
  const nameInputRef = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(false);

  // Start by focusing on input for name field
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMessage("");
    setRegistrationStatus(false);
    try {
      await userRegister({
        username,
        email,
        password,
        name,
      });
      setPassword("");
      setRegistrationStatus(true);
    } catch (err) {
      console.log(err);
      setErrMessage("Register Failed.");
      /* setUsername("");
      setPassword("");
      setName("");
      setEmail("");
      nameInputRef.current.focus(); */ // Form validation todo
    }
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }

  return (
    <main>
      <p className={errMessage ? "errmsg" : "offscreen"}>{errMessage}</p>

      <h2>register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="name"
            ref={nameInputRef}
            onChange={onChangeName}
            value={name}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="email"
            placeholder="email"
            onChange={onChangeEmail}
            value={email}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="username"
            placeholder="username"
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
        <button>register</button>
      </form>

      <p className={!registrationStatus ? "deez" : "offscreen"}>
        return to 
        <br/>
        <Link to="/login">login</Link>
      </p>

      <p className={registrationStatus ? "registrationStatus" : "offscreen"}>
        You have successfully registered.
        <br/>
        <span className="deez">
          go to 
          <br/>
          <Link to="/login">login</Link>
        </span>
      </p>

      <Footer />
    </main>
  );
};

export default Register;
