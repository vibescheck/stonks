import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useEffect, useState, useContext } from 'react';
import chroma from 'chroma-js';
import { Chart } from 'react-chartjs-2';
import axios from 'axios';
import Confetti from 'react-confetti';
import LoadingIcon from '../LoadingIcon';
import AddTransactionModal from './AddTransactionModal';
import { PieChart } from '../Charts';
import TransactionHistory from './TransactionHistory';
import useCompletionToast from '../hooks/useCompletionToast';
import { TransactionContext } from '../../contexts/TransactionContextProvider';
import { BudgetContext } from '../../contexts/BudgetContextProvider';
import useTransactions from '../hooks/useTransactions';
import useBudget from '../hooks/useBudget';
import Streaks from '../Streaks';
import SavingsCharts from '../SavingsCharts';
import AddBudgetModal from './AddBudgetModal';

export default function SavingsWallet() {
  const { getAccessTokenSilently, user } = useAuth0();
  const { transactions } = useContext(TransactionContext);
  const { budget } = useContext(BudgetContext);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isTodayCheckin, setIsTodayCheckin] = useState(false);
  const [showSuccessToast, showErrorToast] = useCompletionToast();
  const runGetTransactions = useTransactions();
  const runGetBudget = useBudget();

  const promptRefresh = () => setRefresh(!refresh);

  const getIsTodayCheckin = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/checkin/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  const runGetIsTodayCheckin = () => {
    setLoading(true);
    getIsTodayCheckin()
      .then((response) => {
        setIsTodayCheckin(response.data);
        setLoading(false);
      })
      .catch((err) => {
        showErrorToast(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    runGetTransactions();
  }, [refresh]);

  useEffect(() => {
    runGetBudget();
    runGetIsTodayCheckin();
  }, [transactions]);

  const addCheckin = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/checkin/`,
      {
        user
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response;
  };

  let totalBalance = 0;
  for (let i = 0; i < transactions.length; i++) {
    totalBalance += transactions[i].amount;
  }

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
      <HStack spacing={6}>
        <Flex bgColor="white" borderRadius={15} boxShadow="lg" alignItems="center" p={5}>
          <Heading size="md">
            🔥 Streak: <Streaks refresh={refresh} />
          </Heading>
        </Flex>
        <Flex bgColor="white" borderRadius={15} boxShadow="lg" alignItems="center" p={5}>
          <Heading size="md">Total Balance: ${Math.round(totalBalance * 100) / 100}</Heading>
        </Flex>
      </HStack>
      <SavingsCharts />

      <HStack spacing={6}>
        <AddTransactionModal promptRefresh={promptRefresh} />
        <Box justify="center" align="center" pb={2}>
          <Button colorScheme="green" onClick={() => addCheckin()} isDisabled>
            {/* TODO: isDisabled based on isTodayCheckin */}
            Check In 🔥
          </Button>
          {/* <Confetti /> */}
        </Box>
        <AddBudgetModal promptRefresh={promptRefresh} />
      </HStack>

      {isLoading ? (
        <LoadingIcon />
      ) : (
        <Flex
          flexDir="column"
          maxH="90%"
          size="md"
          bgColor="white"
          borderRadius={15}
          boxShadow="lg"
          alignItems="center"
          px={10}
          marginBottom={10}
          gap={3}>
          <Flex w="100%" justifyContent="space-between" px={4}>
            <Heading size="lg" my={4}>
              {`${user.name || user.nickname}'s `}savings
            </Heading>
            <IconButton
              icon={<RepeatIcon />}
              aria-label="Refresh"
              onClick={() => promptRefresh()}
              alignSelf="center"
              width={20}
            />
          </Flex>
          <TableContainer overflowY="auto" w={800}>
            <Table colorScheme="blackAlpha">
              <Thead alignItems="center">
                <Tr color="gray.200">
                  <Th> TRANSACTION </Th>
                  <Th> AMOUNT </Th>
                  <Th> CATEGORY </Th>
                  <Th> DATE </Th>
                  <Th> </Th>
                </Tr>
              </Thead>
              <Tbody>
                {[...transactions]
                  .sort((a, b) => -a.date.localeCompare(b.date))
                  .map((txn) => (
                    <TransactionHistory key={txn._id} txn={txn} promptRefresh={promptRefresh} />
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
          {/* <IconButton
            variant="ghost"
            size="sm"
            icon={<ChevronDownIcon w={10} h={10} />}
            onClick={loadMore}
          /> */}
        </Flex>
      )}
    </Flex>
  );
}
