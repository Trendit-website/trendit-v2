import { Spinner } from '@nextui-org/react'
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
      console.log(trxref, 'trxref')
      if (trxref) {
        try {
          // Use the retrieved trxref to call verifyPayment
          const res = await verifyPayment({ reference: trxref })
          console.log(res)
          console.log('Payment verified successfully.')
          if (res?.data?.status) {
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
        <Spinner classNames={{ wrapper: 'w-[100px] h-[100px] ' }} />
        <p className='dark:text-white text-white'>Confirming Payment...</p>
      </div>
    </div>
  )
}
