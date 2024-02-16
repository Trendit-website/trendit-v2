/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='self-stretch w-full flex-col p-3  bg-white bg-opacity-10 border border-stone-900 justify-start gap-6 inline-flex'>
        <div
          onClick={toggleAccordion}
          className='flex gap-2 cursor-pointer items-center '
        >
          {isOpen ? (
            <FaMinus
              //   onClick={toggleAccordion}
              className='text-[#FFCFFD] cursor-pointer '
            />
          ) : (
            <FaPlus
              //   onClick={toggleAccordion}
              className='text-[#FFCFFD] cursor-pointer '
            />
          )}
          <div className="grow shrink basis-0 text-white text-[12.83px] font-medium font-['Campton']">
            How can i make money on Trendit?
          </div>
        </div>

        {isOpen && (
          <div className='bgswhite p-4 '>
            {/* <div className='text-gray-700'>{answer}</div> */}
            <div className='text-white'>
              How can i make money on Trendit? How can i make money on Trendit?
              How can i make money on Trendit? How can i make money on Trendit?
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FaqCard
