/* eslint-disable react/prop-types */
import { ChevronRight } from 'lucide-react'
import { AiTwotoneEdit } from 'react-icons/ai'
import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react'
import Logo from '../Logo'
import { animals } from '../../utilities/data'
import AuthModal from './AuthModal'
import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

export default function OnBoard() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className=' h-[1024px] relative bg-black'>
          <div className='left-0 top-0 absolute'>
            <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-0 top-0 absolute opacity-30 md:opacity-10 bg-violet-500 rounded-full blur-3xl z-10 ' />
            <div className='w-40 h-40 md:w-unit-8xl md:h-unit-8xl left-[13rem] md:left-[942.84px] top-[30rem] md:top-[427.55px] absolute opacity-20 md:opacity-10 bg-fuchsia-600 rounded-full blur-3xl z-10' />
          </div>
          <div className=' w-[20rem] md:w-[23rem] left-[10%] md:left-[40%] top-[189px] absolute flex-col justify-start items-center gap-6 inline-flex'>
            <div className='flex-col justify-start items-center gap-6 flex'>
              <div className="w-80 text-center text-white text-[32px] font-semibold font-['Campton'] leading-[26.88px]">
                Welcome onboard!
              </div>
              <div className="self-stretch text-center text-zinc-400 text-base font-normal font-['Campton']">
                Hi Damola, we are excited to have you onboard! Finish up your
                profile set up.
              </div>
              <div className='flex-col justify-center items-center gap-2 flex'>
                <div className='w-[66px] h-[66px] relative'>
                  <div className='w-[66px] h-[66px] left-0 top-0 absolute bg-fuchsia-600 bg-opacity-40 rounded-[10px]' />
                  <div className='w-8 h-8  top-[21px] absolute cursor-pointer'>
                    <AiTwotoneEdit className='text-white w-16' size={40} />
                  </div>
                </div>
                <div className="text-center text-zinc-400 text-[10px] font-normal font-['Campton']">
                  Upload photo
                </div>
              </div>
            </div>
            <div className='self-stretch  flex-col justify-start items-center gap-3.5 flex'>
              <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                <label className="text-center px-2 text-white text-[12.83px] font-medium font-['Campton']">
                  Select Gender
                </label>
                <Select
                  className="grow shrink basis-0 bg-white rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                  placeholder='Select gender'
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className='self-stretch flex-col justify-center items-start gap-3.5 inline-flex'>
                <label className="text-center px-2 text-white text-[12.83px] font-medium font-['Campton']">
                  Birthday
                </label>
                <div className=' flex gap-4'>
                  <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                    <Input
                      placeholder='Day'
                      className="grow bg-white rounded shrink basis-0 text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    />
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                    <Input
                      placeholder='Mon'
                      className="grow bg-white rounded shrink basis-0 text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    />
                  </div>
                  <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                    <Input
                      placeholder='Year'
                      className="grow bg-white rounded shrink basis-0 text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    />
                  </div>
                </div>
              </div>
              <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                <label className="text-center px-2 text-white text-[12.83px] font-medium font-['Campton']">
                  Select Country
                </label>
                <Select
                  className="grow shrink basis-0 bg-white rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                  placeholder='Select  country'
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className='self-stretch justify-center items-start gap-3.5 inline-flex'>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                  <label className="text-center px-2 text-white text-[12.83px] font-medium font-['Campton']">
                    State
                  </label>
                  <Select
                    className="grow shrink basis-0 bg-white rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    placeholder='Select  state'
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                  <labl className="text-center px-2  text-white text-[12.83px] font-medium font-['Campton']">
                    LGA
                  </labl>

                  <Select
                    className="grow shrink basis-0 bg-white rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                    placeholder='Select lga'
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <Button
                onClick={onOpen}
                className="w-[290px] px-6 py-6 text-center text-white text-[12.83px] font-medium font-['Campton'] bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex"
              >
                Continue
              </Button>
              <div className='justify-start items-center inline-flex'>
                <div className="text-center text-zinc-400 text-[12.83px] font-normal font-['Campton']">
                  I will do this later
                </div>

                <div
                  onClick={() => {
                    navigate(`/dashboard`)
                  }}
                  className="text-center cursor-pointer p-2 text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                >
                  Skip
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full h-[80px] md:h-[116px] md:px-24 left-0 top-0 absolute justify-between items-end inline-flex'>
            <div className='w-[132.27px] h-[51.91px] relative'>
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
      <AuthModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
