import axios from 'axios'

// *** API SETUP ***/
const token = JSON.parse(localStorage.getItem('signup_token'))?.state?.token

// console.log(token, 'token')
const API = axios.create({
  baseURL: `https://trendit3-v2-gj9x.onrender.com/api`,
})
API.interceptors.request.use((req) => {
  req.headers['signup_token'] = token
  req.headers['Content-type'] = 'application/json'
  req.headers['Accept'] = 'application/json'
  return req
})
export default API

//
