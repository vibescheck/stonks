import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  const registerRedirect = () => {
    loginWithRedirect({
      screen_hint: 'signup'
    });
  };

  return (
    <main>
      <h1>stonks!</h1>
      <Button type="button" onClick={loginWithRedirect}>
        Login with Auth0
      </Button>
      <Button type="button" className="btn btn-primary btn-block" onClick={registerRedirect}>
        Register
      </Button>
    </main>
  );
}

export default LandingPage;
