/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useCountdown } from 'usehooks-ts'

export default function Timer({ onDone }) {
  const [count, { startCountdown, stopCountdown }] = useCountdown({
    countStart: 3600, // 1 hour in seconds
    intervalMs: 1000,
  })
  const hours = Math.floor(count / 3600)
  const minutes = Math.floor((count % 3600) / 60)
  const seconds = count % 60
  useEffect(() => {
    startCountdown() // Start the countdown when component mounts
    return () => {
      stopCountdown() // Stop the countdown when component unmounts
    }
  }, [])

  useEffect(() => {
    if (count === 0 && onDone) {
      onDone()
    }
  }, [count])
  return (
    <div>
      <div className='w-full px-3 py-6 bg-red-300 rounded-lg flex-col justify-start items-center gap-3 inline-flex'>
        <svg
          className={`countdown-icon ${count > 0 ? 'shake-animation' : ''}`}
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='17'
          viewBox='0 0 17 17'
          fill='none'
        >
          <path
            d='M3.54297 1.41663H13.4596M3.54297 15.5833H13.4596M4.2513 1.41663V4.24996C4.2513 6.59717 6.15409 8.49996 8.5013 8.49996M12.7513 15.5833V12.75C12.7513 10.4027 10.8485 8.49996 8.5013 8.49996M8.5013 8.49996C6.15409 8.49996 4.2513 10.4027 4.2513 12.75V15.5833M8.5013 8.49996C10.8485 8.49996 12.7513 6.59717 12.7513 4.24996V1.41663M10.6263 4.24996C10.6263 5.42356 9.67491 6.37496 8.5013 6.37496C7.3277 6.37496 6.3763 5.42356 6.3763 4.24996M6.3763 13.4583H10.6263'
            stroke='black'
            strokeLinecap='round'
          />
        </svg>
        <div className="self-stretch text-center text-black text-xs font-semibold font-['Campton']">
          {`${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </div>
      </div>
    </div>
  )
}
