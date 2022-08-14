import { useToast } from '@chakra-ui/react';

export default function useCompletionToast() {
  const toast = useToast();

  const showSuccessToast = (title, description) => {
    toast({
      title,
      description,
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };
  const showErrorToast = (errMessage) => {
    toast({
      title: 'Error occurred',
      description: `${errMessage}`,
      status: 'error',
      duration: 3000,
      isClosable: true
    });
  };

  return { showSuccessToast, showErrorToast };
}
