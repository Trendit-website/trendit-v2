/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
import ActivitiesCard from './ActivitiesCard'
import MessageCard from './MessageCard'
import NotificationCard from './NotificationCard'
import { AnimatePresence, motion } from 'framer-motion'
import { SearchIcon } from 'lucide-react'
import { Chip } from '@nextui-org/chip'
import {
  useGetActivities,
  useGetMessages,
  useGetNotification,
} from '../../../api/notificationApi'

export default function RightSidebar() {
  const [selected, setSelected] = useState('activities')
  const { data: notification } = useGetNotification()
  const { data: messages } = useGetMessages()
  const { data: activities } = useGetActivities()

  return (
    <>
      <div className='flex-col justify-start items-start inline-flex'>
        <div className=' py-3 bg-lighten dark:bg-neutral-900  flex-col justify-start items-start gap-2 flex'>
          <div className='self-stretch  px-[11px] flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch px-3 py-1.5  bg-lighten dark:bg-zinc-900 rounded justify-start items-center gap-2 inline-flex'>
              <Input
                isClearable
                size='sm'
                radius='lg'
                classNames={{
                  label: 'text-black/50 dark:text-white/90',
                  input: [
                    'bg-transparent',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'shadow-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focused=true]:bg-default-200/50',
                    'dark:group-data-[focused=true]:bg-default/60',
                    '!cursor-text',
                  ],
                }}
                className="text-center px-4 text-zinc-400 text-sm font-medium font-['Campton']"
                placeholder='search...'
                startContent={
                  <SearchIcon className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
                }
              />
            </div>
          </div>

          <div className='self-stretch  flex-col justify-start items-center gap-2 flex'></div>
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
                  //   selectedKey: 'text-fuchsia-400',
                  selectedKey: 'text-green-400',
                  tabContent:
                    'group-data-[selected=true]:text-[#FF6DFB] dark:group-data-[selected=true]:text-fuchsia-400 ',
                }}
                className="text-center text-[#FF6DFB] dark:text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                // color={selected ? 'text-fuchsia-400' : ''}
                color='secondary'
                // className='text-fuchsia-400'
                // className={`tab ${selected ===  'text-fuchsia-400'}`}
                // color='#FF6DFB'
              >
                <Tab key='activities' title='Activities'>
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className='flex flex-col gap-2'
                    transition={{
                      rotate: { duration: 2 },
                      scale: { duration: 0.4 },
                    }}
                  >
                    <ActivitiesCard />
                    {activities?.length > 8 && (
                      <Button
                        variant='light'
                        className="text-center  bg-none mx-auto px-2 py-3 justify-center items-center gap-1 inline-flex text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                      >
                        View more
                      </Button>
                    )}
                  </motion.div>
                </Tab>
                <Tab
                  key='notifications'
                  title={
                    <div>
                      Notifications
                      <Chip
                        size='sm'
                        className='text-black dark:text-white'
                        variant='light'
                      >
                        {notification?.length}
                      </Chip>
                    </div>
                  }
                >
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className='flex flex-col gap-2'
                    transition={{
                      rotate: { duration: 2 },
                      scale: { duration: 0.4 },
                    }}
                  >
                    <NotificationCard />

                    {notification?.length > 8 && (
                      <Button
                        variant='light'
                        className="text-center  bg-none mx-auto px-2 py-3 justify-center items-center gap-1 inline-flex text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                      >
                        View more
                      </Button>
                    )}
                  </motion.div>
                </Tab>
                <Tab
                  key='messages'
                  title={
                    <div>
                      Messages
                      <Chip
                        size='sm'
                        className='text-black dark:text-white'
                        variant='light'
                      >
                        {messages?.length}
                      </Chip>
                    </div>
                  }
                >
                  <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className='flex flex-col gap-2'
                    transition={{
                      rotate: { duration: 2 },
                      scale: { duration: 0.4 },
                    }}
                  >
                    <MessageCard />
                    {messages?.length > 8 && (
                      <Button
                        variant='light'
                        className="text-center  bg-none mx-auto px-2 py-3 justify-center items-center gap-1 inline-flex text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                      >
                        View more
                      </Button>
                    )}
                  </motion.div>
                </Tab>
              </Tabs>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
