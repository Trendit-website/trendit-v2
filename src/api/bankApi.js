import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

export const useFundWallet = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/payment/credit-wallet`, data)
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
export const useFetchBank = () => {
  return useQuery({
    queryKey: ['fetch_bank'],
    queryFn: async () => {
      const res = await API.get(`/banks`)
      // console.log(res, 'fff')
      return res?.data?.supported_banks
    },
  })
}

export const useVerifyBank = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.get(`/banks/verify/account`, data)
    },
  })
}

export const useUpdateBankDetils = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.post(`/profile/bank`, data)
    },
  })
}
