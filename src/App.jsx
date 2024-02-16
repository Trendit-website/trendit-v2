import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Animation from './utilities/Animation'
import ConfirmOtp from './components/auth/ConfirmOtp'
import Signup from './components/auth/Signup'
import OnBoard from './components/auth/OnBoard'
import Home from './components/layout/center/Home'
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

function App() {
  return (
    <>
      <Animation>
        <Routes>
          <Route path='/' element={<VerifyEmail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/confirm-otp' element={<ConfirmOtp />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/onboard' element={<OnBoard />} />
          <Route path='/home2' element={<Home />} />
          <Route path='/dashboard' element={<RootLayout />}>
            <Route path='' element={<Welcome />} />
            <Route path='earn' element={<Earn />} />
            <Route path='advertise' element={<Advertise />} />
            <Route path='resell' element={<Resell />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='refer-link' element={<Referal />} />
            <Route path='support' element={<Support />} />
            <Route path='settings' element={<Settings />} />
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
