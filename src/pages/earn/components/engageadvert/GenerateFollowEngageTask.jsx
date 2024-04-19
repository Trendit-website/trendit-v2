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

export default function GenerateFollowEngageTask() {
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
                  width='44'
                  height='45'
                  viewBox='0 0 44 45'
                  fill='none'
                >
                  <path
                    d='M28.4231 26.9898C31.3225 26.9898 34.1031 28.1488 36.1532 30.2117C38.2033 32.2746 39.3551 35.0725 39.3551 37.9898V40.1898C39.3551 41.3568 38.8944 42.476 38.0743 43.3011C37.2543 44.1263 36.142 44.5898 34.9823 44.5898H4.37279C3.21305 44.5898 2.10082 44.1263 1.28076 43.3011C0.460703 42.476 0 41.3568 0 40.1898V37.9898C0 35.0725 1.15176 32.2746 3.2019 30.2117C5.25204 28.1488 8.03263 26.9898 10.932 26.9898H28.4231ZM40.2603 16.168C40.6528 15.7693 41.182 15.5366 41.7395 15.5175C42.2969 15.4985 42.8406 15.6946 43.2591 16.0657C43.6776 16.4367 43.9393 16.9547 43.9907 17.5136C44.0421 18.0725 43.8792 18.63 43.5355 19.072L43.3518 19.281L37.1687 25.5026C36.7922 25.8814 36.2913 26.109 35.76 26.1426C35.2286 26.1762 34.7033 26.0136 34.2827 25.6852L34.0771 25.5026L30.9856 22.3918C30.5893 21.9969 30.358 21.4644 30.3391 20.9034C30.3202 20.3425 30.5151 19.7955 30.8838 19.3744C31.2526 18.9533 31.7674 18.6899 32.3228 18.6382C32.8783 18.5865 33.4323 18.7504 33.8716 19.0962L34.0771 19.281L35.6229 20.8364L40.2603 16.168ZM19.6775 0.589844C22.5769 0.589844 25.3575 1.74877 27.4076 3.81167C29.4578 5.87457 30.6095 8.67246 30.6095 11.5898C30.6095 14.5072 29.4578 17.3051 27.4076 19.368C25.3575 21.4309 22.5769 22.5898 19.6775 22.5898C16.7782 22.5898 13.9976 21.4309 11.9475 19.368C9.89734 17.3051 8.74558 14.5072 8.74558 11.5898C8.74558 8.67246 9.89734 5.87457 11.9475 3.81167C13.9976 1.74877 16.7782 0.589844 19.6775 0.589844Z'
                    fill='#FC11F5'
                  />
                </svg>
              </div>
              <div className='justify-center items-start gap-2 inline-flex'>
                <div className='w-[484px] flex-col justify-start items-center gap-3 inline-flex'>
                  <div className="text-white dark:text-black text-sm font-medium font-['Campton']">
                    Post adverts on Instagram
                  </div>
                  <div className="self-stretch dark:text-black text-center text-white text-xs font-normal font-['Campton']">
                    Like and Follow instagram Pages for Businesses and
                    Organizations and earn
                    <br />
                    ₦10 per Like/Follow. The more pages you like, the more you
                    earn.
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
                  Link your Instagram Account
                </div>
                <div className="self-stretch dark:text-gray-400 text-stone-900 text-xs font-normal font-['Campton']">
                  You need to link your  instagram Account to Hawkit before you
                  can start earning with your instagram  Account. Click the
                  button below to link your instagram  account now.
                </div>
                <div className='p-2 dark:bg-stone-900 bg-white border border-violet-500 border-opacity-25 justify-center items-center gap-1 inline-flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                  >
                    <path
                      d='M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z'
                      fill='url(#paint0_radial_3736_28371)'
                    />
                    <path
                      d='M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z'
                      fill='url(#paint1_radial_3736_28371)'
                    />
                    <path
                      d='M10.0007 2.1875C7.87898 2.1875 7.61266 2.1968 6.77938 2.23469C5.94766 2.27281 5.37992 2.40445 4.8832 2.59766C4.3693 2.79719 3.93344 3.06414 3.49922 3.49852C3.06461 3.93281 2.79766 4.36867 2.5975 4.88234C2.40375 5.37922 2.27195 5.94719 2.23453 6.77852C2.19727 7.61188 2.1875 7.87828 2.1875 10.0001C2.1875 12.1219 2.19688 12.3873 2.23469 13.2206C2.27297 14.0523 2.40461 14.6201 2.59766 15.1168C2.79734 15.6307 3.0643 16.0666 3.49867 16.5008C3.93281 16.9354 4.36867 17.203 4.88219 17.4025C5.3793 17.5957 5.94711 17.7273 6.77867 17.7655C7.61203 17.8034 7.87813 17.8127 9.99977 17.8127C12.1217 17.8127 12.3872 17.8034 13.2205 17.7655C14.0522 17.7273 14.6205 17.5957 15.1177 17.4025C15.6313 17.203 16.0666 16.9354 16.5006 16.5008C16.9352 16.0666 17.2021 15.6307 17.4023 15.117C17.5944 14.6201 17.7262 14.0522 17.7653 13.2208C17.8027 12.3875 17.8125 12.1219 17.8125 10.0001C17.8125 7.87828 17.8027 7.61203 17.7653 6.77867C17.7262 5.94695 17.5944 5.3793 17.4023 4.88258C17.2021 4.36867 16.9352 3.93281 16.5006 3.49852C16.0661 3.06398 15.6315 2.79703 15.1172 2.59773C14.6191 2.40445 14.0511 2.27273 13.2194 2.23469C12.386 2.1968 12.1207 2.1875 9.99828 2.1875H10.0007ZM9.29984 3.59539C9.50789 3.59508 9.74 3.59539 10.0007 3.59539C12.0867 3.59539 12.3339 3.60289 13.1577 3.64031C13.9194 3.67516 14.3328 3.80242 14.6082 3.90938C14.9728 4.05094 15.2327 4.22023 15.506 4.49375C15.7795 4.76719 15.9487 5.02758 16.0906 5.39219C16.1976 5.66719 16.325 6.08063 16.3597 6.84234C16.3971 7.66594 16.4052 7.91328 16.4052 9.99828C16.4052 12.0833 16.3971 12.3307 16.3597 13.1542C16.3248 13.9159 16.1976 14.3294 16.0906 14.6045C15.9491 14.9691 15.7795 15.2287 15.506 15.502C15.2326 15.7754 14.973 15.9446 14.6082 16.0863C14.3331 16.1937 13.9194 16.3206 13.1577 16.3555C12.3341 16.3929 12.0867 16.401 10.0007 16.401C7.91461 16.401 7.66734 16.3929 6.84383 16.3555C6.08211 16.3203 5.66867 16.193 5.39305 16.0861C5.02852 15.9445 4.76805 15.7752 4.49461 15.5018C4.22117 15.2284 4.05195 14.9686 3.91 14.6038C3.80305 14.3287 3.67562 13.9153 3.64094 13.1536C3.60352 12.33 3.59602 12.0827 3.59602 9.99633C3.59602 7.91008 3.60352 7.66398 3.64094 6.84039C3.67578 6.07867 3.80305 5.66523 3.91 5.38984C4.05164 5.02523 4.22117 4.76484 4.49469 4.49141C4.76813 4.21797 5.02852 4.04867 5.39312 3.9068C5.66852 3.79938 6.08211 3.67242 6.84383 3.63742C7.56453 3.60484 7.84383 3.59508 9.29984 3.59344V3.59539ZM14.171 4.89258C13.6534 4.89258 13.2335 5.31211 13.2335 5.82977C13.2335 6.34734 13.6534 6.76727 14.171 6.76727C14.6886 6.76727 15.1085 6.34734 15.1085 5.82977C15.1085 5.31219 14.6886 4.89227 14.171 4.89227V4.89258ZM10.0007 5.98797C7.78508 5.98797 5.98867 7.78438 5.98867 10.0001C5.98867 12.2158 7.78508 14.0113 10.0007 14.0113C12.2164 14.0113 14.0122 12.2158 14.0122 10.0001C14.0122 7.78445 12.2163 5.98797 10.0005 5.98797H10.0007ZM10.0007 7.39586C11.4389 7.39586 12.6049 8.56172 12.6049 10.0001C12.6049 11.4383 11.4389 12.6043 10.0007 12.6043C8.56242 12.6043 7.39656 11.4383 7.39656 10.0001C7.39656 8.56172 8.56242 7.39586 10.0007 7.39586Z'
                      fill='white'
                    />
                    <defs>
                      <radialGradient
                        id='paint0_radial_3736_28371'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(5.3125 21.5404) rotate(-90) scale(19.8215 18.4355)'
                      >
                        <stop stopColor='#FFDD55' />
                        <stop offset='0.1' stopColor='#FFDD55' />
                        <stop offset='0.5' stopColor='#FF543E' />
                        <stop offset='1' stopColor='#C837AB' />
                      </radialGradient>
                      <radialGradient
                        id='paint1_radial_3736_28371'
                        cx='0'
                        cy='0'
                        r='1'
                        gradientUnits='userSpaceOnUse'
                        gradientTransform='translate(-3.35008 1.4407) rotate(78.681) scale(8.86031 36.5225)'
                      >
                        <stop stopColor='#3771C8' />
                        <stop offset='0.128' stopColor='#3771C8' />
                        <stop offset='1' stopColor='#6600FF' stopOpacity='0' />
                      </radialGradient>
                    </defs>
                  </svg>
                  <div className="text-center dark:text-white text-stone-900 text-[12.83px] font-bold font-['Campton']">
                    Link Instagram account
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
                <div className="text-sm font-bold font-['Campton']">
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
        goal='follow'
        title='Generate Follow Task?'
      />
    </>
  )
}
