import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import './index.css';
import App from './App';
import theme from './theme';
import TransactionContextProvider from './contexts/TransactionContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ChakraProvider theme={theme}>
          <TransactionContextProvider>
            <App />
          </TransactionContextProvider>
        </ChakraProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
);
