import { Flex, HStack } from '@chakra-ui/react';
import chroma from 'chroma-js';
import { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../contexts/TransactionContextProvider';
import { PieChart } from './Charts';
import useTransactions from './hooks/useTransactions';

export default function SavingsWallet() {
  const { transactions, isLoading } = useContext(TransactionContext);
  const [refresh, setRefresh] = useState(false);
  const runGetTransactions = useTransactions();

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

  useEffect(() => {
    runGetTransactions();
  }, [refresh]);

  useEffect(() => {
    setPosTxns({
      labels: transactions.filter((data) => data.amount > 0).map((data) => data.note),
      datasets: [
        {
          label: 'Positive Expenses',
          data: transactions.filter((data) => data.amount > 0).map((data) => data.amount),
          backgroundColor: chroma.scale('BuGn').gamma(0.8).padding(0.9).colors(transactions.length)
        }
      ]
    });
    setNegTxns({
      labels: transactions.filter((data) => data.amount < 0).map((data) => data.note),
      datasets: [
        {
          label: 'Positive Expenses',
          data: transactions.filter((data) => data.amount < 0).map((data) => data.amount),
          backgroundColor: chroma.scale('OrRd').gamma(0.8).padding(0.9).colors(transactions.length)
        }
      ]
    });
  }, [transactions]);

  if (isLoading) return <div>Fetching user data ...</div>;

  return (
    <HStack gap={6} py={4}>
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
    </HStack>
  );
}
