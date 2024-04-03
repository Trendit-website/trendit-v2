import { Button } from '@nextui-org/react'
import Logo from '../Logo'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router'
import { Controller, useForm } from 'react-hook-form'
import { useVerifyEmailOtp, useVerifyEmailResendOtp } from '../../api/auth'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import useSignUpToken from '../../hooks/useSignUpToken'
import useCurrentUser from '../../hooks/useCurrentUser'
import OtpPinInput from './OtpPinInput'

export default function ConfirmOtp() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm()
  const { mutateAsync: verifyUserEmail } = useVerifyEmailOtp()
  const { mutateAsync: resendOtp } = useVerifyEmailResendOtp()
  const navigate = useNavigate()

  // const [otp, setOtp] = useState(['', '', '', '', '', '']) // Array to store OTP digits
  // const otp2 = useRef()
  const { token } = useSignUpToken()
  const { setCurrentUser, userData } = useCurrentUser()

  // const handleOtpChange = (index, value) => {
  //   const updatedOtp = [...otp]
  //   updatedOtp[index] = value
  //   setOtp(updatedOtp)
  //   // If all OTP digits are entered, submit the form
  //   if (updatedOtp.filter((digit) => digit !== '').length === 6) {
  //     otp2.current = updatedOtp
  //     onSubmit()
  //   }
  // }

  const onSubmit = async () => {
    try {
      // const code = otp2.current.join('')
      // const entered_code = parseInt(code)
      const entered_code = parseInt(watch().entered_code)
      const res = await verifyUserEmail({
        data: { entered_code, signup_token: token },
      })
      if (res.data.status) {
        setCurrentUser(res.data.user_data)
        toast.success(res.data.message)
        navigate('/signup')
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
  const handleResendOtp = async () => {
    try {
      console.log(token, 'token')
      const res = await resendOtp({
        data: { signup_token: token },
      })
      if (res.data.status) {
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }

  useEffect(() => {
    if (watch().entered_code?.length === 6) onSubmit()
  }, [watch().entered_code])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=' h-screen md:h-[1024px] relative bg-lighten dark:bg-black overflow-x-clip'>
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
              <div className="text-center p-2 md:hidden  text-black dark:text-white text-[12.83px] font-bold font-['Campton']">
                <Button variant='flat bg-none  '>
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
          <div className='  w-[23rem]  mx-auto my-32 flex-col justify-start items-center gap-6'>
            <div className='self-stretch  flex-col justify-start items-center gap-6 flex'>
              <div className="w-80 text-center text-white text-[32px] font-semibold font-['Campton'] leading-[26.88px]">
                Confirm your email
              </div>
              <div className="w-80 mb-4 text-center text-zinc-400 text-base font-normal font-['Campton']">
                We have sent an email with a code to {userData?.email}, please
                enter it below to create your Trendit account.
              </div>
            </div>
            <div className=' w-[80%] md:w-full mx-auto  flex-col justify-start items-center gap-3.5 flex'>
              <div className='self-stretch justify-center items-center gap-3.5 flex'>
                {/* <Controller
                  control={control}
                  name='entered_code'
                  rules={{
                    required: 'OTP is required',
                    minLength: {
                      value: 6,
                      message: 'OTP should have only 6 characters',
                    },
                  }}
                  render={({ field }) => (
                    <OtpPinInput
                      native
                      length={6}
                      ref={field.ref}
                      value={field.value}
                      onChange={field.onChange}
                      error={errors?.entered_code?.message}
                    />
                  )}
                /> */}
                <Controller
                  control={control}
                  name='entered_code' // Ensure this matches the field name
                  rules={{
                    required: 'OTP is required',
                    minLength: {
                      value: 6,
                      message: 'OTP should have only 6 characters',
                    },
                  }}
                  render={({ field }) => (
                    <OtpPinInput
                      native
                      length={6}
                      ref={field.ref}
                      value={field.value}
                      onChange={field.onChange}
                      error={errors?.entered_code?.message}
                    />
                  )}
                />

                {/* {[...Array(6)].map((_, index) => (
                  <Controller
                    key={index}
                    name={`entered_code${index}`}
                    control={control}
                    rules={{
                      required: 'OTP is required',
                      minLength: {
                        value: 6,
                        message: 'OTP should have only 6 characters',
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        size='sm'
                        placeholder='-'
                        errorMessage={errors?.entered_code?.message}
                        isInvalid={!!errors?.entered_code}
                        required={true}
                        ref={field.ref}
                        className="grow shrink basis-0 text-center rounded-lg w-3 h-3  text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton'] tracking-[10.39px]"
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        maxLength={1}
                        inputMode='numeric'
                      />
                    )}
                  />
                ))} */}
              </div>
              <div className='justify-start items-center inline-flex my-12'>
                <div className="text-center text-zinc-400 text-[12.83px] font-normal font-['Campton']">
                  Didn’t receive a code?
                </div>
                <div className='p-2 justify-center items-center gap-1 flex'>
                  <div
                    onClick={() => {
                      handleResendOtp()
                    }}
                    className="text-center cursor-pointer text-[#FF6DFB] dark:text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                  >
                    Send new code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
