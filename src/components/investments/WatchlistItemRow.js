import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Tag,
  Td,
  Text,
  Tr,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { serverURL } from '../../services/investmentService';
import DeleteAlert from '../DeleteAlert';
import useHover from '../hooks/useHover';

export default function WatchlistItemRow({ item, promptRefresh }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr
      _hover={{ background: 'gray.100' }}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      blockSize="20">
      <Td>
        <HStack>
          <VStack alignItems="start">
            <Heading size="sm" letterSpacing="tight">
              {item.symbol}
            </Heading>
            <Text fontWeight="semibold" fontSize="sm">
              {item.name}
            </Text>
          </VStack>
          {hover && (
            <Box justifyContent="center" alignItems="center" h="full">
              <IconButton
                size="sm"
                m={0}
                p={0}
                icon={<DeleteIcon />}
                onClick={onOpen}
                width={20}
                aria-label="Delete button appears on hover"
              />
              <DeleteAlert
                isOpen={isOpen}
                onClose={onClose}
                assetId={item?._id}
                name={item?.name}
                promptRefresh={promptRefresh}
                apiRoute={`${serverURL}/api/watchlist`}
              />
            </Box>
          )}
        </HStack>
      </Td>
      <Td>
        <Tag size="md" variant="solid" colorScheme={item.type === 'stocks' ? 'facebook' : 'yellow'}>
          {item.type}
        </Tag>
      </Td>
      <Td>{item.price || 'API Query Limit reached'}</Td>
    </Tr>
  );
}
