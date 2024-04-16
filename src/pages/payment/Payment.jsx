// import { Spinner } from '@nextui-org/react'
import { useEffect } from 'react'
import { useVerifyPayment } from '../../api/walletApi'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Payment() {
  const { mutateAsync: verifyPayment } = useVerifyPayment()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const newPage = localStorage.getItem('paystack_redirect')
  // Inside the component handling the page opened by the authorization URL
  console.log(newPage, 'new page')
  useEffect(() => {
    const verifyPaymentOnLoad = async () => {
      // Retrieve the trxref from the URL

      const trxref = searchParams.get('trxref')
      if (trxref) {
        try {
          // Use the retrieved trxref to call verifyPayment
          const res = await verifyPayment({ reference: trxref })
          if (
            res?.data?.status &&
            res?.data?.payment_type === 'task-creation'
          ) {
            navigate(`/dashboard/advertise-history`)
          } else if (res?.data?.status) {
            navigate(`${newPage}`)
          }
          // You can perform further actions after successful verification
        } catch (error) {
          console.error('Error verifying payment:', error)
          // Handle error if verification fails
        }
      } else {
        console.error('trxref not found in URL.')
        // Handle case when trxref is not found in the URL
      }
    }

    // Call verifyPaymentOnLoad when the component mounts
    verifyPaymentOnLoad()
  }, []) // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className='bg-stone-800 flex items-center justify-center w-full h-screen'>
      <div className='flex items-center flex-col justify-center '>
        {/* <Spinner classNames={{ wrapper: 'w-[100px] h-[100px] ' }} /> */}
        <svg
          className='animate-spin h-5 w-5 text-current'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          />
          <path
            className='opacity-75'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            fill='currentColor'
          />
        </svg>
        <p className='dark:text-white text-white'>Confirming Payment...</p>
      </div>
    </div>
  )
}
