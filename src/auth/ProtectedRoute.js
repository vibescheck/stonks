/* eslint-disable react/jsx-props-no-spreading */
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../components/Loading';

const loadingRedirect = () => <Loading />;

export default function ProtectedRoute({ component, ...args }) {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: loadingRedirect
      })}
      {...args}
    />
  );
}
