import { Spinner } from '@nextui-org/react'

export default function LoadingState() {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-blue-200'>
      <div className='flex items-center justify-center '>
        <Spinner classNames={{ wrapper: 'w-[100px] h-[100px] ' }} />
      </div>
    </div>
  )
}
