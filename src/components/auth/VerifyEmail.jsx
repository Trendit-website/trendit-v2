/* eslint-disable no-irregular-whitespace */
import { Button, Input } from '@nextui-org/react'

import Logo from '../Logo'
import { ChevronRight } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useGoogleSignu, useVerifyEmail } from '../../api/auth'
import toast from 'react-hot-toast'
import useSignUpToken from '../../hooks/useSignUpToken'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useAccessToken from '../../hooks/useAccessToken'

export default function VerifyEmail() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm()
  const { mutateAsync: verifyUserEmail, isPending } = useVerifyEmail()
  const { mutateAsync: handleGoogleLogin, isPending: loadingAuth } =
    useGoogleSignu()
  const [searchParams] = useSearchParams()
  const { setAccessToken } = useAccessToken()

  const navigate = useNavigate()

  const { setSignUpToken } = useSignUpToken()

  const onSubmit = async (data) => {
    try {
      const res = await verifyUserEmail({ data })
      if (res.data.status) {
        setSignUpToken(res.data.signup_token)
        toast.success(res.data.message)
        navigate('/confirm-otp')
        reset()
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
  const handleGgLogin = async () => {
    try {
      const res = await handleGoogleLogin()
      console.log(res?.data)
      if (res?.data?.status) {
        window.open(res?.data?.authorization_url)
        setSignUpToken(res?.data?.access_token)
        toast.success(res.data.message)
        // navigate('/dashboard')
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }

  const access_token = searchParams.get('access_token')
  const access_error = searchParams.get('error')

  useEffect(() => {
    // Retrieve the trxref from the URL
    if (access_error) {
      toast.error(access_error, {
        duration: 20000,
      })
    }
    if (access_token) {
      try {
        // Use the retrieved trxref to call verifyPayment
        setAccessToken(access_token)
        navigate('/dashboard')

        // You can perform further actions after successful verification
      } catch (error) {
        console.error({ error })
        // Handle error if verification fails
      }
    } else {
      console.error('access_token not found in URL.')
      // Handle case when access_token is not found in the URL
    }
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='  md:h-[1024px] py-6 relative bg-[#FFFFFF] dark:bg-black'>
          <div className='left-0 top-0 absolute'>
            <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-0 top-0 absolute opacity-30 md:opacity-10 bg-violet-500 rounded-full blur-3xl z-10 ' />
            <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-[13rem] md:left-[942.84px] top-[30rem] md:top-[427.55px] absolute opacity-20 md:opacity-10 bg-fuchsia-600 rounded-full blur-3xl z-10' />
          </div>
          <div className='w-[96%]  md:w-[90%] mx-auto max-h-[6rem] flex justify-between items-center'>
            <Logo />

            <div className="text-center p-2 hidden  md:flex text-black dark:text-white text-[12.83px] font-bold font-['Campton']">
              <Button onClick={() => navigate(-1)} variant='flat bg-none '>
                Go Back
              </Button>
            </div>
            <div className="text-center p-2 md:hidden  text-black dark:text-white text-[12.83px] font-bold font-['Campton']">
              <Button variant='flat bg-none  '>
                <ChevronRight />
              </Button>
            </div>
          </div>

          <div className=' w-[20rem] my-8 md:w-[23rem] mx-auto  flex-col  items-center gap-6 '>
            <div className='self-stretch flex-col justify-start items-center gap-3 flex'>
              <div className="w-80 text-center text-black dark:text-white text-[40px] md:text-[64px] font-semibold font-['Campton'] leading-10 md:leading-[53.76px]">
                Welcome to Trendit
              </div>
              <div className="w-[18rem] py-2 text-center  text-black dark:text-zinc-400 text-base font-normal font-['Campton']">
                Earn money by connecting businesses to their potential
                customers.
              </div>
            </div>
            <div className='self-stretch  flex-col justify-start items-center gap-3 flex'>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size='sm'
                    placeholder='Enter a valid email'
                    className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    errorMessage={errors?.email?.message}
                    isInvalid={!!errors?.email}
                    required={true}
                    classNames={{
                      inputWrapper: [
                        'border-2 border-transparent',
                        'focus-within:!border-fuchsia-600  ',
                        '!cursor-text',
                      ],
                    }}
                  />
                )}
                rules={{ required: true }}
              />
              <Controller
                name='referrer_code'
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    size='sm'
                    classNames={{
                      inputWrapper: [
                        'border-2 border-transparent',
                        'focus-within:!border-fuchsia-600  ',
                        '!cursor-text',
                      ],
                    }}
                    placeholder='Referral code/username (Optional)'
                    className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                  />
                )}
              />

              <Button
                type='submit'
                className="w-[290px] px-6 py-3.5 bg-fuchsia-600 rounded-[100px] text-center text-white text-[12.83px] font-medium font-['Campton']"
              >
                {isPending ? (
                  <svg
                    className='animate-spin h-5 w-5 text-current'
                    fill='none'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    />
                    <path
                      className='opacity-75'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      fill='currentColor'
                    />
                  </svg>
                ) : (
                  'Continue'
                )}
              </Button>
            </div>
            <div className='self-stretch  flex-col justify-start items-center gap-2 flex'>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='41'
                  height='2'
                  viewBox='0 0 41 2'
                  fill='none'
                >
                  <path
                    d='M0.5 1H41'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='0.5'
                  />
                </svg>
                <div className="text-center py-6 text-[#B1B1B1] dark:text-zinc-400 text-xs font-normal font-['Campton'] tracking-wide">
                  OR SIGN UP WITH
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='41'
                  height='2'
                  viewBox='0 0 41 2'
                  fill='none'
                >
                  <path
                    d='M0 1H40.5'
                    stroke='white'
                    strokeOpacity='0.2'
                    strokeWidth='0.5'
                  />
                </svg>
              </div>
              <div className='justify-center items-start gap-1.5 inline-flex'>
                <Button
                  onClick={handleGgLogin}
                  isDisabled={loadingAuth}
                  className="p-2 bg-[#B0B0B0] rounded-none dark:bg-white text-center  text-black dark:text-zinc-400 text-[12.83px] font-bold font-['Campton'] bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex"
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                  >
                    <path
                      d='M18.6713 8.36792H18V8.33334H10.5V11.6667H15.2096C14.5225 13.6071 12.6763 15 10.5 15C7.73877 15 5.50002 12.7613 5.50002 10C5.50002 7.23875 7.73877 5 10.5 5C11.7746 5 12.9342 5.48084 13.8171 6.26625L16.1742 3.90917C14.6858 2.52209 12.695 1.66667 10.5 1.66667C5.89794 1.66667 2.16669 5.39792 2.16669 10C2.16669 14.6021 5.89794 18.3333 10.5 18.3333C15.1021 18.3333 18.8333 14.6021 18.8333 10C18.8333 9.44125 18.7758 8.89584 18.6713 8.36792Z'
                      fill='#FFC107'
                    />
                    <path
                      d='M3.1275 6.12126L5.86542 8.12917C6.60625 6.29501 8.40042 5.00001 10.5 5.00001C11.7746 5.00001 12.9342 5.48084 13.8171 6.26626L16.1742 3.90917C14.6858 2.52209 12.695 1.66667 10.5 1.66667C7.29917 1.66667 4.52334 3.47376 3.1275 6.12126Z'
                      fill='#FF3D00'
                    />
                    <path
                      d='M10.5 18.3333C12.6525 18.3333 14.6083 17.5096 16.0871 16.17L13.5079 13.9875C12.6431 14.6452 11.5864 15.0009 10.5 15C8.33249 15 6.49207 13.6179 5.79874 11.6892L3.08124 13.7829C4.4604 16.4817 7.26124 18.3333 10.5 18.3333Z'
                      fill='#4CAF50'
                    />
                    <path
                      d='M18.6712 8.36791H18V8.33333H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.9879L13.5079 13.9871L16.0871 16.1696C15.9046 16.3354 18.8333 14.1667 18.8333 10C18.8333 9.44125 18.7758 8.89583 18.6712 8.36791Z'
                      fill='#1976D2'
                    />
                  </svg>
                  {loadingAuth ? (
                    <svg
                      className='animate-spin h-5 w-5 text-current'
                      fill='none'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      />
                      <path
                        className='opacity-75'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        fill='currentColor'
                      />
                    </svg>
                  ) : (
                    'Google'
                  )}
                </Button>
                <Button className="p-2 rounded-none text-center bg-[#B0B0B0] dark:bg-white bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex  text-black dark:text-zinc-400 text-[12.83px] font-bold font-['Campton']">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                  >
                    <path
                      d='M20.5 10C20.5 4.47719 16.0228 0 10.5 0C4.97719 0 0.5 4.47719 0.5 10C0.5 14.9912 4.15687 19.1284 8.9375 19.8785V12.8906H6.39844V10H8.9375V7.79687C8.9375 5.29062 10.4305 3.90625 12.7147 3.90625C13.8088 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6922C12.4499 6.5625 12.0625 7.33336 12.0625 8.12422V10H14.8359L14.3926 12.8906H12.0625V19.8785C16.8431 19.1284 20.5 14.9913 20.5 10Z'
                      fill='#1877F2'
                    />
                    <path
                      d='M14.3926 12.8906L14.8359 10H12.0625V8.12422C12.0625 7.33328 12.4499 6.5625 13.6922 6.5625H14.9531V4.10156C14.9531 4.10156 13.8088 3.90625 12.7146 3.90625C10.4305 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C9.45439 19.9595 9.9768 20.0001 10.5 20C11.0232 20.0002 11.5456 19.9595 12.0625 19.8785V12.8906H14.3926Z'
                      fill='white'
                    />
                  </svg>
                  Facebook
                </Button>
                <Button className="p-2 rounded-none text-center bg-[#B0B0B0] dark:bg-white bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex  text-black dark:text-zinc-400 text-[12.83px] font-bold font-['Campton']">
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='20'
                    viewBox='0 0 18 20'
                    fill='none'
                  >
                    <path
                      d='M13.0847 7.20142C14.3729 8.12177 15.9509 8.66328 17.6553 8.66328V5.38535C17.3327 5.38542 17.011 5.35177 16.6954 5.28494V7.86515C14.9912 7.86515 13.4134 7.3237 12.1249 6.40342V13.0928C12.1249 16.4392 9.41073 19.1518 6.06287 19.1518C4.8137 19.1518 3.65259 18.7743 2.68811 18.1269C3.78894 19.252 5.32411 19.9498 7.02246 19.9498C10.3706 19.9498 13.0849 17.2373 13.0849 13.8907V7.20142H13.0847ZM14.2689 3.89439C13.6105 3.17556 13.1782 2.24659 13.0847 1.21956V0.797974H12.1751C12.4041 2.10328 13.1851 3.21846 14.2689 3.89439ZM4.80563 15.5591C4.43783 15.0771 4.23901 14.4874 4.2399 13.8811C4.2399 12.3507 5.48135 11.1097 7.01301 11.1097C7.2984 11.1096 7.58212 11.1534 7.85418 11.2396V7.88832C7.53625 7.8448 7.21542 7.82625 6.89473 7.83308V10.4415C6.62254 10.3552 6.33868 10.3114 6.05314 10.3117C4.52156 10.3117 3.28018 11.5525 3.28018 13.0832C3.28018 14.1656 3.90066 15.1026 4.80563 15.5591Z'
                      fill='#FF004F'
                    />
                    <path
                      d='M12.1249 6.40335C13.4134 7.32363 14.9911 7.86508 16.6954 7.86508V5.28487C15.7441 5.08232 14.9019 4.58549 14.2687 3.89439C13.1849 3.21839 12.4041 2.10322 12.1751 0.797974H9.78591V13.8906C9.78047 15.4169 8.54115 16.6528 7.01281 16.6528C6.11226 16.6528 5.31212 16.2238 4.80543 15.559C3.9006 15.1026 3.28005 14.1655 3.28005 13.0833C3.28005 11.5527 4.52143 10.3118 6.05302 10.3118C6.34647 10.3118 6.62929 10.3574 6.8946 10.4416V7.83315C3.6055 7.90108 0.960327 10.5871 0.960327 13.8907C0.960327 15.5398 1.61902 17.0347 2.68812 18.1271C3.6526 18.7743 4.81364 19.1519 6.06288 19.1519C9.41081 19.1519 12.1249 16.4391 12.1249 13.0928L12.1249 6.40335Z'
                      fill='black'
                    />
                    <path
                      d='M16.6954 5.28483V4.58731C15.8376 4.58861 14.9967 4.34849 14.2688 3.89441C14.9131 4.59939 15.7615 5.08554 16.6954 5.28497M12.1751 0.797931C12.1533 0.673214 12.1365 0.547663 12.1249 0.421586V0H8.82599V13.0928C8.82075 14.619 7.58144 15.8548 6.05302 15.8548C5.61973 15.8555 5.19236 15.7542 4.80544 15.5592C5.31213 16.2238 6.11227 16.6528 7.01282 16.6528C8.54109 16.6528 9.78054 15.417 9.78592 13.8907V0.798L12.1751 0.797931ZM6.89482 7.8331V7.09041C6.61916 7.05273 6.34125 7.03389 6.06302 7.034C2.71475 7.034 0.000610352 9.74669 0.000610352 13.0928C0.000610352 15.1906 1.0673 17.0394 2.68827 18.127C1.61916 17.0347 0.960472 15.5397 0.960472 13.8906C0.960472 10.5872 3.60558 7.90103 6.89482 7.8331Z'
                      fill='#00F2EA'
                    />
                  </svg>
                  Titkok
                </Button>
              </div>
            </div>
          </div>

          <div className=' w-[18rem] flex justify-center mx-auto  items-center mt-24'>
            <div className="text-center text-zinc-400 text-[12.83px] font-normal font-['Campton']">
              Already have an account?
            </div>
            <div className='p-2 justify-center items-center gap-1 flex'>
              <div
                onClick={() => {
                  navigate('/login')
                }}
                className="text-center cursor-pointer text-[#FF6DFB] dark:text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
              >
                Sign in
              </div>
            </div>
          </div>
          <div className='w-[24rem] mx-auto my-4'>
            <div className='w-full h-0.5 bg-gradient-to-r  from-[#fff]  dark:from-[#000] !via-[#FF6DFB] to-[#fff] dark:to-[#000] '></div>
            <div className=' flex p-2 bordert border[#CB29BE]  justify-center items-center'>
              <div className="text-center text-zinc-400 text-[12.83px] font-normal font-['Campton']">
                By signing up, you agree to our
              </div>
              <div className='p-2 justify-center items-center gap-1 flex py-3'>
                <span className="text-zinc-400 text-[12.83px] font-normal font-['Campton']">
                  {' '}
                </span>
                <span className="text-black dark:text-white text-[12.83px] font-bold font-['Campton']">
                  Terms and Privacy Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
