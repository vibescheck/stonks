import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SavingsWallet() {
  const navigate = useNavigate();
  const { logout, getAccessTokenSilently, user } = useAuth0();
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
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
      <h1> Savings Wallet </h1>
      <h3>Add new transaction </h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="amount">
            Amount:
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
              ref={amountInputRef}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="date">
            Date:
            {/* <DatePicker selected={date} onChange={(date) => setStartDate(date)} /> */}
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter date..."
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="Category">
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category (Optional)"
            />
          </label>
        </div>
        <div>
          <label htmlFor="Note">
            Note:
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note (Optional)"
            />
          </label>
        </div>
        <button type="submit">Add transaction</button>
      </form>
      <h2> History </h2>
      <ul className="list">
        {[...transactions].reverse().map(({ _id, amount: amt }) => (
          <li key={_id}>
            {amt}
            <button onClick={() => deleteTransaction(_id)} className="deletbtn" type="submit">
              {' '}
              x{' '}
            </button>
          </li>
        ))}
      </ul>
      <Link to="/dashboard">
        <button type="button">back to dashboard</button>
      </Link>
    </main>
  );
}
