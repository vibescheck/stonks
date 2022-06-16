import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Text,
  VStack,
  IconButton
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { serverURL } from '../../services/investmentService';

export default function HistoryDrawer({ isOpen, onClose, btnRef }) {
  const [history, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { getAccessTokenSilently, user } = useAuth0();

  const getHistory = async () => {
    setLoading(true);
    try {
      const token = await getAccessTokenSilently();
      const results = await axios.get(serverURL, { headers: { Authorization: `Bearer ${token}` } });
      if (results) {
        // bruh
        setHistory(results.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  const loadMore = () => {};
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>history</DrawerHeader>

        <DrawerBody>
          <Box>
            <Table>
              <Thead>
                <Tr color="gray.200">
                  <Th>SYMBOL/NAME</Th>
                  <Th>UNITS</Th>
                  <Th>TYPE</Th>
                  <Th>DATE</Th>
                  <Th>MARKET VALUE</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {history.map((item) => (
                  <Tr key={uuidv4()} _hover={{ background: 'gray.100' }}>
                    <Td>
                      <VStack alignItems="start">
                        <Heading size="sm" letterSpacing="tight">
                          {item.symbol}
                        </Heading>
                        <Text fontWeight="semibold" fontSize="sm">
                          {item.name}
                        </Text>
                      </VStack>
                    </Td>
                    <Td>{item.position}</Td>
                    <Td>{item.type}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.action}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <IconButton
              variant="ghost"
              size="md"
              icon={<ChevronDownIcon w={10} h={10} />}
              onClick={loadMore}
              m={2}
            />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
