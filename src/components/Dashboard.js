import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const { logout, getAccessTokenSilently } = useAuth0();

  const getMessage = async () => {
    try {
      const token = await getAccessTokenSilently();

      /* {
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        scope: 'read:messages'
      }); */
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/users/details`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      navigate('*', { status: 500, message: error.message });
    }
  };

  return (
    <main>
      <button type="button" onClick={getMessage}>
        Get Message
      </button>
      <h1>{message}</h1>

      <Link to="/profile">
        <button type="button">View Profile</button>
      </Link>
      <button type="button" onClick={logout}>
        {' '}
        logout{' '}
      </button>
    </main>
  );
}
