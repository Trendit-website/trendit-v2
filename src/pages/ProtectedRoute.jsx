/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'
import useCurrentUser from '../hooks/useCurrentUser'

const ProtectedRoute = ({ children }) => {
  const { userData } = useCurrentUser()
  const location = useLocation()

  const isAuthenticated = userData

  // Add your authentication logic here, e.g., check if user is logged in
  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />
  } else {
    return children
  }
}

export default ProtectedRoute
