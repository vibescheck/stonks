import axios from 'axios';

const url = process.env.NODE_ENV === "development" 
    ? 'http://localhost:5000'
    : 'https://server-stonks.herokuapp.com/api/v1'

export default axios.create({
    baseURL: url,
    headers: {
        "Content-type": "application/json"
      }
});