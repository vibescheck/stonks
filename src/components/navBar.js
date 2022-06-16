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
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useNavigate, Link } from 'react-router-dom';

export default function navBar() {
  return (
    <main>
      <nav className="nav">
        <Stack spacing="20px" direction="row" align="center">
          <Link to="/profile">
            <Button type="button">View Profile</Button>
          </Link>
          <Link to="/investments">
            <Button type="button">View Investments</Button>
          </Link>
          <Link to="/savings">
            <Button type="button">SavingsWallet</Button>
          </Link>
        </Stack>
      </nav>
    </main>
  );
}
