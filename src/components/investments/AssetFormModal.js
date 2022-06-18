import {
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  Box,
  Text,
  Textarea,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { CalendarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { serverURL } from '../../services/investmentService';

export default function AssetFormModal({ isOpen, onClose, type, asset }) {
  const [position, setPosition] = useState(1);
  const [note, setNote] = useState('');
  const toast = useToast();
  const { getAccessTokenSilently } = useAuth0();

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
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
  const onSubmitAdd = async () => {
    /* Form validation to be improved, include date */
    if (!asset || !position) {
      showErrorToast('Missing fields');
      return;
    }

    const token = await getAccessTokenSilently();
    /** Query cost_basis based on indicated date and time */
    const { id, name } = asset;
    const assetData = { type, name, position, note, cost_basis: 100, api_id: id };
    assetData.symbol = type === 'stocks' ? asset.short_name : asset.symbol;

    try {
      await axios.post(serverURL, assetData, { headers: { Authorization: `Bearer ${token}` } });
      showSuccessToast(name);
      onClose();
    } catch (error) {
      showErrorToast(error);
    }
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontStyle="italic">{asset?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" gap={5}>
          <HStack justifyContent="space-between">
            {/* Position & DatePicker */}
            <Box>
              <FormLabel htmlFor="position">POSITION</FormLabel>
              <NumberInput min={0} size="md" id="position" step={1} defaultValue={1} precision={2}>
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
          {/* Note */}
          <Box>
            <FormLabel htmlFor="note">NOTE</FormLabel>
            <Textarea
              size="md"
              name="note"
              onChange={handleNoteChange}
              value={note}
              placeholder="Optional Notes"
            />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onSubmitAdd}>
            Submit
          </Button>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
