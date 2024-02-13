import {
  MdContactSupport,
  MdHomeRepairService,
  MdSupportAgent,
} from 'react-icons/md'
import { BsChatTextFill } from 'react-icons/bs'
import { GiLoveHowl, GiRamProfile, GiTrade } from 'react-icons/gi'
import { LuNewspaper } from 'react-icons/lu'
import { LogOutIcon, SettingsIcon } from 'lucide-react'
import { FaQq } from 'react-icons/fa'
// import { app_routes } from '../../utilities/app_routes'

export const defaultMenu = [
  // latest routes

  // application 3 sub end

  // home 2 sub
  {
    title: '',
    name: 'Home',
    route: '/home',
    icon: LuNewspaper,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Earn',
    route: '/earn',
    icon: LuNewspaper,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Advertise',
    route: '/advertise',
    icon: LuNewspaper,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Resell',
    route: '/resell',
    icon: LuNewspaper,
    withSubMenu: false,
  },

  {
    title: 'Market place',
    name: 'Orders',
    // routeMerge: true,
    icon: GiRamProfile,
    withSubMenu: false,
    route: '/orders',
  },
  {
    title: '',
    name: 'Grow',
    // routeMerge: true,
    icon: GiRamProfile,
    withSubMenu: false,
    route: '/grow',
  },
  {
    title: '',
    name: 'Giveaways',
    // routeMerge: true,
    icon: GiRamProfile,
    withSubMenu: false,
    route: '/giveaways',
  },

  {
    title: 'Quick Actions',
    name: 'Profile',
    // routeMerge: true,
    icon: GiRamProfile,
    withSubMenu: false,
    route: '/profile',
  },
  {
    title: '',
    name: 'Refer Link',
    // routeMerge: true,
    icon: GiLoveHowl,
    withSubMenu: false,
    route: '/refer-link',
  },
  {
    title: '',
    name: 'Setting',
    // routeMerge: true,
    icon: SettingsIcon,
    withSubMenu: false,
    route: '/settings',
  },

  // home 2 sub end

  // applications sub 2

  {
    title: 'Others',
    name: 'FAQa',
    // routeMerge: true,
    icon: FaQq,
    withSubMenu: false,
    route: '/faqa',
  },
  {
    title: '',
    name: 'Chat with Support',
    // routeMerge: true,
    icon: MdContactSupport,
    withSubMenu: false,
    route: '/chat-with-support',
  },
  {
    title: '',
    name: 'Sign Out',
    // routeMerge: true,
    icon: LogOutIcon,
    withSubMenu: false,
    route: '/sign-out',
  },
]
