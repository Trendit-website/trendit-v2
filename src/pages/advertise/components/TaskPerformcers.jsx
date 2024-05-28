/* eslint-disable react/prop-types */

import { useState } from 'react'
import { useGetTaskPerformers } from '../../../api/advertApi'
import Loader from '../../Loader'
import ViewScreenShotModal from './ViewScreenShotModal'
import { useDisclosure } from '@nextui-org/react'
import { format } from 'date-fns'

export default function TaskPerformcers({
  onAccecpt,
  onReject,
  loading,
  loadingError,
  taskId,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: fetchTaskPreformercers } = useGetTaskPerformers(taskId)
  console.log(fetchTaskPreformercers, ' preview')
  const [selectedScreenshot, setSelectedScreenshot] = useState('')

  const handleViewScreenshot = (screenshotPath) => {
    setSelectedScreenshot(screenshotPath)
    onOpen()
  }

  return (
    <>
      <div className='grid gap-5 w-full'>
        {fetchTaskPreformercers?.length > 0 &&
          fetchTaskPreformercers?.map((fetchTaskPre, index) => (
            <div
              key={index}
              className=' w-full px-8 pt-6 pb-[31px] bg-gray-300 dark:bg-zinc-800 rounded-lg justify-start items-start gap-2 inline-flex'
            >
              <div className='w-[47px]  justify-center items-center inline-flex'>
                <img
                  className='w-[47px]  rounded-[14.95px] border-2 border-fuchsia-600'
                  src={fetchTaskPre?.user?.profile_picture}
                />
              </div>
              <div className='self-stretch justify-start items-start gap-[180px] inline-flex'>
                <div className=' flex-col justify-between items-start inline-flex'>
                  <div className='flex-col justify-start items-start gap-1 flex'>
                    {/* <div className="text-zinc-400 text-[10px] font-normal font-['Manrope']">
                @adbolalizz
              </div> */}
                    <div className=" text-sm font-normal font-['Manrope']">
                      @{fetchTaskPre?.user?.username}
                    </div>
                    <div className="text-neutral-400 text-[10px] font-normal font-['Manrope']">
                      {fetchTaskPre?.date_completed &&
                        format(
                          new Date(fetchTaskPre?.date_completed),
                          'dd-MM-yyyy HH:mm:ss'
                        )}
                    </div>
                  </div>
                  {/* <div className='py-1 flex-col justify-center items-start gap-1 flex'>
              <div className='justify-start items-center gap-0.5 inline-flex'>
                <div className='w-[17px] h-[17px] relative' />
                <div className="text-zinc-400 text-xs font-normal font-['Manrope']">
                  Social Media Username
                </div>
              </div>
              <div className="text-white text-xs font-normal font-['Manrope']">
                Adebola Linda
              </div>
            </div> */}
                  <div className="w[275px] my-2 h-px text-zinc-300 text-xs font-normal font-['Manrope']">
                    Select one of the options below after verifying the task
                  </div>
                  <div className='my-10 justify-start items-start gap-[13px] inline-flex'>
                    <button
                      onClick={onAccecpt}
                      className='w-[100px] px-2 py-2 bg-green-500 rounded-md border border-violet-500/opacity-25 justify-center items-center gap-1 flex'
                    >
                      <div className="text-center text-white text-[10px] font-bold font-['Manrope']">
                        {loading ? <Loader /> : 'ACCEPT'}
                      </div>
                    </button>
                    <button
                      onClick={onReject}
                      className='w-[100px] px-2 py-2 bg-orange-600 rounded-md border border-violet-500/opacity-25 justify-center items-center gap-1 flex'
                    >
                      <div className="text-center text-white text-[10px] font-bold font-['Manrope']">
                        {loadingError ? <Loader /> : 'REJECT'}
                      </div>
                    </button>
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-[5px] inline-flex'>
                  <div className=" text-xs font-normal font-['Manrope']">
                    Screenshot / Proof Of Work
                  </div>
                  <button
                    onClick={() =>
                      handleViewScreenshot(fetchTaskPre?.proof_screenshot_path)
                    }
                    className="text-fuchsia-400 text-xs font-normal font-['Manrope']"
                  >
                    Click to View
                  </button>
                </div>
                <div className='py-1 flex-col justify-center items-start gap-2 inline-flex'>
                  <div className=" text-xs font-normal font-['Manrope']">
                    Status
                  </div>
                  <div className='justify-start items-center gap-0.5 inline-flex'>
                    <div className='w-[17px] h-[17px] relative' />
                    <div
                      className={`${
                        fetchTaskPre?.status === 'complete'
                          ? 'text-green-500'
                          : ''
                      } text-blue-600 uppercase text-xs font-bold font-['Manrope']`}
                    >
                      {fetchTaskPre?.status === 'in_review'
                        ? 'In Review'
                        : fetchTaskPre?.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {isOpen && (
        <ViewScreenShotModal
          isOpen={isOpen}
          onClose={onClose}
          proof_screenshot_path={selectedScreenshot}
        />
      )}
    </>
  )
}
