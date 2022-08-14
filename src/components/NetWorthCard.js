import { Flex, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { NetWorthContext } from '../contexts/NetWorthContextProvider';
import LoadingIcon from './LoadingIcon';

export default function NetWorthCard() {
  const { net, isCalculating } = useContext(NetWorthContext);

  if (isCalculating) return <LoadingIcon message="... calculating net worth..." />;
  return (
    <Flex
      flexDir="column"
      bgColor="white"
      borderRadius={15}
      boxShadow="md"
      alignItems="center"
      px={4}
      py={4}
      display="inline-block">
      <Heading size="md">Net Worth</Heading>
      <Heading size="lg">${net.toFixed(2)}</Heading>
    </Flex>
  );
}
