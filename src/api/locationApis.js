import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'
// import { formatError, showSuccess } from "../utilities/messagePopup";

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/signup`, data)
    },
  })
}

export const useVerifyEmailOtp = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/verify-email`, data)
    },
  })
}

export const useGetCountry = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['country'],
    queryFn: async () => {
      const res = await API.get(`/countries`)

      return res?.data?.countries
    },
  })

  return { data, isLoading, isError }
}

export const useGetState = (country) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['state', country],
    queryFn: async () => {
      const res = await API.post(`/states`, { country })
      console.log(res?.data?.states, 'state')
      return res?.data?.states
    },
    enabled: !!country,
  })
  return { data, isLoading, isError }
}

export const useGetLga = (state) => {
  console.log(state, 'useGetLga')
  const { data, isLoading, isError } = useQuery({
    queryKey: ['lga', state],
    queryFn: async () => {
      const res = await API.post(`/states/lga`, { state })
      console.log(res, 'success')
      console.log(res?.data?.state_lga, 'lga location')
      return res?.data?.state_lga
    },
    enabled: !!state,
  })
  return { data, isLoading, isError }
}
