/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import { dashboardContext } from '../context/Dashboard'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import RightSidebar from './components/rightSidebar/RightSideBar'
import { AnimatePresence, motion } from 'framer-motion'
// import useCurrentUser from "../hooks/useCurrentUser";

function RootLayout() {
  const { sidebarOpen, sidebarMinimized, isTablet } =
    useContext(dashboardContext)
  const { pathname } = useLocation()
  const [showRightSidebar, setShowRightSidebar] = useState(false)

  const toggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar)
  }

  return (
    <div className='dark:text-gray-100 dark:bg-slate-700 bglighten duration-200 ease-in-out  overflow-clip'>
      <div className='flex w-full '>
        <Sidebar />
        <motion.div
          layout
          className={`w-full min-h-[93vh] ${
            sidebarMinimized
              ? 'lg:ml-[7.5rem]'
              : sidebarOpen
              ? 'lg:ml-64'
              : !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
          }`}
        >
          <Navbar onNotificationClick={toggleRightSidebar} />

          <main
            className={`py-4 flex-1 z-1 mx-auto w-full overflow-clip
                          ${
                            sidebarOpen && !isTablet
                              ? ' w-[98%] lg:w-[98%] subsemi:w-[90%]   xx:w-[84%]  '
                              : ' max-w-[98%] sm:w-[72%] md:w-[98%] lg:w-[98%] '
                          }
                        
                        `}
          >
            <Outlet />
          </main>
        </motion.div>
        <AnimatePresence mode='wait'>
          {showRightSidebar && (
            <motion.div
              transition={{
                rotate: { duration: 2 },
                scale: { duration: 0.4 },
              }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
            >
              <RightSidebar
                onNotificationClick={() => setShowRightSidebar(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default RootLayout
