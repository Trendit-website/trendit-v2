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

import ResetPassword from './components/auth/ResetPassword'
import Payment from './pages/payment/Payment'
import ToastProvider from './providers/ToastProvider'
import CreateIgEngageTask from './pages/advertise/components/CreateIgEngageTask'
import JoinGroupEngageTask from './pages/advertise/components/engageTask/JoinGroupEngageTask'
import LikeEngageTask from './pages/advertise/components/engageTask/LikeEngageTask'
import FollowerEngageTask from './pages/advertise/components/engageTask/FollowerEngageTask'
import FollowerAndLikeEngageTask from './pages/advertise/components/engageTask/FollowerAndLikeEngageTask'
import CommentEngageTask from './pages/advertise/components/engageTask/CommentEngageTask'
import SharePostEngageTask from './pages/advertise/components/engageTask/SharePostEngageTask'

function App() {
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
      document.body.classList.add('text-foreground')
      document.body.classList.add('bg-background')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.remove('text-foreground')
      document.body.classList.remove('bg-background')
    }
  }, [isDarkMode])

  return (
    <>
      <Animation>
        <ToastProvider />
        <Routes>
          <Route path='/' element={<VerifyEmail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/confirm-otp' element={<ConfirmOtp />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/onboard' element={<OnBoard />} />
          <Route path='/forgot_password' element={<ForgetPassword />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <RootLayout />
              </ProtectedRoute>
            }
          >
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
              path='payment'
              element={
                <ProtectedRoute>
                  <Payment />
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
              path='engage-ig-task'
              element={
                <ProtectedRoute>
                  {' '}
                  <CreateIgEngageTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='engage-joinGP-task'
              element={
                <ProtectedRoute>
                  <JoinGroupEngageTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='engage-like-task'
              element={
                <ProtectedRoute>
                  <LikeEngageTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='engage-follower-task'
              element={
                <ProtectedRoute>
                  <FollowerEngageTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='engage-follower&like-task'
              element={
                <ProtectedRoute>
                  <FollowerAndLikeEngageTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='engage-comment-task'
              element={
                <ProtectedRoute>
                  <CommentEngageTask />
                </ProtectedRoute>
              }
            />
            <Route
              path='engage-share-task'
              element={
                <ProtectedRoute>
                  <SharePostEngageTask />
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
            <Route path='*' element={<div>page coming soon</div>} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        {/* <Login /> */}
      </Animation>
    </>
  )
}

export default App
