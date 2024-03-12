/* eslint-disable no-irregular-whitespace */
import { Button, Input } from '@nextui-org/react'

import Logo from '../Logo'
import { ChevronRight, EyeIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useResetPassword } from '../../api/auth'
import toast from 'react-hot-toast'
import useResetToken from '../../hooks/useResetToken'
import { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'

export default function ResetPassword() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  const { mutateAsync: handleResetPassword, isPending } = useResetPassword()
  const { token } = useResetToken()

  const onSubmit = async (data) => {
    console.log(token, 'token')
    try {
      const res = await handleResetPassword({
        data: { ...data, reset_token: token },
      })
      console.log(res)
      if (res?.data?.status) {
        toast.success(res.data.message)
        navigate('/login')
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
                  Please check your Trendit email address and enter the code
                  that was sent to help reset your password
                </div>
              </div>
              <div className='self-stretch  flex-col justify-start items-center gap-3 flex'>
                <Controller
                  name='entered_code'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      size='sm'
                      type='number'
                      errorMessage={errors?.entered_code?.message}
                      isInvalid={!!errors?.entered_code}
                      required={true}
                      placeholder='Enter the sent code'
                      className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    />
                  )}
                  rules={{ required: true }}
                />
                <Controller
                  name='new_password'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      size='sm'
                      errorMessage={errors?.new_password?.message}
                      isInvalid={!!errors?.new_password}
                      required={true}
                      placeholder='Enter your new password'
                      className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                      endContent={
                        <button
                          className='focus:outline-none'
                          type='button'
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeIcon className='text-2xl text-default-400 pointer-events-none' />
                          ) : (
                            <FaRegEyeSlash className='text-2xl text-default-400 pointer-events-none' />
                          )}
                        </button>
                      }
                      type={isVisible ? 'text' : 'password'}
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
    </>
  )
}
