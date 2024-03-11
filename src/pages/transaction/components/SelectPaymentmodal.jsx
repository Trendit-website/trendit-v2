/* eslint-disable react/prop-types */
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react'
import { AiOutlineClose } from 'react-icons/ai'
import CryptoTransfermodal from './CryptoTransfermodal'
import BankTransfermodal from './BankTransfermodal'
import { useState } from 'react'

export default function SelectPaymentmodal({ isOpen, onClose }) {
//   const {
//     isOpen: isBankTransferModalOpen,
//     onOpen: openBankTransferModal,
//     onClose: closeBankTransferModal,
//   } = useDisclosure()

//   const {
//     isOpen: isCryptoModalOpen,
//     onOpen: openCryptoModal,
//     onClose: closeCryptoModal,
//   } = useDisclosure()

  const [activeModal, setActiveModal] = useState(null)

  const handleOpenBankTransfer = () => {
    // closeCryptoModal()
    // openBankTransferModal()
    setActiveModal('bankTransfer')
  }

  const handleOpenCryptoModal = () => {
    // closeBankTransferModal()
    // openCryptoModal()
    setActiveModal('crypto')
  }
  const handleCloseModal = () => {
    setActiveModal(null)
  }

  return (
    <>
      <Modal
        placement='center'
        size='md'
        backdrop='blur'
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent className=' md:w-[28rem] '>
          <div className='h-[412px] p-12 bg-white rounded flex-col justify-center items-center gap-12 inline-flex'>
            <div
              onClick={onClose}
              className='p-2 bg-fuchsia-400 top-0 absolute z-40 right-0 cursor-pointer rounded-[100px] '
            >
              <AiOutlineClose size={20} color='#fff' />
            </div>
            <div className='flex-col justify-center items-center gap-3 flex'>
              <div className="text-stone-900 text-sm font-bold font-['Campton']">
                How would you like to pay?
              </div>
              <div className="w-[253px] text-center text-black text-xs font-normal font-['Campton']">
                Are you sure you want to generate your next Twitter task now.
                You have 1 hour to perform this task. Please confirm only if you
                are ready to perform the task.
              </div>
            </div>
            <div
              //   onClick={openBankTransferModal}
              onClick={handleOpenBankTransfer}
              className=' cursor-pointer flex-col justify-start items-start gap-3 flex'
            >
              <div className='self-stretch p-6 bg-zinc-400 bg-opacity-30 rounded-lg justify-start items-start gap-2 inline-flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M8 9V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V9M8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V12.2C19 11.0799 19 10.5198 18.782 10.092C18.5903 9.71569 18.2843 9.40973 17.908 9.21799C17.4802 9 16.9201 9 15.8 9H8.2C7.0799 9 6.51984 9 6.09202 9.21799C5.71569 9.40973 5.40973 9.71569 5.21799 10.092C5 10.5198 5 11.0799 5 12.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21Z'
                    stroke='#FF6DFB'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
                <div className='grow shrink basis-0 h-11 justify-start items-start gap-2 flex'>
                  <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                    <div className="self-stretch text-stone-900 text-sm font-medium font-['Campton']">
                      Bank Transfer
                    </div>
                    <div className="self-stretch text-stone-900 text-xs font-normal font-['Campton']">
                      Get real people to post your ads on their social media
                      account.{' '}
                    </div>
                  </div>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M5 12H18M13 6L18.2929 11.2929C18.6834 11.6834 18.6834 12.3166 18.2929 12.7071L13 18'
                    stroke='#FF6DFB'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <div className='self-stretch p-6 bg-zinc-400 bg-opacity-30 rounded-lg justify-start items-start gap-2 inline-flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M8.99984 6.99996V17M6.99984 6.99996H13.4998C14.8805 6.99996 15.9998 8.11925 15.9998 9.49996C15.9998 10.8807 14.8805 12 13.4998 12H8.99984H14.4998C15.8805 12 16.9998 13.1192 16.9998 14.5C16.9998 15.8807 15.8805 17 14.4998 17H6.99984M12 7V5M12 19V17M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z'
                    stroke='#FF6DFB'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
                <div
                  //   onClick={openCryptoModal}
                  onClick={handleOpenCryptoModal}
                  className='grow cursor-pointer shrink basis-0 h-11 justify-start items-start gap-2 flex'
                >
                  <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                    <div className="self-stretch text-stone-900 text-sm font-medium font-['Campton']">
                      Pay with Crypto
                    </div>
                    <div className="self-stretch text-stone-900 text-xs font-normal font-['Campton']">
                      Get real people to post your ads on their social media
                      account.{' '}
                    </div>
                  </div>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M5 12H18M13 6L18.2929 11.2929C18.6834 11.6834 18.6834 12.3166 18.2929 12.7071L13 18'
                    stroke='#FF6DFB'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>

      {/* {isBankTransferModalOpen && (
        <BankTransfermodal
          isOpen={isBankTransferModalOpen}
          onClose={closeBankTransferModal}
        />
      )}
      {isCryptoModalOpen && (
        <CryptoTransfermodal
          isOpen={isCryptoModalOpen}
          onClose={closeCryptoModal}
        />
      )} */}

      {activeModal === 'bankTransfer' && (
        <BankTransfermodal isOpen={true} onClose={handleCloseModal} />
      )}
      {activeModal === 'crypto' && (
        <CryptoTransfermodal isOpen={true} onClose={handleCloseModal} />
      )}
    </>
  )
}
