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
          </Route>
        </Routes>
        {/* <Login /> */}
      </Animation>
    </>
  )
}

export default App
