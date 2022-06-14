import { CircularProgress } from '@chakra-ui/react';

export default function Loading({ message }) {
  return (
    <div>
      {message || 'Loading...'}
      <CircularProgress isIndeterminate />
    </div>
  );
}
