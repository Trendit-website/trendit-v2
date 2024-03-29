/* eslint-disable no-irregular-whitespace */
import { Button, Input, useDisclosure } from '@nextui-org/react'

import Logo from '../Logo'
import { ChevronRight } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useForgetPassword } from '../../api/auth'
import toast from 'react-hot-toast'
import ConfirmPasswordResetModal from './ConfirmPasswordResetModal'
import useResetToken from '../../hooks/useResetToken'

export default function ForgetPassword() {
  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const { mutateAsync: handleLogin, isPending } = useForgetPassword()
  const { setResetToken } = useResetToken()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = async (data) => {
    try {
      const res = await handleLogin({
        data,
      })
      console.log(res)
      if (res?.data?.status) {
        console.log(res?.data?.reset_token, 'reset token')
        setResetToken(res?.data?.reset_token)
        toast.success(res.data.message)
        onOpen()
        setTimeout(() => {
          navigate('/reset_password')
        }, 3000)
      }
    } catch (error) {
      toast.error(error.response?.message ?? error.message)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='  md:h-[1024px] py-6 relative bg-lighten dark:bg-black'>
            <div className='left-0 top-0 absolute'>
              <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-0 top-0 absolute opacity-30 md:opacity-10 bg-violet-500 rounded-full blur-3xl z-10 ' />
              <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-[13rem] md:left-[942.84px] top-[30rem] md:top-[427.55px] absolute opacity-20 md:opacity-10 bg-fuchsia-600 rounded-full blur-3xl z-10' />
            </div>
            <div className='w-[96%]  md:w-[90%] mx-auto max-h-[6rem] flex justify-between items-center'>
              <Logo />

              <div className="text-center p-2 hidden  md:flex text-black dark:text-white text-[12.83px] font-bold font-['Campton']">
                <Button onClick={() => navigate(-1)} variant='flat bg-none'>
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
              <div className='self-stretch my-2 flex-col justify-start items-center gap-3 flex'>
                <div className="w-full text-center text-white text-[64px] font-semibold font-['Campton'] leading-[53.76px]">
                  Reset Your Password
                </div>
                <div className="w-80 text-center text-zinc-400 text-base font-normal font-['Campton']">
                  Please enter your Trendit email address,, as instructions
                  would be sent to help reset tour password
                </div>
              </div>
              <div className='self-stretch  flex-col justify-start items-center gap-3 flex'>
                <Controller
                  name='email_username'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      size='sm'
                      type='email'
                      errorMessage={errors?.email_username?.message}
                      isInvalid={!!errors?.email_username}
                      required={true}
                      placeholder='Enter a valid email'
                      className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    />
                  )}
                  rules={{ required: true }}
                />

                <Button
                  type='submit'
                  className="w-[290px] px-6 py-3.5 mt-4 bg-fuchsia-600 rounded-[100px] text-center text-white text-[12.83px] font-medium font-['Campton']"
                >
                  {isPending ? 'Please wait....' : 'Continue'}
                </Button>
              </div>
              <div className='self-stretch mt-16 flex-col justify-start items-center gap-2 flex'>
                <div
                  onClick={() => navigate('/')}
                  className="text-center cursor-pointer py-6 text-[#CB29BE] text-xs font-normal font-['Campton'] tracking-wide"
                >
                  Back to Home
                </div>
              </div>
            </div>

            <div className='w-[24rem] mx-auto mt-16'>
              <div className='w-full h-0.5 bg-gradient-to-r from-[#fff]  dark:from-[#000] !via-[#FF6DFB] to-[#fff] dark:to-[#000]'></div>
            </div>
          </div>
        </form>
      </div>

      <ConfirmPasswordResetModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
