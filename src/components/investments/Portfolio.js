import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Text,
  HStack,
  VStack,
  Heading,
  useDisclosure,
  TableContainer,
  Box
} from '@chakra-ui/react';
import { RepeatIcon, DeleteIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';

import { serverURL } from '../../services/investmentService';
import Loading from '../Loading';
import AddAssetModal from './AddAssetModal';

export default function Portfolio() {
  const [assets, setAssets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { getAccessTokenSilently, user } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const promptRefresh = () => setRefresh(!refresh);

  const getOwnedAssets = async () => {
    setLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(serverURL, { headers: { Authorization: `Bearer ${token}` } });
      if (results) {
        // bruh
        setAssets(results.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => setAssets(getOwnedAssets()), [refresh]);

  const deleteAsset = async (assetId) => {
    try {
      const token = await getAccessTokenSilently();
      await axios.delete(`${serverURL}${assetId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      promptRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = () => {};

  return (
    <>
      <Flex
        h="100vh"
        flexDir="column"
        overflow="hidden"
        alignItems="center"
        gap={4}
        bgColor="gray.100">
        <HStack>
          <Flex>{/** Chart1 */}</Flex>
          <Flex>{/** Chart2 */}</Flex>
        </HStack>
        {isLoading ? (
          <Loading />
        ) : (
          <Flex
            flexDir="column"
            maxW="1200px"
            size="md"
            bgColor="white"
            borderRadius={15}
            boxShadow="base"
            alignItems="center"
            p={5}
            overflow="auto">
            <Heading size="lg" my={4}>
              {`${user.name || user.nickname}'s `}assets
            </Heading>
            <Table>
              <Thead>
                <Tr color="gray.200">
                  <Th>SYMBOL/NAME</Th>
                  <Th>POSITION</Th>
                  <Th>COST BASIS</Th>
                  <Th>TYPE</Th>
                  <Th>DATE</Th>
                  <Th>MARKET VALUE</Th>
                  <Th>P/L</Th>
                </Tr>
              </Thead>
              <Tbody>
                {assets.map((asset) => (
                  <Tr key={uuidv4()} _hover={{ background: 'gray.100' }}>
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
                      <IconButton
                        icon={<DeleteIcon />}
                        aria-label="Delete Asset"
                        onClick={() => deleteAsset(asset._id)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <IconButton
              variant="ghost"
              size="md"
              icon={<ChevronDownIcon w={10} h={10} />}
              onClick={loadMore}
              m={2}
            />
          </Flex>
        )}
        <HStack pos="absolute" bottom="0" zIndex={10} m={2}>
          <Button
            mt={4}
            bgColor="black"
            _hover={{ bgColor: 'gray.700' }}
            p={6}
            borderRadius={15}
            onClick={onOpen}>
            <Text color="white">add asset</Text>
          </Button>
          <IconButton icon={<RepeatIcon />} aria-label="Refresh" onClick={promptRefresh} />
        </HStack>
        <Button variant="ghost" pos="absolute" bottom="0" right="0" zIndex={10} m={2} p={2}>
          history --{'>'}
        </Button>
      </Flex>

      <AddAssetModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
