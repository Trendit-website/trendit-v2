import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
import OverViewCard from './OverViewCard'
import TransactionCard from './TransactionCard'
import EarnViewCard from './EarnViewCard'
import OrdersViewCard from './OrdersViewCard'

export default function Transactions() {
  const [selected, setSelected] = useState('overview')
  const [selectedHistory, setSelectedHistory] = useState('all')

  return (
    <div>
      <div className='w-full p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
          <div className='self-stretch h[276px] flex-col justify-start items-start gap-2 flex'>
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
                        key='earned'
                        className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                        title='Earned'
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
            {selected === 'earned' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <EarnViewCard />
              </motion.div>
            )}
            {selected === 'orders' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <OrdersViewCard />
              </motion.div>
            )}
          </div>
          <div className='self-stretch mt-40 md:mt-16 py-3 justify-start items-start gap-2 inline-flex'>
            <div className="text-black dark:text-white text-2xl font-medium font-['Campton']">
              Transaction History
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
                      key='earned history'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='Earned'
                    ></Tab>
                    <Tab
                      key='orders history'
                      title='Orders'
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
          <div className='self-stretch px-3 justify-between items-start inline-flex'>
            <div className="w-[145px] text-black dark:text-white dark:text-opacity-50 text-xs font-medium font-['Campton']">
              Type
            </div>
            <div className="w-[860px] hidden md:grid text-black dark:text-white dark:text-opacity-50 text-xs font-medium font-['Campton']">
              Description
            </div>
            <div className="text-black dark:text-white dark:text-opacity-50 text-xs font-medium font-['Campton']">
              Amount
            </div>
          </div>
          <div className='w-full'>
            {selectedHistory === 'all' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <TransactionCard />
              </motion.div>
            )}
            {selectedHistory === 'earned history' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <TransactionCard />
              </motion.div>
            )}
            {selectedHistory === 'orders history' && (
              <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                className='flex flex-col gap-2 w-full'
                transition={{
                  rotate: { duration: 2 },
                  scale: { duration: 0.4 },
                }}
              >
                <TransactionCard />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
