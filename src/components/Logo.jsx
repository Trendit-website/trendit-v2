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
import { useNavigate } from 'react-router-dom'

export default function Logo() {
  const userPrefrences = useContext(AppearanceContext)
  const setPrefrence = useContext(SetAppearanceContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (userPrefrences) {
       userPrefrences === 'light' || localStorage.getItem('appearance')  === 'light' ? ( 
        document.body.classList.remove('dark'),
        document.body.classList.remove('text-foreground'),
        document.body.classList.remove('bg-background')
      )
       : (
        document.body.classList.add('dark'),
        document.body.classList.add('text-foreground'),
        document.body.classList.add('bg-background')
      )
      
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
      <div onClick={() => localStorage.removeItem('appearance')}>
        {userPrefrences === 'dark' || localStorage.getItem('appearance') === 'dark' ? (
          <Image className='w-20 md:w-full ml-3' src={logo} />
        ) : (
          <Image className='w-20 md:w-full ml-3' src={lightLogo} />
        )}
      </div>
    </div>
  )
}

{
  /* import { useDarkMode } from 'usehooks-ts'
import { AppearanceContext} from '../providers/AppearanceProvider'
import { useContext } from 'react' */
}

{
  /* export default function Logo() {
  const { isDarkMode } = useDarkMode(false)
  const apperance = useContext(AppearanceContext)

  return (
    <div>
      {apperance === 'dark' ? (
        <Image className='w-20 md:w-full ml-3' src={logo} />
      ) : (
        <Image className='w-20 md:w-full ml-3' src={lightLogo} />
      )}
    </div>
  )
} */
}
