import { useContext, useRef } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';
import useCompletionToast from './hooks/useCompletionToast';
import { AssetContext } from '../contexts/AssetContextProvider';

export default function DeleteAlert({ isOpen, onClose, assetId, name, apiRoute, savingsRefresh }) {
  const cancelRef = useRef();
  const { getAccessTokenSilently } = useAuth0();
  const { showSuccessToast, showErrorToast } = useCompletionToast();
  const { promptRefresh } = useContext(AssetContext);

  const onClickDelete = async () => {
    try {
      const token = await getAccessTokenSilently();
      await axios.delete(`${apiRoute}/${assetId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showSuccessToast('Asset Deleted', `${name} has been deleted.`);
      onClose();
      savingsRefresh();
    } catch (error) {
      showErrorToast(error.message);
    }
  };

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete {name}
          </AlertDialogHeader>

          <AlertDialogBody>
            {`Are you sure? You can't undo this action afterwards.`}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onClickDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
