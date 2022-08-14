import { useAuth0 } from '@auth0/auth0-react';
import { Stack, Button, Grid, Box, Flex, Center, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import SavingsCharts from './SavingsCharts';

export default function Dashboard() {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0();

  const getMessage = async () => {
    try {
      setMessage('Attempting ...');
      const token = await getAccessTokenSilently();
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/details`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      navigate('*', { status: 500, message: error.message });
    }
  };

  return (
    <Flex
      h="100vh"
      flexDir="column"
      overflowY="auto"
      alignItems="center"
      gap={4}
      bgColor="gray.100">
      <Box display="block" padding={6}>
        {' '}
      </Box>
      <Heading> Your savings </Heading>
      <SavingsCharts />
      <Heading> Your investments (WIP) </Heading>
      <Box display="block" padding={7}>
        {' '}
      </Box>
      <Button type="button" variant="black" onClick={getMessage}>
        Get Message
      </Button>
      <h1>{message}</h1>
      <LogoutButton />
    </Flex>
  );
}
