import { useAuth0 } from '@auth0/auth0-react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useCompletionToast from '../hooks/useCompletionToast';

export default function AddBudgetModal({ promptRefresh }) {
  const { getAccessTokenSilently, user } = useAuth0();
  const [limit, setLimit] = useState('');
  const [duration, setDuration] = useState('Monthly');
  const [label, setLabel] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const labelInputRef = useRef();
  const [showSuccessToast, showErrorToast] = useCompletionToast();

  const addBudget = async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/budget/`,
      {
        user,
        label,
        limit,
        duration
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addBudget()
      .then(onClose, promptRefresh(), showSuccessToast('Budget set', `${label} has been added.`))
      .catch((err) => showErrorToast(err));
    setLimit('');
    setLabel('');
  };

  return (
    <>
      <Box justify="center" align="center" pb={2}>
        <Button onClick={onOpen} variant="black">
          Add Budget
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={labelInputRef} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Budget</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onSubmit}>
            <ModalBody>
              <Box>
                <div>
                  <FormLabel htmlFor="Label">
                    Budget Label:
                    <Input
                      type="text"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      placeholder="Enter budget label"
                      ref={labelInputRef}
                      required
                    />
                  </FormLabel>
                </div>
                <div>
                  <FormLabel htmlFor="Limit">
                    Limit ($):
                    <Input
                      type="Number"
                      value={limit}
                      onChange={(e) => setLimit(e.target.value)}
                      placeholder="Enter budget limit"
                      required
                    />
                  </FormLabel>
                </div>
                <div>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="97%" mt={2}>
                      {duration}
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => setDuration('Daily')}>Daily</MenuItem>
                      <MenuItem onClick={() => setDuration('Weekly')}>Weekly</MenuItem>
                      <MenuItem onClick={() => setDuration('Monthly')}>Monthly</MenuItem>
                      <MenuItem onClick={() => setDuration('Yearly')}>Yearly</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" variant="black" marginInline={3}>
                Add Budget
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
