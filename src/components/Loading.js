import { CircularProgress } from '@chakra-ui/react';

export default function Loading({ message }) {
  return (
    <main>
      {message || 'Loading...'}
      <CircularProgress isIndeterminate />
    </main>
  );
}
