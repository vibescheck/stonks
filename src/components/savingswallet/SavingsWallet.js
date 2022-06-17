import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Button,
  FormLabel,
  Heading,
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
import { RepeatIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import AddTransactionModal from './AddTransactionModal';

export default function SavingsWallet() {
  const { getAccessTokenSilently, user } = useAuth0();
  const [transactions, setTransactions] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getTransactions = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/transactions/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  const getTxns = () => {
    getTransactions()
      .then((response) => {
        console.log(response.data);
        setTransactions(response.data);
      })
      .catch((err) => console.log(err));
  };

  async function deleteTransaction(id) {
    const token = await getAccessTokenSilently();
    const response = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/api/v1/transactions/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  useEffect(() => {
    getTxns();
  }, [refresh]);

  return (
    <main>
      <Box>
        <Heading align="left" p={10}>
          Savings & Expenses
        </Heading>
        <IconButton
          icon={<RepeatIcon />}
          aria-label="Refresh"
          onClick={() => setRefresh(!refresh)}
          width={15}
        />
      </Box>
      <TableContainer display="inline-block" padding={10}>
        <Table variant="simple" size="lg" fontSize="xl">
          <Thead alignItems="center">
            <Tr>
              <Th> Transaction </Th>
              <Th> Amount </Th>
              <Th> Category </Th>
              <Th> Date </Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...transactions]
              // sort array by date
              .sort((a, b) => -a.date.localeCompare(b.date))
              // map array to table
              .map((txn) => {
                return (
                  <tr key={txn._id}>
                    <td> {txn.note || '-'} </td>
                    <td>
                      <Text color={txn.amount > 0 ? 'green' : 'red'}>
                        {txn.amount > 0
                          ? `$${txn.amount
                              .toFixed(2)
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
                          : `-$${Math.abs(txn.amount).toFixed(2).toString()}`}
                      </Text>
                    </td>
                    <td>{txn.category || '-'}</td>
                    <td>
                      {format(parseISO(txn.date), 'MMM dd, yyyy')}
                      <Button
                        onClick={() => {
                          deleteTransaction(txn._id).then(() => getTxns());
                        }}
                        className="deletbtn"
                        type="submit"
                        width={1}
                        height={7}
                        marginInline={5}
                        marginBlock={2}>
                        x
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <AddTransactionModal setRefresh={setRefresh} refresh={refresh} />
      <Box p={5}>
        <Link to="/dashboard">
          <Button type="button">Back to Dashboard</Button>
        </Link>
      </Box>
    </main>
  );
}
