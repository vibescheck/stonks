import axios from 'axios';
import cryptoSymbols from './data/cryptoOptions';
import stockOptions from './data/stockOptions';

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
  return results.length > 0 ? results : [];
};

// Get Top-7 trending coins on CoinGecko as searched by users in the last 24 hours
const trendingCrypto = () => axios.get('https://api.coingecko.com/api/v3/search/trending');

export { findCryptoSymbol, findStockSymbol, trendingCrypto, serverURL };
