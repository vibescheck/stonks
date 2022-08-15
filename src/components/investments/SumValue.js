import { Flex, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { AssetContext } from '../../contexts/AssetContextProvider';

export default function SumValue() {
  const { inventorySum } = useContext(AssetContext);
  return (
    <Flex bgColor="white" borderRadius={15} boxShadow="lg" alignItems="center" p={5}>
      <Heading size="md">Portfolio Value: ${Math.round(inventorySum * 100) / 100}</Heading>
    </Flex>
  );
}
