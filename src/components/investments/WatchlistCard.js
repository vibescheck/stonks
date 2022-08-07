import { useAuth0 } from '@auth0/auth0-react';
import { RepeatIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { serverURL } from '../../services/investmentService';
import LoadingIcon from '../LoadingIcon';
import WatchlistItemRow from './WatchlistItemRow';

export default function WatchlistCard() {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  const promptRefresh = () => setRefresh(!refresh);

  const getWatchlist = async () => {
    setLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(`${serverURL}/api/watchlist`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (results.data.data) {
        setList(results.data.data);
      }
      setLoading(false);
      // setMetamaskLogin(user.sub.startsWith('oauth2|siwe'));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWatchlist();
  }, [refresh]);

  if (isLoading) return <LoadingIcon message="... fetching watchlist ..." />;
  return (
    <Flex
      width={500}
      flexDir="column"
      bgColor="white"
      borderRadius={15}
      boxShadow="lg"
      alignItems="center"
      px={2}
      paddingTop={3}
      paddingBottom={6}
      gap={3}
      display="inline-block">
      <Flex w="100%" justifyContent="space-between" px={3}>
        <Heading size="lg" my={4}>
          Watchlist
        </Heading>
        <IconButton
          icon={<RepeatIcon />}
          aria-label="Refresh"
          onClick={promptRefresh}
          alignSelf="center"
          colorScheme="blackAlpha"
          width={15}
        />
      </Flex>
      {list.length === 0 ? (
        <>
          <Text fontSize="2xl" p={4} textAlign="center">
            Currently empty!
          </Text>
          <Text fontSize="md" textAlign="center" textColor="gray.400">
            Add asset below to begin
          </Text>
        </>
      ) : (
        <TableContainer overflowY="auto">
          <Table>
            <Thead>
              <Tr color="gray.200">
                <Th>SYMBOL/NAME</Th>
                <Th>TYPE</Th>
                <Th>$ CURRENT PRICE</Th>
                {/* <Th>Movement</Th> */}
                <Td />
              </Tr>
            </Thead>
            <Tbody>
              {list.map((item) => (
                <WatchlistItemRow key={uuidv4()} item={item} promptRefresh={promptRefresh} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Flex>
  );
}
