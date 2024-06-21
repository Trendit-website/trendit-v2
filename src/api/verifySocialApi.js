import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

export const useVerifySocial = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.post(`/send_social_verification_request`, data)
    },
  })
}

export const useGetSocialLinks = () => {
  return useQuery({
    queryKey: ['get_social'],
    queryFn: async () => {
      const res = await API.get(`/verified_socials`)
      return res?.data
    },
  })
}

export const useGetDeleteLinks = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.delete(`/delete-socials/${data}`,)
    },
  })
}
