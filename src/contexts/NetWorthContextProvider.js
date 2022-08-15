import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useCompletionToast from '../components/hooks/useCompletionToast';
import { AssetContext } from './AssetContextProvider';
import { TransactionContext } from './TransactionContextProvider';

export const NetWorthContext = createContext(null);

export default function NetWorthContextProvider({ children }) {
  const [net, setNet] = useState(0);
  const [isCalculating, setCalculatingState] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { transactions, isLoadingTransaction } = useContext(TransactionContext);
  const { assets, isLoadingAsset, inventorySum } = useContext(AssetContext);

  const { showErrorToast } = useCompletionToast();

  const calculateNet = async () => {
    if (transactions?.length === 0 && assets?.length === 0) {
      setNet(0);
      return;
    }
    let netValue = 0;
    setCalculatingState(true);
    try {
      transactions.forEach((transaction) => {
        netValue += transaction.amount;
      });

      netValue += inventorySum;

      setNet(netValue);
      setCalculatingState(false);
    } catch (error) {
      showErrorToast(error.message);
      console.log(error);
      setCalculatingState(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && !isLoadingTransaction && !isLoadingAsset) {
      calculateNet();
    }
  }, [transactions, assets, isLoadingAsset, isLoadingTransaction]);

  return (
    <NetWorthContext.Provider
      value={useMemo(
        () => ({
          net,
          isCalculating
        }),
        [net]
      )}>
      {children}
    </NetWorthContext.Provider>
  );
}
