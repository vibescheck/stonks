import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Textarea
} from '@chakra-ui/react';
import axios from 'axios';
import { useState, useContext } from 'react';
import { serverURL } from '../../services/investmentService';
import useCompletionToast from '../hooks/useCompletionToast';
import LoadingIcon from '../LoadingIcon';
import { AssetContext } from '../../contexts/AssetContextProvider';

export default function AssetFormModal({ isOpen, onClose, type, asset }) {
  const [position, setPosition] = useState(1);
  const [cost, setCost] = useState(100);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(Date.now());
  const { getAccessTokenSilently } = useAuth0();
  const { showSuccessToast, showErrorToast } = useCompletionToast();
  const [isLoading, setLoading] = useState(false);
  const { promptRefresh } = useContext(AssetContext);

  const addWatchlistItem = async () => {
    setLoading(true);
    if (!asset) {
      showErrorToast('No asset selected');
      return;
    }
    try {
      const token = await getAccessTokenSilently();
      const { id, name, symbol } = asset;
      const itemData = {
        type,
        name,
        symbol
      };
      itemData.api_id = type === 'stocks' ? symbol : id;

      // Alternative: Combine to one Promise together instead
      await axios.post(`${serverURL}/api/watchlist`, itemData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoading(false);
      showSuccessToast(`Asset: ${name} added to Watchlist`);
      onClose();
      promptRefresh();
    } catch (error) {
      console.log(error);
      showErrorToast(error.message);
      setLoading(false);
    }
  };
  const addAsset = async () => {
    setLoading(true);
    if (!asset || !position || !cost) {
      showErrorToast('Missing fields');
      return;
    }
    try {
      const token = await getAccessTokenSilently();
      const { id, name, symbol } = asset;
      const assetData = {
        type,
        name,
        symbol,
        position,
        note,
        cost_basis: cost,
        date
      };
      assetData.api_id = type === 'stocks' ? symbol : id;

      // Alternative: Combine to one Promise together instead
      await axios.post(`${serverURL}/api/assets`, assetData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await axios.post(`${serverURL}/api/activeAssets`, assetData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoading(false);
      showSuccessToast(`Asset: ${name} has been added.`);
      onClose();
      promptRefresh();
    } catch (error) {
      console.log(error);
      showErrorToast(error.message);
      setLoading(false);
    }
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(parseFloat(event.target.value));
  };
  const handleCostChange = (event) => {
    setCost(parseFloat(event.target.value));
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontStyle="italic">{asset?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" gap={5}>
          <HStack justifyContent="space-evenly">
            {/* Position & DatePicker */}
            <Box>
              <FormLabel htmlFor="position">Position:</FormLabel>
              <NumberInput size="md" id="position" step={0.1} defaultValue={position} precision={2}>
                <NumberInputField value={position} onChange={handlePositionChange} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel htmlFor="cost">COST/RETURNS (No +/-)</FormLabel>
              <InputGroup>
                <InputLeftAddon pointerEvents="none" color="gray.500" fontSize="1em">
                  $
                </InputLeftAddon>
                <NumberInput min={0} size="md" id="cost" step={1} defaultValue={cost} precision={2}>
                  <NumberInputField value={cost} onChange={handleCostChange} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </InputGroup>
            </Box>
          </HStack>
          <Box>
            <FormLabel htmlFor="date">Date:</FormLabel>
            <Input type="Date" defaultValue={Date.now()} value={date} onChange={handleDateChange} />
          </Box>
          {/* Note */}
          <Box>
            <FormLabel htmlFor="note">Note:</FormLabel>
            <Textarea
              size="md"
              name="note"
              onChange={handleNoteChange}
              value={note}
              placeholder="Add Note (Optional)"
            />
          </Box>
          <Box>
            <Text color="gray.400" fontSize="sm">
              The fields above will be ignored if added to Watchlist
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button variant="black" marginInline={3} px="10" onClick={addWatchlistItem}>
            {isLoading ? <LoadingIcon /> : 'To Watchlist'}
          </Button>
          <Button colorScheme="green" marginInline={3} onClick={addAsset}>
            {isLoading ? <LoadingIcon /> : 'Add Asset'}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
