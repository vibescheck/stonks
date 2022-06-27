import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Image } from '@chakra-ui/react';

export default function Profile() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Flex h="100vh" flexDir="column" alignItems="center" bgColor="gray.100">
      <Flex
        flexDir="column"
        bgColor="white"
        borderRadius={15}
        boxShadow="lg"
        alignItems="center"
        width={{ base: '90%', md: '5xl' }}
        gap={4}
        px={6}
        py={4}
        my={8}>
        <div className="rounded">
          <Image src={picture} alt="Profile" borderRadius="full" boxSize="150px" />
        </div>
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">{JSON.stringify(user, null, 2)}</pre>
        </div>
      </Flex>
    </Flex>
  );
}
