import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
import { Input } from '@nextui-org/input'
import { SearchIcon } from 'lucide-react'
import FaqCard from './FaqCard'
import { Button } from '@nextui-org/button'
import { useGetProfile } from '../../api/profileApis'

export default function Support() {
  const [selected, setSelected] = useState('all')
  const { data: userDetails } = useGetProfile()

  return (
    <div>
      <div className=' w-full p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch  flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch dark:border-b dark:border-stone-900 justify-center items-center inline-flex'>
              <div className='grow pt-16 pb-6 flex flex-col justify- items-center'>
                <div className="w-[236px] text-center pb-12 gap-8 text-black dark:text-white text-2xl font-medium font-['Campton']">
                  Hi {userDetails?.lastname}, How can we help?
                </div>
                <div className='self-stretch w-full justify-between items-start gap-4 inline-flex'>
                  <Button className='grow shrink bg-[#FFD0FE] rounded-sm basis-0  px-3 py-[71px] dark:bg-white dark:bg-opacity-5 dark:border dark:border-stone-900 justify-center items-center gap-3 flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M12.25 21C17.2206 21 21.25 16.9706 21.25 12C21.25 7.02944 17.2206 3 12.25 3C7.27944 3 3.25 7.02944 3.25 12C3.25 13.157 3.46832 14.263 3.86601 15.279C4.01547 15.6609 4.07957 16.074 4.01147 16.4784L3.36667 20.3072C3.30957 20.6463 3.60374 20.9404 3.94276 20.8833L7.7716 20.2385C8.17598 20.1704 8.58909 20.2345 8.97095 20.384C9.98701 20.7817 11.093 21 12.25 21Z'
                        className='dark:stroke-[#fff] stroke-black '
                        strokeWidth='2'
                      />
                    </svg>
                    <div className="text-center text-black dark:text-white text-sm font-medium font-['Campton']">
                      Send an email
                    </div>
                  </Button>
                  <Button className='grow shrink bg-[#3793FF] basis-0 rounded-sm  px-3 py-[71px] dark:bg-white bg-opacity-20 dark:bg-opacity-5 dark:border dark:border-stone-900 justify-center items-center gap-3 flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                    >
                      <path
                        d='M8.75 10H16.75M8.75 14H12.75M21.75 12C21.75 16.9706 17.7206 21 12.75 21H4.47413C4.1243 21 3.88262 20.65 4.00656 20.3228L4.90021 17.9642C5.12943 17.3593 5.03826 16.6875 4.74225 16.1122C4.10801 14.8796 3.75 13.4816 3.75 12C3.75 7.02944 7.77944 3 12.75 3C17.7206 3 21.75 7.02944 21.75 12Z'
                        className='dark:stroke-[#fff] stroke-black '
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </svg>
                    <div className="text-center text-black dark:text-white text-sm font-medium font-['Campton']">
                      Start a chat
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
            <div className="text-black dark:text-white text-2xl font-medium font-['Campton']">
              Frequently asked questions
            </div>
          </div>
          <div className='w-full w[1107px] h-9 px-3 py-1.5 dark:bg-zinc900 rounded justify-start items-center gap-2 inline-flex'>
            <Input
              startContent={<SearchIcon />}
              placeholder=' Search for topics'
              size='sm'
              classNames={{
                dataFocused: 'dark:dark:bg-black',
                input: [
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'placeholder:text-gray-700/50 dark:placeholder:text-white/60',
                ],
                innerWrapper: 'bg-transparent',
                inputWrapper: [
                  'dark:shadow-xl',
                  'dark:bg-zinc-800',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'dark:hover:bg-zinc-900',
                  'hover:bg-gray-200',
                  'dark:hover:bg-zinc-800',
                  'group-data-[focused=true]:bg-zinc-800',
                  'dark:group-data-[focused=true]:bg-zinc-800',
                  '!cursor-text',
                ],
              }}
              className="text-center text-zinc-400 text-sm font-medium font-['Campton']"
            />
          </div>
          <div className='self-stretch dark:border-b dark:border-stone-900 justify-between items-center inline-flex'>
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
                    className="text-center text-fuchsia-400 text-xs font-bold font-['Campton']"
                    color='secondary'
                  >
                    <Tab
                      key='all'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='All'
                    ></Tab>
                    <Tab
                      key='earning'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='Earning'
                    ></Tab>
                    <Tab
                      key='advertising'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='Advertising'
                    ></Tab>
                    <Tab
                      key='orders'
                      title='Orders'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                    ></Tab>
                  </Tabs>
                </div>
              </AnimatePresence>
            </div>
          </div>

          <div className='w-full'>
            {selected === 'all' &&
              [1, 2, 3].map((key) => {
                return (
                  <motion.div
                    key={key}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className='flex flex-col gap-2 w-full'
                    transition={{
                      rotate: { duration: 2 },
                      scale: { duration: 0.4 },
                    }}
                  >
                    <FaqCard />
                  </motion.div>
                )
              })}
            {selected === 'earning' &&
              [1, 2, 3].map((key) => {
                return (
                  <motion.div
                    key={key}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className='flex flex-col gap-2 w-full'
                    transition={{
                      rotate: { duration: 2 },
                      scale: { duration: 0.4 },
                    }}
                  >
                    <FaqCard />
                  </motion.div>
                )
              })}
            {selected === 'advertising' &&
              [1, 2, 3].map((key) => {
                return (
                  <motion.div
                    key={key}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className='flex flex-col gap-2 w-full'
                    transition={{
                      rotate: { duration: 2 },
                      scale: { duration: 0.4 },
                    }}
                  >
                    <FaqCard />
                  </motion.div>
                )
              })}
            {selected === 'orders' &&
              [1, 2, 3].map((key) => {
                return (
                  <motion.div
                    key={key}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    className='flex flex-col gap-2 w-full'
                    transition={{
                      rotate: { duration: 2 },
                      scale: { duration: 0.4 },
                    }}
                  >
                    <FaqCard />
                  </motion.div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
