import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Animation from './utilities/Animation'
import ConfirmOtp from './components/auth/ConfirmOtp'
import Signup from './components/auth/Signup'
import OnBoard from './components/auth/OnBoard'
import RootLayout from './layouts/RootLayout'
import VerifyEmail from './components/auth/VerifyEmail'
import Welcome from './pages/home'
import Earn from './pages/earn/Earn'
import Advertise from './pages/advertise/Advertise'
import Resell from './pages/resell/Resell'
import Transactions from './pages/transaction/Transactions'
import Referal from './pages/referal/Referal'
import Support from './pages/support/Support'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/setting/Settings'
import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'
import ForgetPassword from './components/auth/ForgetPassword'
import CreateIgAdvertTask from './pages/advertise/components/CreateIgAdvertTask'
import GenerateEngagementTask from './pages/earn/components/GenerateEngagementTask'
import EarnTask from './pages/earn/components/EarnTask'
import History from './pages/history/History'
import ProtectedRoute from './pages/ProtectedRoute'
// import { jwtDecode } from 'jwt-decode'
// import useAccessToken from './hooks/useAccessToken'
import ResetPassword from './components/auth/ResetPassword'

function App() {
  const { isDarkMode } = useDarkMode()
  // const { removeAccessToken } = useAccessToken()
  // const navigate = useNavigate()

  useEffect(() => {
    // const access_token = JSON.parse(localStorage.getItem('access_token'))?.state
    //   ?.token
    if (isDarkMode) {
      document.body.classList.add('dark')
      document.body.classList.add('text-foreground')
      document.body.classList.add('bg-background')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.remove('text-foreground')
      document.body.classList.remove('bg-background')
    }

    // if (access_token) {
    //   const decodedToken = jwtDecode(access_token)
    //   if (decodedToken.exp * 1000 < new Date().getTime()) {
    //     removeAccessToken(null)
    //     navigate('/login')
    //     // return <Navigate to='/login' />
    //   } else {
    //     navigate('/login')
    //   }
    // }
  }, [isDarkMode])
  return (
    <>
      <Animation>
        <Routes>
          <Route path='/' element={<VerifyEmail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/confirm-otp' element={<ConfirmOtp />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/onboard' element={<OnBoard />} />
          <Route path='/forgot_password' element={<ForgetPassword />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/dashboard' element={<RootLayout />}>
            <Route
              path=''
              element={
                <ProtectedRoute>
                  <Welcome />
                </ProtectedRoute>
              }
            />

            <Route
              path='earn'
              element={
                <ProtectedRoute>
                  <Earn />
                </ProtectedRoute>
              }
            />
            <Route
              path='earn-engage-task'
              element={
                <ProtectedRoute>
                  <GenerateEngagementTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='earn-task'
              element={
                <ProtectedRoute>
                  <EarnTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='advertise'
              element={
                <ProtectedRoute>
                  <Advertise />
                </ProtectedRoute>
              }
            />
            <Route
              path='advertise-history'
              element={
                <ProtectedRoute>
                  {' '}
                  <History />
                </ProtectedRoute>
              }
            />
            <Route
              path='advertise-ig-task'
              element={
                <ProtectedRoute>
                  {' '}
                  <CreateIgAdvertTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='resell'
              element={
                <ProtectedRoute>
                  <Resell />
                </ProtectedRoute>
              }
            />
            <Route
              path='transactions'
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
            <Route
              path='refer-link'
              element={
                <ProtectedRoute>
                  <Referal />
                </ProtectedRoute>
              }
            />
            <Route
              path='support'
              element={
                <ProtectedRoute>
                  <Support />
                </ProtectedRoute>
              }
            />
            <Route
              path='settings'
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* <Login /> */}
      </Animation>
    </>
  )
}

export default App
