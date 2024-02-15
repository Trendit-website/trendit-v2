import { MdContactSupport } from 'react-icons/md'
import {
  CassetteTape,
  HomeIcon,
  LogOutIcon,
  MousePointerClick,
  SettingsIcon,
} from 'lucide-react'
import { FaQq } from 'react-icons/fa'
// import { app_routes } from '../../utilities/app_routes'
import { TbSpeakerphone } from 'react-icons/tb'
import { BiShare } from 'react-icons/bi'
import { RiMenuSearchLine } from 'react-icons/ri'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { IoStatsChart } from 'react-icons/io5'
import { RiHeartsLine } from 'react-icons/ri'

export const defaultMenu = [
  // latest routes

  // application 3 sub end

  // home 2 sub
  {
    title: '',
    name: 'Home',
    route: '/dashboard',
    icon: HomeIcon,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Earn',
    route: 'earn',
    icon: CassetteTape,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Advertise',
    route: 'advertise',
    icon: TbSpeakerphone,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Resell',
    route: 'resell',
    icon: BiShare,
    withSubMenu: false,
  },

  {
    title: 'Market place',
    name: 'Orders',
    // routeMerge: true,
    icon: RiMenuSearchLine,
    withSubMenu: false,
    route: '/orders',
  },
  {
    title: '',
    name: 'Grow',
    // routeMerge: true,
    icon: FaArrowTrendUp,
    withSubMenu: false,
    route: '/grow',
  },
  {
    title: '',
    name: 'Giveaways',
    // routeMerge: true,
    icon: MousePointerClick,
    withSubMenu: false,
    route: '/giveaways',
  },

  {
    title: 'Quick Actions',
    name: 'Transactions',
    // routeMerge: true,
    icon: IoStatsChart,
    withSubMenu: false,
    route: 'transactions',
  },
  {
    title: '',
    name: 'Refer Link',
    // routeMerge: true,
    icon: RiHeartsLine,
    withSubMenu: false,
    route: 'refer-link',
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
    name: 'Support',
    // routeMerge: true,
    icon: MdContactSupport,
    withSubMenu: false,
    route: 'support',
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
