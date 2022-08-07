import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useEffect, useState, useContext } from 'react';
import chroma from 'chroma-js';
import LoadingIcon from '../LoadingIcon';
import AddTransactionModal from './AddTransactionModal';
import { PieChart } from '../Charts';
import TransactionHistory from './TransactionHistory';
import useCompletionToast from '../hooks/useCompletionToast';
import { TransactionContext } from '../../contexts/TransactionContextProvider';
import useTransactions from '../hooks/useTransactions';
import Streaks from '../Streaks';
import SavingsCharts from '../SavingsCharts';

export default function SavingsWallet() {
  const { user } = useAuth0();
  const { transactions } = useContext(TransactionContext);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showSuccessToast, showErrorToast] = useCompletionToast();
  const runGetTransactions = useTransactions();

  const promptRefresh = () => setRefresh(!refresh);

  useEffect(() => {
    runGetTransactions();
  }, [refresh]);

  return (
    <Flex flexDir="column" overflowY="auto" alignItems="center" gap={4} bgColor="gray.100">
      <Box display="block" padding={6}>
        {' '}
      </Box>
      <SavingsCharts />
      <AddTransactionModal promptRefresh={promptRefresh} />
      <Streaks refresh={refresh} />
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
