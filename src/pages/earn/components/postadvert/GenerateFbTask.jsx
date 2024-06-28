/* eslint-disable no-irregular-whitespace */

import { useNavigate } from 'react-router-dom'
import frameImageLight from '../../../../assets/engageIcon237873.svg'
import frameImageDark from '../../../../assets/FrameHeaderDark.svg'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs, useDisclosure } from '@nextui-org/react'
import PostAdvertTasksCard from '../../PostAdvertTasksCard'
import IgGeneratedTask from '.././IgGeneratedTask'
import ConfirmTaskModal from '.././ConfirmTaskModal'
import { usePerformTask, useGetAdvertTask } from '../../../../api/earnApi'
import { useDarkMode } from 'usehooks-ts'
import { useGetProfile } from '../../../../api/profileApis'
import SocialLinkModal from '../../../components/SocialLinkModal'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'

export default function GenerateFbTask() {
  const [selected, setSelected] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenVerify,
    onOpen: onOpenVerify,
    onClose: onCloseVerify,
  } = useDisclosure()
  const { data: fetchTask } = usePerformTask(selected)
  const { data: advertTask} = useGetAdvertTask('Facebook')
  const { isDarkMode } = useDarkMode()
  const frameImage = isDarkMode ? frameImageDark : frameImageLight
  const navigate = useNavigate()
  const { data: profileDeatils } = useGetProfile()
  const [active, setActive] = useState()
  const getSocial = () => {
    for (const item of profileDeatils?.social_profiles) {
      item?.platform === 'facebook' ? setActive(item)
      : ''     
    }
  }
  useEffect(() => {
    getSocial()
  }, [])
  const queryClient = useQueryClient()

  const handOpenSocialModal = () => {
    if (active?.status === 'pending') {
      toast.success('Verification pending')
    } else if (
      active?.status === 'rejected' ||
      active?.status === 'idle' ||
      !active?.status
    ) {
      onOpenVerify()
    } else {
      onOpenVerify()
    }
    queryClient.invalidateQueries({ queryKey: ['get_profile'] })
  }

  return (
    <>
      <div>
        <div className='w-full min-h-screen p-3 flex-col justify-start items-start gap-3 flex'>
          <div
            onClick={() => navigate(-1)}
            className='justify-start cursor-pointer items-center gap-[7px] inline-flex'
          >
            <div className='cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M18.9998 12H5.99985M10.9998 6L5.70696 11.2929C5.31643 11.6834 5.31643 12.3166 5.70696 12.7071L10.9998 18'
                  strokeWidth='2'
                  strokeLinecap='round'
                  className='dark:stroke-white stroke-black'
                />
              </svg>
            </div>
            <div className='text-center text-fuchsia-400 text-sm font-medium font-Manrope'>
              Go back
            </div>
          </div>
          <div className='self-stretch flex-col justify-start items-start flex'>
            <div className='self-stretch h-[347px] pb-6 dark:bg-white bg-stone-900 border border-stone-900 flex-col justify-center items-center gap-6 flex'>
              <div
                style={{
                  backgroundImage: `url(${frameImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className='w-full  h-[120px]'
              ></div>
              <div className='w-[47px] h-[47px] relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='47'
                  height='47'
                  viewBox='0 0 47 47'
                  fill='none'
                >
                  <path
                    d='M47 23.5C47 10.5214 36.4786 0 23.5 0C10.5214 0 0 10.5214 0 23.5C0 35.2294 8.59366 44.9516 19.8281 46.7145V30.293H13.8613V23.5H19.8281V18.3227C19.8281 12.433 23.3366 9.17969 28.7045 9.17969C31.2756 9.17969 33.9648 9.63867 33.9648 9.63867V15.4219H31.0016C28.0823 15.4219 27.1719 17.2334 27.1719 19.0919V23.5H33.6895L32.6476 30.293H27.1719V46.7145C38.4063 44.9516 47 35.2296 47 23.5Z'
                    fill='#1877F2'
                  />
                  <path
                    d='M32.6476 30.293L33.6895 23.5H27.1719V19.0919C27.1719 17.2332 28.0823 15.4219 31.0016 15.4219H33.9648V9.63867C33.9648 9.63867 31.2756 9.17969 28.7043 9.17969C23.3366 9.17969 19.8281 12.433 19.8281 18.3227V23.5H13.8613V30.293H19.8281V46.7145C21.0428 46.9049 22.2705 47.0003 23.5 47C24.7295 47.0004 25.9572 46.9049 27.1719 46.7145V30.293H32.6476Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div className='justify-center items-start gap-2 inline-flex'>
                <div className='max-w-[484px] flex-col justify-start items-center gap-3 inline-flex'>
                  <div className=' dark:text-black text-white text-sm font-medium font-Manrope'>
                    Post adverts on Facebook
                  </div>
                  <div className='self-stretch text-center  dark:text-black text-white text-xs font-normal font-Manrope'>
                    Like Facebook Pages for Individuals, Businesses and
                    Organizations and earn ₦3.5 per Like. The more pages you
                    like, the more you earn.
                  </div>
                  <div className='p-1 dark:bg-[#3793FF21] bg-white rounded justify-start items-start gap-3 inline-flex'>
                    <div className='text-center text-blue-600 text-[12.83px] font-normal font-Manrope'>
                      {advertTask?.length}  Task available
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
                active?.status === 'verified'
            ? '' :
            (
              <div className='self-stretch p-6 dark:bg-black bg-zinc-400 bg-opacity-30 justify-start items-start gap-[29px] inline-flex'>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className='text-center dark:text-white text-stone-900 text-base text-center font-bold font-Manrope'>
                    Link your Facebook Account
                  </div>
                  <div className='self-stretch dark:text-gray-400 text-stone-900 w-11/12 m-auto text-xs font-normal font-Manrope'>
                    You need to link your Facebook Account to Trendit before you
                    can start earning with your Facebook Account. Click the
                    button below to link your Facebook account now.
                  </div>
                  <div
                    onClick={handOpenSocialModal}
                    className='p-2 dark:bg-stone-800 cursor-default bg-white border border-violet-500 border-opacity-25 justify-center items-center gap-2 inline-flex'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      viewBox='0 0 47 47'
                      fill='none'
                    >
                      <path
                        d='M47 23.5C47 10.5214 36.4786 0 23.5 0C10.5214 0 0 10.5214 0 23.5C0 35.2294 8.59366 44.9516 19.8281 46.7145V30.293H13.8613V23.5H19.8281V18.3227C19.8281 12.433 23.3366 9.17969 28.7045 9.17969C31.2756 9.17969 33.9648 9.63867 33.9648 9.63867V15.4219H31.0016C28.0823 15.4219 27.1719 17.2334 27.1719 19.0919V23.5H33.6895L32.6476 30.293H27.1719V46.7145C38.4063 44.9516 47 35.2296 47 23.5Z'
                        fill='#1877F2'
                      />
                      <path
                        d='M32.6476 30.293L33.6895 23.5H27.1719V19.0919C27.1719 17.2332 28.0823 15.4219 31.0016 15.4219H33.9648V9.63867C33.9648 9.63867 31.2756 9.17969 28.7043 9.17969C23.3366 9.17969 19.8281 12.433 19.8281 18.3227V23.5H13.8613V30.293H19.8281V46.7145C21.0428 46.9049 22.2705 47.0003 23.5 47C24.7295 47.0004 25.9572 46.9049 27.1719 46.7145V30.293H32.6476Z'
                        fill='white'
                      />
                    </svg>
                    <div className='text-center dark:text-white text-stone-900 text-[12.83px] font-bold font-Manrope'>
                      Link Facebook account
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
                    d='M18 6L6 18M18 18L6 6.00001'
                    strokeWidth='2'
                    strokeLinecap='round'
                    className='dark:stroke-white stroke-[#1E1E1E]'
                  />
                </svg>
              </div>
            )}
          </div>
          {active?.status === 'verified' && (
            <>
              <div className='self-stretch flex-col justify-start items-start gap-3 flex '>
                <div className=' justify-between w-full borderb borderstone-500 items-center flex'>
                  <div className='justify-start overflow-x-clip items-center gap-[11px] flex'>
                    <AnimatePresence mode='wait'>
                      <div className='flex flex-col  w-full'>
                        <Tabs
                          fullWidth
                          size='md'
                          aria-label='Tabs form'
                          selectedKey={selected}
                          onSelectionChange={setSelected}
                          variant='underlined'
                          classNames={{
                            tab: '!px0 mr2',
                            tabList: '!p0 bordered  py-2',
                            cursor: ' bg-fuchsia-400',
                            selectedKey: 'text-green-400',
                            tabContent:
                              'group-data-[selected=true]:text-fuchsia-400 ',
                          }}
                          className='text-center  text-fuchsia-400 text-[12.83px] font-bold font-Manrope'
                          color='secondary'
                        >
                          <Tab
                            key='pending'
                            className=' text-zinc-400 text-[12.83px] font-bold font-Manrope'
                            title='Pending'
                          ></Tab>
                          <Tab
                            key='in_review'
                            title={
                              <div>
                                In Review
                                {/* <Chip
                                  size='sm'
                                  className='text-black dark:text-white'
                                  variant='light'
                                >
                                  23+
                                </Chip> */}
                              </div>
                            }
                            className=' text-zinc-400 text-[12.83px] font-bold font-Manrope'
                          ></Tab>
                          <Tab
                            key='failed'
                            className=' text-zinc-400 text-[12.83px] font-bold font-Manrope'
                            title='Failed'
                          ></Tab>
                          <Tab
                            key='completed'
                            title={'Completed'}
                            className=' text-zinc-400 text-[12.83px] font-bold font-Manrope'
                          ></Tab>
                          <Tab
                            key='cancelled'
                            title={'Cancelled'}
                            className=' text-zinc-400 text-[12.83px] font-bold font-Manrope'
                          ></Tab>
                        </Tabs>
                      </div>
                    </AnimatePresence>
                  </div>

                  {fetchTask?.length >= 5 && (
                    <div className='px-3 justify-start hidden items-center gap-[11px] flx'>
                      <div className='justify-start items-center gap-[7px] flex'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='25'
                          viewBox='0 0 24 25'
                          fill='none'
                        >
                          <path
                            d='M19.5858 3.5H4.41421C3.63316 3.5 3 4.13317 3 4.91421C3 5.28929 3.149 5.649 3.41421 5.91421L8.41421 10.9142C8.78929 11.2893 9 11.798 9 12.3284V17.2639C9 18.0215 9.428 18.714 10.1056 19.0528L14.2764 21.1382C14.6088 21.3044 15 21.0627 15 20.691V12.3284C15 11.798 15.2107 11.2893 15.5858 10.9142L20.5858 5.91421C20.851 5.649 21 5.28929 21 4.91421C21 4.13317 20.3668 3.5 19.5858 3.5Z'
                            strokeWidth='2'
                            strokeLinecap='round'
                            className='dark:stroke-[#B1B1B1] stroke-[#1E1E1E] '
                          />
                        </svg>
                        <div className='text-center dark:text-[#B1B1B1] text-stone-900 text-sm font-medium font-Manrope'>
                          Filter
                        </div>
                      </div>
                      <div className='justify-start items-center gap-[7px] flex'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='25'
                          viewBox='0 0 24 25'
                          fill='none'
                        >
                          <path
                            d='M5 17.5L5 7.5M7 16.5L5.35355 18.1464C5.15829 18.3417 4.84171 18.3417 4.64645 18.1464L3 16.5M12 4.5H21M12 12.5H18M12 20.5H14M12 8.5H20M12 16.5H16'
                            strokeWidth='2'
                            strokeLinecap='round'
                            className='dark:stroke-[#B1B1B1] stroke-[#1E1E1E] '
                          />
                        </svg>
                        <div className='text-center dark:text-[#B1B1B1] text-stone-900 text-sm font-medium font-Manrope'>
                          Sort
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selected === 'post advert' && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className='flex flex-col gap-2 w-full'
                  transition={{
                    rotate: { duration: 2 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <PostAdvertTasksCard />
                </motion.div>
              )}
              {selected === 'cancelled' && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className='flex flex-col gap-2 w-full'
                  transition={{
                    rotate: { duration: 2 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
                    {fetchTask?.map((task, index) => (
                      <div key={index} className='w-full'>
                        <IgGeneratedTask
                          status={task?.status}
                          caption={task?.task?.caption}
                          price={task?.reward_money}
                          platform={task?.task?.platform}
                          task_id={task?.key}
                          task_type={task?.task?.task_type}
                          goal={task?.task?.goal}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {selected === 'completed' && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className='flex flex-col gap-2 w-full'
                  transition={{
                    rotate: { duration: 2 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
                    {fetchTask?.map((task, index) => (
                      <div key={index} className='w-full'>
                        <IgGeneratedTask
                          status={task?.status}
                          caption={task?.task?.caption}
                          price={task?.reward_money}
                          platform={task?.task?.platform}
                          task_id={task?.key}
                          task_type={task?.task?.task_type}
                          goal={task?.task?.goal}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {selected === 'failed' && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className='flex flex-col gap-2 w-full'
                  transition={{
                    rotate: { duration: 2 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
                    {fetchTask?.map((task, index) => (
                      <div key={index} className='w-full'>
                        <IgGeneratedTask
                          status={task?.status}
                          caption={task?.task?.caption}
                          price={task?.reward_money}
                          platform={task?.task?.platform}
                          task_id={task?.key}
                          task_type={task?.task?.task_type}
                          goal={task?.task?.goal}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {selected === 'pending' && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className='flex flex-col gap-2 w-full'
                  transition={{
                    rotate: { duration: 2 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
                    {fetchTask?.map((task, index) => (
                      <div key={index} className='w-full'>
                        <IgGeneratedTask
                          status={task?.status}
                          caption={task?.task?.caption}
                          price={task?.reward_money}
                          platform={task?.task?.platform}
                          task_id={task?.key}
                          task_type={task?.task?.task_type}
                          goal={task?.task?.goal}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {selected === 'in_review' && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  className='flex flex-col gap-2 w-full'
                  transition={{
                    rotate: { duration: 2 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4'>
                    {fetchTask?.map((task, index) => (
                      <div key={index} className='w-full'>
                        <IgGeneratedTask
                          status={task?.status}
                          caption={task?.task?.caption}
                          price={task?.reward_money}
                          platform={task?.task?.platform}
                          task_id={task?.key}
                          task_type={task?.task?.task_type}
                          goal={task?.task?.goal}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {selected === 'pending' && fetchTask?.length === 0 && (
                <div className='self-stretch h[390px] flex-col justify-center items-center gap-6 flex'>
                  <div className='p-2 bg-zinc-400 bg-opacity-20 rounded-[9px] justify-center items-center gap-2 inline-flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M18 14V17.5M18 17.5V21M18 17.5H21.5M18 17.5H14.5M5.5 10H8.5C9.60457 10 10.5 9.10457 10.5 8V5C10.5 3.89543 9.60457 3 8.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V8C3.5 9.10457 4.39543 10 5.5 10ZM5.5 21H8.5C9.60457 21 10.5 20.1046 10.5 19V16C10.5 14.8954 9.60457 14 8.5 14H5.5C4.39543 14 3.5 14.8954 3.5 16V19C3.5 20.1046 4.39543 21 5.5 21ZM16.5 10H19.5C20.6046 10 21.5 9.10457 21.5 8V5C21.5 3.89543 20.6046 3 19.5 3H16.5C15.3954 3 14.5 3.89543 14.5 5V8C14.5 9.10457 15.3954 10 16.5 10Z'
                        stroke='#FFD0FE'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </svg>
                  </div>
                  <div className='h[58px]  flex-col justify-start items-center gap-3 flex'>
                    <div className='text-black dark:text-white text-sm font-bold font-Manrope'>
                      Need quick cash to earn?
                    </div>
                    <div className='self-stretch w-[320px] md:w-[30rem] text-center text-black dark:text-[#B1B1B1] text-xs font-normal font-Manrope'>
                      Earn steady income by posting adverts of businesses and
                      top brands on your social media page. To post adverts on
                      Facebook, Instagram, Twitter or Tiktok, you MUST have
                      atleast 1,000 Followers on your social media account.
                    </div>
                  </div>
                  <div
                    onClick={onOpen}
                    className='w-[290px] px-6 cursor-pointer py-3.5 dark:bg-white bg-fuchsia-400 rounded-[100px] justify-center items-center gap-2 inline-flex'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='17'
                      height='16'
                      viewBox='0 0 17 16'
                      fill='none'
                    >
                      <path
                        d='M9.83398 6.66659L3.83398 12.6666M11.834 4.66659L13.1673 3.33325M7.83398 4.66659L6.50065 3.33325M13.1673 9.99992L11.834 8.66659M9.83398 3.99992V3.33325M9.83398 10.6666V9.99992M12.5007 6.66659H13.1673M5.83398 6.66659H6.50065'
                        stroke='#1877F2'
                        strokeLinecap='round'
                      />
                    </svg>
                    <div className='text-center dark:text-black text-white text-[12.83px] font-medium font-Manrope'>
                      Generate task
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <ConfirmTaskModal
        isOpen={isOpen}
        onClose={onClose}
        task_type='advert'
        platform='facebook'
        title='Facebook'
      />

      {isOpenVerify && (
        <SocialLinkModal
          type='facebook'
          platform='facebook'
          icon='facebook'
          LogoBand={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='47'
              height='47'
              viewBox='0 0 47 47'
              fill='none'
            >
              <path
                d='M47 23.5C47 10.5214 36.4786 0 23.5 0C10.5214 0 0 10.5214 0 23.5C0 35.2294 8.59366 44.9516 19.8281 46.7145V30.293H13.8613V23.5H19.8281V18.3227C19.8281 12.433 23.3366 9.17969 28.7045 9.17969C31.2756 9.17969 33.9648 9.63867 33.9648 9.63867V15.4219H31.0016C28.0823 15.4219 27.1719 17.2334 27.1719 19.0919V23.5H33.6895L32.6476 30.293H27.1719V46.7145C38.4063 44.9516 47 35.2296 47 23.5Z'
                fill='#1877F2'
              />
              <path
                d='M32.6476 30.293L33.6895 23.5H27.1719V19.0919C27.1719 17.2332 28.0823 15.4219 31.0016 15.4219H33.9648V9.63867C33.9648 9.63867 31.2756 9.17969 28.7043 9.17969C23.3366 9.17969 19.8281 12.433 19.8281 18.3227V23.5H13.8613V30.293H19.8281V46.7145C21.0428 46.9049 22.2705 47.0003 23.5 47C24.7295 47.0004 25.9572 46.9049 27.1719 46.7145V30.293H32.6476Z'
                fill='white'
              />
            </svg>
          }
          isOpen={isOpenVerify}
          onClose={onCloseVerify}
        />
      )}
    </>
  )
}
