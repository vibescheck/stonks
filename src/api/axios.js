import axios from 'axios';

export default axios.create({
    baseURL: 'https://server-stonks.herokuapp.com/api/v1'
});