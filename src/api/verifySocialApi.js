import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'


export const useVerifySocial = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.post(`/send_social_verification_request`, data)
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
