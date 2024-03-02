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
      console.log(res, 'res')
      console.log(res?.data)
      return res?.data?.countries
      // return res?.data?.data
    },
  })

  return { data, isLoading, isError }
}

export const useGetState = (country) => {
  //   console.log(country)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['state', country],
    queryFn: async () => {
      // const res = await API.get(`/states?${country}`)
      // const res = await API.get(`/states`)
      const res = await API.get(`/states`)
      console.log(res?.data?.states, 'state')
      return res?.data?.states
    },
    enabled: !!country,
  })
  return { data, isLoading, isError }
}

export const useGetLga = (state) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['lga', state],
    queryFn: async () => {
      // const res = await API.get(`/states/lga/${state}`)
      // const res = await API.get(`/states/lga`)
      const res = await API.get(`/states/lga?state=${state}`)
      console.log(res?.data?.lgas, 'lga')
      return res?.data?.states
    },
    enabled: !!state,
  })

  return { data, isLoading, isError }
}
