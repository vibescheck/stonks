import { useState, useEffect, Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  Input,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  useToast,
  IconButton,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  HStack,
  Text,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  RadioGroup,
  Radio,
  Stack,
  Box
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import { findCryptoSymbol, findStockSymbol, serverURL } from '../../services/investmentService';
import Loading from '../Loading';

export default function AddAssetModal({ isOpen, onClose }) {
  // use CONSTANTS for asset type
  const [search, setSearch] = useState('');
  const [type, setType] = useState('stocks');
  const [assets, setAssets] = useState([]);
  const [position, setPosition] = useState(1);
  const [note, setNote] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const toast = useToast();

  const updateAssets = async (keyword) => {
    let results = [];
    setLoading(true);
    try {
      if (!keyword) {
        setAssets([]);
        return;
      }
      if (type === 'stocks') {
        results = findStockSymbol(keyword);
        setAssets(results);
      } else if (type === 'crypto') {
        results = findCryptoSymbol(keyword);
        setAssets(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateAssets(search).then(() => setLoading(false));
  }, [search, type]);

  /**
   * Switch to useReducer as soon as possible!!!
   */
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const showSuccessToast = (name) => {
    toast({
      title: 'Asset Added.',
      description: `${name} asset added`,
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };
  const showErrorToast = (err) => {
    toast({
      title: 'Error occurred',
      description: `${err}`,
      status: 'error',
      duration: 3000,
      isClosable: true
    });
  };
  const onClickAdd = async (asset, assetType) => {
    const token = await getAccessTokenSilently();
    const { id, name } = asset;
    const assetData = { type, name, position, note, cost_basis: 100, api_id: id };
    assetData.symbol = assetType === 'stocks' ? asset.short_name : asset.symbol;

    try {
      await axios.post(serverURL, assetData, { headers: { Authorization: `Bearer ${token}` } });
      showSuccessToast(name);
    } catch (error) {
      showErrorToast(error);
    }
  };
  // Modal popup ask to input quantity / position && cost_basis && note
  // POST data should include name, symbol, api_id(relevant), position, cost_basis, type, note
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>FIND & ADD</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing={10}>
            {/* Column 1: Searcher & Results */}
            <Flex w="50%" flexDir="column">
              <FormLabel htmlFor="search">TICKER / NAME</FormLabel>
              <Input
                size="md"
                id="search"
                onChange={handleSearchChange}
                value={search}
                placeholder="Name / Symbol"
              />
              <RadioGroup onChange={setType} value={type}>
                <Stack direction="row">
                  <Radio value="stocks">Stocks</Radio>
                  <Radio value="crypto">Cryptocurrency</Radio>
                </Stack>
              </RadioGroup>
              {isLoading && <Loading />}
              {assets ? (
                <Box h="300px" overflow="auto" my={5}>
                  <Table>
                    <Tbody>
                      {type === 'stocks'
                        ? assets.map((stock) => (
                            <Tr key={uuidv4()} _hover={{ bgColor: 'gray.50' }}>
                              <Td>{stock.short_name}</Td>
                              <Td>{stock.name}</Td>
                              <Td>{stock.exch}</Td>
                            </Tr>
                            /** BUTTON FOR SUBMIT
                            <IconButton
                              icon={<AddIcon />}
                              aria-label="Add asset"
                              onClick={() => addOnClick(stock, 'stocks')}
                            /> */
                          ))
                        : assets.map((coin) => (
                            <Tr key={uuidv4()} _hover={{ bgColor: 'gray.50' }}>
                              <Td>{coin.symbol}</Td>
                              <Td>{coin.name}</Td>
                            </Tr>
                            /** <IconButton
                              icon={<AddIcon />}
                              colorScheme="teal"
                              onClick={() => addOnClick(coin, 'crypto')}
                              aria-label="Add asset"
                                /> */
                          ))}
                    </Tbody>
                  </Table>
                </Box>
              ) : (
                <Flex justifySelf="center">No results</Flex>
              )}
            </Flex>
            {/* Column 2: Other inputs for Form */}
            <Flex w="50%" flexDir="column" h="100%">
              <HStack h="50%" alignSelf="start">
                <Box>
                  <FormLabel htmlFor="position">POSITION</FormLabel>
                  <NumberInput
                    min={0}
                    size="md"
                    id="position"
                    step={1}
                    defaultValue={1}
                    precision={2}>
                    <NumberInputField value={position} onChange={handlePositionChange} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
                <Box>
                  <Text>DATE</Text>
                  <CalendarIcon />
                </Box>
              </HStack>
              <Box h="50%">
                <FormLabel htmlFor="note">NOTE</FormLabel>
                <Textarea
                  size="md"
                  name="note"
                  onChange={handleNoteChange}
                  value={note}
                  placeholder="Optional Notes"
                />
              </Box>
            </Flex>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
