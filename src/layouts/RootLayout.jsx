/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react'
import { dashboardContext } from '../context/Dashboard'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
// import useCurrentUser from "../hooks/useCurrentUser";

function RootLayout() {
  const { sidebarOpen, sidebarMinimized, isTablet } =
    useContext(dashboardContext)
  const { pathname } = useLocation()

  return (
    <div className='dark:text-gray-100 dark:bg-slate-700 bg-lighten duration-200 ease-in-out z-1 overflow-visible'>
      {pathname.includes('/message_rooms') ||
      pathname === '/engage/memos' ? null : (
        <Navbar />
      )}
      <div className='flex w-full '>
        <Sidebar />
        <div
          className={`w-full min-h-[93vh] ${
            sidebarMinimized
              ? 'lg:ml-[7.5rem]'
              : sidebarOpen
              ? 'lg:ml-64'
              : !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
          }`}
        >
          {
            //  ${  (!sidebarMinimized &&!sidebarOpen) &&'lg:mx-auto' }
            pathname.includes('/home') ? (
              <main
                className={`py-4 flex-1  mx-auto w-full overflow-clip
                          ${
                            sidebarOpen && !isTablet
                              ? ' w-[98%] lg:w-[73%] subsemi:w-[90%]   xx:w-[84%]  '
                              : ' max-w-[90%] sm:w-[72%] md:w-[75%] lg:w-[70%] '
                          }
                        
                        `}
              >
                <Outlet />
              </main>
            ) : pathname.includes('/message_rooms') ? (
              <main
                className={`py-0 flex-1 max-w-[100%] overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
                }`}
              >
                <Outlet />
              </main>
            ) : pathname === '/engage/memos' ? (
              <main
                className={`py-0 flex-1 max-w-[100%] overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && 'lg:ml-[16rem]'
                }`}
              >
                <Outlet />
              </main>
            ) : (
              <main
                className={`py-4 flex-1 px-4 max-w-[90%]   overflow-clip mx-auto ${
                  !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
                }`}
              >
                <Outlet />
              </main>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default RootLayout
