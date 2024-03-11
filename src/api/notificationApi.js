import { useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

export const useGetNotification = () => {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const res = await API.post(`/notifications`)
      return res?.data?.user_notification
    },
  })
}
export const useGetActivities = () => {
  return useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const res = await API.post(`/activities`)
      return res?.data?.user_notification
    },
  })
}
export const useGetMessages = () => {
  return useQuery({
    queryKey: ['messages'],
    queryFn: async () => {
      const res = await API.post(`/messages`)
      return res?.data?.user_notification
    },
  })
}
