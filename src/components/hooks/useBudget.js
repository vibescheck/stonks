import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useContext } from 'react';
import { BudgetContext } from '../../contexts/BudgetContextProvider';
import useCompletionToast from './useCompletionToast';

export default function UseBudget() {
  const { getAccessTokenSilently } = useAuth0();
  const { showErrorToast } = useCompletionToast();
  const { setBudget, setLoading } = useContext(BudgetContext);

  const getBudget = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/budget/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  };

  const runGetBudget = () => {
    setLoading(true);
    getBudget()
      .then((response) => {
        setBudget(response.data);
        setLoading(false);
      })
      .catch((err) => {
        showErrorToast(err);
        setLoading(false);
      });
  };

  return runGetBudget;
}
