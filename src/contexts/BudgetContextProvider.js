import { createContext, useMemo, useState } from 'react';

export const BudgetContext = createContext(null);

export default function BudgetContextProvider({ children }) {
  const [budget, setBudget] = useState([]);
  const [isLoading, setLoading] = useState(false);
  return (
    <BudgetContext.Provider
      value={useMemo(
        () => ({
          budget,
          setBudget,
          isLoading,
          setLoading
        }),
        [budget]
      )}>
      {children}
    </BudgetContext.Provider>
  );
}
