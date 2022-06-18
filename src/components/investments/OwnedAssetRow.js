import { Tr, Td, IconButton, Heading, Text, VStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import useHover from '../hooks/useHover';

export default function OwnedRowAsset({ asset, deleteAsset }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();

  return (
    <Tr
      _hover={{ background: 'gray.100' }}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      blockSize="20">
      <Td>
        <VStack alignItems="start">
          <Heading size="sm" letterSpacing="tight">
            {asset.symbol}
          </Heading>
          <Text fontWeight="semibold" fontSize="sm">
            {asset.name}
          </Text>
        </VStack>
      </Td>
      <Td>{asset.position}</Td>
      <Td>${asset.cost_basis}</Td>
      <Td>{asset.type}</Td>
      <Td>{asset.date}</Td>
      <Td>
        {hover && (
          <IconButton
            size="sm"
            m={0}
            p={0}
            icon={<DeleteIcon />}
            aria-label="Delete Asset"
            onClick={() => deleteAsset(asset._id)}
          />
        )}
      </Td>
      <Td />
    </Tr>
  );
}
