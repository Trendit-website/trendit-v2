/* eslint-disable no-irregular-whitespace */

import { useNavigate } from 'react-router-dom'
import frameImageLight from '../../../../assets/engageIcon237873.svg'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Chip, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import PostAdvertTasksCard from '../../PostAdvertTasksCard'
import IgGeneratedTask from '../IgGeneratedTask'
import ConfirmTaskModal from '../ConfirmTaskModal'
import { usePerformTask } from '../../../../api/earnApi'
import { useDarkMode } from 'usehooks-ts'
import frameImageDark from '../../../../assets/FrameHeaderDark.svg'

export default function GenerateCommentEngageTask() {
  const [selected, setSelected] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: fetchTask } = usePerformTask(selected)
  const { isDarkMode } = useDarkMode()
  const frameImage = isDarkMode ? frameImageDark : frameImageLight

  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className='w-full min-h-screen p-3 flex-col justify-start items-start gap-3 flex'>
          <div className='justify-start cursor-pointer items-center gap-[7px] inline-flex'>
            <div onClick={() => navigate(-1)} className='cursor-pointer'>
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
            <div className="text-center text-fuchsia-400 text-sm font-medium font-['Campton']">
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
                className=' w-full  h-[120px]'
              ></div>
              <div className='w-[47px] h-[47px] relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='47'
                  height='48'
                  viewBox='0 0 47 48'
                  fill='none'
                >
                  <path
                    d='M10.293 0.589844H36.707C42.3918 0.589844 47 5.19805 47 10.8828V37.2968C47 42.9816 42.3918 47.5898 36.707 47.5898H10.293C4.6082 47.5898 0 42.9816 0 37.2968V10.8828C0 5.19805 4.6082 0.589844 10.293 0.589844Z'
                    fill='url(#paint0_linear_5698_5048)'
                  />
                  <path
                    d='M15.0624 34.7034L15.0668 34.7048L13.4598 37.4881C12.8732 38.5041 11.5741 38.8522 10.5581 38.2656C9.54227 37.679 9.194 36.3799 9.78058 35.3639L10.9644 33.3136L11.078 33.1167C11.2809 32.8252 11.7816 32.3218 12.7831 32.4165C12.7831 32.4165 15.1399 32.6723 15.3104 33.8972C15.3104 33.8972 15.3336 34.3002 15.0624 34.7034ZM37.8543 27.5946H32.8433C32.502 27.5717 32.3531 27.4498 32.2943 27.3789L32.2906 27.3725L26.9266 18.0815L26.9196 18.0861L26.5979 17.6249C26.0707 16.8186 25.2335 18.8807 25.2335 18.8807C24.2338 21.1786 25.3754 23.7909 25.7732 24.5806L33.2238 37.4854C33.8102 38.5012 35.1094 38.8495 36.1255 38.2627C37.1414 37.6761 37.4896 36.377 36.9029 35.361L35.04 32.1341C35.0038 32.0559 34.941 31.8437 35.3231 31.8428H37.8543C39.0274 31.8428 39.9784 30.8918 39.9784 29.7186C39.9784 28.5454 39.0274 27.5946 37.8543 27.5946ZM28.1212 30.482C28.1212 30.482 28.3887 31.8426 27.3538 31.8426H8.82938C7.65622 31.8426 6.7052 30.8916 6.7052 29.7184C6.7052 28.5453 7.65622 27.5942 8.82938 27.5942H13.5918C14.3607 27.5498 14.5428 27.1059 14.5428 27.1059L14.5472 27.1081L20.7637 16.3407L20.7619 16.3403C20.8751 16.1323 20.7808 15.9357 20.7644 15.9046L18.7113 12.3486C18.1247 11.3328 18.4728 10.0335 19.4888 9.4471C20.5048 8.86052 21.8039 9.20843 22.3905 10.2244L23.3426 11.8737L24.2931 10.2274C24.8797 9.21155 26.1788 8.86327 27.1948 9.45004C28.2108 10.0366 28.5589 11.3355 27.9723 12.3516L19.3218 27.3346C19.2839 27.4259 19.2724 27.5691 19.5538 27.5942H24.7246L24.7257 27.6447C24.7257 27.6447 27.7142 27.6912 28.1212 30.482Z'
                    fill='white'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_5698_5048'
                      x1='2350'
                      y1='0.589844'
                      x2='2350'
                      y2='4700.59'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#17C9FB' />
                      <stop offset='1' stopColor='#1A74E8' />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className='justify-center items-start gap-2 inline-flex'>
                <div className='w-[484px] flex-col justify-start items-center gap-3 inline-flex'>
                  <div className="text-white dark:text-black text-sm font-medium font-['Campton']">
                    Post adverts on App Store
                  </div>
                  <div className="self-stretch dark:text-black text-center text-white text-xs font-normal font-['Campton']">
                    Like and review more app for Businesses and Organizations
                    and earn ₦10 per Like/review. The more pages you like, the
                    more you earn.
                  </div>
                  <div className='p-1 dark:bg-[#3793FF21] bg-white rounded justify-start items-start gap-3 inline-flex'>
                    <div className="text-center text-blue-600 text-[12.83px] font-normal font-['Campton']">
                      0 Task available
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch p-6 dark:bg-black bg-zinc-400 bg-opacity-30 justify-start items-start gap-[29px] inline-flex'>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex'>
                <div className="text-center dark:text-white text-stone-900 text-base font-bold font-['Campton']">
                  Link your App store Account
                </div>
                <div className="self-stretch dark:text-gray-400 text-stone-900 text-xs font-normal font-['Campton']">
                  You need to link your  App store  Account to Trendit before
                  you can start earning with your  app store  Account. Click the
                  button below to link your app store now.
                </div>
                <div className='p-2 dark:bg-stone-900 bg-white border border-violet-500 border-opacity-25 justify-center items-center gap-1 inline-flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='20'
                    viewBox='0 0 47 48'
                    fill='none'
                  >
                    <path
                      d='M10.293 0.589844H36.707C42.3918 0.589844 47 5.19805 47 10.8828V37.2968C47 42.9816 42.3918 47.5898 36.707 47.5898H10.293C4.6082 47.5898 0 42.9816 0 37.2968V10.8828C0 5.19805 4.6082 0.589844 10.293 0.589844Z'
                      fill='url(#paint0_linear_5698_5048)'
                    />
                    <path
                      d='M15.0624 34.7034L15.0668 34.7048L13.4598 37.4881C12.8732 38.5041 11.5741 38.8522 10.5581 38.2656C9.54227 37.679 9.194 36.3799 9.78058 35.3639L10.9644 33.3136L11.078 33.1167C11.2809 32.8252 11.7816 32.3218 12.7831 32.4165C12.7831 32.4165 15.1399 32.6723 15.3104 33.8972C15.3104 33.8972 15.3336 34.3002 15.0624 34.7034ZM37.8543 27.5946H32.8433C32.502 27.5717 32.3531 27.4498 32.2943 27.3789L32.2906 27.3725L26.9266 18.0815L26.9196 18.0861L26.5979 17.6249C26.0707 16.8186 25.2335 18.8807 25.2335 18.8807C24.2338 21.1786 25.3754 23.7909 25.7732 24.5806L33.2238 37.4854C33.8102 38.5012 35.1094 38.8495 36.1255 38.2627C37.1414 37.6761 37.4896 36.377 36.9029 35.361L35.04 32.1341C35.0038 32.0559 34.941 31.8437 35.3231 31.8428H37.8543C39.0274 31.8428 39.9784 30.8918 39.9784 29.7186C39.9784 28.5454 39.0274 27.5946 37.8543 27.5946ZM28.1212 30.482C28.1212 30.482 28.3887 31.8426 27.3538 31.8426H8.82938C7.65622 31.8426 6.7052 30.8916 6.7052 29.7184C6.7052 28.5453 7.65622 27.5942 8.82938 27.5942H13.5918C14.3607 27.5498 14.5428 27.1059 14.5428 27.1059L14.5472 27.1081L20.7637 16.3407L20.7619 16.3403C20.8751 16.1323 20.7808 15.9357 20.7644 15.9046L18.7113 12.3486C18.1247 11.3328 18.4728 10.0335 19.4888 9.4471C20.5048 8.86052 21.8039 9.20843 22.3905 10.2244L23.3426 11.8737L24.2931 10.2274C24.8797 9.21155 26.1788 8.86327 27.1948 9.45004C28.2108 10.0366 28.5589 11.3355 27.9723 12.3516L19.3218 27.3346C19.2839 27.4259 19.2724 27.5691 19.5538 27.5942H24.7246L24.7257 27.6447C24.7257 27.6447 27.7142 27.6912 28.1212 30.482Z'
                      fill='white'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_5698_5048'
                        x1='2350'
                        y1='0.589844'
                        x2='2350'
                        y2='4700.59'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#17C9FB' />
                        <stop offset='1' stopColor='#1A74E8' />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-center dark:text-white text-stone-900 text-[12.83px] font-bold font-['Campton']">
                    Link App account
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
                  className='dark:stroke-white stroke-[#1E1E1E] '
                />
              </svg>
            </div>
          </div>

          <div className='self-stretch flex-col justify-start items-start gap-3 flex '>
            <div className=' justify-between w-full border-b border-stone-500 items-center flex'>
              <div className='justify-start  items-center gap-[11px] flex'>
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
                        tab: '!px-0 mr-2',
                        tabList: '!p-0',
                        cursor: ' bg-fuchsia-400',
                        selectedKey: 'text-green-400',
                        tabContent:
                          'group-data-[selected=true]:text-fuchsia-400 ',
                      }}
                      className="text-center  text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                      color='secondary'
                    >
                      <Tab
                        key='pending'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                        title='Pending'
                      ></Tab>
                      <Tab
                        key='in_review'
                        title={
                          <div>
                            In Review
                            <Chip
                              size='sm'
                              className='text-black dark:text-white'
                              variant='light'
                            >
                              23+
                            </Chip>
                          </div>
                        }
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      ></Tab>
                      <Tab
                        key='failed'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                        title='Failed'
                      ></Tab>
                      <Tab
                        key='completed'
                        title={'Completed'}
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      ></Tab>
                      <Tab
                        key='cancelled'
                        title={'Cancelled'}
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      ></Tab>
                    </Tabs>
                  </div>
                </AnimatePresence>
              </div>
              <div className='px-3 justify-start items-center gap-[11px] flex'>
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
                      className='dark:stroke-[#B1B1B1] stroke-[#1E1E1E]'
                    />
                  </svg>
                  <div className="text-center dark:text-[#B1B1B1] text-stone-900 text-sm font-medium font-['Campton']">
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
                      className='dark:stroke-[#B1B1B1] stroke-[#1E1E1E]'
                    />
                  </svg>
                  <div className="text-center dark:text-[#B1B1B1] text-stone-900 text-sm font-medium font-['Campton']">
                    Sort
                  </div>
                </div>
              </div>
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
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fetchTask?.map((task, index) => (
                  <div key={index} className=''>
                    <IgGeneratedTask
                      status={task?.status}
                      caption={task?.task?.caption}
                      price={task?.reward_money}
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
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fetchTask?.map((task, index) => (
                  <div key={index} className=''>
                    <IgGeneratedTask
                      status={task?.status}
                      caption={task?.task?.caption}
                      price={task?.reward_money}
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
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fetchTask?.map((task, index) => (
                  <div key={index} className=''>
                    <IgGeneratedTask
                      status={task?.status}
                      caption={task?.task?.caption}
                      price={task?.reward_money}
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
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fetchTask?.map((task, index) => (
                  <div key={index} className=''>
                    <IgGeneratedTask
                      status={task?.status}
                      caption={task?.task?.caption}
                      price={task?.reward_money}
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
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {fetchTask?.map((task, index) => (
                  <div key={index} className=''>
                    <IgGeneratedTask
                      status={task?.status}
                      caption={task?.task?.caption}
                      price={task?.reward_money}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {fetchTask?.length === 0 && (
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
              <div className='flex-col justify-start items-center gap-3 flex'>
                <div className=" text-sm font-bold font-['Campton']">
                  Need quick cash to earn?
                </div>
                <div className="self-stretch dark:text-[#B1B1B1] w-[30rem] text-center text-black text-xs font-normal font-['Campton']">
                  Earn steady income by posting adverts of businesses and top
                  brands on your social media page. To post adverts on Facebook,
                  Instagram, Twitter or Tiktok, you MUST have atleast 1,000
                  Followers on your social media account.
                </div>
              </div>
              <div
                onClick={onOpen}
                className='w-[290px] px-6 dark:bg-white cursor-pointer py-3.5 bg-fuchsia-400 rounded-[100px] justify-center items-center gap-2 inline-flex'
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
                <div className="text-center dark:text-black text-white text-[12.83px] font-medium font-['Campton']">
                  Generate task
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ConfirmTaskModal
        isOpen={isOpen}
        onClose={onClose}
        task_type='engagement'
        goal='comment'
        title='Generate Comment Task?'
      />
    </>
  )
}
