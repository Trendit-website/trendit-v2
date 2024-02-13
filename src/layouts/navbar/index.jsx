import { useContext } from 'react'

import { MdMenu } from 'react-icons/md'
import { dashboardContext } from '../../context/Dashboard'

import UserDropdown from '../components/UserDropdown'
import { Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import Logo from '../../components/Logo'

const Navbar = () => {
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
              {/* logo */}
              <div className='hidden w-32 lg:flex'>
                <Logo />
              </div>
              <div
                className={`hidden lg:flex  items-center gap-2  
            ${
              sidebarMinimized
                ? 'lg:ml-[1.5rem]'
                : sidebarOpen
                ? 'lg:ml-32'
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
              <div className='h[31px] justify-start items-start gap-6 flex'>
                <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                  <div className='justify-start items-start gap-2 inline-flex'>
                    <div className="text-center text-white text-[12.83px] font-bold font-['Campton']">
                      91
                    </div>
                    <div className='justify-start items-start flex'>
                      <div className='w-[11px] h-[11px] relative' />
                      <div className="text-center text-green-500 text-[10px] font-normal font-['Campton']">
                        53.3%
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                    Tasked Done
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                  <div className='justify-start items-start gap-2 inline-flex'>
                    <div className="text-center text-white text-[12.83px] font-bold font-['Campton']">
                      3
                    </div>
                    <div className='justify-start items-start flex'>
                      <div className='w-[11px] h-[11px] relative' />
                      <div className="text-center text-orange-600 text-[10px] font-normal font-['Campton']">
                        53.3%
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                    Task created
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-1.5 inline-flex'>
                  <div className='justify-start items-start gap-2 inline-flex'>
                    <div className="text-center text-white text-[12.83px] font-bold font-['Campton']">
                      1,456
                    </div>
                    <div className='justify-start items-start flex'>
                      <div className='w-[11px] h-[11px] relative' />
                      <div className="text-center text-orange-600 text-[10px] font-normal font-['Campton']">
                        53.3%
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                    Followers
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
