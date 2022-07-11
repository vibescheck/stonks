import { createContext, useMemo, useState } from 'react';

export const TransactionContext = createContext({ transactions: [] });

export default function TransactionContextProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TransactionContext.Provider
      value={useMemo(
        () => ({
          transactions,
          setTransactions
        }),
        [transactions]
      )}>
      {children}
    </TransactionContext.Provider>
  );
}
