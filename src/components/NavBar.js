/* eslint-disable no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
  useDisclosure
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import Streaks from './Streaks';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logout } = useAuth0();
  console.log(user);
  // const { picture } = user;

  // TODO: user avatar, check route for correct tab, responsive UI (hamburger menu)

  const location = useLocation().pathname;
  let tabIndex = 0;
  if (location === '/savings') {
    tabIndex = 1;
  }
  if (location === '/investments') {
    tabIndex = 2;
  }

  return (
    <Flex justifyContent="space-between">
      <Flex pos="fixed" zIndex={2}>
        <Heading
          size="xl"
          color="white"
          fontFamily="alegreya"
          fontWeight={900}
          align="center"
          mt={1}
          ml={3}
          mb={1}>
          stonks!
        </Heading>
      </Flex>
      <Box>
        <Heading> {location}</Heading>
      </Box>
      <Flex bg="black" align="center" justify="center" w="100%" pos="fixed" zIndex={1}>
        <Tabs
          isFitted
          variant="unstyled"
          size="lg"
          align="center"
          color="lightgray"
          defaultIndex={tabIndex}>
          <TabList gap={50}>
            <Link to="/dashboard">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 800,
                  borderBottom: '2x solid white',
                  transition: '200ms'
                }}>
                Dashboard
              </Tab>
            </Link>
            <Link to="/savings">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 800,
                  borderBottom: '2x solid white',
                  transition: '200ms'
                }}>
                Wallet
              </Tab>
            </Link>
            <Link to="/investments">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 800,
                  borderBottom: '2x solid white',
                  transition: '200ms'
                }}>
                Investments
              </Tab>
            </Link>
          </TabList>
        </Tabs>
      </Flex>
      <Flex top={0} right={0} pos="fixed" zIndex={2} pr={4}>
        <Flex align="center" justify="center">
          <Heading color="white" size="md" mt={2}>
            🔥 <Streaks />
          </Heading>
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              w="50px"
              pt={2.5}
              _focusVisible="false">
              <Avatar size="sm" src={user?.picture} />
            </MenuButton>
            <MenuList>
              <Link to="/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem
                onClick={() =>
                  logout({
                    returnTo: process.env.REACT_APP_CLIENT_URL
                  })
                }>
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}
