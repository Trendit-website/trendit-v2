import { Image } from '@nextui-org/react'
import logo from '../assets/Logo_Default.svg'
import useColorMode from '../hooks/useColorMode'
import lightLogo from '../assets/light_Logo.svg'
import { useEffect, useState } from 'react'

export default function Logo() {
  const [colorMode] = useColorMode()
  const [logosrc, setLogosrc] = useState('')

  useEffect(() => {
    if (colorMode === 'light') {
      setLogosrc(lightLogo)
      console.log('light mode 2')
    } else {
      console.log('dark mode 1')
      setLogosrc(logo)
    }
  }, [colorMode])

  return (
    <div>
      <Image
        src={logosrc}
        className='w-20 md:w-full ml-3'
        alt='logo'
        width={100}
        height={100}
      />
      {/* {colorMode === 'light' ? (
        <Image className='w-20 md:w-full ml-3' src={lightLogo} />
      ) : (
        <Image className='w-20 md:w-full ml-3' src={logo} />
      )} */}
    </div>
  )
}
