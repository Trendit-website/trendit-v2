import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'

export const useGenerateTask = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/generate-task`, data)
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
