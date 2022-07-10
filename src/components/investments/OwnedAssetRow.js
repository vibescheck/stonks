import { Tr, Td, IconButton, Heading, Text, VStack, useDisclosure, Tag } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { DeleteIcon } from '@chakra-ui/icons';
import useHover from '../hooks/useHover';
import DeleteAlert from '../DeleteAlert';
import { serverURL } from '../../services/investmentService';

export default function OwnedRowAsset({ asset, promptRefresh }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Td>
        <Tag
          size="md"
          variant="solid"
          colorScheme={asset.type === 'stocks' ? 'facebook' : 'yellow'}>
          {asset.type}
        </Tag>
      </Td>
      <Td>{format(parseISO(asset.date), 'MMM dd, yyyy')}</Td>
      <Td>
        {hover && (
          <>
            <IconButton size="sm" m={0} p={0} icon={<DeleteIcon />} onClick={onOpen} width={20} />
            <DeleteAlert
              isOpen={isOpen}
              onClose={onClose}
              assetId={asset?._id}
              name={asset?.name}
              promptRefresh={promptRefresh}
              apiRoute={`${serverURL}/api/activeAssets`}
            />
          </>
        )}
      </Td>
      <Td />
    </Tr>
  );
}
