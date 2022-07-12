import { Td } from '@chakra-ui/react';

export default function SearchAssetRow({ type, asset }) {
  return type === 'stocks' ? (
    <>
      <Td fontWeight="semibold">{asset.symbol}</Td>
      <Td>{asset.name}</Td>
    </>
  ) : (
    <>
      <Td fontWeight="semibold">{asset.symbol}</Td>
      <Td>{asset.name}</Td>
    </>
  );
}
