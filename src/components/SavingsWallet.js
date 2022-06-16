import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SavingsWallet() {
  const navigate = useNavigate();
  const { getAccessTokenSilently, user } = useAuth0();
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(Date.now);
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [transactions, setTransactions] = useState([]);
  const amountInputRef = useRef();

  const getTransactions = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/transactions/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
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

  const getTxns = () => {
    getTransactions()
      .then((response) => {
        console.log(response.data);
        setTransactions(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (amountInputRef && amountInputRef.current) {
      amountInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    getTxns();
  });

  const addTransaction = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/v1/transactions/`,
      {
        user,
        amount,
        date,
        category,
        note
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTransaction()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setAmount('');
    setDate('');
    setCategory('');
    setNote('');
    amountInputRef.current.focus();
  };

  return (
    <main>
      <Heading align="left" p={10}>
        Savings & Expenses
      </Heading>
      <TableContainer p="10" align="center">
        <Table variant="simple">
          <Thead alignItems="center">
            <Tr>
              <Th> Transaction </Th>
              <Th> Amount </Th>
              <Th> Category </Th>
              <Th> Date </Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...transactions].reverse().map((txn) => {
              return (
                <tr key={txn._id}>
                  <td> {txn.note} </td>
                  <td>{txn.amount}</td>
                  <td>{txn.category}</td>
                  {/* TODO: If empty put - */}
                  <td>{txn.date}</td>
                  <Button
                    onClick={() => deleteTransaction(txn._id)}
                    className="deletbtn"
                    type="submit"
                    width={1}
                    height={7}
                    marginInline={5}
                    marginBlock={2}>
                    {' '}
                    x{' '}
                  </Button>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <form onSubmit={onSubmit}>
        <Box paddingInline="68vh">
          <div>
            <FormLabel htmlFor="Note">
              Transaction Name:
              <Input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Name (Optional)"
              />
            </FormLabel>
          </div>
          <div>
            <FormLabel htmlFor="amount">
              Amount:
              <Input
                type="Number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                ref={amountInputRef}
                required
              />
            </FormLabel>
          </div>
          <div>
            <FormLabel htmlFor="date">
              Date:
              <Input type="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormLabel>
          </div>
          <div>
            <FormLabel htmlFor="Category">
              Category:
              <Input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category (Optional)"
              />
            </FormLabel>
          </div>
          <Box p={5}>
            <Button type="submit">Add transaction</Button>
          </Box>
        </Box>
      </form>
      <Box p={5}>
        <Link to="/dashboard">
          <Button type="button">back to dashboard</Button>
        </Link>
      </Box>
    </main>
  );
}
