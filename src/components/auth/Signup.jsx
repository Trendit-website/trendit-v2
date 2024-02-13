import { Button, Input } from '@nextui-org/react'
import Logo from '../Logo'
import { ChevronRight, EyeIcon } from 'lucide-react'
import { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'

export default function Signup() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <div>
      <div className=' h-screen md:h-[1024px]  relative bg-black'>
        <div className='left-0 top-0 absolute'>
          <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-0 top-0 absolute opacity-30 md:opacity-10 bg-violet-500 rounded-full blur-3xl z-10 ' />
          <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-[13rem] md:left-[942.84px] top-[30rem] md:top-[427.55px] absolute opacity-20 md:opacity-10 bg-fuchsia-600 rounded-full blur-3xl z-10' />
        </div>
        <div className=' mx-auto w-[20rem] md:w-[23rem] right-[10%] md:right-[38%] top-[200px] absolute  flex-col justify-start items-center gap-6 inlineflex'>
          <div className='self-stretch h-[89px] flex-col justify-start items-center gap-6 flex'>
            <div className="w-80 text-center text-white text-[32px] font-semibold font-['Campton'] leading-[26.88px]">
              Tell us about you
            </div>
            <div className="w-[252px] text-center text-zinc-400 text-base font-normal font-['Campton']">
              We need to know a few things to set up your account.
            </div>
          </div>
          <div className='self-stretch  flex-col justify-start items-center gap-3.5 flex'>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
              <div className="text-center px-2 text-white text-[12.83px] font-medium font-['Campton']">
                Full Name
              </div>
              <div className='flex gap-2'>
                <Input
                  placeholder='First Name'
                  className="grow shrink basis-0 text-stone-900 bg-white rounded text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                />
                <Input
                  placeholder='Last Name'
                  className="grow shrink basis-0 text-stone-900 bg-white rounded text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                />
              </div>
            </div>
            <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
              <label className="text-center px-2 text-white text-[12.83px] font-medium font-['Campton']">
                Username
              </label>

              <Input
                placeholder='Enter a username'
                className="grow shrink basis-0 text-stone-900 bg-white rounded text-opacity-50 text-[12.83px] font-normal font-['Campton']"
              />
            </div>
            <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
              <label className="text-center px-2 inline-flex text-white text-[12.83px] font-medium font-['Campton']">
                Create a password
              </label>

              <Input
                placeholder='Enter a password'
                className="grow shrink basis-0  bg-white rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
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

              <p className="text-center text-zinc-400 text-[10px] font-normal font-['Campton']">
                (Min. 8 characters with a letter and a number)
              </p>
            </div>
            <Button
              onClick={() => {
                window.location.href = '/onboard'
              }}
              className="w-[290px] text-center text-white text-[12.83px] font-medium font-['Campton'] px-6 py-5 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex"
            >
              Continue
            </Button>
          </div>
        </div>
        <div className=' w-[100%] h-[80px] md:h-[116px] md:px-24 justify-between items-end inline-flex'>
          <div className='w-[132.27px] h-[51.91px] ml-4 md:ml-0 '>
            <Logo />
          </div>
          <div className='p-2 justify-center items-center gap-1 flex'>
            <div className="text-center p-2 hidden  md:flex text-white text-[12.83px] font-bold font-['Campton']">
              <Button variant='flat bg-none '>Go Back</Button>
            </div>
            <div className="text-center p-2 md:hidden  text-white text-[12.83px] font-bold font-['Campton']">
              <Button variant='flat bg-none  '>
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
