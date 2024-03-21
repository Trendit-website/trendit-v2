import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
import GeneralForm from './GeneralForm'
import SecuretyForm from './SecuretyForm'
import NotificationForm from './NotificationForm'
import BankDetailsForm from './BankDetailsForm'
import PrefrenceForm from './PrefrenceForm'

export default function Settings() {
  const [selected, setSelected] = useState('generalform')

  return (
    <div>
      <div className=' w-full p-3 bg-white dark:bg-neutral-900 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='self-stretch px-4 md:px-0 grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
            <div className="text-black dark:text-white text-2xl font-medium font-['Campton']">
              Profile Settings
            </div>
          </div>
          <div className='self-stretch overflow-auto borderb borderstone-900 justify-between items-center inline-flex'>
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
                      tabList: '  bordered py-2',
                      cursor: ' bg-fuchsia-400',
                      tabContent:
                        'group-data-[selected=true]:text-fuchsia-400 ',
                    }}
                    className="text-center overflow-auto text-[#CB29BE] dark:text-fuchsia-400 text-xs font-bold font-['Campton']"
                    color='secondary'
                  >
                    <Tab
                      key='generalform'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='General'
                    ></Tab>
                    <Tab
                      key='security'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='Security'
                    ></Tab>
                    <Tab
                      key='notifications'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='Notifications'
                    ></Tab>
                    <Tab
                      key='bank details'
                      title='Bank details'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                    ></Tab>
                    <Tab
                      key='preferences'
                      title='Preferences'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                    ></Tab>
                  </Tabs>
                </div>
              </AnimatePresence>
            </div>
            {/* <div className='p-2 justify-center items-center gap-1 flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
              >
                <path
                  d='M15 5.75L7.10355 13.6464C6.90829 13.8417 6.59171 13.8417 6.39645 13.6464L3 10.25'
                  className='dark:stroke-[#FFD0FE] stroke-[#FF6DFB] '
                  strokeLinecap='round'
                />
              </svg>
              <div className="text-center text-[#FF6DFB] dark:text-fuchsia-200 text-[12.83px] font-bold font-['Campton']">
                Save
              </div>
            </div> */}
          </div>

          {selected === 'generalform' && (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              className='flex flex-col gap-2 w-full'
              transition={{
                rotate: { duration: 2 },
                scale: { duration: 0.4 },
              }}
            >
              <GeneralForm />
            </motion.div>
          )}
          {selected === 'security' && (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              className='flex flex-col gap-2 w-full'
              transition={{
                rotate: { duration: 2 },
                scale: { duration: 0.4 },
              }}
            >
              <SecuretyForm />
            </motion.div>
          )}
          {selected === 'notifications' && (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              className='flex flex-col gap-2 w-full'
              transition={{
                rotate: { duration: 2 },
                scale: { duration: 0.4 },
              }}
            >
              <NotificationForm />
            </motion.div>
          )}
          {selected === 'bank details' && (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              className='flex flex-col gap-2 w-full'
              transition={{
                rotate: { duration: 2 },
                scale: { duration: 0.4 },
              }}
            >
              <BankDetailsForm />
            </motion.div>
          )}
          {selected === 'preferences' && (
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              className='flex flex-col gap-2 w-full'
              transition={{
                rotate: { duration: 2 },
                scale: { duration: 0.4 },
              }}
            >
              <PrefrenceForm />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
