import axios from 'axios'

// *** API SETUP ***/
const token = JSON.parse(localStorage.getItem('signup_token'))?.state?.token
const access_token = JSON.parse(localStorage.getItem('access_token'))?.state
  ?.token

// console.log(access_token, 'accccc nhhhh')
// console.log(token, 'token')
const API = axios.create({
  // baseURL: `https://trendit3-v2-gj9x.onrender.com/api`,
  baseURL: `https://trendit3-hd9u.onrender.com/api`,
})
API.interceptors.request.use((req) => {
  req.headers['signup_token'] = token
  req.headers['access_token'] = access_token
  req.headers['Authorization'] = `Bearer ${access_token}`
  req.headers['Content-type'] = 'application/json'
  req.headers['Accept'] = 'application/json'
  // 'Authorization'= `Bearer ${access_token}`,
  return req
})
export default API

//
