import { DeleteIcon } from '@chakra-ui/icons';
import {
  Heading,
  HStack,
  IconButton,
  Stat,
  StatArrow,
  StatHelpText,
  Tag,
  Td,
  Text,
  Tr,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { serverURL } from '../../services/investmentService';
import DeleteAlert from '../DeleteAlert';
import useHover from '../hooks/useHover';

const profitLoss = ({ price, position, cost_basis }) => {
  if (!price) return price;
  return price * position - cost_basis;
};

export const checkChangePositiveSign = (percentageChangeString) => {
  if (!percentageChangeString) return percentageChangeString;
  return parseFloat(percentageChangeString.slice(0, percentageChangeString.length - 2)) >= 0;
};

export default function OwnedRowAsset({ asset }) {
  const [hover, handleMouseIn, handleMouseOut] = useHover();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hideBoolean = () => asset.position <= 0;
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
              {asset.symbol}
            </Heading>
            <Text fontWeight="semibold" fontSize="sm">
              {asset.name}
            </Text>
          </VStack>
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
                apiRoute={`${serverURL}/api/activeAssets`}
              />
            </>
          )}
        </HStack>
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
      {hideBoolean() ? (
        <>
          <Td>Invalid Position</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </>
      ) : (
        <>
          <Td>{asset.position.toString().slice(0, 8)}...</Td>
          <Td>${asset.cost_basis}</Td>
          <Td>{asset.price || 'QL'}</Td>
          <Td>
            {asset.percentageChange ? (
              <Stat>
                <StatHelpText>
                  <StatArrow
                    type={checkChangePositiveSign(asset.percentageChange) ? 'increase' : 'decrease'}
                  />
                  {asset.percentageChange}
                </StatHelpText>
              </Stat>
            ) : (
              'QL'
            )}
          </Td>
          <Td>
            <Text color={profitLoss(asset) > 0 ? 'green' : 'red'} fontWeight="semibold">
              {profitLoss(asset)?.toFixed(2) || 'QL'}
            </Text>
          </Td>
          <Td>{asset.price * asset.position}</Td>
        </>
      )}
    </Tr>
  );
}
