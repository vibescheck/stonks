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
import { useState } from 'react';
import { serverURL } from '../../services/investmentService';
import useCompletionToast from '../hooks/useCompletionToast';
import LoadingIcon from '../LoadingIcon';

export default function MetamaskModal({ isOpen, onClose, position }) {
  const [cost, setCost] = useState(100);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(Date.now());
  const { getAccessTokenSilently } = useAuth0();
  const [showSuccessToast, showErrorToast] = useCompletionToast();
  const [isLoading, setLoading] = useState(false);
  const addAsset = async () => {
    // PARSEFLOAT
    setLoading(true);
    if (!position || !cost) {
      showErrorToast('Missing fields');
      return;
    }
    try {
      const token = await getAccessTokenSilently();
      const assetData = {
        position: parseFloat(position),
        note,
        cost_basis: cost,
        date
      };

      // We will not add records to History (list of past assets)
      await axios.post(`${serverURL}/api/activeAssets/metamask`, assetData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoading(false);
      showSuccessToast(`Asset: Metamask's Ethereum has been saved to Inventory.`);
      onClose();
    } catch (error) {
      console.log(error);
      showErrorToast(error);
      setLoading(false);
    }
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
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
        <ModalHeader fontStyle="italic">Metamask Ethereum</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" gap={5}>
          <HStack justifyContent="space-evenly">
            {/* Position & DatePicker */}
            <FormLabel>Position: {position}</FormLabel>
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
              This will replace your current Metamask Ethereum entry in Active Assets (if any).
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" marginInline={3} onClick={addAsset}>
            {isLoading ? <LoadingIcon /> : 'Save Eth'}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
