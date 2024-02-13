/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useContext, useEffect } from 'react'
import { useRef } from 'react'
import SubMenu from './SubMenu'
import { motion } from 'framer-motion'
import { defaultMenu } from './routes'

import { NavLink, useLocation } from 'react-router-dom'
import { dashboardContext } from '../../context/Dashboard'
// import { PiArrowsLeftRightBold } from "react-icons/pi";

import SubMenuSidebar from '../submenuSidebar'
// import UserDropDownSidebar from "../components/UserDropDownSidebar";
import { Search } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'

const Sidebar = () => {
  const navigate = useNavigate()
  const {
    sidebarOpen,
    setSidebarOpen,
    isTablet,
    sidebarMinimized,
    // minimizeSidebar, // removed for now
    // setShowminimizedsubMenu,
  } = useContext(dashboardContext)

  const sidebarRef = useRef()
  const { pathname } = useLocation()
  // console.log(pathname)
  // //the condition side menu is here
  // const sideMenu = pathname.includes("payroll") ? payrollMenu : pathname.includes("hr") ? hrMenu : defaultMenu;
  const sideMenu = defaultMenu

  useEffect(() => {
    if (isTablet) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isTablet])

  const overlayClicked = () => {
    setSidebarOpen(false)
    // setShowminimizedsubMenu(false);
  }

  // const foldSidebar = () => {
  //   minimizeSidebar();
  // };

  useEffect(() => {
    isTablet && setSidebarOpen(false)
  }, [pathname])

  const Nav_animation = isTablet
    ? {
        open: {
          x: 0,
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -350,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
        minimize: {
          x: 0,
          width: '7.5rem',
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: '16rem',
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: '0rem',
          transition: {
            damping: 40,
          },
        },
        minimize: {
          width: '7.5rem',
          transition: {
            damping: 40,
          },
        },
      }

  // const routeToHome = () => {
  //   navigate("/engage/posts");
  // };

  return (
    <div className="relative bg-neutral-900 shadow-sidebar font-['Campton']">
      <div
        onClick={() => overlayClicked()}
        className={`lg:hidden fixed inset-0 max-h-screen z-[90] bg-chatoverlay cursor-pointer   ${
          sidebarOpen ? 'block' : 'hidden'
        } `}
      ></div>

      <SubMenuSidebar />

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTablet ? -350 : 0 }}
        animate={
          sidebarMinimized && sidebarOpen
            ? 'minimize'
            : !sidebarMinimized && sidebarOpen
            ? 'open'
            : 'closed'
        }
        className='shadow-sidebar group text-zinc-400  lg:z-[49] z-[91] max-w-[16rem]  w-[16rem] 
             fixed top-0 left-0
           h-screen  dark:!text-gray-100 bg-neutral-900 border-r border-stone-900 '
      >
        {/* top bar */}

        <div className='flex flex-col  h-full '>
          <ul className='whitespace-pre text-[0.9rem] flex flex-col overflow-x-hidden font-medium  scrollbar-thin scrollbar-thumb-transparent  group-hover:scrollbar-thumb-[#7D8084] scrollbar-track-transparent menuScrollBar  h-full  px-0  pb-20'>
            {/* logo */}
            <div
              className={`flex flex-col bg-sidebarBg  ${
                sidebarMinimized && ' h-28'
              }`}
            >
              <div
                className={`w-full   flex-col gap-4 justify-center p-1 px-3 mb-16 items-center`}
              >
                <div
                  className={`mr-8 py-2  pt-4 cursor-pointer  ${
                    sidebarMinimized ? 'hidden' : 'block'
                  }`}
                  // onClick={routeToHome}
                >
                  <Logo />
                </div>
              </div>
            </div>
            {/* logo */}

            {sideMenu?.map((route, i) => (
              <Fragment key={i}>
                <div className='p-0'>
                  {!sidebarMinimized && route?.title && (
                    <small
                      className={`mx-[1.2rem]  text-zinc-400 font-bold text-sm inline-block px-2 mb-2 font-['Campton'] ${
                        i === 0 ? 'pt-3' : 'pt-7'
                      }`}
                    >
                      {route.title?.toLocaleUpperCase()}
                    </small>
                  )}

                  {route.withSubMenu ? (
                    <>
                      <div className=' w-full p-0 '>
                        {route?.submenu?.map((menu, i) => (
                          <div key={i} className='flex flex-col gap-1'>
                            <SubMenu
                              data={menu}
                              routeMerge={route?.routeMerge}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <li
                        className={` ${
                          sidebarMinimized &&
                          'border-b border-gray-800 py-0   hover:text-white '
                        }`}
                      >
                        <NavLink
                          to={route.route}
                          className={`group/navitem ${
                            sidebarMinimized
                              ? 'flex flex-col text-center justify-center hover:no-underline   gap-1 cursor-pointer  duration-300 font-medium text-gray-400'
                              : ' p-3 link flex gap-2'
                          }`}
                        >
                          <route.icon
                            // strokeWidth={pathname.includes(route.route) && 4}
                            size={sidebarMinimized ? 30 : 20}
                            className={`min-w-max group-hover/navitem:text-menuItemColor ${
                              sidebarMinimized && 'mx-auto'
                            }
                           
                            
                            ${
                              pathname.includes(route.route)
                                ? 'text-white'
                                : 'text-menuItemIcon'
                            }`}
                          />

                          {route.name}
                        </NavLink>
                      </li>
                    </>
                  )}
                </div>
              </Fragment>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar
