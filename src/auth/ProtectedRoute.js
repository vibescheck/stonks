/* eslint-disable react/jsx-props-no-spreading */
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

export default function ProtectedRoute({ component }) {
  const redirectLoad = () => <Loading />;
  const Component = withAuthenticationRequired(component, {
    onRedirecting: redirectLoad
  });
  return <Component />;
}
