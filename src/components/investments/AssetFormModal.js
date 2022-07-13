import {
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  Box,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  InputGroup,
  InputLeftElement,
  InputLeftAddon
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import axios from 'axios';
import { serverURL } from '../../services/investmentService';
import useCompletionToast from '../hooks/useCompletionToast';
import Loading from '../Loading';
import LoadingIcon from '../LoadingIcon';

export default function AssetFormModal({ isOpen, onClose, type, asset, promptRefresh }) {
  const [position, setPosition] = useState(1);
  const [cost, setCost] = useState(1);
  const [note, setNote] = useState('');
  const [date, setDate] = useState(Date.now);
  const { getAccessTokenSilently } = useAuth0();
  const [showSuccessToast, showErrorToast] = useCompletionToast();
  const [isLoading, setLoading] = useState(false);

  const onSubmitAdd = async () => {
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

      // TODO: Combine to one Promise together instead
      await axios.post(`${serverURL}/api/assets`, assetData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await axios.post(`${serverURL}/api/activeAssets`, assetData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoading(false);
      showSuccessToast('Asset Added', `${name} has been added.`);
      onClose();
      promptRefresh();
    } catch (error) {
      showErrorToast(error);
      setLoading(false);
    }
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const handleCostChange = (event) => {
    setCost(event.target.value);
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
              <NumberInput size="md" id="position" step={1} defaultValue={1} precision={2}>
                <NumberInputField value={position} onChange={handlePositionChange} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <FormLabel htmlFor="cost">COST/RETURNS</FormLabel>
              <InputGroup>
                <InputLeftAddon pointerEvents="none" color="gray.300" fontSize="1.2em">
                  $
                </InputLeftAddon>
                <NumberInput min={0} size="md" id="cost" step={1} defaultValue={1} precision={2}>
                  <NumberInputField
                    value={cost}
                    onChange={handleCostChange}
                    placeholder="Only Magnitude, No +/-"
                  />
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
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" marginInline={3} onClick={onSubmitAdd}>
            {isLoading ? <LoadingIcon /> : 'Add Asset'}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
