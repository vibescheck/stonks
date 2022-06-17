import { Tabs, TabList, Tab, Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Flex bg="black">
      <Box>
        {/* TODO: make this clickable to dashboard */}
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
      </Box>
      <Flex align="center" justify="center" w="100%" pos="fixed">
        <Tabs isFitted variant="unstyled" size="lg" align="center" color="lightgray">
          <TabList>
            <Link to="/dashboard">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 900,
                  borderBottom: '3px solid white',
                  paddingBottom: '2px',
                  transition: '200ms'
                }}
                marginInline="50px ">
                Dashboard
              </Tab>
            </Link>
            <Link to="/savings">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 900,
                  borderBottom: '3px solid white',
                  paddingBottom: '2px',
                  transition: '200ms'
                }}
                marginInline="50px ">
                Wallet
              </Tab>
            </Link>
            <Link to="/investments">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 900,
                  borderBottom: '3px solid white',
                  paddingBottom: '2px',
                  transition: '200ms'
                }}
                marginInline="50px ">
                Investments
              </Tab>
            </Link>
            <Link to="/profile">
              <Tab
                _selected={{
                  color: 'white',
                  fontWeight: 900,
                  borderBottom: '3px solid white',
                  paddingBottom: '2px',
                  transition: '200ms'
                }}
                marginInline="50px ">
                Profile
              </Tab>
            </Link>
          </TabList>
        </Tabs>
      </Flex>
      {/* <Flex align="right" justify="right" w="100%" pos="fixed">
        <Box>
          //TODO: make this profile dropdown
          <Heading
            size="xl"
            color="white"
            fontFamily="alegreya"
            fontWeight={900}
            align="center"
            mt={1}
            mr={3}
            mb={1}>
            stonks!
          </Heading>
        </Box>
      </Flex> */}
    </Flex>
  );
}
