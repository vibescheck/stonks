import { Tr, Td, IconButton, Heading, Text, VStack, useDisclosure, Tag } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { format, parseISO, set } from 'date-fns';
import { useAuth0 } from '@auth0/auth0-react';
import { DeleteIcon } from '@chakra-ui/icons';
import useHover from '../hooks/useHover';
import DeleteAlert from '../DeleteAlert';
import {
  getCryptoAPICurrentPrice,
  getStockAPICurrentPrice,
  serverURL
} from '../../services/investmentService';

export default function OwnedRowAsset({ asset, promptRefresh, refreshState }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [asset.price, setCurrentPrice] = useState(-1);
  const { getAccessTokenSilently } = useAuth0();
  const [isLoading, setLoading] = useState(false);

  /* const fetchCurrentPrice = async () => {
    try {
      setLoading(true);
      let price;
      if (asset.type === 'crypto') {
        price = (await getCryptoAPICurrentPrice(asset.api_id)).data.market_data.current_price.sgd;
        // Will get Number here
        // TODO: Using SGD prices right now, Finalize USD vs SGD
      } else {
        const token = await getAccessTokenSilently();
        price = (await getStockAPICurrentPrice(asset.symbol, token)).data;
        console.log(price);
        // Will get String here
        // TODO: Using USD prices right now, Finalize USD vs SGD
      }
      setLoading(false);
      // Note difference in typeof price
      setCurrentPrice(price || -1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrentPrice();
    // TODO: Current implementation only supports updating current price //upon refreshing
    // FIXME: Current bug of causing backend to resend header, when trying to update asset to lower position
  }, [refreshState]); */

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
      <Td>
        <Tag
          size="md"
          variant="solid"
          colorScheme={asset.type === 'stocks' ? 'facebook' : 'yellow'}>
          {asset.type}
        </Tag>
      </Td>
      <Td>{format(parseISO(asset.date), 'MMM dd, yyyy')}</Td>
      <Td>{asset.position}</Td>
      <Td>${asset.cost_basis}</Td>
      {isLoading ? (
        <>
          <Td>Fetching</Td>
          <Td>...</Td>
          <Td>...</Td>
        </>
      ) : (
        <>
          <Td>${asset.price}</Td>
          <Td>${asset.price * asset.position}</Td>
          <Td>{asset.price * asset.position - asset.cost_basis}</Td>
        </>
      )}
      <Td>
        {hover && (
          <>
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
