import { Image } from '@nextui-org/react'
import logo from '../assets/Logo_Default.svg'
import lightLogo from '../assets/light_Logo.svg'
import { useDarkMode } from 'usehooks-ts'
import { AppearanceContext} from '../providers/AppearanceProvider'
import { useContext } from 'react'

export default function Logo() {
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
}
