import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { userLogin } from '../services/userService';
import Footer from './Footer';
import loginStatus from './loginStatus';

function Login() {
  const usernameInputRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Start with focusing input field for username
  useEffect(() => {
    if (loginStatus()) {
      navigate('/dashboard');
      return;
    }
    if (usernameInputRef && usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrMessage('');
    setLoading(true);
    try {
      const response = await userLogin({
        username,
        password
      });
      /* Currently adopted 'bad' practice' */
      sessionStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      setErrMessage(`Login Failed. ${err.response.data}`);
      setUsername('');
      setPassword('');
      setLoading(false);
      usernameInputRef.current.focus();
    }
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <main>
      <p className={errMessage ? 'errmsg' : 'offscreen'}>{errMessage}</p>

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
        {loading ? <span>Loading...</span> : <button type="button">login</button>}
      </form>

      <p className="deez">
        not a user yet?
        <br />
        <Link to="/register">register</Link>
      </p>

      <Footer />
    </main>
  );
}

export default Login;
