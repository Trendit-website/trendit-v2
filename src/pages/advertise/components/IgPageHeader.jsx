import { Image } from '@nextui-org/react'
import Igframe from '../../../assets/IGFrame131.svg'

export default function IgPageHeader() {
  return (
    <div>
      <div className='self-stretch relative h-[177px] border border-white flex-col justify-start items-start flex'>
        <div className='self-stretch h-[170px] p-6 bg-zinc-400 bg-opacity-30 rounded-tl-lg rounded-tr-lg flex-col justify-start items-start gap-2 flex'>
          <div className='flex-col justify-start items-start gap-1.5 flex'>
            <div className="self-stretch text-stone-900 text-[10px] font-normal font-['Campton']">
              Jan 12th 9:27pm
            </div>
            <div className="text-stone-900 text-3xl font-medium font-['Campton']">
              Like and follow instagram page
            </div>
            <div className='py-1.5 justify-start items-center gap-2 inline-flex'>
              <div className='justify-start items-center gap-0.5 flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                >
                  <path
                    d='M14.168 7.0835H11.6888C11.4932 7.0835 11.3346 7.24206 11.3346 7.43766V10.271C11.3346 10.4666 11.4932 10.6252 11.6888 10.6252H14.168M14.168 7.0835H15.2305C15.4261 7.0835 15.5846 7.24206 15.5846 7.43766V10.271C15.5846 10.4666 15.4261 10.6252 15.2305 10.6252H14.168M14.168 7.0835V5.10016C14.168 4.30675 14.168 3.91005 14.0136 3.60701C13.8777 3.34045 13.661 3.12372 13.3945 2.9879C13.0914 2.8335 12.6947 2.8335 11.9013 2.8335H3.68464C2.89123 2.8335 2.49452 2.8335 2.19148 2.9879C1.92492 3.12372 1.7082 3.34045 1.57238 3.60701C1.41797 3.91005 1.41797 4.30675 1.41797 5.10016V11.9002C1.41797 12.6936 1.41797 13.0903 1.57238 13.3933C1.7082 13.6599 1.92492 13.8766 2.19148 14.0124C2.49452 14.1668 2.89123 14.1668 3.68464 14.1668H11.9013C12.6947 14.1668 13.0914 14.1668 13.3945 14.0124C13.661 13.8766 13.8777 13.6599 14.0136 13.3933C14.168 13.0903 14.168 12.6936 14.168 11.9002V10.6252'
                    stroke='black'
                  />
                </svg>
                <div className="opacity-50 text-black text-sm font-medium font-['Campton']">
                  Pricing
                </div>
              </div>
              <div className="text-stone-900 text-sm font-bold font-['Campton']">
                ₦150 per Advert post
              </div>
            </div>
            <div className='self-stretch justify-start items-start gap-3 inline-flex'>
              <div className="text-stone-900 text-[9px] font-normal font-['Campton'] uppercase tracking-tight">
                20+ people
              </div>
              <div className="text-stone-900 text-[9px] font-normal font-['Campton'] uppercase tracking-tight">
                134 Likes
              </div>
              <div className="text-stone-900 text-[9px] font-normal font-['Campton'] uppercase tracking-tight">
                453 Comments
              </div>
            </div>
          </div>
          <div className='w-[304.97px] origin-top-left absolute right-0 top-0 top[9.2rem] justify-start items-start gap-[115.18px] inline-flex'>
            <Image src={Igframe} alt='igFrme' className='h-[10.1rem]' />
          </div>
        </div>
        <div className='self-stretch p-3 bg-sky-100 justify-start items-start gap-[29px] inline-flex'>
          <div className='grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex'>
            <div className="grow shrink basis-0 text-blue-600 text-xs font-normal font-['Campton']">
              You must NOT UNLIKE or UNFOLLOW the Facebook page after you have
              like and followed the page. Your Trendit account will be suspended
              once you UNLIKE or UNFOLLOW the Facebook Page.
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M10.0013 13.3413V9.17464M10.0013 6.67464V6.66631M18.3346 9.99984C18.3346 14.6022 14.6037 18.3332 10.0013 18.3332C5.39893 18.3332 1.66797 14.6022 1.66797 9.99984C1.66797 5.39746 5.39893 1.6665 10.0013 1.6665C14.6037 1.6665 18.3346 5.39746 18.3346 9.99984Z'
                stroke='#1877F2'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
