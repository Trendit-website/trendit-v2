/* eslint-disable react/prop-types */
import { Modal, ModalContent, Button } from '@nextui-org/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useLogoutUser } from '../../api/auth'
import { useNavigate } from 'react-router-dom'
import useAccessToken from '../../hooks/useAccessToken'
import toast from 'react-hot-toast'

export default function DeleteAccountModal({ isOpen, onClose }) {
  const { mutateAsync: logout } = useLogoutUser()
  const navigate = useNavigate()
  const { removeAccessToken, token } = useAccessToken()

  const handleDelAcc = async () => {
    try {
      const res = await logout({ access_token: token })
      if (res.data.status) {
        removeAccessToken(null)
        toast.success(res.data.message)
        navigate('/signup')
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
  return (
    <>
      <Modal
        placement='center'
        size='md'
        backdrop='blur'
        isOpen={isOpen}
        onClose={onClose}
        className='rounded-none'
      >
        <ModalContent className='w[20rem] md:w-[28rem] '>
          <div className='w[483px] h-[274px] p-12 bg-white rounded flex-col justify-center items-center gap-6 inline-flex'>
            <div
              onClick={onClose}
              className='p-2 bg-fuchsia-400 -top-2 absolute z-40 right-0 cursor-pointer rounded-[100px] '
            >
              <AiOutlineClose size={20} color='#fff' />
            </div>
            <div className='w-12 h-12 relative' />
            <div className='flex-col justify-center items-center gap-3 flex'>
              <div className="text-stone-900 text-2xl font-bold font-['Campton']">
                Delete Account
              </div>
              <div className="w-[253px] text-center text-black text-xs font-normal font-['Campton']">
                Are you sure you want to delete your account,? By pressing this
                button you no longer have an account on Trendit.
              </div>
            </div>
            <Button
              onClick={() => {
                handleDelAcc()
              }}
              className='w-[290px] px-6 py-6 bg-[#FF3D00] rounded-[100px] justify-center items-center gap-2 inline-flex'
            >
              <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                Continue
              </div>
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
