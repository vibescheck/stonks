import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useCompletionToast from './hooks/useCompletionToast';

export default function Streaks({ refresh }) {
  const { getAccessTokenSilently } = useAuth0();
  const { showErrorToast } = useCompletionToast();
  const [streak, setStreak] = useState();

  const getStreak = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/streak/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  const runGetStreak = () => {
    getStreak()
      .then((response) => {
        setStreak(response.data);
      })
      .catch((err) => showErrorToast(err.message));
  };

  useEffect(() => {
    runGetStreak();
  }, [refresh]);

  return <> {streak} </>;
}
