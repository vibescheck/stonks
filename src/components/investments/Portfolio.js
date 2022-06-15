import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from '@chakra-ui/react';
import { RepeatIcon, DeleteIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { serverURL } from '../../services/investmentService';
import Loading from '../Loading';

export default function Portfolio() {
  const [assets, setAssets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { getAccessTokenSilently, user } = useAuth0();

  const promptRefresh = () => setRefresh(!refresh);

  const getOwnedAssets = async () => {
    setLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(serverURL, { headers: { Authorization: `Bearer ${token}` } });
      if (results) {
        // bruh
        setAssets(results.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => setAssets(getOwnedAssets()), [refresh]);

  const deleteAsset = async (assetId) => {
    try {
      const token = await getAccessTokenSilently();
      await axios.delete(`${serverURL}${assetId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      promptRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>{`${user.name || user.nickname}'s `}Investment Portfolio</h1>
      <Link to="/finder">
        <Button>Add/Find</Button>
      </Link>
      <IconButton icon={<RepeatIcon />} aria-label="Refresh" onClick={promptRefresh} />

      {isLoading ? (
        <Loading />
      ) : (
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Symbol</Th>
                <Th>Name</Th>
                <Th>Position</Th>
                <Th>Cost Basis</Th>
                <Th>Type</Th>
                <Th> </Th>
              </Tr>
            </Thead>
            <Tbody>
              {assets.map((asset) => (
                <Tr key={uuidv4()}>
                  <Td>{asset.symbol}</Td>
                  <Td>{asset.name}</Td>
                  <Td>{asset.position}</Td>
                  <Td>{asset.cost_basis}</Td>
                  <Td>{asset.type}</Td>
                  <Td>
                    <IconButton
                      icon={<DeleteIcon />}
                      aria-label="Delete Asset"
                      onClick={() => deleteAsset(asset._id)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </main>
  );
}
