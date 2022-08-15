import { useAuth0 } from '@auth0/auth0-react';
import { Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AssetContext } from '../contexts/AssetContextProvider';
import AssetsCharts from './investments/AssetsCharts';
import NetWorthCard from './NetWorthCard';
import SavingsCharts from './SavingsCharts';

export default function Dashboard() {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0();

  const { assets } = useContext(AssetContext);

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
      px="8"
      bgColor="gray.100"
      minH="100vh">
      <NetWorthCard />
      <VStack gap="10" alignItems="start" maxW="full" overflowX="auto">
        <Flex flexDir="column" gap="6">
          <Heading> Savings </Heading>
          <SavingsCharts />
        </Flex>
        <Flex flexDir="column" gap="6">
          <Heading> Investments </Heading>
          {assets.length === 0 ? (
            <Text fontSize="2xl" p={4}>
              No Assets!
            </Text>
          ) : (
            <AssetsCharts />
          )}
        </Flex>
      </VStack>
      <VStack m="4">
        <Button type="button" variant="black" onClick={getMessage}>
          Test Authentication
        </Button>
        <h1>{message}</h1>
      </VStack>
    </Flex>
  );
}
