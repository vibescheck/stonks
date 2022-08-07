import { createContext, useMemo, useState } from 'react';

export const TransactionContext = createContext(null);

export default function TransactionContextProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [isLoadingTransaction, setLoadingTransaction] = useState(false);
  return (
    <TransactionContext.Provider
      value={useMemo(
        () => ({
          transactions,
          setTransactions,
          isLoadingTransaction,
          setLoadingTransaction
        }),
        [transactions]
      )}>
      {children}
    </TransactionContext.Provider>
  );
}
