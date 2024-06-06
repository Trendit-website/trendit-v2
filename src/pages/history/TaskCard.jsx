/* eslint-disable react/prop-types */
// import { useGetAdvert } from '../../api/advertApi'
// import { format } from 'date-fns'

import Icons from "../../components/Icon";
import { useDisclosure } from "@nextui-org/react";
import AdvertPaymentModal from "../advertise/components/AdvertPaymentModal";
import { useCreateAdvert, useCreateAdvertPaymentWallet } from "../../api/advertApi";
import toast from "react-hot-toast";
import { useState, useContext } from "react";
import { AppearanceContext } from "../../providers/AppearanceProvider";

export default function TaskCard({
  goal,
  caption,
  when,
  status,
  onNextPage,
  platform,
  payment_status,
  account_link,
  fee,
  fee_paid,
  engagements_count,
  posts_count,
  total_allocated,
  task_type,
  target_country,
  target_state,
  authorization_url,
  gender,
  religion
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const completePayment = () => {
    onOpen()
  }
  const appreance = useContext(AppearanceContext)
  const [media, setMedia] = useState(null)
  const { mutateAsync: createAdvert, isPending } = useCreateAdvert()
  const { mutateAsync: createAdvertWithWallet } = useCreateAdvertPaymentWallet()
  const handlePaymentSuccess = async () => {
    try {
      // const data = watch()
      const formData = new FormData()
      // Append selected image to formData if available
      if (media) {
        formData.append('media', media)
      }
      // Append other form fields
      formData.append('task_type', task_type)
      formData.append('target_country', target_country)
      formData.append('target_state', target_state)

      formData.append('platform', platform)
      formData.append('amount', fee_paid)
      formData.append('engagements_count', engagements_count)
      formData.append('posts_count', posts_count)
      formData.append('gender', gender)
      formData.append('caption', caption)
      formData.append('religion', religion)
      formData.append('goal', goal)
      formData.append('account_link', account_link)

      const res = await createAdvert(formData)
      if (res?.data.status) {
        toast.success(res.data.message, {
          duration: 20000,
        })
        onClose()

        // if (authorizationUrl) {
        //   localStorage.setItem('paystack_redirect', window.location.pathname)
        //   openInNewTab(authorizationUrl) // Call the function to open in a new tab

        // }
        const authorizationUrl = authorization_url
        if (authorizationUrl) {
          localStorage.setItem('paystack_redirect', window.location.pathname)
          const newTab = window.open(authorizationUrl) // Open the URL in a new tab
          newTab.opener = window
          window.addEventListener('message', (event) => {
            console.log('Received message in original tab:', event.data)
            if (event.data === 'closeOriginalTab') {
              console.log('Closing original tab...')
              window.close()
              // newTab.close()
            }
          })
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message, {
        position: 'top-right',
        duration: 20000,
      })
    }
  }

  const handlePaymentTenditSuccess = async () => {
    try {
      // const data = watch()
      const formData = new FormData()
      // Append selected image to formData if available
      if (media) {
        formData.append('media', media)
      }
      // Append other form fields
      formData.append('task_type', 'advert')
      formData.append('target_country', target_country)
      formData.append('target_state', target_state)

      formData.append('platform', platform)
      formData.append('amount', fee_paid)
      formData.append('engagements_count', engagements_count)
      formData.append('posts_count', posts_count)
      formData.append('gender', gender)
      formData.append('caption', caption)
      formData.append('religion', religion)
      formData.append('goal', goal)
      formData.append('account_link', account_link)

      const res = await createAdvertWithWallet(formData)
      if (res?.data.status) {
        toast.success(res.data.message, {
          duration: 20000,
        })
        //  navigate('dashboard/advertise-history')
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message, {
        duration: 20000,
      })
    }
  }
  // ${appreance === 'dark' ? 'bg-[#2F2F2F6B] bg-opacity30' : 'bg-black'}
  return (
    <>
      <div
        className={`w-full cursor-pointer p-3 ${appreance === 'dark' ? '' : 'text-white'} bg-[#2F2F2F6B]  bg-opacity30 rounded-lg flex-col justify-start items-start gap-2 inline-flex`}
      >
            <div className="flex flex-col lg:flex-row items-start justify-between w-11/12 pl-4">
                <div className="flex items-start gap-x-8">
                      <Icons type={platform} />
                    <div className="flex flex-col gap-y-2 text-sm">
                        <p className={`${appreance === 'dark' ? 'text-[#909090]': 'text-white'}`}>{when}</p>
                        <p className="font-bold text-sm">{goal}</p>
                        <div className="flex items-center gap-x-2">
                            <Icons type='wallet' /> <span className={`${appreance === 'dark' ? 'text-[#909090]': 'text-white'}`}>Pricing: </span> <p className="font-bold">{fee} per like</p>
                        </div>
                        <div className="flex items-start gap-x-4">
                          <p className={`flex flex-col gap-y-2 ${appreance === 'dark' ? 'text-[#909090]': 'text-white'}`}>
                              Number of likes
                              <span className="text-white font-bold">{engagements_count}</span>
                          </p>
                          <p className={`flex flex-col gap-y-2`}>
                              Amount Paid
                              <span className="text-white font-bold">{fee_paid}</span>
                          </p>
                        </div>
                        <div className="flex flex-col mt-4 gap-y-2">
                          <p className="text-sm">Status</p>
                          {total_allocated <= 0 ? 
                          <div className={`flex items-center justify-center gap-x-2  ${status === 'pending' ? 'bg-white text-black' : 'bg-[#13BF62] text-white'}  w-8/12 py-2 rounded-lg`}>
                            <Icons type={status} /> {status}
                          </div> :
                           <div className={`flex items-center justify-center gap-x-2  bg-[#1877F2] text-white'}  w-8/12 py-2 rounded-lg`}>
                           <Icons type='active' /> active
                         </div> }
                        </div>
                    </div>
                </div>
                <div className={`text-xs w-4/12 hidden lg:flex lg:flex-col ${appreance === 'dark' ? 'text-[#D8D8D8]': 'text-white'}`}>
                    <p className="text-white">Your Link: <a href={account_link} target="_blank" className="text-secondary font-bold" rel="noreferrer">Click to visit</a></p>
                    {account_link}
                </div>
                {payment_status === 'complete' ? 
                <div className="bg-[#CB29BE] text-white text-xs text-center py-2 px-4 rounded-lg font-semibold mt-4 ml-20 lg:mt-0 lg:ml-0" onClick={onNextPage}>
                    View & Track Result
                </div> 
                :
                <div className="bg-[#FF6B6B] text-white text-xs text-center py-2 px-4 rounded-lg font-semibold mt-4 ml-20 lg:mt-0 lg:ml-0" onClick={completePayment}>
                Complete payment
                </div>
                }
          </div>
      </div>
      {isOpen && (
        <AdvertPaymentModal
          isOpen={isOpen}
          onClose={onClose}
          amount={fee_paid}
          onSuccess={handlePaymentSuccess}
          onWalletPaymentSuccess={handlePaymentTenditSuccess}
          // isPending={isPending}
        />
      )}
    </>
  )
}
// onClick={onNextPage}