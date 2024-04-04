import { MousePointerClick } from 'lucide-react'
import { TbSpeakerphone } from 'react-icons/tb'
import { BiShare } from 'react-icons/bi'
import { RiMenuSearchLine } from 'react-icons/ri'
import {
  EarnIcon,
  HomeIcon,
  GrowIcon,
  TransIcon,
  SettingIcon,
  ReferalIcon,
  SupportIcon,
} from '../../assets/EarnIcon'

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
    route: '/dashboard/earn',
    icon: EarnIcon,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Advertise',
    route: '/dashboard/advertise',
    icon: TbSpeakerphone,
    withSubMenu: false,
  },
  {
    title: '',
    name: 'Resell',
    route: '/dashboard/resell',
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
    icon: GrowIcon,
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
    icon: TransIcon,
    withSubMenu: false,
    route: '/dashboard/transactions',
  },
  {
    title: '',
    name: 'Refer Link',
    // routeMerge: true,
    icon: ReferalIcon,
    withSubMenu: false,
    route: '/dashboard/refer-link',
  },
  {
    title: '',
    name: 'Setting',
    // routeMerge: true,
    icon: SettingIcon,
    withSubMenu: false,
    route: '/dashboard/settings',
  },
  {
    title: '',
    name: 'Support',
    // routeMerge: true,
    icon: SupportIcon,
    withSubMenu: false,
    route: '/dashboard/support',
  },
]
