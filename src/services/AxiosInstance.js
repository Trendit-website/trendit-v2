import axios from 'axios'

// *** API SETUP ***/

const currentURL = window.location.href // Extract current browser URL
console.log(currentURL, 'current')

const API = axios.create({
  // baseURL: `https://trendit3-v2-gj9x.onrender.com/api`,
  baseURL: `https://trendit3-hd9u.onrender.com/api`,
})

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem('signup_token'))?.state?.token
  const access_token = JSON.parse(localStorage.getItem('access_token'))?.state
    ?.token
  req.headers['signup_token'] = token
  req.headers['access_token'] = access_token
  req.headers['Authorization'] = `Bearer ${access_token}`
  req.headers['Content-type'] = 'application/json'
  req.headers['Accept'] = 'application/json'
  req.headers['CALLBACK-URL'] = currentURL
  return req
})

// API.interceptors.request.use(
//   async (req) => {
//     const access_token = JSON.parse(localStorage.getItem('access_token'))?.state
//       ?.token

//     if (access_token) {
//       // config.headers.Authorization = `Bearer ${access_token}`
//       req.headers['Authorization'] = `Bearer ${access_token}`
//     }
//     if (!access_token) {
//       window.location.href('/login')
//     }

//     return req
//   },

//   (err) => {
//     return Promise.reject(err)
//   }
// )

// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       toast('Your session has expired or is no longer valid.', {
//         type: 'error',
//         autoClose: 3000,
//         toastId: 'adminCaller',
//       })
//       window.location.href('/login')
//     }

//     if (error.response && error.response.status === 403) {
//       toast('You do not have permission to perfom this operation.', {
//         type: 'error',
//         autoClose: 3000,
//         toastId: 'adminCaller',
//         hideProgressBar: true,
//         progress: undefined,
//       })
//       // Logout();
//     }
//     return Promise.reject(error)
//   }
// )
export default API
