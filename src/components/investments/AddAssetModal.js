import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import {
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
  ModalFooter,
  HStack,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  RadioGroup,
  Radio,
  Stack,
  Box,
  useDisclosure
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { serverURL } from '../../services/investmentService';
import Loading from '../Loading';

import AssetSelect from './AssetSelect';

export default function AddAssetModal() {
  // use CONSTANTS for asset type
  // const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [type, setType] = useState('stocks');
  const [position, setPosition] = useState(1);
  const [note, setNote] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  /**
   * Switch to useReducer as soon as possible!!!
   */

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handleRadioTypeChange = (event) => {
    setSelected(null);
    setType(event);
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
    /* Form validation to be improved */
    console.log(selected);
    if (!selected || !position) {
      showErrorToast('Missing fields');
      return;
    }

    const token = await getAccessTokenSilently();
    /** Query cost_basis based on indicated date and time */
    const { id, name } = selected;
    const assetData = { type, name, position, note, cost_basis: 100, api_id: id };
    assetData.symbol = type === 'stocks' ? selected.short_name : selected.symbol;

    try {
      await axios.post(serverURL, assetData, { headers: { Authorization: `Bearer ${token}` } });
      showSuccessToast(name);
      onClose();
    } catch (error) {
      showErrorToast(error);
    }
  };
  return (
    <>
      <Button
        mt={4}
        bgColor="black"
        _hover={{ bgColor: 'gray.700' }}
        p={6}
        borderRadius={15}
        onClick={onOpen}>
        <Text color="white">add asset</Text>
      </Button>
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
                <AssetSelect type={type} selected={selected} setSelected={setSelected} />
                <RadioGroup onChange={handleRadioTypeChange} value={type}>
                  <Stack direction="row">
                    <Radio value="stocks">Stocks</Radio>
                    <Radio value="crypto">Cryptocurrency</Radio>
                  </Stack>
                </RadioGroup>
                {isLoading && <Loading />}
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
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSubmitAdd}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
