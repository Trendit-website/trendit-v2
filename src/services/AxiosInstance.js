import axios from 'axios'

// *** API SETUP ***/
// const token= JSON.parse(localStorage.getItem('communeety-auth-session'))?.state?.userData?.token;
const API = axios.create({ baseURL: `https://trendit3-v2.onrender.com/` })
API.interceptors.request.use((req) => {
  // req.headers['token'] = token;
  req.headers['Content-type'] = 'application/json'
  req.headers['Accept'] = 'application/json'
  return req
})
export default API

//
