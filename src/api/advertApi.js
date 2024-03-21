import { useMutation, useQuery } from '@tanstack/react-query'
import APIFormData from '../services/AxiosInstanceFormdata'
import API from '../services/AxiosInstance'

export const useCreateAdvert = () => {
  return useMutation({
    mutationFn: (formData) => {
      return APIFormData.post(
        `/tasks/new?payment_method=payment_gateway`,
        formData
      )
    },
  })
}

export const useCreateAdvertPaymentWallet = () => {
  return useMutation({
    mutationFn: (formData) => {
      return APIFormData.post(
        `/tasks/new?payment_method=trendit_wallet`,
        formData
      )
    },
  })
}

export const useGetAdvert = () => {
  return useQuery({
    queryKey: ['get_dvert'],
    queryFn: async () => {
      const res = await API.get(`/current-user/tasks`)
      console.log(res?.data, 'resss')
      return res?.data?.all_tasks
    },
  })
}
