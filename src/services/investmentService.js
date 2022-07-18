import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import stockOptions from './data/stockOptions';
import cryptoSymbols from './data/cryptoOptions';

const serverURL = process.env.REACT_APP_SERVER_URL;

// Filter for list of stocks
const findStockSymbol = (keyword) => {
  const key = keyword.toLowerCase();
  const results = stockOptions.filter(
    function (stock) {
      if (
        this.count < 10 &&
        (stock.name.toLowerCase().startsWith(key) || stock.symbol.toLowerCase().startsWith(key))
      ) {
        this.count++;
        return true;
      }
      return false;
    },
    { count: 0 }
  );
  return results.length > 0 ? results : [];
};

// Filter for list of cryptocurrencies
const findCryptoSymbol = (keyword) => {
  const key = keyword.toLowerCase();
  const results = cryptoSymbols.filter(
    function (coin) {
      if (
        this.count < 10 &&
        (coin.name.toLowerCase().startsWith(key) || coin.symbol.toLowerCase().startsWith(key))
      ) {
        this.count++;
        return true;
      }
      return false;
    },
    { count: 0 }
  );
  return results.length > 0 ? results : null;
};

/*  This is previous code for frontend price fetching implementation
// Will query backend to query stock API, to prevent exposing of API key to client
const getStockAPICurrentPrice = (symbol, token) => {
  // Not wrapping in try-catch here, handle by function caller
  return axios.get(`${serverURL}/api/fetchStock/${symbol}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Free API that does not require API key, will query from frontend for now
const getCryptoAPICurrentPrice = (id) => {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
  );
}; */

// Get Top-7 trending coins on CoinGecko as searched by users in the last 24 hours
const trendingCrypto = () => axios.get('https://api.coingecko.com/api/v3/search/trending');

export { findCryptoSymbol, findStockSymbol, trendingCrypto, serverURL };
