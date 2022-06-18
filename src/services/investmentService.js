import axios from 'axios';
/// import USStockSymbols from './data/USStocksFCS';
// import cryptoSymbols from './data/cryptoFCS';

const serverURL = `${process.env.REACT_APP_SERVER_URL}/api/v1/assets/`;

const getOwnedAssets = () => {
  return axios.get(serverURL);
};

// Configure asset object based on type
const addAsset = (assetData) => {
  return axios.post(serverURL, assetData);
};

// Not the best practice of using API key in URL, but it is free (temporary solution)
const searchStockAPI = (keyword) => {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${process.env.REACT_APP_ALPHA_KEY}`;
  // { headers: { 'User-Agent': 'request' } }
  return axios.get(url);
};

const searchCryptoAPI = (keyword) => {
  return axios.get(`https://api.coingecko.com/api/v3/search?query=${keyword}`);
};

const trendingCrypto = () => axios.get('https://api.coingecko.com/api/v3/search/trending');

export { searchStockAPI, searchCryptoAPI, trendingCrypto, getOwnedAssets, addAsset, serverURL };
