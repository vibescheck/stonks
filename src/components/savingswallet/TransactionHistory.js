import {
  Tr,
  Td,
  IconButton,
  Heading,
  Text,
  VStack,
  useDisclosure,
  Button,
  Box
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { DeleteIcon } from '@chakra-ui/icons';
import useHover from '../hooks/useHover';
import DeleteAlert from '../DeleteAlert';

export default function TransactionHistory({ txn, promptRefresh }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} blockSize="20">
      <Td>
        <Heading size="sm">{txn.label || '-'}</Heading>
      </Td>
      <Td>
        <Text color={txn.amount > 0 ? 'green' : 'red'}>
          {txn.amount > 0
            ? `$${txn.amount
                .toFixed(2)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
            : `-$${Math.abs(txn.amount).toFixed(2).toString()}`}
        </Text>
      </Td>
      <Td>{txn.category || '-'}</Td>
      <Td>{format(parseISO(txn.date), 'MMM dd, yyyy')}</Td>
      <Td>
        {hover ? (
          <>
            <IconButton size="sm" w={5} p={0} m={0} icon={<DeleteIcon />} onClick={onOpen} />
            <DeleteAlert
              isOpen={isOpen}
              onClose={onClose}
              assetId={txn._id}
              name={txn.label}
              apiRoute={`${process.env.REACT_APP_SERVER_URL}/api/transactions/`}
              runRefresh={promptRefresh}
            />
          </>
        ) : (
          <Box w={8}> </Box>
        )}
      </Td>
    </Tr>
  );
}
