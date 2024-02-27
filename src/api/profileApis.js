import { useMutation } from '@tanstack/react-query'
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

export const useVerifyEmailResendOtp = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/resend-code`, data)
    },
  })
}

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: ({ data }) => {
      return API.post(`/complete-registration`, data)
    },
  })
}
