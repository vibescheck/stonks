import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Input,
  Select,
  Divider,
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  useToast,
  IconButton,
  Textarea,
  Button
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import { findCryptoSymbol, findStockSymbol, serverURL } from '../../services/investmentService';
import Loading from '../Loading';

export default function AssetFinder() {
  // use CONSTANTS for asset type
  const [search, setSearch] = useState('');
  const [type, setType] = useState('stocks');
  const [assets, setAssets] = useState([]);
  const [position, setPosition] = useState(1);
  const [cost, setCost] = useState(100);
  const [note, setNote] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const toast = useToast();

  const updateAssets = async (keyword) => {
    let results = [];
    setLoading(true);
    try {
      if (type === 'stocks' && keyword) {
        results = findStockSymbol(keyword);
        setAssets(results);
      } else if (type === 'crypto' && keyword) {
        results = findCryptoSymbol(keyword);
        setAssets(results);
      } else {
        setAssets([]);
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
  const handleTypeChange = (event) => {
    setType(event.target.value);
    setSearch('');
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const handleCostChange = (event) => {
    setCost(event.target.value);
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
  const addOnClick = async (asset, assetType) => {
    const token = await getAccessTokenSilently();
    const { id, name } = asset;
    const assetData = { type, name, position, note, cost_basis: cost, api_id: id };
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
    <main>
      <h1>Find & Add Asssets</h1>

      <Link to="/investments">
        <Button>View Assets</Button>
      </Link>

      <Box w="50%" borderWidth="1px" borderRadius="lg" p="2" alignItems="center">
        <Input
          size="md"
          name="search"
          onChange={handleSearchChange}
          value={search}
          placeholder="Search assets using Name / Symbol"
        />
        <Select id="type" name="type" value={type} onChange={handleTypeChange} size="sm">
          <option value="stocks">Stocks</option>
          <option value="crypto">Crypto</option>
        </Select>
      </Box>
      <br />
      <VStack w="50%" borderWidth="1px" borderRadius="lg" p="2" alignItems="center">
        <NumberInput min={0} size="lg" name="position" step={1} defaultValue={1} precision={2}>
          <NumberInputField value={position} onChange={handlePositionChange} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <NumberInput min={0} name="position" step={1} size="lg" defaultValue={100} precision={2}>
          <NumberInputField value={cost} onChange={handleCostChange} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Textarea
          size="md"
          name="note"
          onChange={handleNoteChange}
          value={note}
          placeholder="Include Notes"
        />
      </VStack>

      {isLoading && <Loading />}
      {type === 'stocks'
        ? assets.map((stock) => (
            <Flex w="30%" key={uuidv4()}>
              <Divider />
              <h3>{stock.short_name}</h3>
              <h4>{stock.name}</h4>
              <p>{stock.ccy}</p>
              <p>{stock.exch}</p>
              <IconButton
                icon={<AddIcon />}
                aria-label="Add asset"
                onClick={() => addOnClick(stock, 'stocks')}
              />
            </Flex>
          ))
        : assets.map((coin) => (
            <Flex w="30%" key={uuidv4()}>
              <Divider />
              <h3>{coin.symbol}</h3>
              <h4>{coin.name}</h4>
              {/*  what needs to be POSTed depends on API being used */}
              <IconButton
                icon={<AddIcon />}
                colorScheme="teal"
                onClick={() => addOnClick(coin, 'crypto')}
                aria-label="Add asset"
              />
            </Flex>
          ))}
    </main>
  );
}
