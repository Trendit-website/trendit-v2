import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useEffect, useState } from 'react'
import OverViewCard from './OverViewCard'
import AdvrtTaskViewCard from './AdvrtTaskViewCard'
import EngageTaskViewCard from './EngageTaskViewCard'
import TaskCard from './TaskCard'
// import CompletedTaskCard from './CompletedTaskCard'
// import PendingTaskCard from './PendingTaskCard'
// import ArchivedTaskCard from './ArchivedTaskCard'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import API from '../../services/AxiosInstance'
import Loader from '../Loader'

export default function EarnHistory() {
  const [selected, setSelected] = useState('overview')

  const historyTabs = [
    {
      key: 'all',
      title: 'All',
    },
    {
      key: 'pending',
      title: 'Pending',
    },
    {
      key: 'approved',
      title: 'Completed',
    },
    {
      key: 'declined',
      title: 'Archived',
    },
  ]
  const [selectedHistory, setSelectedHistory] = useState(historyTabs[0].key)
  const [adverts, setAdvert] = useState()
  const [eachAdvert, setEachAdvert] = useState()
  const [isLoading, setLoading] = useState(false)

  const selectTab = (status) => {
    setSelectedHistory(status)
    setLoading(true)
    status === 'all' ? getAdvert() : setEachAdvert('')
    API.get(`/performed-tasks?status=${status}`)
      .then(
        (response) => (
          setEachAdvert(response?.data?.all_tasks), setLoading(false)
        )
      )
      .catch((error) => console.error(error))
  }
  const getAdvert = () => {
    API.get('/performed-tasks')
      .then((response) => setAdvert(response?.data?.performed_tasks))
      .catch((error) => console.error(error))
  }
  useEffect(() => {
    getAdvert()
  }, [])
  const navigate = useNavigate()

  const handleRoute = (taskId) => {
    navigate(`/dashboard/earn-advert-task-preview/${taskId}`)
  }
  return (
    <div>
      <div className='w-full min-h-screen p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch flex-col justify-start items-start gap-2 flex'>
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
                      className="text-center text-fuchsia-400 text-[12.83px] font-bold font-['Manrope']"
                      color='secondary'
                    >
                      <Tab
                        key='overview'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Manrope']"
                        title='Overview'
                      ></Tab>
                      <Tab
                        key='engage task'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Manrope']"
                        title='Engage Task'
                      ></Tab>
                      <Tab
                        key='advert task'
                        title='Advert Task'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Manrope']"
                      ></Tab>
                    </Tabs>
                  </div>
                </AnimatePresence>
              </div>
              <div className='px-3 opacity-0 justify-start items-center gap-[11px]  fex'>
                <div className='justify-start items-center gap-[7px] flex'>
                  <div className='w-6 h-6 p-[3px] justify-center items-center flex' />
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Manrope']">
                    Filter
                  </div>
                </div>
                <div className='justify-start items-center gap-[7px] flex'>
                  <div className='w-6 h-6 px-[3px] py-1 justify-center items-center flex' />
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Manrope']">
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
          <div className='self-stretch md:mt-16 py-3 justify-start items-start gap-2 inline-flex'>
            <div className=" text-2xl font-medium font-['Manrope']">
              My Adverts
            </div>
          </div>
          <div className='self-stretch  borderb borderstone900 justify-between items-center inline-flex'>
            <div className='justify-start items-center gap-[11px] flex'>
              <AnimatePresence mode='wait'>
                <div className='flex flex-col w-full'>
                  <div className="flex flex-row items-center gap-x-8 text-center text-fuchsia-400 text-xs font-bold font-['Manrope']">
                    {historyTabs.map((tab, index) => (
                      <p
                        key={index}
                        onClick={() => selectTab(tab.key)}
                        className={`text-zinc-400 text-[12.83px] cursor-pointer font-bold font-['Manrope'] ${
                          selectedHistory === tab.key
                            ? 'border-b-2 border-border border-solid text-secondary font-bold'
                            : ''
                        }`}
                      >
                        {tab.title}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatePresence>
            </div>
            <div className='px-3 justify-start  lg:flex lg:flex-row items-center gap-[11px] hidden flx'>
              <div className='justify-start hidden items-center gap-[7px] flx'>
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
                <div className="text-center hidden md:grid text-zinc-400 text-sm font-medium font-['Manrope']">
                  Filter
                </div>
              </div>
              <div className='justify-start hidden items-center gap-[7px] flx'>
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
                <div className="text-center hidden md:grid text-zinc-400 text-sm font-medium font-['Manrope']">
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
                  {adverts?.length === 0 ? (
                    <div className='text-center'>No {selectedHistory} Task</div>
                  ) : (
                    adverts?.map((advert) => (
                      <TaskCard
                        key={advert?.key}
                        goal={advert?.task?.caption || advert?.task?.goal}
                        platform={advert?.task?.platform}
                        task_type={advert?.task?.task_type}
                        when={format(
                          new Date(advert?.task?.date_created),
                          'yyyy-MM-dd HH:mm:ss'
                        )}
                        status={advert?.status}
                        onNextPage={() => handleRoute(advert?.key)}
                        price={advert?.reward_money}
                        // taskId={advert?.key}
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
                {isLoading ? (
                  <div className='flex flex-row justify-center'>
                    {' '}
                    <Loader />{' '}
                  </div>
                ) : (
                  <div className='grid gap-4'>
                    {eachAdvert?.length === 0 ? (
                      <div className='text-center'>
                        No {selectedHistory} Task
                      </div>
                    ) : (
                      eachAdvert?.map((advert, index) => (
                        <TaskCard
                          key={index}
                          goal={advert?.task?.caption || advert?.task?.goal}
                          platform={advert?.task?.platform}
                          task_type={advert?.task?.task_type}
                          when={format(
                            new Date(advert?.task?.date_created),
                            'yyyy-MM-dd HH:mm:ss'
                          )}
                          status={advert?.status}
                          onNextPage={() => handleRoute(advert?.key)}
                          price={advert?.reward_money}
                          taskId={advert?.key}
                        />
                      ))
                    )}
                  </div>
                )}
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
                {isLoading ? (
                  <div className='flex flex-row justify-center'>
                    {' '}
                    <Loader />{' '}
                  </div>
                ) : (
                  <div className='grid gap-4'>
                    {eachAdvert?.length === 0 ? (
                      <div className='text-center'>
                        No {selectedHistory} Task
                      </div>
                    ) : (
                      eachAdvert?.map((advert, index) => (
                        <TaskCard
                          key={index}
                          goal={advert?.task?.caption || advert?.task?.goal}
                          platform={advert?.task?.platform}
                          task_type={advert?.task?.task_type}
                          when={format(
                            new Date(advert?.task?.date_created),
                            'yyyy-MM-dd HH:mm:ss'
                          )}
                          status={advert?.status}
                          onNextPage={() => handleRoute(advert?.key)}
                          price={advert?.reward_money}
                          taskId={advert?.key}
                        />
                      ))
                    )}
                  </div>
                )}
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
                {isLoading ? (
                  <div className='flex flex-row justify-center'>
                    {' '}
                    <Loader />{' '}
                  </div>
                ) : (
                  <div className='grid gap-4'>
                    {eachAdvert?.length === 0 ? (
                      <div className='text-center'>
                        No {selectedHistory} Task
                      </div>
                    ) : (
                      eachAdvert?.map((advert, index) => (
                        <TaskCard
                          key={index}
                          goal={advert?.task?.caption || advert?.task?.goal}
                          platform={advert?.task?.platform}
                          task_type={advert?.task?.task_type}
                          when={format(
                            new Date(advert?.task?.date_created),
                            'yyyy-MM-dd HH:mm:ss'
                          )}
                          status={advert?.status}
                          onNextPage={() => handleRoute(advert?.key)}
                          price={advert?.reward_money}
                          taskId={advert?.key}
                        />
                      ))
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
