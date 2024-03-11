/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import { Modal, ModalContent } from '@nextui-org/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function ConfirmTaskModal({ isOpen, onClose }) {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <Modal
          placement='center'
          size='md'
          backdrop='blur'
          isOpen={isOpen}
          onClose={onClose}
          hideCloseButton={true}
        >
          <ModalContent className='md:w-[30rem] overflow-visible'>
            <div className='p-12 bg-white rounded flex-col justify-center items-center gap-12 inline-flex'>
              <div
                onClick={onClose}
                className='p-2 bg-fuchsia-400 top-[-20px] -right-4 absolute z-40  cursor-pointer rounded-[100px] '
              >
                <AiOutlineClose size={20} color='#fff' />
              </div>
              <div className='flex-col justify-center items-center gap-3 flex'>
                <div className="text-stone-900 text-sm font-bold font-['Campton']">
                  Generate Next Twitter Task?
                </div>
                <div className="w-[253px] text-center text-black text-xs font-normal font-['Campton']">
                  Are you sure you want to generate your next Twitter task now.
                  You have 1 hour to perform this task. Please confirm only if
                  you are ready to perform the task.
                </div>
              </div>
              <div
                onClick={() => navigate(`/dashboard/earn-task`)}
                className='w-[290px] cursor-pointer px-6 py-3.5 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex'
              >
                <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                  Confirm
                </div>
              </div>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}
