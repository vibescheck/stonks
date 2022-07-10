import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Box, Flex } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import TransactionContext from '../contexts/TransactionContext';

export default function ProtectedRoute({ component }) {
  const redirectLoad = () => <Loading message="Logging In..." />;
  const Component = withAuthenticationRequired(component, {
    onRedirecting: redirectLoad
  });
  const [transactions, setTransactions] = useState([]);

  return (
    <TransactionContext.Provider value={useMemo(() => ({ transactions, setTransactions }), [])}>
      <NavBar />
      <Component />
    </TransactionContext.Provider>
  );
}
