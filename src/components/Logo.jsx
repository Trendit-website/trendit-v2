import { Image } from '@nextui-org/react'
import logo from '../assets/Logo_Default.svg'

export default function Logo() {
  return (
    <div>
      <Image className='w-20 md:w-full ml-3' src={logo} />
    </div>
  )
}
