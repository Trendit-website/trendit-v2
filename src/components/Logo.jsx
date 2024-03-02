import { Image } from '@nextui-org/react'
import logo from '../assets/Logo_Default.svg'
import lightLogo from '../assets/light_Logo.svg'
import { useDarkMode } from 'usehooks-ts'

export default function Logo() {
  const { isDarkMode } = useDarkMode(false)

  return (
    <div>
      {!isDarkMode ? (
        <Image className='w-20 md:w-full ml-3' src={lightLogo} />
      ) : (
        <Image className='w-20 md:w-full ml-3' src={logo} />
      )}
    </div>
  )
}
