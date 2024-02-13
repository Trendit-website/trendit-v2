/* eslint-disable react/prop-types */
import { Modal, ModalContent, Button, Checkbox, Image } from '@nextui-org/react'
import { useState } from 'react'
import modalImage from '../../assets/composition14.svg'
import { AiOutlineClose } from 'react-icons/ai'

export default function AuthModal({ isOpen, onClose }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <>
      <Modal size='md' backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent className='w[20rem] md:w-[28rem] '>
          <div className='w[18rem] md:w-[28rem] border border-fuchsia-400 flex-col justify-start items-center inline-flex'>
            <div
              onClick={onClose}
              className='p-2 bg-fuchsia-400 top-0 absolute z-40 right-0 cursor-pointer rounded-[100px] '
            >
              <AiOutlineClose size={20} color='#fff' />
            </div>

            <Image
              src={modalImage}
              alt='modal image'
              width={419}
              height={424}
            />
            <div className='px-8 py-6 flex-col justify-start items-center gap-6 flex'>
              <div className="w-80 text-center text-black text-[32px] font-semibold font-['Campton'] leading-[26.88px]">
                All Set!
              </div>
              <div className="self-stretch text-center text-zinc-400 text-base font-normal font-['Campton']">
                One more question. Your answer will help us tailor how your
                dashboard will look like.
              </div>
              <div className='self-stretch flex-col justify-start items-center gap-3 flex'>
                <div className='self-stretch px-3 py-2 bg-black rounded justify-start items-center gap-[7px] inline-flex'>
                  <Checkbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    color={isChecked ? 'warning' : 'success'}
                  />
                  <div className="text-center text-white text-sm font-medium font-['Campton']">
                    I came to Advertise
                  </div>
                </div>
                <div className='self-stretch px-3 py-2 bg-gray-200 rounded justify-start items-center gap-[7px] inline-flex'>
                  <Checkbox defaultSelected color='white' />
                  <div className="text-center text-black text-sm font-medium font-['Campton']">
                    I came to Earn
                  </div>
                </div>
              </div>
              <Button className=" w-[18rem] md:w-[20rem] text-center text-white text-[12.83px] font-medium font-['Campton'] px-6 py-6 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex">
                Continue
              </Button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
