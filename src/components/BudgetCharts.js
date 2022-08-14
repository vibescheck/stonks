import {
  Tr,
  Td,
  IconButton,
  Heading,
  Text,
  VStack,
  useDisclosure,
  Button,
  Box,
  Flex
} from '@chakra-ui/react';
import 'react-step-progress-bar/styles.css';
import { format, isThisMonth, isThisWeek, isThisYear, isToday, parse, parseISO } from 'date-fns';
import { DeleteIcon } from '@chakra-ui/icons';
import { ProgressBar } from 'react-step-progress-bar';
import useHover from './hooks/useHover';
import DeleteAlert from './DeleteAlert';

export default function BudgetCharts({ transactions, budget, promptRefresh }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();
  const { isOpen, onOpen, onClose } = useDisclosure();

  let sum = 0;
  for (let i = 0; i < transactions.length; i++) {
    const date = parseISO(transactions[i].date);
    if (budget.duration === 'Daily' && isToday(date)) {
      sum -= transactions[i].amount;
    } else if (budget.duration === 'Weekly' && isThisWeek(date)) {
      sum -= transactions[i].amount;
    } else if (budget.duration === 'Monthly' && isThisMonth(date)) {
      sum -= transactions[i].amount;
    } else if (budget.duration === 'Yearly' && isThisYear(date)) {
      sum -= transactions[i].amount;
    } else {
      break;
    }
  }
  const percentage = (sum / budget.limit) * 100;

  let bg;
  if (percentage >= 100) {
    bg = 'linear-gradient(to right, #dc143c, #800000)';
  } else if (percentage > 50) {
    bg = 'linear-gradient(to right, #fefb72, #f0bb31)';
  } else {
    bg = 'linear-gradient(to right, #3cb371, #006400)';
  }

  return (
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
      display="inline-block"
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}>
      <Heading size="md" justify="center" align="center">
        {budget.duration} Budget
      </Heading>
      <Box justify="center" align="center">
        <Text as="i">
          {budget.label}, ${budget.limit} limit
        </Text>
      </Box>

      <Box p={4}>
        <Heading size="sm" justify="center" align="center" pb={2}>
          {Math.round(percentage)}%
        </Heading>
        <ProgressBar percent={percentage > 100 ? 100 : percentage} filledBackground={bg} />
      </Box>

      {hover ? (
        <Box justify="center" align="center" p={2}>
          <IconButton size="sm" w={5} p={0} m={0} icon={<DeleteIcon />} onClick={onOpen} />
          <DeleteAlert
            isOpen={isOpen}
            onClose={onClose}
            assetId={budget._id}
            name={budget.label}
            promptRefresh={promptRefresh}
            apiRoute={`${process.env.REACT_APP_SERVER_URL}/api/budget/`}
          />
        </Box>
      ) : (
        <Text justify="center" align="center">
          You spent ${Math.round(sum * 100) / 100}, which is $
          {Math.round(Math.abs(budget.limit - sum) * 100) / 100}{' '}
          {budget.limit - sum > 0 ? 'below your limit. 😚' : 'over your limit! 😡'}
        </Text>
      )}
    </Flex>
  );
}
