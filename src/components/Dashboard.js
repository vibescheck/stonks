import { useAuth0 } from '@auth0/auth0-react';
import { Button, Box, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AssetsCharts from './investments/AssetsCharts';
import NetWorthCard from './NetWorthCard';
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
      h="full"
      flexDir="column"
      overflowY="auto"
      alignItems="center"
      gap="8"
      pt="8"
      bgColor="gray.100"
      minH="100vh">
      <NetWorthCard />
      <HStack gap="10" alignItems="start">
        <Flex flexDir="column" gap="6">
          <Heading> Savings </Heading>
          <SavingsCharts />
        </Flex>
        <Flex flexDir="column" gap="6">
          <Heading> Investments </Heading>
          <AssetsCharts />
        </Flex>
      </HStack>
      <VStack m="4">
        <Button type="button" variant="black" onClick={getMessage}>
          Get Message
        </Button>
        <h1>{message}</h1>
      </VStack>
    </Flex>
  );
}
