import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Grid,
  Tabs,
  TabList,
  Tab
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate, Link, Navigate } from 'react-router-dom';

export default function NavBar() {
  return (
    <Tabs isFitted variant="unstyled" size="lg" align="center" bg="black" color="lightgray">
      <TabList>
        <Link to="/dashboard">
          <Tab
            _selected={{
              color: 'white',
              fontWeight: 900,
              decoration: 'underline',
              transition: '200ms'
            }}>
            Dashboard
          </Tab>
        </Link>
        <Link to="/savings">
          <Tab
            _selected={{
              color: 'white',
              fontWeight: 900,
              decoration: 'underline',
              transition: '200ms'
            }}>
            Wallet
          </Tab>
        </Link>
        <Link to="/investments">
          <Tab
            _selected={{
              color: 'white',
              fontWeight: 900,
              decoration: 'underline',
              transition: '200ms'
            }}>
            Investments
          </Tab>
        </Link>
        <Link to="/profile">
          <Tab
            _selected={{
              color: 'white',
              fontWeight: 900,
              decoration: 'underline',
              transition: '200ms'
            }}>
            Profile
          </Tab>
        </Link>
      </TabList>
    </Tabs>
  );
}
