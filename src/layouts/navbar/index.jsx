/* eslint-disable react/prop-types */
import { useContext } from 'react'

import {
  MdLightMode,
  MdMenu,
  // MdModeNight,
  MdNotifications,
} from 'react-icons/md'
import { dashboardContext } from '../../context/Dashboard'

import UserDropdown from '../components/UserDropdown'
import { Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Logo from '../../components/Logo'
import { CiLogout } from 'react-icons/ci'

const Navbar = ({ onNotificationClick, isOpen, showRightSidebar }) => {
  const { toggleSideBar, sidebarOpen, sidebarMinimized } =
    useContext(dashboardContext)
  const { pathname } = useLocation()
  // minimized sidebar was omitted for now!

  return (
    <div
      className={`right-0 left-0 p-2 shadow-md  sticky top-0 dark:shadow-md  bg-black`}
    >
      <div className='px-3 py-1 '>
        <div className='flex items-center justify-between'>
          <div
            className={`flex items-center justify-between gap-2  p-2 ${
              sidebarMinimized && !sidebarOpen
                ? 'flex  ml-0'
                : sidebarMinimized && sidebarOpen
                ? 'flex  ml-[7.2rem]'
                : sidebarOpen
                ? 'flex '
                : !sidebarMinimized && !sidebarOpen && 'flex  ml-0'
            }`}
          >
            <div className='flex items-center justify-between '>
              <div
                className=' lg:hidden cursor-pointer text-white'
                onClick={() => toggleSideBar()}
              >
                <MdMenu size={25} />
              </div>

              <div
                className={`hidden lg:flex  items-center gap-2  
            ${
              sidebarMinimized
                ? 'lg:ml-[1.5rem]'
                : sidebarOpen
                ? 'lg:ml2'
                : !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
            }
            
            `}
              >
                <div className=' flex lg:hidden  h-full  '>
                  <button className='pl3  py-1 pt-[0.5rem] outline-none rounded'>
                    {' '}
                    <Search className=' text-gray-400' size={20} />
                  </button>
                </div>
                <div className='hidden lg:flex'>
                  <UserDropdown />
                </div>
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
            <div
              className={`flex itemscenter  
            ${
              sidebarMinimized
                ? 'lg:ml-[1.5rem] justifyend'
                : sidebarOpen
                ? 'lg:ml-32'
                : !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
            }
            
            `}
            >
              <div
                className={`w[181px] h-6 justify-start items-center gap-6 inline-flex`}
              >
                <div className='w-6 h-6 relative'>
                  {/* <MdModeNight /> */}
                  <MdLightMode className='text-[#B0B0B0]' size={30} />
                </div>
                <div className='w-6 h-6 relative'>
                  <MdNotifications
                    onClick={onNotificationClick}
                    className='text-[#B0B0B0]'
                    size={30}
                  />{' '}
                </div>

                <div className='justify-start w-full items-center gap-[7px] flex'>
                  <CiLogout
                    size={30}
                    className='w-6 h-6 relative text-[#B0B0B0]'
                  />
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                    Sign Out
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='flex items-center justify-between md:gap-8  gap-3 pr-4'>
            <UserDropdown className='font-medium text-gray-600' />
          </div> */}
          <div className='flex items-center gap-2 lg:hidden'>
            <div className=' flex lg:hidden  h-full  '>
              <button className='pl3  py-1 pt-[0.5rem] outline-none rounded'>
                {' '}
                <Search className=' text-gray-400' size={20} />
              </button>
            </div>
            <div className=''>
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
