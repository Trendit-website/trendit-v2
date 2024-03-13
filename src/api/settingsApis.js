import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

export const useUpdateNoticePrefence = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/settings/notifications`, data)
    },
  })
}

export const useUpdateUserPrefence = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.post(`/settings/preferences`, data)
    },
  })
}

export const useUpdateSecPrefence = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/settings/security`, data)
    },
  })
}

export const useGetNoticPrefence = () => {
  return useQuery({
    queryKey: ['notice_prefrence'],
    queryFn: async () => {
      const res = await API.get(`/settings/notifications`)
      return res?.data?.notification_preference
    },
  })
}
export const useGetUserPrefence = () => {
  return useQuery({
    queryKey: ['user_preference'],
    queryFn: async () => {
      const res = await API.get(`/settings/preferences`)
      console.log(res, 'user_preference')
      return res?.data?.user_preferences
    },
  })
}
export const useGetSecurityPrefrence = () => {
  return useQuery({
    queryKey: ['sec_prefence'],
    queryFn: async () => {
      const res = await API.get(`/settings/security`)
      console.log(res, 'sec_prefence')
      return res?.data?.security_settings
    },
  })
}
