import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
import OverViewCard from './OverViewCard'
import AdvrtTaskViewCard from './AdvrtTaskViewCard'
import EngageTaskViewCard from './EngageTaskViewCard'
import TaskCard from './TaskCard'
// import CompletedTaskCard from './CompletedTaskCard'
// import PendingTaskCard from './PendingTaskCard'
// import ArchivedTaskCard from './ArchivedTaskCard'
import { useGetAdvert, useGetAllAdvert } from '../../api/advertApi'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

export default function History() {
  const [selected, setSelected] = useState('overview')

  const [selectedHistory, setSelectedHistory] = useState()
  const { data: adverts } = useGetAdvert(selectedHistory)
  const { data: adverts2 } = useGetAllAdvert()
  console.log(adverts, 'llp')
  console.log(adverts2, 'll22p')
  const naviaget = useNavigate()

  const handleRoute = () => {
    naviaget('/dashboard/earn-advert-task')
  }
  return (
    <div>
      <div className='w-full min-h-screen p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch h-[276px] flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch borderb borderstone-900 justify-between items-center inline-flex'>
              <div className='justify-start items-center gap-[11px] flex'>
                <AnimatePresence mode='wait'>
                  <div className='flex flex-col w-full'>
                    <Tabs
                      fullWidth
                      size='md'
                      aria-label='Tabs form'
                      selectedKey={selected}
                      onSelectionChange={setSelected}
                      variant='underlined'
                      classNames={{
                        tabList: '  bordered  py-2',
                        cursor: ' bg-fuchsia-400',
                        selectedKey: 'text-green-400',
                        tabContent:
                          'group-data-[selected=true]:text-fuchsia-400 ',
                      }}
                      className="text-center text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                      color='secondary'
                    >
                      <Tab
                        key='overview'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                        title='Overview'
                      ></Tab>
                      <Tab
                        key='engage task'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                        title='Enage Task'
                      ></Tab>
                      <Tab
                        key='advert task'
                        title='Advert Task'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      ></Tab>
                    </Tabs>
                  </div>
                </AnimatePresence>
              </div>
              <div className='px-3 opacity-0 justify-start items-center gap-[11px] flex'>
                <div className='justify-start items-center gap-[7px] flex'>
                  <div className='w-6 h-6 p-[3px] justify-center items-center flex' />
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                    Filter
                  </div>
                </div>
                <div className='justify-start items-center gap-[7px] flex'>
                  <div className='w-6 h-6 px-[3px] py-1 justify-center items-center flex' />
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                    Sort
                  </div>
                </div>
              </div>
            </div>

            {selected === 'overview' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <OverViewCard />
              </motion.div>
            )}
            {selected === 'engage task' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <EngageTaskViewCard />
              </motion.div>
            )}
            {selected === 'advert task' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <AdvrtTaskViewCard />
              </motion.div>
            )}
          </div>
          <div className='self-stretch mt-40 md:mt-16 py-3 justify-start items-start gap-2 inline-flex'>
            <div className=" text-2xl font-medium font-['Campton']">
              My Adverts
            </div>
          </div>
          <div className='self-stretch borderb borderstone900 justify-between items-center inline-flex'>
            <div className='justify-start items-center gap-[11px] flex'>
              <AnimatePresence mode='wait'>
                <div className='flex flex-col w-full'>
                  <Tabs
                    fullWidth
                    size='md'
                    aria-label='Tabs form'
                    selectedKey={selectedHistory}
                    onSelectionChange={setSelectedHistory}
                    variant='underlined'
                    classNames={{
                      tabList: '  bordered  py-2',
                      cursor: ' bg-fuchsia-400',
                      tabContent:
                        'group-data-[selected=true]:text-fuchsia-400 ',
                    }}
                    className="text-center text-fuchsia-400 text-xs font-bold font-['Campton']"
                    color='secondary'
                  >
                    <Tab
                      key='all'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='All'
                    ></Tab>
                    <Tab
                      key='pending'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='Pending'
                    ></Tab>
                    <Tab
                      key='approved'
                      title='Completed'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                    ></Tab>
                    <Tab
                      key='declined'
                      title='Archived'
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
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M19.5858 3H4.41421C3.63316 3 3 3.63317 3 4.41421C3 4.78929 3.149 5.149 3.41421 5.41421L8.41421 10.4142C8.78929 10.7893 9 11.298 9 11.8284V16.7639C9 17.5215 9.428 18.214 10.1056 18.5528L14.2764 20.6382C14.6088 20.8044 15 20.5627 15 20.191V11.8284C15 11.298 15.2107 10.7893 15.5858 10.4142L20.5858 5.41421C20.851 5.149 21 4.78929 21 4.41421C21 3.63317 20.3668 3 19.5858 3Z'
                    stroke='#B1B1B1'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
                <div className="text-center hidden md:grid text-zinc-400 text-sm font-medium font-['Campton']">
                  Filter
                </div>
              </div>
              <div className='justify-start items-center gap-[7px] flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M5 17L5 7M7 16L5.35355 17.6464C5.15829 17.8417 4.84171 17.8417 4.64645 17.6464L3 16M12 4H21M12 12H18M12 20H14M12 8H20M12 16H16'
                    stroke='#B1B1B1'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
                <div className="text-center hidden md:grid text-zinc-400 text-sm font-medium font-['Campton']">
                  Sort
                </div>
              </div>
            </div>
          </div>

          <div className=' w-full space-y-4'>
            {selectedHistory === 'all' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 '
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <div className='grid gap-4'>
                  {adverts2?.length === 0 ? (
                    <div className='text-center'>No {selectedHistory} Task</div>
                  ) : (
                    adverts2?.map((advert, index) => (
                      <TaskCard
                        key={index}
                        goal={advert?.goal}
                        platform={advert?.platform}
                        task_type={advert?.task_type}
                        when={format(
                          new Date(advert.date_created),
                          'yyyy-MM-dd HH:mm:ss'
                        )}
                        status={advert?.status}
                        onNextPage={() =>
                          advert.status === 'pending' ? handleRoute() : ''
                        }
                      />
                    ))
                  )}
                </div>
              </motion.div>
            )}
            {selectedHistory === 'pending' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                {/* <PendingTaskCard /> */}
                <div className='grid gap-4'>
                  {adverts?.length === 0 ? (
                    <div className='text-center'>No {selectedHistory} Task</div>
                  ) : (
                    adverts?.map((advert, index) => (
                      <TaskCard
                        key={index}
                        goal={advert?.goal}
                        platform={advert?.platform}
                        when={format(
                          new Date(advert.date_created),
                          'yyyy-MM-dd HH:mm:ss'
                        )}
                        status={advert?.status}
                        onNextPage={() =>
                          advert.status === 'pending' ? handleRoute() : ''
                        }
                      />
                    ))
                  )}
                </div>
              </motion.div>
            )}
            {selectedHistory === 'approved' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                {/* <CompletedTaskCard /> */}
                <div className='grid gap-4'>
                  {adverts?.length === 0 ? (
                    <div className='text-center'>No {selectedHistory} Task</div>
                  ) : (
                    adverts?.map((advert, index) => (
                      <TaskCard
                        key={index}
                        goal={advert?.goal}
                        platform={advert?.platform}
                        when={format(
                          new Date(advert.date_created),
                          'yyyy-MM-dd HH:mm:ss'
                        )}
                        status={advert?.status}
                      />
                    ))
                  )}
                </div>
              </motion.div>
            )}
            {selectedHistory === 'declined' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                {/* <ArchivedTaskCard /> */}
                <div className='grid gap-4'>
                  {adverts?.length === 0 ? (
                    <div className='text-center'>No {selectedHistory} Task</div>
                  ) : (
                    adverts?.map((advert, index) => (
                      <TaskCard
                        key={index}
                        goal={advert?.goal}
                        platform={advert?.platform}
                        when={format(
                          new Date(advert.date_created),
                          'yyyy-MM-dd HH:mm:ss'
                        )}
                        status={advert?.status}
                      />
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
