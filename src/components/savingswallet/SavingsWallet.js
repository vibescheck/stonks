import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { ChevronDownIcon, RepeatIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect, useState, useRef, useContext } from 'react';
import { Link, renderMatches } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import chroma from 'chroma-js';
import LoadingIcon from '../LoadingIcon';
import AddTransactionModal from './AddTransactionModal';
import { PieChart } from '../Charts';
import TransactionHistory from './TransactionHistory';
import useCompletionToast from '../hooks/useCompletionToast';
import { TransactionContext } from '../../contexts/TransactionContextProvider';
import useTransactions from '../hooks/useTransactions';

export default function SavingsWallet() {
  const { getAccessTokenSilently, user } = useAuth0();
  const { transactions } = useContext(TransactionContext);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showSuccessToast, showErrorToast] = useCompletionToast();
  const runGetTransactions = useTransactions();

  const promptRefresh = () => setRefresh(!refresh);

  const [posTxns, setPosTxns] = useState({
    labels: transactions.filter((data) => data.amount > 0).map((data) => data.note),
    datasets: [
      {
        label: 'Positive Expenses',
        data: transactions.filter((data) => data.amount > 0).map((data) => data.amount),
        backgroundColor: chroma.scale('BuGn').padding(0.7).colors(transactions.length)
      }
    ]
  });

  const [negTxns, setNegTxns] = useState({
    labels: transactions.filter((data) => data.amount < 0).map((data) => data.note),
    datasets: [
      {
        label: 'Positive Expenses',
        data: transactions.filter((data) => data.amount < 0).map((data) => data.amount),
        backgroundColor: chroma.scale('OrRd').padding(0.7).colors(transactions.length)
      }
    ]
  });

  useEffect(() => {
    runGetTransactions();
  }, [refresh]);

  useEffect(() => {
    setPosTxns({
      labels: transactions.filter((data) => data.amount > 0).map((data) => data.note),
      datasets: [
        {
          label: 'Positive Expenses',
          data: transactions.filter((data) => data.amount > 0).map((data) => data.amount),
          backgroundColor: chroma.scale('BuGn').gamma(0.8).padding(0.9).colors(transactions.length)
        }
      ]
    });
    setNegTxns({
      labels: transactions.filter((data) => data.amount < 0).map((data) => data.note),
      datasets: [
        {
          label: 'Positive Expenses',
          data: transactions.filter((data) => data.amount < 0).map((data) => data.amount),
          backgroundColor: chroma.scale('OrRd').gamma(0.8).padding(0.9).colors(transactions.length)
        }
      ]
    });
  }, [transactions]);

  const loadMore = () => {};

  const getStreak = () => {
    if (transactions.length === 0) {
      console.log('no streak');
    } else {
      console.log(
        [...transactions].sort((a, b) => -a.date.localeCompare(b.date))[transactions.length - 1]
          .date
      );
    }
    return 1;
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
      <HStack gap={6} py={4}>
        {posTxns.labels.length ? (
          <Flex
            width={350}
            flexDir="column"
            size="md"
            bgColor="white"
            borderRadius={15}
            boxShadow="lg"
            alignItems="center"
            px={2}
            paddingTop={3}
            paddingBottom={6}
            gap={3}
            display="inline-block">
            <PieChart chartData={posTxns} chartTitle="Income" />
          </Flex>
        ) : null}
        {negTxns.labels.length > 0 ? (
          <Flex
            width={350}
            flexDir="column"
            size="md"
            bgColor="white"
            borderRadius={15}
            boxShadow="lg"
            alignItems="center"
            px={2}
            paddingTop={3}
            paddingBottom={6}
            gap={3}
            display="inline-block">
            <PieChart chartData={negTxns} chartTitle="Expenses" />
          </Flex>
        ) : null}
      </HStack>
      <AddTransactionModal promptRefresh={promptRefresh} />
      <Box> Streak: {getStreak()}</Box>
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
