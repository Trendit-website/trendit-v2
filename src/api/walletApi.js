import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

export const useFundWallet = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/payment/credit-wallet`, data)
    },
  })
}

export const useVerifyPayment = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/payment/verify`, data)
    },
  })
}

export const useFetchBallance = () => {
  return useQuery({
    queryKey: ['show_ballance'],
    queryFn: async () => {
      const res = await API.post(`/show_balance`)
      return res?.data
    },
  })
}
