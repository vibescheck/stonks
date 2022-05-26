import http from './httpCommon'

// API call for logging user in and retrieving authentication token
const userLogin = (loginData) => {
  return http.post('user/login', loginData)
}

// API call for registering new user
const userRegister = (registerData) => {
  return http.post('user/register', registerData)
}

// API call to access protected route for basic user details
const getUserDetails = (authData) => {
  return http.get('user/details', authData)
}

export {
  userLogin,
  userRegister,
  getUserDetails
} 