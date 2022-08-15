import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Heading, HStack, useButtonGroup } from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';
import chroma from 'chroma-js';
import { getMonth, isSameMonth, parse, parseISO, setMonth } from 'date-fns';
import { PieChart, HorizontalBarChart, BarChart } from './Charts';
import useCompletionToast from './hooks/useCompletionToast';
import { TransactionContext } from '../contexts/TransactionContextProvider';
import { BudgetContext } from '../contexts/BudgetContextProvider';
import useTransactions from './hooks/useTransactions';
import useBudget from './hooks/useBudget';
import BudgetCharts from './BudgetCharts';

export default function SavingsCharts() {
  const { transactions, isLoadingTransaction } = useContext(TransactionContext);
  const { user } = useAuth0();
  const { budget } = useContext(BudgetContext);
  const [refresh, setRefresh] = useState(false);
  const { showSuccessToast, showErrorToast } = useCompletionToast();
  const runGetTransactions = useTransactions();
  const runGetBudget = useBudget();

  const promptRefresh = () => setRefresh(!refresh);

  const [posTxns, setPosTxns] = useState({
    labels: transactions.filter((data) => data.amount > 0).map((data) => data.note),
    datasets: [
      {
        label: 'Positive Expenses',
        data: transactions.filter((data) => data.amount > 0).map((data) => data.amount),
        backgroundColor: chroma.scale('BuGn').padding(0.7).colors(transactions.length)
      }
    ]
  });

  const [negTxns, setNegTxns] = useState({
    labels: transactions.filter((data) => data.amount < 0).map((data) => data.note),
    datasets: [
      {
        label: 'Positive Expenses',
        data: transactions.filter((data) => data.amount < 0).map((data) => data.amount),
        backgroundColor: chroma.scale('OrRd').padding(0.7).colors(transactions.length)
      }
    ]
  });

  const [monthlyBalance, setMonthlyBalance] = useState({
    labels: transactions.filter((data) => data.amount < 0).map((data) => data.note),
    datasets: [
      {
        label: 'Monthly Balance',
        data: transactions.filter((data) => data.amount < 0).map((data) => data.amount),
        backgroundColor: chroma.scale('OrRd').padding(0.7).colors(transactions.length)
      }
    ]
  });

  useEffect(() => {
    runGetTransactions();
    runGetBudget();
  }, [refresh]);

  useEffect(() => {
    runGetBudget();
  }, [transactions]);

  useEffect(() => {
    setPosTxns({
      labels: transactions.filter((data) => data.amount > 0).map((data) => data.label),
      datasets: [
        {
          label: 'Positive Expenses',
          data: transactions.filter((data) => data.amount > 0).map((data) => data.amount),
          backgroundColor: chroma.scale('BuGn').gamma(0.8).padding(0.9).colors(transactions.length)
        }
      ]
    });
    setNegTxns({
      labels: transactions.filter((data) => data.amount < 0).map((data) => data.label),
      datasets: [
        {
          label: 'Positive Expenses',
          data: transactions.filter((data) => data.amount < 0).map((data) => data.amount),
          backgroundColor: chroma.scale('OrRd').gamma(0.8).padding(0.9).colors(transactions.length)
        }
      ]
    });
  }, [transactions]);

  if (isLoadingTransaction) return <div>Fetching user data ...</div>;

  let date;
  let txnsByMonth;
  const monthlyChartColors = [];
  useEffect(() => {
    if (transactions.length > 0) {
      const txns = [...transactions].sort((a, b) => a.date.localeCompare(b.date));
      date = parseISO(txns[0].date);
      txnsByMonth = [txns[0]];
      for (let i = 1; i < txns.length; i++) {
        if (isSameMonth(date, parseISO(txns[i].date))) {
          txnsByMonth[txnsByMonth.length - 1].amount += txns[i].amount;
        } else {
          txnsByMonth.push(txns[i]);
          date = parseISO(txns[i].date);
        }
      }
    } else {
      txnsByMonth = [];
    }

    for (let i = 0; i < txnsByMonth.length; i++) {
      if (txnsByMonth[i].amount >= 0) {
        monthlyChartColors.push('#3cb371');
      } else {
        monthlyChartColors.push('#dc143c');
      }
    }
    setMonthlyBalance({
      labels: txnsByMonth.map((data) => getMonth(parseISO(data.date)) + 1),
      datasets: [
        {
          label: 'Monthly Balance',
          data: txnsByMonth.map((data) => data.amount),
          backgroundColor: monthlyChartColors
        }
      ]
    });
  }, [refresh, transactions]);

  if (isLoadingTransaction) return <div>Fetching user data ...</div>;

  return (
    <>
      <HStack gap={6}>
        {posTxns.labels.length ? (
          <Flex
            width={350}
            flexDir="column"
            size="md"
            bgColor="white"
            borderRadius={15}
            boxShadow="lg"
            alignItems="center"
            px={2}
            paddingTop={3}
            paddingBottom={6}
            gap={3}
            display="inline-block">
            <PieChart chartData={posTxns} chartTitle="Income" />
          </Flex>
        ) : null}
        {negTxns.labels.length > 0 ? (
          <Flex
            width={350}
            flexDir="column"
            size="md"
            bgColor="white"
            borderRadius={15}
            boxShadow="lg"
            alignItems="center"
            px={2}
            paddingTop={3}
            paddingBottom={6}
            gap={3}
            display="inline-block">
            <PieChart chartData={negTxns} chartTitle="Expenses" />
          </Flex>
        ) : null}
        {transactions.length > 0 ? (
          <Flex
            width={350}
            flexDir="column"
            size="md"
            bgColor="white"
            borderRadius={15}
            boxShadow="lg"
            alignItems="center"
            px={2}
            paddingTop={3}
            paddingBottom={6}
            gap={3}
            display="inline-block">
            <BarChart chartData={monthlyBalance} chartTitle="Monthly Balance" />
          </Flex>
        ) : null}
      </HStack>
      <HStack gap={6} py={4}>
        {[...budget].map((bgt) => (
          <BudgetCharts
            key={bgt._id}
            transactions={[...transactions]
              .sort((a, b) => -a.date.localeCompare(b.date))
              .filter((a) => a.amount < 0)}
            budget={bgt}
            promptRefresh={promptRefresh}
          />
        ))}
      </HStack>
    </>
  );
}
