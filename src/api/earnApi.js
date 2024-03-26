import { useMutation, useQuery } from '@tanstack/react-query'
import API from '../services/AxiosInstance'
import APIFormData from '../services/AxiosInstanceFormdata'

export const useGenerateTask = () => {
  return useMutation({
    mutationFn: (data) => {
      return API.post(`/generate-task`, data)
    },
  })
}

export const usePerformTask = (status) => {
  return useQuery({
    queryKey: ['perform_task', status],
    queryFn: async () => {
      const res = await API.get(`/performed-tasks?status=${status}`)
      return res?.data?.performed_tasks
    },
  })
}

export const useSubmitPerformTask = () => {
  return useMutation({
    mutationFn: (data) => {
      return APIFormData.post(`/perform-task`, data)
    },
  })
}

export const useCalcelTask = () => {
  return useMutation({
    mutationFn: (id) => {
      return API.put(`/performed-tasks/cancel/${id}`)
    },
  })
}
