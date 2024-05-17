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

export const useGetAdvert = (status) => {
  return useQuery({
    queryKey: ['get_dvert', status],
    queryFn: async () => {
      const res = await API.get(`/current-user/tasks?status=${status}`)
      return res?.data?.all_tasks
    },
  })
}
export const useGetTotalAdvertTask = () => {
  return useQuery({
    queryKey: ['get_total_advert'],
    queryFn: async () => {
      const res = await API.get(`/user/tasks/total`)
      console.log(res?.data)
      return res?.data?.all_tasks
    },
  })
}
