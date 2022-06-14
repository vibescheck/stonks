import { useAuth0 } from '@auth0/auth0-react';
import { Stack, Button } from '@chakra-ui/react';
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
      /* scope: 'read:messages' */
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/details`, {
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
      <Stack spacing="20px" direction="row" align="center">
        <Link to="/profile">
          <Button type="button">View Profile</Button>
        </Link>
        <Link to="/investments">
          <Button type="button">View Investments</Button>
        </Link>
        <Link to="/savings">
          <Button type="button">SavingsWallet</Button>
        </Link>
      </Stack>
      <Button type="button" onClick={logout}>
        {' '}
        logout{' '}
      </Button>
    </main>
  );
}
