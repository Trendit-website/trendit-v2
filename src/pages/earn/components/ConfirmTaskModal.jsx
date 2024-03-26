/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import { Button, Modal, ModalContent } from '@nextui-org/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useGenerateTask } from '../../../api/earnApi'
import toast from 'react-hot-toast'

export default function ConfirmTaskModal({
  isOpen,
  onClose,
  task_type,
  platform,
}) {
  const navigate = useNavigate()
  const { mutateAsync: generateTask, isPending } = useGenerateTask()

  const handleSubmit = async () => {
    console.log(task_type, platform, 'ggg')
    try {
      const res = await generateTask({
        task_type,
        platform,
      })
      console.log(res, 'generateTask')
      if (res.data.status) {
        toast.success(res.data.message)
        onClose()
        navigate(`/dashboard/earn-task`)
      }
      onClose()
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
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
              <Button
                onClick={handleSubmit}
                disabled={isPending}
                className='w-[290px] cursor-pointer px-6 py-4.5 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex'
              >
                <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                  {isPending ? 'Generating...' : 'Confirm'}
                </div>
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}
