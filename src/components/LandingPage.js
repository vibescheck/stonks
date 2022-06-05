import { useAuth0 } from '@auth0/auth0-react';

function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  const registerRedirect = () => {
    loginWithRedirect({
      screen_hint: 'sign_up'
    });
  };

  return (
    <main>
      <h1>stonks!</h1>
      <button type="button" onClick={loginWithRedirect}>
        Login with Auth0
      </button>
      <button type="button" className="btn btn-primary btn-block" onClick={registerRedirect}>
        Register
      </button>
    </main>
  );
}

export default LandingPage;
