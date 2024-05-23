import { Image } from '@nextui-org/react'
import logo from '../assets/Logo_Default.svg'
import lightLogo from '../assets/light_Logo.svg'
import { useContext, useEffect } from 'react'
import {
  AppearanceContext,
  SetAppearanceContext,
} from '../providers/AppearanceProvider'
import API from '../services/AxiosInstance'
import toast from 'react-hot-toast'

export default function Logo() {
  const userPrefrences = useContext(AppearanceContext)
  const setPrefrence = useContext(SetAppearanceContext)

  useEffect(() => {
    if (userPrefrences) {
      if (userPrefrences === 'light') {
        document.body.classList.remove('dark')
        document.body.classList.remove('text-foreground')
        document.body.classList.remove('bg-background')
      } else if (userPrefrences === 'dark') {
        document.body.classList.add('dark')
        document.body.classList.add('text-foreground')
        document.body.classList.add('bg-background')
      }
    }
  }, [userPrefrences])

  const toggleAppearance = () => {
    const newPreference = userPrefrences === 'dark' ? 'light' : 'dark'
    API.post('/settings/preferences', {
      setting_name: 'appearance',
      value: newPreference,
    })
      .then(() => {
        // toast.success(response.data?.message)
        setPrefrence(newPreference)
      })
      .catch((error) =>
        toast.error(error.response?.data?.message ?? error.message)
      )
  }

  return (
    <div>
      {/* {!isDarkMode ? (
        <Image className='w-20 md:w-full ml-3' src={lightLogo} />
      ) : (
        <Image className='w-20 md:w-full ml-3' src={logo} />
      )} */}

      <div onClick={toggleAppearance}>
        {userPrefrences === 'dark' ? (
          <Image className='w-20 md:w-full ml-3' src={logo} />
        ) : (
          <Image className='w-20 md:w-full ml-3' src={lightLogo} />
        )}
      </div>
    </div>
  )
}
