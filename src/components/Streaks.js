import { useAuth0 } from '@auth0/auth0-react';
import { Stack, Button, Grid, Box, Flex, Center } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useCompletionToast from './hooks/useCompletionToast';
import LogoutButton from './LogoutButton';

export default function Streaks({ promptRefresh }) {
  const { getAccessTokenSilently } = useAuth0();
  const [showErrorToast] = useCompletionToast();
  const [streak, setStreak] = useState(0);

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
        console.log(response.data);
        setStreak(response.data);
      })
      .catch((err) => showErrorToast(err));
  };

  return <Box> Streak: {runGetStreak()} </Box>;
}
