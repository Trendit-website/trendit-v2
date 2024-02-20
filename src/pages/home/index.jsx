/* eslint-disable no-irregular-whitespace */

import { Button } from '@nextui-org/button'
import { Card } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { ChevronRight, ExternalLinkIcon } from 'lucide-react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoAdd } from 'react-icons/io5'
import selfieImage from '../../assets/selfie.svg'
import readingImage from '../../assets/reading-side.svg'
import { useState } from 'react'

export default function Welcome() {
  const [profile, setProfile] = useState(true)
  const [linkIg, setLinkIg] = useState(true)
  const [showUp, setShowUp] = useState(true)
  return (
    <div>
      <div className='p-3 flex-col justify-start items-start gap-3 inline-flex relative'>
        {showUp && (
          <div className=' w-full lg:-mt-20  h-[73px] px-[25px] py-[13px] bg-blue-500 justify-start items-start gap-[29px] inline-flex'>
            <div className='grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex'>
              <div className="text-center text-white text-base font-bold font-['Campton']">
                Not sure where to start?
              </div>
              <div className='justify-start items-center gap-[59px] cursor-pointer inline-flex'>
                <div className='justify-start items-center gap-2 flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.3 3H11.7C13.3802 3 14.2202 3 14.862 3.32698C15.4265 3.6146 15.8854 4.07354 16.173 4.63803C16.5 5.27976 16.5 6.11984 16.5 7.8V10.2C16.5 11.8802 16.5 12.7202 16.173 13.362C15.8854 13.9265 15.4265 14.3854 14.862 14.673C14.2202 15 13.3802 15 11.7 15H6.3C4.61984 15 3.77976 15 3.13803 14.673C2.57354 14.3854 2.1146 13.9265 1.82698 13.362C1.5 12.7202 1.5 11.8802 1.5 10.2V7.8C1.5 6.11984 1.5 5.27976 1.82698 4.63803C2.1146 4.07354 2.57354 3.6146 3.13803 3.32698C3.77976 3 4.61984 3 6.3 3ZM7.125 11.2431V6.75686C7.125 6.13006 7.85614 5.77588 8.36115 6.15805L11.3253 8.40117C11.7249 8.70359 11.7249 9.29638 11.3253 9.5988L8.36115 11.8419C7.85614 12.2241 7.125 11.8699 7.125 11.2431Z'
                      stroke='#E1EEFF'
                      strokeLinecap='round'
                    />
                  </svg>
                  <div className="text-sky-100 text-sm font-normal font-['Campton']">
                    Watch tutorial
                  </div>
                </div>
                <div className='justify-start items-center gap-2 flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                  >
                    <path
                      d='M13.5 12H5.25C4.00736 12 3 13.0074 3 14.25V14.25M13.5 12V16.5M13.5 12C14.3284 12 15 11.3284 15 10.5V3C15 2.17157 14.3284 1.5 13.5 1.5H5.25C4.00736 1.5 3 2.50736 3 3.75V14.25M15 16.5H13.5M13.5 16.5H5.25C4.00736 16.5 3 15.4926 3 14.25V14.25'
                      stroke='#E1EEFF'
                      strokeLinecap='round'
                    />
                  </svg>
                  <div className="text-sky-100 text-sm font-normal font-['Campton']">
                    Read FAQ
                  </div>
                </div>
              </div>
            </div>
            <div
              className='cursor-pointer'
              onClick={() => {
                setShowUp(false)
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M18 6L6 18M18 18L6 6.00001'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </div>
        )}
        <Card className=' w-full h-[315px] relative bg-cyan-50 rounded'>
          <div className='left[660px] cursor-pointer top[18px] absolut justify-end items-center inline-flex'>
            <Button
              variant='light'
              endContent={<ChevronRight className='w-4 h-4 relative' />}
              className="text-black hover:bg-cyan-50 text-sm font-medium font-['Campton']"
            >
              View more
            </Button>
          </div>
          <div className='h[121px] left[281px] py-16 top[97px] absolut flex-col justify-start items-center gap-[18px] inline-flex'>
            <div className='flex-col justify-start items-center gap-3 flex'>
              <div className="text-center text-black text-sm font-medium font-['Campton']">
                Wallet bal:
              </div>
              <div className="text-center text-black text-[40px] font-normal font-['Campton']">
                ₦3,321.09
              </div>
            </div>
            <div className='pb-4 justify-start items-start gap-[19px] inline-flex'>
              <Button
                startContent={
                  <IoAdd size={30} className='w-[18px] h-[18px] ' />
                }
                variant='light'
                className="grow rounded-none w-[120px] shrink basis-0 h-[34px] p-2 bg-white border border-black justify-center items-center gap-1 flex text-center text-black text-[12.83px] font-bold font-['Campton']"
              >
                Fund
              </Button>

              <Button
                startContent={
                  <ExternalLinkIcon size={30} className='w-[18px] h-[18px] ' />
                }
                variant='light'
                className="text-center rounded-none w-[120px] grow shrink basis-0 h-[34px] p-2 bg-white border border-black justify-center items-center gap-1 flex text-black text-[12.83px] font-bold font-['Campton']"
              >
                Withdraw
              </Button>
            </div>
            <div className='absolute right-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='239'
                height='208'
                viewBox='0 0 239 208'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M170.228 520.387C125.309 481.859 87.9365 432.934 58.111 373.612C28.2543 314.311 10.0428 252.683 3.47662 188.727C-3.08954 124.77 0.513916 61.8615 14.287 -1.3995e-06L113.577 63.6006C108.769 95.5506 107.603 127.482 110.081 159.395C112.559 191.307 119.072 222.942 129.619 254.299L262.673 89.2795L317.965 124.527L316.901 197.137L183.847 362.156C202.222 388.323 222.823 410.617 245.652 429.038C268.48 447.458 293.144 462.265 319.644 473.458L317.964 604C264.393 586.787 215.147 558.916 170.228 520.387Z'
                  fill='#190B19'
                  fillOpacity='0.1'
                />
              </svg>
            </div>
          </div>
        </Card>

        <div className='selfstretch justify-start items-start gap-4 inline-flex'>
          <Card className=' bg-green-50 rounded px-4'>
            <div className=' inline-flex mb-8 items-center justify-end'>
              <Button
                variant='light'
                isIconOnly
                endContent={<FaArrowRightLong />}
                className="text-black hover:bg-green-50 text-sm font-medium font-['Campton']"
              />
            </div>
            <div className=' grid items-center md:mt-10 gap-4 md:grid-cols-2  '>
              <div className=' flex-col justify-start items-start gap-3 inline-flex'>
                <div className="text-black text-sm font-bold font-['Campton']">
                  Create an Advert
                </div>
                <div className=" text-stone-900 text-xs font-normal font-['Campton']">
                  Get real people to post your ads on their social media
                  account.
                </div>
              </div>
              <div className='hidden md:inline-flex'>
                <Image src={selfieImage} />
              </div>
            </div>
          </Card>
          <Card className='bg-rose-50 rounded px-4'>
            <div className=' inline-flex mb-8 items-center justify-end  '>
              <Button
                variant='light'
                isIconOnly
                endContent={<FaArrowRightLong />}
                className="text-black hover:bg-rose-50 text-sm font-medium font-['Campton']"
              />
            </div>
            <div className=' grid items-center md:mt-8  gap-4 md:grid-cols-2'>
              <div className=' flex-col justify-start items-start gap-3 inline-flex'>
                <div className="text-black text-sm font-bold font-['Campton']">
                  Engage a task
                </div>
                <div className=" text-stone-900 text-xs font-normal font-['Campton']">
                  Monetize Your Influence! Earn by Posting Ads on Your Social
                  Media.
                </div>
              </div>
              <div className='hidden md:inline-flex'>
                <Image src={readingImage} />
              </div>
            </div>
          </Card>
        </div>
        <div className='self-stretch  flex-col justify-start items-start gap-3 flex'>
          <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
            <div className="text-white text-2xl font-medium font-['Campton']">
              What’s Up
            </div>
          </div>
          <div className='self-stretch flex-col justify-start items-start gap-3 flex'>
            {profile && (
              <Card className='self-stretch p-6 bg-neutral-900 justify-start items-start gap-[29px] inline-flex'>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-center text-white text-base font-bold font-['Campton']">
                    Complete your profile set up
                  </div>
                  <div className="self-stretch text-zinc-300 text-xs font-normal font-['Campton']">
                    You need to link your Facebook Account to Hawkit before you
                    can start earning with your Facebook Account. Click the
                    button below to link your Facebook account now.
                  </div>
                  <Button
                    startContent={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <path
                          d='M3.33331 4.16667H13.3333M13.3333 4.16667C13.3333 5.08714 14.0795 5.83333 15 5.83333C15.9205 5.83333 16.6666 5.08714 16.6666 4.16667C16.6666 3.24619 15.9205 2.5 15 2.5C14.0795 2.5 13.3333 3.24619 13.3333 4.16667ZM6.66665 10H16.6666M6.66665 10C6.66665 10.9205 5.92045 11.6667 4.99998 11.6667C4.07951 11.6667 3.33331 10.9205 3.33331 10C3.33331 9.07953 4.07951 8.33333 4.99998 8.33333C5.92045 8.33333 6.66665 9.07953 6.66665 10ZM3.33331 15.8333H13.3333M13.3333 15.8333C13.3333 16.7538 14.0795 17.5 15 17.5C15.9205 17.5 16.6666 16.7538 16.6666 15.8333C16.6666 14.9129 15.9205 14.1667 15 14.1667C14.0795 14.1667 13.3333 14.9129 13.3333 15.8333Z'
                          stroke='#FFD0FE'
                          strokeWidth='2'
                          strokeLinecap='round'
                        />
                      </svg>
                    }
                    className='p-2 rounded-none bg-white bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 inline-flex'
                  >
                    <div className="text-center text-white text-[12.83px] font-bold font-['Campton']">
                      Go to settings
                    </div>
                  </Button>
                </div>
                <div
                  onClick={() => setProfile(false)}
                  className='absolute right-10 cursor-pointer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M18 6L6 18M18 18L6 6.00001'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
              </Card>
            )}
            {linkIg && (
              <Card className='self-stretch p-6 bg-neutral-900 justify-start items-start gap-[29px] inline-flex'>
                <div className='grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex'>
                  <div className="text-center text-white text-base font-bold font-['Campton']">
                    Link your Instagram Account
                  </div>
                  <div className="self-stretch text-zinc-300 text-xs font-normal font-['Campton']">
                    You need to link your Facebook Account to Hawkit before you
                    can start earning with your Facebook Account. Click the
                    button below to link your Facebook account now.
                  </div>
                  <Button
                    startContent={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                      >
                        <path
                          d='M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z'
                          fill='url(#paint0_radial_2592_1733)'
                        />
                        <path
                          d='M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z'
                          fill='url(#paint1_radial_2592_1733)'
                        />
                        <path
                          d='M10.0007 2.1875C7.87898 2.1875 7.61266 2.1968 6.77938 2.23469C5.94766 2.27281 5.37992 2.40445 4.8832 2.59766C4.3693 2.79719 3.93344 3.06414 3.49922 3.49852C3.06461 3.93281 2.79766 4.36867 2.5975 4.88234C2.40375 5.37922 2.27195 5.94719 2.23453 6.77852C2.19727 7.61188 2.1875 7.87828 2.1875 10.0001C2.1875 12.1219 2.19688 12.3873 2.23469 13.2206C2.27297 14.0523 2.40461 14.6201 2.59766 15.1168C2.79734 15.6307 3.0643 16.0666 3.49867 16.5008C3.93281 16.9354 4.36867 17.203 4.88219 17.4025C5.3793 17.5957 5.94711 17.7273 6.77867 17.7655C7.61203 17.8034 7.87813 17.8127 9.99977 17.8127C12.1217 17.8127 12.3872 17.8034 13.2205 17.7655C14.0522 17.7273 14.6205 17.5957 15.1177 17.4025C15.6313 17.203 16.0666 16.9354 16.5006 16.5008C16.9352 16.0666 17.2021 15.6307 17.4023 15.117C17.5944 14.6201 17.7262 14.0522 17.7653 13.2208C17.8027 12.3875 17.8125 12.1219 17.8125 10.0001C17.8125 7.87828 17.8027 7.61203 17.7653 6.77867C17.7262 5.94695 17.5944 5.3793 17.4023 4.88258C17.2021 4.36867 16.9352 3.93281 16.5006 3.49852C16.0661 3.06398 15.6315 2.79703 15.1172 2.59773C14.6191 2.40445 14.0511 2.27273 13.2194 2.23469C12.386 2.1968 12.1207 2.1875 9.99828 2.1875H10.0007ZM9.29984 3.59539C9.50789 3.59508 9.74 3.59539 10.0007 3.59539C12.0867 3.59539 12.3339 3.60289 13.1577 3.64031C13.9194 3.67516 14.3328 3.80242 14.6082 3.90938C14.9728 4.05094 15.2327 4.22023 15.506 4.49375C15.7795 4.76719 15.9487 5.02758 16.0906 5.39219C16.1976 5.66719 16.325 6.08063 16.3597 6.84234C16.3971 7.66594 16.4052 7.91328 16.4052 9.99828C16.4052 12.0833 16.3971 12.3307 16.3597 13.1542C16.3248 13.9159 16.1976 14.3294 16.0906 14.6045C15.9491 14.9691 15.7795 15.2287 15.506 15.502C15.2326 15.7754 14.973 15.9446 14.6082 16.0863C14.3331 16.1937 13.9194 16.3206 13.1577 16.3555C12.3341 16.3929 12.0867 16.401 10.0007 16.401C7.91461 16.401 7.66734 16.3929 6.84383 16.3555C6.08211 16.3203 5.66867 16.193 5.39305 16.0861C5.02852 15.9445 4.76805 15.7752 4.49461 15.5018C4.22117 15.2284 4.05195 14.9686 3.91 14.6038C3.80305 14.3287 3.67562 13.9153 3.64094 13.1536C3.60352 12.33 3.59602 12.0827 3.59602 9.99633C3.59602 7.91008 3.60352 7.66398 3.64094 6.84039C3.67578 6.07867 3.80305 5.66523 3.91 5.38984C4.05164 5.02523 4.22117 4.76484 4.49469 4.49141C4.76813 4.21797 5.02852 4.04867 5.39312 3.9068C5.66852 3.79938 6.08211 3.67242 6.84383 3.63742C7.56453 3.60484 7.84383 3.59508 9.29984 3.59344V3.59539ZM14.171 4.89258C13.6534 4.89258 13.2335 5.31211 13.2335 5.82977C13.2335 6.34734 13.6534 6.76727 14.171 6.76727C14.6886 6.76727 15.1085 6.34734 15.1085 5.82977C15.1085 5.31219 14.6886 4.89227 14.171 4.89227V4.89258ZM10.0007 5.98797C7.78508 5.98797 5.98867 7.78438 5.98867 10.0001C5.98867 12.2158 7.78508 14.0113 10.0007 14.0113C12.2164 14.0113 14.0122 12.2158 14.0122 10.0001C14.0122 7.78445 12.2163 5.98797 10.0005 5.98797H10.0007ZM10.0007 7.39586C11.4389 7.39586 12.6049 8.56172 12.6049 10.0001C12.6049 11.4383 11.4389 12.6043 10.0007 12.6043C8.56242 12.6043 7.39656 11.4383 7.39656 10.0001C7.39656 8.56172 8.56242 7.39586 10.0007 7.39586Z'
                          fill='white'
                        />
                        <defs>
                          <radialGradient
                            id='paint0_radial_2592_1733'
                            cx='0'
                            cy='0'
                            r='1'
                            gradientUnits='userSpaceOnUse'
                            gradientTransform='translate(5.3125 21.5404) rotate(-90) scale(19.8215 18.4355)'
                          >
                            <stop stopColor='#FFDD55' />
                            <stop offset='0.1' stopColor='#FFDD55' />
                            <stop offset='0.5' stopColor='#FF543E' />
                            <stop offset='1' stopColor='#C837AB' />
                          </radialGradient>
                          <radialGradient
                            id='paint1_radial_2592_1733'
                            cx='0'
                            cy='0'
                            r='1'
                            gradientUnits='userSpaceOnUse'
                            gradientTransform='translate(-3.35008 1.4407) rotate(78.681) scale(8.86031 36.5225)'
                          >
                            <stop stopColor='#3771C8' />
                            <stop offset='0.128' stopColor='#3771C8' />
                            <stop
                              offset='1'
                              stopColor='#6600FF'
                              stopOpacity='0'
                            />
                          </radialGradient>
                        </defs>
                      </svg>
                    }
                    className='p-2 rounded-none bg-white bg-opacity-10 border border-violet-500 border-opacity-25 justify-center items-center gap-1 inline-flex'
                  >
                    <div className="text-center text-white text-[12.83px] font-bold font-['Campton']">
                      Link Instagram account
                    </div>
                  </Button>
                </div>
                <div
                  onClick={() => setLinkIg(false)}
                  className='absolute right-10 cursor-pointer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M18 6L6 18M18 18L6 6.00001'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
              </Card>
            )}
          </div>
        </div>

        <div className='w[822px] mx-auto text-center md:mt-40 h-20 pb-3 flex-col justify-start items-center inline-flex'>
          <div className='self-stretch px-6 justify-center items-start gap-6 inline-flex'>
            <div className='py-3 justify-start items-center gap-[7px] flex'>
              <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                About Us
              </div>
            </div>
            <div className='py-3 justify-start items-center gap-[7px] flex'>
              <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                Terms
              </div>
            </div>
            <div className='py-3 justify-start items-center gap-[7px] flex'>
              <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                Privacy policy
              </div>
            </div>
          </div>
          <div className='py-3 justify-start items-center gap-[7px] inline-flex'>
            <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
              © 2024 Trendit Techology.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
