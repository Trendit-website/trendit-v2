/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */

import { useNavigate, useParams } from 'react-router-dom'
import { Image, Link, Snippet } from '@nextui-org/react'
import { usePreviewTask } from '../../api/earnApi'
import trLogo from '../../assets/tr-lg.svg'
import { format } from 'date-fns'
import API from '../../services/AxiosInstance'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import Loader from '../Loader'
import toast from 'react-hot-toast'

export default function PreviewAdvertTask() {
  const param = useParams()
  const navigate = useNavigate()
  const [loading, isLoading] = useState()
  const taskId = param.taskId
  const { data: fetchTaskPreview } = usePreviewTask(taskId)
  const [taskPreview, setPreview] = useState()
  const getPreview = (key) => {
    API.get(`user/tasks/${key}`)
    .then((response) => (setPreview(response.data?.task)))
    .catch((error) => console.error(error))
  }

  const deleteTask = (task_id) => {
    API.delete(`/user/tasks/${task_id}`)
    .then((response) => (toast.success(response.data.message), navigate('/dashboard/zadvertise-history')))
    .catch((error) => toast.error(error.message))
  }

  useEffect(() => {
    getPreview(taskId)
  }, [])

 

  return (
    <div>
      <div className=' min-h-screen w-full p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div
          onClick={() => navigate(-1)}
          className='justify-start cursor-pointer items-center gap-[7px] inline-flex'
        >
          <div className='cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M18.9998 12H5.99985M10.9998 6L5.70696 11.2929C5.31643 11.6834 5.31643 12.3166 5.70696 12.7071L10.9998 18'
                stroke='black'
                className='stroke-black dark:stroke-white'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className="text-center text-fuchsia-400 text-sm font-medium font-['Manrope']">
            Go back
          </div>
        </div>

        {taskPreview && (
          <>
            <div className='self-stretch relative border border-white flex-col justify-start items-start flex'>
              <div className='self-stretch  p-6 bg-opacity-40  rounded-tl-lg rounded-tr-lg flex-col justify-start items-start gap-2 flex'>
                <div className='flex-col justify-start items-start gap-1.5 flex'>
                  <div className="self-stretch text-zinc-400 text-[10px] font-normal font-['Manrope']">
                    {taskPreview?.date_created
                      ? format(
                          new Date(taskPreview?.date_created),
                          'yyyy-MM-dd HH:mm'
                        )
                      : 'Loading...'}
                  </div>
                  <div className="capitalize text-3xl font-medium font-['Manrope']">
                    Like and follow {taskPreview?.platform} page
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
                          // stroke='black'
                          className='stroke-gray-400'
                        />
                      </svg>
                      <div className="opacity-50 capitalize text-[12px] font-medium font-['Manrope']">
                        earning
                      </div>
                    </div>
                    <div className=" text-sm font-bold font-['Manrope']">
                      ₦{fetchTaskPreview?.reward_money} {''} per Advert post
                    </div>
                  </div>
                </div>
                <div className='w-40 hidden md:w-[304.97px] origin-top-left  absolute right-0 top-0 justify-start items-start gap-[115.18px] md:inline-flex'>
                  <Image
                    src={trLogo}
                    alt='igFrme'
                    className='h- md:h-[10.1rem]'
                  />
                </div>
              </div>
              <div className={`self-stretch p-3 ${taskPreview?.status === 'pending' ? 'bg-sky-100' : 'bg-[#ADFFB0]'} justify-start items-start gap-[29px] inline-flex`}>
                {taskPreview?.status === 'pending' && 
                <div className='grow shrink basis-0 justify-start items-center gap-2.5 flex'>
                  <div className="grow shrink basis-0 text-blue-600 text-xs font-normal font-['Manrope']">
                  Your task has not been approved and is not on our page for eligible users to perform.. Thank you.
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
                }
                 {taskPreview?.status === 'approved' && 
                <div className='grow shrink basis-0 justify-start items-center gap-2.5 flex'>
                  <div className="grow shrink basis-0 text-[#006304] text-xs font-normal font-['Manrope']">
                  Your task has been approved and is now on our page for eligible users to perform.. Thank you.
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3642 15.4489H2.63582C2.08329 15.4489 1.55339 15.2294 1.16268 14.8387C0.771984 14.448 0.55249 13.9181 0.55249 13.3655V2.63802C0.55249 2.08549 0.771984 1.55558 1.16268 1.16488C1.55339 0.774181 2.08329 0.554688 2.63582 0.554688H13.3642C13.9167 0.554688 14.4466 0.774181 14.8373 1.16488C15.228 1.55558 15.4475 2.08549 15.4475 2.63802V13.3655C15.4475 13.9181 15.228 14.448 14.8373 14.8387C14.4466 15.2294 13.9167 15.4489 13.3642 15.4489ZM2.63582 1.38802C2.3043 1.38802 1.98636 1.51972 1.75194 1.75414C1.51752 1.98856 1.38582 2.3065 1.38582 2.63802V13.3655C1.38582 13.697 1.51752 14.015 1.75194 14.2494C1.98636 14.4838 2.3043 14.6155 2.63582 14.6155H13.3642C13.6957 14.6155 14.0136 14.4838 14.248 14.2494C14.4825 14.015 14.6142 13.697 14.6142 13.3655V2.63802C14.6142 2.3065 14.4825 1.98856 14.248 1.75414C14.0136 1.51972 13.6957 1.38802 13.3642 1.38802H2.63582Z" fill="#006304"/>
                    <path d="M2.63582 1.38802C2.3043 1.38802 1.98636 1.51972 1.75194 1.75414C1.51752 1.98856 1.38582 2.3065 1.38582 2.63802V13.3655C1.38582 13.697 1.51752 14.015 1.75194 14.2494C1.98636 14.4838 2.3043 14.6155 2.63582 14.6155H13.3642C13.6957 14.6155 14.0136 14.4838 14.248 14.2494C14.4825 14.015 14.6142 13.697 14.6142 13.3655V2.63802C14.6142 2.3065 14.4825 1.98856 14.248 1.75414C14.0136 1.51972 13.6957 1.38802 13.3642 1.38802H2.63582Z" fill="#006304"/>
                    </svg>
                </div>
                }
              </div>
            </div>

            <div className='flex flex-col items-center mt-6 gap-3 md:gap-6 md:grid-cols-2'>
              <div className=' p-3 bg-zinc-800 w-7/12 px-10 pb-10 bg-opacity-40 rounded-lg flex-col justify-start items-center gap-10 inline-flex'>
                <div className='self-stretch py-6 flex-col justify-start items-center gap-3 flex'>
                  <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                    <div className="grow shrink basis-0 text-center text-2xl font-medium font-['Manrope']">
                      Task
                    </div>
                  </div>
                </div>
                <div className=' flex-col justify-start items-center gap-8 flex'>
                  <div className='self-stretch flex-col justify-start items-center gap-3 flex'>
                    <div className='self-stretch'>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Please follow the step-by-step instructions below to do
                        your task:
                        <br />
                        Step 1: 
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                        Open the Task Link above on your{' '}
                        {taskPreview?.platform} {''} Mobile App or
                        browser
                        <br />
                      </span>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Step 2: 
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                        The link will direct you to a{' '}
                        {taskPreview?.platform} {''} Page which you
                        are meant to like and follow.
                        <br />
                      </span>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Step 3: 
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                        Click on the Like or Follow button on the{' '}
                        {taskPreview?.platform} {''} Page to start
                        liking or following the page. You MUST NOT Unfollow the
                        account after you have followed the account.
                        <br />
                      </span>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Step 4: 
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                        Create a screenshot of the page that shows you have
                        liked or followed the page and upload the screenshot
                        under the Proof of Work Form below. You are also
                        required to enter your{' '}
                        {taskPreview?.platform} {''} Username or Name
                        which you used to perform the task
                      </span>
                    </div>

                    <Snippet
                      // variant='solid'
                      symbol=''
                    //   copyIcon={
                    //     <svg
                    //       xmlns='http://www.w3.org/2000/svg'
                    //       width='17'
                    //       height='16'
                    //       viewBox='0 0 17 16'
                    //       fill='none'
                    //     >
                    //       <path
                    //         d='M14.25 5.33333C14.25 5.60948 14.4739 5.83333 14.75 5.83333C15.0261 5.83333 15.25 5.60948 15.25 5.33333H14.25ZM11.4167 1.5C11.1405 1.5 10.9167 1.72386 10.9167 2C10.9167 2.27614 11.1405 2.5 11.4167 2.5V1.5ZM8.39645 7.64645C8.20118 7.84171 8.20118 8.15829 8.39645 8.35355C8.59171 8.54882 8.90829 8.54882 9.10355 8.35355L8.39645 7.64645ZM14.7137 2.182L14.2682 2.40899L14.2682 2.409L14.7137 2.182ZM14.568 2.03633L14.341 2.48183V2.48184L14.568 2.03633ZM8.75 3.83333C9.02614 3.83333 9.25 3.60948 9.25 3.33333C9.25 3.05719 9.02614 2.83333 8.75 2.83333V3.83333ZM13.9167 8C13.9167 7.72386 13.6928 7.5 13.4167 7.5C13.1405 7.5 12.9167 7.72386 12.9167 8H13.9167ZM4.20603 13.7094L4.43302 13.2638L4.20603 13.7094ZM3.04065 12.544L2.59515 12.771L3.04065 12.544ZM11.9606 13.7094L11.7336 13.2638L11.9606 13.7094ZM13.126 12.544L12.6805 12.317L13.126 12.544ZM3.04065 4.78936L2.59515 4.56236H2.59515L3.04065 4.78936ZM4.20603 3.62398L3.97903 3.17848L3.97903 3.17848L4.20603 3.62398ZM15.25 5.33333V2.53333H14.25V5.33333H15.25ZM14.2167 1.5H11.4167V2.5H14.2167V1.5ZM14.2988 1.74408L8.39645 7.64645L9.10355 8.35355L15.0059 2.45118L14.2988 1.74408ZM15.25 2.53333C15.25 2.44824 15.2504 2.35435 15.2438 2.27368C15.2367 2.18718 15.2192 2.07289 15.1592 1.95501L14.2682 2.409C14.2444 2.36242 14.2451 2.33045 14.2471 2.35512C14.2481 2.36715 14.249 2.38617 14.2495 2.41757C14.25 2.44895 14.25 2.48552 14.25 2.53333H15.25ZM14.2167 2.5C14.2645 2.5 14.3011 2.50001 14.3324 2.50051C14.3638 2.501 14.3829 2.5019 14.3949 2.50288C14.4195 2.5049 14.3876 2.50557 14.341 2.48183L14.795 1.59083C14.6771 1.53076 14.5628 1.51327 14.4763 1.5062C14.3956 1.49961 14.3018 1.5 14.2167 1.5V2.5ZM15.1592 1.95501C15.1192 1.87661 15.0674 1.80553 15.0059 1.74408L14.2988 2.45118C14.2865 2.4389 14.2762 2.42468 14.2682 2.40899L15.1592 1.95501ZM15.0059 1.74408C14.9445 1.68263 14.8734 1.63077 14.795 1.59083L14.341 2.48184C14.3253 2.47385 14.3111 2.46347 14.2988 2.45118L15.0059 1.74408ZM9.15 13.5H7.01667V14.5H9.15V13.5ZM3.25 9.73333V7.6H2.25V9.73333H3.25ZM7.01667 3.83333H8.75V2.83333H7.01667V3.83333ZM12.9167 8V9.73333H13.9167V8H12.9167ZM7.01667 13.5C6.26168 13.5 5.72551 13.4996 5.30592 13.4653C4.89217 13.4315 4.636 13.3673 4.43302 13.2638L3.97903 14.1549C4.34648 14.3421 4.7489 14.4232 5.22449 14.462C5.69425 14.5004 6.27818 14.5 7.01667 14.5V13.5ZM2.25 9.73333C2.25 10.4718 2.24961 11.0558 2.28799 11.5255C2.32685 12.0011 2.40792 12.4035 2.59515 12.771L3.48615 12.317C3.38273 12.114 3.31848 11.8578 3.28467 11.4441C3.25039 11.0245 3.25 10.4883 3.25 9.73333H2.25ZM4.43302 13.2638C4.02534 13.0561 3.69388 12.7247 3.48615 12.317L2.59515 12.771C2.89875 13.3668 3.38318 13.8513 3.97903 14.1549L4.43302 13.2638ZM9.15 14.5C9.88849 14.5 10.4724 14.5004 10.9422 14.462C11.4178 14.4232 11.8202 14.3421 12.1876 14.1549L11.7336 13.2638C11.5307 13.3673 11.2745 13.4315 10.8607 13.4653C10.4412 13.4996 9.90499 13.5 9.15 13.5V14.5ZM12.9167 9.73333C12.9167 10.4883 12.9163 11.0245 12.882 11.4441C12.8482 11.8578 12.7839 12.114 12.6805 12.317L13.5715 12.771C13.7587 12.4035 13.8398 12.0011 13.8787 11.5255C13.9171 11.0558 13.9167 10.4718 13.9167 9.73333H12.9167ZM12.1876 14.1549C12.7835 13.8513 13.2679 13.3668 13.5715 12.771L12.6805 12.317C12.4728 12.7247 12.1413 13.0561 11.7336 13.2638L12.1876 14.1549ZM3.25 7.6C3.25 6.84501 3.25039 6.30884 3.28467 5.88925C3.31848 5.4755 3.38273 5.21934 3.48615 5.01635L2.59515 4.56236C2.40792 4.92981 2.32685 5.33223 2.28799 5.80782C2.24961 6.27758 2.25 6.86151 2.25 7.6H3.25ZM7.01667 2.83333C6.27818 2.83333 5.69425 2.83294 5.22449 2.87133C4.7489 2.91018 4.34648 2.99125 3.97903 3.17848L4.43302 4.06949C4.636 3.96606 4.89217 3.90181 5.30592 3.868C5.72551 3.83372 6.26168 3.83333 7.01667 3.83333V2.83333ZM3.48615 5.01635C3.69388 4.60867 4.02534 4.27721 4.43302 4.06949L3.97903 3.17848C3.38318 3.48208 2.89875 3.96652 2.59515 4.56236L3.48615 5.01635Z'
                    //         fill='#FF6DFB'
                    //       />
                    //     </svg>
                    //   }
                      className='self-stretch rounded-none h-[60px] p-2 bg-white bg-opacity-10  items-center gap-1 '
                    >
                      <div className="grow shrink basis-0 text-white dark:text-zinc-400 text-[10px] font-normal font-['Manrope']">
                        {taskPreview?.caption || taskPreview?.goal}
                      </div>
                    </Snippet>

                    {taskPreview?.media_path && (
                      <div className='w-[243px] items-center inline-flex flex-col py-2 relative opacity-50 bg-neutral-800'>
                        <Image
                          className='w-40 h-40'
                          src={taskPreview?.media_path}
                          alt='Image'
                        />
                      </div>
                    )}
                        {taskPreview?.account_link && (
                    <Snippet
                      // variant='solid'
                      symbol=''
                      copyIcon={
                        <Link href={taskPreview?.account_link}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='17'
                          height='16'
                          viewBox='0 0 17 16'
                          fill='none'
                        >
                          <path
                            d='M14.25 5.33333C14.25 5.60948 14.4739 5.83333 14.75 5.83333C15.0261 5.83333 15.25 5.60948 15.25 5.33333H14.25ZM11.4167 1.5C11.1405 1.5 10.9167 1.72386 10.9167 2C10.9167 2.27614 11.1405 2.5 11.4167 2.5V1.5ZM8.39645 7.64645C8.20118 7.84171 8.20118 8.15829 8.39645 8.35355C8.59171 8.54882 8.90829 8.54882 9.10355 8.35355L8.39645 7.64645ZM14.7137 2.182L14.2682 2.40899L14.2682 2.409L14.7137 2.182ZM14.568 2.03633L14.341 2.48183V2.48184L14.568 2.03633ZM8.75 3.83333C9.02614 3.83333 9.25 3.60948 9.25 3.33333C9.25 3.05719 9.02614 2.83333 8.75 2.83333V3.83333ZM13.9167 8C13.9167 7.72386 13.6928 7.5 13.4167 7.5C13.1405 7.5 12.9167 7.72386 12.9167 8H13.9167ZM4.20603 13.7094L4.43302 13.2638L4.20603 13.7094ZM3.04065 12.544L2.59515 12.771L3.04065 12.544ZM11.9606 13.7094L11.7336 13.2638L11.9606 13.7094ZM13.126 12.544L12.6805 12.317L13.126 12.544ZM3.04065 4.78936L2.59515 4.56236H2.59515L3.04065 4.78936ZM4.20603 3.62398L3.97903 3.17848L3.97903 3.17848L4.20603 3.62398ZM15.25 5.33333V2.53333H14.25V5.33333H15.25ZM14.2167 1.5H11.4167V2.5H14.2167V1.5ZM14.2988 1.74408L8.39645 7.64645L9.10355 8.35355L15.0059 2.45118L14.2988 1.74408ZM15.25 2.53333C15.25 2.44824 15.2504 2.35435 15.2438 2.27368C15.2367 2.18718 15.2192 2.07289 15.1592 1.95501L14.2682 2.409C14.2444 2.36242 14.2451 2.33045 14.2471 2.35512C14.2481 2.36715 14.249 2.38617 14.2495 2.41757C14.25 2.44895 14.25 2.48552 14.25 2.53333H15.25ZM14.2167 2.5C14.2645 2.5 14.3011 2.50001 14.3324 2.50051C14.3638 2.501 14.3829 2.5019 14.3949 2.50288C14.4195 2.5049 14.3876 2.50557 14.341 2.48183L14.795 1.59083C14.6771 1.53076 14.5628 1.51327 14.4763 1.5062C14.3956 1.49961 14.3018 1.5 14.2167 1.5V2.5ZM15.1592 1.95501C15.1192 1.87661 15.0674 1.80553 15.0059 1.74408L14.2988 2.45118C14.2865 2.4389 14.2762 2.42468 14.2682 2.40899L15.1592 1.95501ZM15.0059 1.74408C14.9445 1.68263 14.8734 1.63077 14.795 1.59083L14.341 2.48184C14.3253 2.47385 14.3111 2.46347 14.2988 2.45118L15.0059 1.74408ZM9.15 13.5H7.01667V14.5H9.15V13.5ZM3.25 9.73333V7.6H2.25V9.73333H3.25ZM7.01667 3.83333H8.75V2.83333H7.01667V3.83333ZM12.9167 8V9.73333H13.9167V8H12.9167ZM7.01667 13.5C6.26168 13.5 5.72551 13.4996 5.30592 13.4653C4.89217 13.4315 4.636 13.3673 4.43302 13.2638L3.97903 14.1549C4.34648 14.3421 4.7489 14.4232 5.22449 14.462C5.69425 14.5004 6.27818 14.5 7.01667 14.5V13.5ZM2.25 9.73333C2.25 10.4718 2.24961 11.0558 2.28799 11.5255C2.32685 12.0011 2.40792 12.4035 2.59515 12.771L3.48615 12.317C3.38273 12.114 3.31848 11.8578 3.28467 11.4441C3.25039 11.0245 3.25 10.4883 3.25 9.73333H2.25ZM4.43302 13.2638C4.02534 13.0561 3.69388 12.7247 3.48615 12.317L2.59515 12.771C2.89875 13.3668 3.38318 13.8513 3.97903 14.1549L4.43302 13.2638ZM9.15 14.5C9.88849 14.5 10.4724 14.5004 10.9422 14.462C11.4178 14.4232 11.8202 14.3421 12.1876 14.1549L11.7336 13.2638C11.5307 13.3673 11.2745 13.4315 10.8607 13.4653C10.4412 13.4996 9.90499 13.5 9.15 13.5V14.5ZM12.9167 9.73333C12.9167 10.4883 12.9163 11.0245 12.882 11.4441C12.8482 11.8578 12.7839 12.114 12.6805 12.317L13.5715 12.771C13.7587 12.4035 13.8398 12.0011 13.8787 11.5255C13.9171 11.0558 13.9167 10.4718 13.9167 9.73333H12.9167ZM12.1876 14.1549C12.7835 13.8513 13.2679 13.3668 13.5715 12.771L12.6805 12.317C12.4728 12.7247 12.1413 13.0561 11.7336 13.2638L12.1876 14.1549ZM3.25 7.6C3.25 6.84501 3.25039 6.30884 3.28467 5.88925C3.31848 5.4755 3.38273 5.21934 3.48615 5.01635L2.59515 4.56236C2.40792 4.92981 2.32685 5.33223 2.28799 5.80782C2.24961 6.27758 2.25 6.86151 2.25 7.6H3.25ZM7.01667 2.83333C6.27818 2.83333 5.69425 2.83294 5.22449 2.87133C4.7489 2.91018 4.34648 2.99125 3.97903 3.17848L4.43302 4.06949C4.636 3.96606 4.89217 3.90181 5.30592 3.868C5.72551 3.83372 6.26168 3.83333 7.01667 3.83333V2.83333ZM3.48615 5.01635C3.69388 4.60867 4.02534 4.27721 4.43302 4.06949L3.97903 3.17848C3.38318 3.48208 2.89875 3.96652 2.59515 4.56236L3.48615 5.01635Z'
                            fill='#FF6DFB'
                          />
                        </svg>
                        </Link>
                      }
                      className='self-stretch rounded-none h-[60px] p-2 bg-white bg-opacity-10  items-center gap-1 '
                    >
                      <div className="grow shrink basis-0 text-white dark:text-zinc-400 text-[10px] font-normal font-['Manrope']">
                        {taskPreview?.account_link}
                      </div>
                    </Snippet>
                     )}

                    {/* {taskPreview?.account_link && (
                      <Link
                        isExternal
                        href={taskPreview?.account_link}
                        className='self-stretch h-9 p-2 bg-white justify-center items-center gap-1 inline-flex'
                      >
                        <div className="grow shrink basis-0  text-black text-[12.83px] font-normal font-['Manrope']">
                          {taskPreview?.account_link}
                        </div>
                        <div className='justify-start items-center gap-2 flex'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='17'
                            height='16'
                            viewBox='0 0 17 16'
                            fill='none'
                          >
                            <path
                              d='M14.25 5.33333C14.25 5.60948 14.4739 5.83333 14.75 5.83333C15.0261 5.83333 15.25 5.60948 15.25 5.33333H14.25ZM11.4167 1.5C11.1405 1.5 10.9167 1.72386 10.9167 2C10.9167 2.27614 11.1405 2.5 11.4167 2.5V1.5ZM8.39645 7.64645C8.20118 7.84171 8.20118 8.15829 8.39645 8.35355C8.59171 8.54882 8.90829 8.54882 9.10355 8.35355L8.39645 7.64645ZM14.7137 2.182L14.2682 2.40899L14.2682 2.409L14.7137 2.182ZM14.568 2.03633L14.341 2.48183V2.48184L14.568 2.03633ZM8.75 3.83333C9.02614 3.83333 9.25 3.60948 9.25 3.33333C9.25 3.05719 9.02614 2.83333 8.75 2.83333V3.83333ZM13.9167 8C13.9167 7.72386 13.6928 7.5 13.4167 7.5C13.1405 7.5 12.9167 7.72386 12.9167 8H13.9167ZM4.20603 13.7094L4.43302 13.2638L4.20603 13.7094ZM3.04065 12.544L2.59515 12.771L3.04065 12.544ZM11.9606 13.7094L11.7336 13.2638L11.9606 13.7094ZM13.126 12.544L12.6805 12.317L13.126 12.544ZM3.04065 4.78936L2.59515 4.56236H2.59515L3.04065 4.78936ZM4.20603 3.62398L3.97903 3.17848L3.97903 3.17848L4.20603 3.62398ZM15.25 5.33333V2.53333H14.25V5.33333H15.25ZM14.2167 1.5H11.4167V2.5H14.2167V1.5ZM14.2988 1.74408L8.39645 7.64645L9.10355 8.35355L15.0059 2.45118L14.2988 1.74408ZM15.25 2.53333C15.25 2.44824 15.2504 2.35435 15.2438 2.27368C15.2367 2.18718 15.2192 2.07289 15.1592 1.95501L14.2682 2.409C14.2444 2.36242 14.2451 2.33045 14.2471 2.35512C14.2481 2.36715 14.249 2.38617 14.2495 2.41757C14.25 2.44895 14.25 2.48552 14.25 2.53333H15.25ZM14.2167 2.5C14.2645 2.5 14.3011 2.50001 14.3324 2.50051C14.3638 2.501 14.3829 2.5019 14.3949 2.50288C14.4195 2.5049 14.3876 2.50557 14.341 2.48183L14.795 1.59083C14.6771 1.53076 14.5628 1.51327 14.4763 1.5062C14.3956 1.49961 14.3018 1.5 14.2167 1.5V2.5ZM15.1592 1.95501C15.1192 1.87661 15.0674 1.80553 15.0059 1.74408L14.2988 2.45118C14.2865 2.4389 14.2762 2.42468 14.2682 2.40899L15.1592 1.95501ZM15.0059 1.74408C14.9445 1.68263 14.8734 1.63077 14.795 1.59083L14.341 2.48184C14.3253 2.47385 14.3111 2.46347 14.2988 2.45118L15.0059 1.74408ZM9.15 13.5H7.01667V14.5H9.15V13.5ZM3.25 9.73333V7.6H2.25V9.73333H3.25ZM7.01667 3.83333H8.75V2.83333H7.01667V3.83333ZM12.9167 8V9.73333H13.9167V8H12.9167ZM7.01667 13.5C6.26168 13.5 5.72551 13.4996 5.30592 13.4653C4.89217 13.4315 4.636 13.3673 4.43302 13.2638L3.97903 14.1549C4.34648 14.3421 4.7489 14.4232 5.22449 14.462C5.69425 14.5004 6.27818 14.5 7.01667 14.5V13.5ZM2.25 9.73333C2.25 10.4718 2.24961 11.0558 2.28799 11.5255C2.32685 12.0011 2.40792 12.4035 2.59515 12.771L3.48615 12.317C3.38273 12.114 3.31848 11.8578 3.28467 11.4441C3.25039 11.0245 3.25 10.4883 3.25 9.73333H2.25ZM4.43302 13.2638C4.02534 13.0561 3.69388 12.7247 3.48615 12.317L2.59515 12.771C2.89875 13.3668 3.38318 13.8513 3.97903 14.1549L4.43302 13.2638ZM9.15 14.5C9.88849 14.5 10.4724 14.5004 10.9422 14.462C11.4178 14.4232 11.8202 14.3421 12.1876 14.1549L11.7336 13.2638C11.5307 13.3673 11.2745 13.4315 10.8607 13.4653C10.4412 13.4996 9.90499 13.5 9.15 13.5V14.5ZM12.9167 9.73333C12.9167 10.4883 12.9163 11.0245 12.882 11.4441C12.8482 11.8578 12.7839 12.114 12.6805 12.317L13.5715 12.771C13.7587 12.4035 13.8398 12.0011 13.8787 11.5255C13.9171 11.0558 13.9167 10.4718 13.9167 9.73333H12.9167ZM12.1876 14.1549C12.7835 13.8513 13.2679 13.3668 13.5715 12.771L12.6805 12.317C12.4728 12.7247 12.1413 13.0561 11.7336 13.2638L12.1876 14.1549ZM3.25 7.6C3.25 6.84501 3.25039 6.30884 3.28467 5.88925C3.31848 5.4755 3.38273 5.21934 3.48615 5.01635L2.59515 4.56236C2.40792 4.92981 2.32685 5.33223 2.28799 5.80782C2.24961 6.27758 2.25 6.86151 2.25 7.6H3.25ZM7.01667 2.83333C6.27818 2.83333 5.69425 2.83294 5.22449 2.87133C4.7489 2.91018 4.34648 2.99125 3.97903 3.17848L4.43302 4.06949C4.636 3.96606 4.89217 3.90181 5.30592 3.868C5.72551 3.83372 6.26168 3.83333 7.01667 3.83333V2.83333ZM3.48615 5.01635C3.69388 4.60867 4.02534 4.27721 4.43302 4.06949L3.97903 3.17848C3.38318 3.48208 2.89875 3.96652 2.59515 4.56236L3.48615 5.01635Z'
                              fill='#CB29BE'
                            />
                          </svg>
                          <div className="text-fuchsia-600 text-sm font-medium font-['Manrope']">
                            Visit Link
                          </div>
                        </div>
                      </Link>
                    )} */}
                    <div className='self-stretch p-3 bg-rose-100 justify-start items-start gap-[29px] inline-flex'>
                      <div className='grow shrink basis-0 h-[50px] justify-start items-center gap-2.5 flex'>
                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Manrope']">
                          You must NOT DELETE THE ADVERT POST on the{' '}
                          <span className='uppercase'>
                            {taskPreview?.platform}
                          </span>{' '}
                          page after you have post the avdert on your account
                          Your Trendit account will be suspended once you Delete
                          the advert on your{' '}
                          <span className='uppercase'>
                            {taskPreview?.platform}
                          </span>{' '}
                          {''}
                          Page.
                        </div>
                        <div className='w-5 h-5 relative' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-stretch h-[43px] justify-end pr-4 items-end gap-2 flex'>
                <Button
                  type='submit'
                  isDisabled={loading}
                  onClick={() => deleteTask(taskPreview?.task_key)}
                //   className='md:w-[290px] px-6 opacity-80 py-3.5 bg-red-400 rounded-[100px] justify-center items-center gap-2 inline-flex'
                >
                  <div className="flex items-center text-center text-[#FF3D00] text-[12.83px] font-medium font-['Manrope']">
                    {loading ? <Loader /> : 
                    <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8925 18.0357L19.8925 18.0446L18.8925 18.0357ZM4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7V5ZM20 7C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5V7ZM11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10H11ZM9 18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18H9ZM15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10H15ZM13 18C13 18.5523 13.4477 19 14 19C14.5523 19 15 18.5523 15 18H13ZM18 5.99107L17.8926 18.0268L19.8925 18.0446L20 6.00893L18 5.99107ZM14.8927 21H9V23H14.8927V21ZM4 6V18H6V6H4ZM4 7H5V5H4V7ZM5 7H8V5H5V7ZM8 7H16V5H8V7ZM16 7H19V5H16V7ZM19 7H20V5H19V7ZM9 5.55556C9 4.25163 10.2292 3 12 3V1C9.35256 1 7 2.93212 7 5.55556H9ZM12 3C13.7708 3 15 4.25163 15 5.55556H17C17 2.93212 14.6474 1 12 1V3ZM7 5.55556V6H9V5.55556H7ZM15 5.55556V6H17V5.55556H15ZM9 21C7.34314 21 6 19.6569 6 18H4C4 20.7614 6.23857 23 9 23V21ZM17.8926 18.0268C17.8779 19.6731 16.5391 21 14.8927 21V23C17.6367 23 19.868 20.7885 19.8925 18.0446L17.8926 18.0268ZM9 10V18H11V10H9ZM13 10V18H15V10H13Z" fill="#FF3D00"/>
                    </svg>
                    Delete Task
                    </>}
                  </div>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
