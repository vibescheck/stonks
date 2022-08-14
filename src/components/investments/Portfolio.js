import { useAuth0 } from '@auth0/auth0-react';
import { RepeatIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LoadingIcon from '../LoadingIcon';
import HistoryDrawer from './HistoryDrawer';
import MetamaskAsset from './MetamaskAsset';
import OwnedAssetRow from './OwnedAssetRow';
import SearchPopover from './SearchPopover';
import WatchlistCard from './WatchlistCard';
import { AssetContext } from '../../contexts/AssetContextProvider';
import AssetsCharts from './AssetsCharts';

export default function Portfolio() {
  const { user } = useAuth0();
  const { getAssetData, assets, isLoadingAsset, refresh, promptRefresh } = useContext(AssetContext);

  useEffect(() => {
    getAssetData();
  }, [refresh]);

  return (
    <Flex
      flexDir="column"
      overflowY="auto"
      alignItems="center"
      gap="4"
      bgColor="gray.100"
      pb="16"
      pt="6">
      <Flex flexDir="row" justifyContent="center" gap="8">
        <WatchlistCard />
        <AssetsCharts />
      </Flex>
      {isLoadingAsset ? (
        <LoadingIcon message="... fetching assets ..." />
      ) : (
        <Flex
          flexDir="column"
          maxH="90%"
          width="95%"
          bgColor="white"
          borderRadius={15}
          boxShadow="lg"
          alignItems="center"
          px={4}
          py={6}
          mx="4"
          gap={3}>
          <Flex w="100%" justifyContent="space-between" px={3}>
            <Heading size="lg" my={4}>
              {`${user.name || user.nickname}'s `} active assets
            </Heading>
            <IconButton
              icon={<RepeatIcon />}
              aria-label="Refresh"
              onClick={promptRefresh}
              alignSelf="center"
              colorScheme="blackAlpha"
              width={15}
            />
          </Flex>
          {assets.length === 0 ? (
            <Text fontSize="2xl" p={4}>
              Inventory is currently empty!
            </Text>
          ) : (
            <TableContainer overflowY="auto">
              <Table>
                <TableCaption>
                  {`'QL'`} indicates reaching API query limit. Try refreshing in a while.
                </TableCaption>
                <Thead>
                  <Tr color="gray.200">
                    <Th>SYMBOL/NAME</Th>
                    <Th>TYPE</Th>
                    <Th>DATE</Th>
                    <Th>POSITION</Th>
                    <Th>COST BASIS</Th>
                    <Th>$ CURRENT PRICE</Th>
                    <Th>% CHANGE</Th>
                    <Th>$ MARKET VALUE</Th>
                    <Th>$ P/L </Th>
                    <Td />
                  </Tr>
                </Thead>
                <Tbody>
                  {assets.map((asset) => (
                    <OwnedAssetRow key={uuidv4()} asset={asset} />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          )}
          {/* <IconButton
            variant="ghost"
            size="sm"
            icon={<ChevronDownIcon w={10} h={10} />}
            onClick={loadMore}
            aria-label="Load More Button"
          /> */}
        </Flex>
      )}
      <Flex
        flexDir="column"
        width={{ base: '90%', md: '5xl' }}
        bgColor="white"
        borderRadius={15}
        boxShadow="lg"
        alignItems="center"
        px={6}
        py={2}
        gap={3}>
        <MetamaskAsset />
      </Flex>
      <HStack pos="fixed" bottom="0" zIndex={10} m={2}>
        <SearchPopover />
      </HStack>
      <HistoryDrawer />
    </Flex>
  );
}
