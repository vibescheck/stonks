import axios from 'axios'
import authenticationHeader from './authenticationHeader'

const url = 'https://server-stonks.herokuapp.com/api/v1'
 //'http://localhost:5000'
const header = { headers: { 'Content-Type': 'application/json' }}

// API call for logging user in and retrieving authentication token
const userLogin = (loginData) => {
  return axios.post(url + '/users/login', loginData, header)
}

// API call for registering new user
const userRegister = (registerData) => {
  return axios.post(url + '/users/register', registerData,header)
}

// API call to access protected route for basic user details
const getUserDetails = () => {
  return axios.get(url + '/users/details', { headers: authenticationHeader()})
}

export {
  userLogin,
  userRegister,
  getUserDetails
} 