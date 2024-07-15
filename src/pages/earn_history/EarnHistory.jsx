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
import Icons from '../../components/Icon'

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
      key: 'in_review',
      title: 'In-review',
    },
    {
      key: 'cancelled',
      title: 'Failed',
    },
    {
      key: 'completed',
      title: 'Completed',
    },
  ]
  const [selectedHistory, setSelectedHistory] = useState(historyTabs[0].key)
  const [adverts, setAdvert] = useState()
  const [eachAdvert, setEachAdvert] = useState()
  const [isLoading, setLoading] = useState(false)
  const date = new Date()
  const currentDate = format(date, 'yyyy-MM-dd')

  const selectTab = (status) => {
    setSelectedHistory(status)
    setLoading(true)
    status === 'all' ? getAdvert() : setEachAdvert('')
    API.get(`/performed-tasks?status=${status}`)
      .then(
        (response) => (
          setEachAdvert(response?.data?.performed_tasks), setLoading(false), console.log(response)
        )
      )
      .catch((error) => console.error(error))
  }
  const getAdvert = () => {
    API.get('/performed-tasks')
      .then((response) => (setAdvert(response?.data?.performed_tasks), console.log(response)))
      .catch((error) => console.error(error))
  }
  useEffect(() => {
    getAdvert()
  }, [])
  const navigate = useNavigate()

  const handleRoute = (taskId, route) => {
    navigate(`/${route}/${taskId}`)
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
              History
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
            <div className='px-3 justify-start  lg:flex lg:flex-row items-center gap-[11px] hidden flex'>
              <div className='justify-start hidden items-center gap-[7px] flex'>
                <Icons type='filter' />
                <div className="text-center hidden md:grid text-zinc-400 text-sm font-medium font-['Manrope']">
                  Filter
                </div>
              </div>
              <div className='justify-start hidden items-center gap-[7px] flx'>
               <Icons type='sort' />
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
                  {adverts?.length === 0  ? (
                    <div className='text-center'>No task has been performed yet.</div>
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
                        onNextPage={() => {
                          const [hours, minutes, seconds] = format(new Date(advert?.started_at), 'HH:mm:ss').split(':').map(Number);
                          const currentDate = new Date();
                          const started_date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds).getTime();
                          const endTime = started_date + 60 * 60 * 1000;
                          const updateCountdown = () => {
                            const now = Date.now();
                            const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000))
                            if (timeLeft <= 0 || advert?.status === 'completed' || advert?.status === 'cancelled' || advert?.status === 'rejected') {
                              handleRoute(advert?.key, 'dashboard/earn-advert-task-preview')
                             } else {
                              handleRoute(advert?.key, 'dashboard/earn-advert-task')
                             }
                            };
                            updateCountdown();  
                        }}
                        price={advert?.task?.fee}
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
                       There are no {selectedHistory} performed tasks.
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
                          onNextPage={() => {
                            const [hours, minutes, seconds] = format(new Date(advert?.started_at), 'HH:mm:ss').split(':').map(Number);
                            const currentDate = new Date();
                            const started_date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds).getTime();
                            const endTime = started_date + 60 * 60 * 1000;
                            const updateCountdown = () => {
                              const now = Date.now();
                              const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000))
                              if (timeLeft <= 0 || advert?.status === 'completed' || advert?.status === 'cancelled'  || advert?.status === 'rejected') {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task-preview')
                               } else {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task')
                               }
                              };
                              updateCountdown();  
                          }}
                          price={advert?.task?.fee}
                          taskId={advert?.key}
                        />
                      ))
                    )}
                  </div>
                )}
              </motion.div>
            )}
             {selectedHistory === 'in_review' && (
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
                       There are no {selectedHistory} performed tasks.
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
                          onNextPage={() => {
                            const [hours, minutes, seconds] = format(new Date(advert?.started_at), 'HH:mm:ss').split(':').map(Number);
                            const currentDate = new Date();
                            const started_date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds).getTime();
                            const endTime = started_date + 60 * 60 * 1000;
                            const updateCountdown = () => {
                              const now = Date.now();
                              const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000))
                              if (timeLeft <= 0 || advert?.status === 'completed' || advert?.status === 'cancelled' || advert?.status === 'rejected') {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task-preview')
                               } else {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task')
                               }
                              };
                              updateCountdown();  
                          }}
                          price={advert?.task?.fee}
                          taskId={advert?.key}
                        />
                      ))
                    )}
                  </div>
                )}
              </motion.div>
            )}
            {selectedHistory === 'completed' && (
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
                    {eachAdvert?.length === 0 || !eachAdvert ? (
                      <div className='text-center'>
                        There are no {selectedHistory} performed tasks.
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
                          onNextPage={() => {
                            const [hours, minutes, seconds] = format(new Date(advert?.started_at), 'HH:mm:ss').split(':').map(Number);
                            const currentDate = new Date();
                            const started_date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds).getTime();
                            const endTime = started_date + 60 * 60 * 1000;
                            const updateCountdown = () => {
                              const now = Date.now();
                              const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000))
                              if (timeLeft <= 0 || advert?.status === 'completed' || advert?.status === 'cancelled' || advert?.status === 'rejected') {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task-preview')
                               } else {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task')
                               }
                              };
                              updateCountdown();  
                          }}
                          price={advert?.task?.fee}
                          taskId={advert?.key}
                        />
                      ))
                    )}
                  </div>
                )}
              </motion.div>
            )}
            {selectedHistory === 'cancelled' && (
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
                    {eachAdvert?.length === 0 || !eachAdvert ? (
                      <div className='text-center'>
                       There are no {selectedHistory} performed tasks.
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
                          onNextPage={() => {
                            const [hours, minutes, seconds] = format(new Date(advert?.started_at), 'HH:mm:ss').split(':').map(Number);
                            const currentDate = new Date();
                            const started_date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes, seconds).getTime();
                            const endTime = started_date + 60 * 60 * 1000;
                            const updateCountdown = () => {
                              const now = Date.now();
                              const timeLeft = Math.max(0, Math.floor((endTime - now) / 1000))
                              if (timeLeft <= 0 || advert?.status === 'completed' || advert?.status === 'cancelled' || advert?.status === 'rejected') {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task-preview')
                               } else {
                                handleRoute(advert?.key, 'dashboard/earn-advert-task')
                               }
                              };
                              updateCountdown();  
                          }}
                          price={advert?.task?.fee}
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
