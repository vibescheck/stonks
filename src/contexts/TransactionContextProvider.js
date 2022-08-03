import { createContext, useMemo, useState } from 'react';

export const TransactionContext = createContext(null);

export default function TransactionContextProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionContext.Provider
      value={useMemo(
        () => ({
          transactions,
          setTransactions,
          isLoading,
          setLoading
        }),
        [transactions]
      )}>
      {children}
    </TransactionContext.Provider>
  );
}
