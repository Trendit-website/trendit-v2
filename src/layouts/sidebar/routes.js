import { MdContactSupport } from 'react-icons/md'
import {
  CassetteTape,
  HomeIcon,
  MousePointerClick,
  SettingsIcon,
} from 'lucide-react'
import { TbSpeakerphone } from 'react-icons/tb'
import { BiShare } from 'react-icons/bi'
import { RiMenuSearchLine } from 'react-icons/ri'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { IoStatsChart } from 'react-icons/io5'
import { RiHeartsLine } from 'react-icons/ri'

export const defaultMenu = [
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
    route: '/dashboard/orders',
  },
  {
    title: '',
    name: 'Grow',
    // routeMerge: true,
    icon: FaArrowTrendUp,
    withSubMenu: false,
    route: '/dashboard/grow',
  },
  {
    title: '',
    name: 'Giveaways',
    // routeMerge: true,
    icon: MousePointerClick,
    withSubMenu: false,
    route: '/dashboard/giveaways',
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
    route: 'settings',
  },
  {
    title: '',
    name: 'Support',
    // routeMerge: true,
    icon: MdContactSupport,
    withSubMenu: false,
    route: 'support',
  },
]
