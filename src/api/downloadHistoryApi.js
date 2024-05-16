import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'
import axios from 'axios'

// export const useDownloadTransHistory = () => {
//   return useMutation({
//     mutationFn: (data) => {
//       console.log(data, 'hhh')
//       return API.get(`/download_transaction_history`, { params: { ...data } })
//     },
//   })
// }

// export const useDownloadTransHistory = () => {
//   return useMutation({
//     mutationFn: ({ data }) => {
//       console.log(data, 'hhh')
//       return API.get('/download_transaction_history', {
//         data,
//       })
//     },
//   })
// }

export const useDownloadTransHistory = () => {
  return useMutation({
    mutationFn: (data) => {
      console.log(data, 'hhh')
      return axios({
        url: '/download_transaction_history',
        method: 'GET',
        data: data, // Sending data in the body for GET request
        responseType: 'blob', // Ensure the response is treated as a blob
      })
    },
  })
}

export const useFetchTransactionHistory = () => {
  return useQuery({
    queryKey: ['transaction_history'],
    queryFn: async () => {
      const res = await API.get(`/transactions`)
      return res?.data?.transactions_history
    },
  })
}
