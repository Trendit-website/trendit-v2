/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */

import { useNavigate, useParams } from 'react-router-dom'
import { Image, Link, Snippet } from '@nextui-org/react'
import { usePreviewPerformTask } from '../../../api/earnApi'
import trLogo from '../../../assets/tr-lg.svg'
import { format } from 'date-fns'
import Icons from '../../../components/Icon'

export default function PreviewEarnAdvertTask() {
  const param = useParams()
  const taskId = param.taskId
  const { data: fetchTaskPreview } = usePreviewPerformTask(taskId)
  console.log(fetchTaskPreview)

  const navigate = useNavigate()

  return (
    <div>
      <div className=' min-h-screen w-full p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div
          onClick={() => navigate(-1)}
          className='justify-start cursor-pointer items-center gap-[7px] inline-flex'
        >
          <div className='cursor-pointer'>
           <Icons type='arrow-back' />
          </div>
          <div className="text-center text-fuchsia-400 text-sm font-medium font-['Manrope']">
            Go back
          </div>
        </div>

        {fetchTaskPreview && (
          <>
            <div className='self-stretch relative border border-white flex-col justify-start items-start flex'>
              <div className='self-stretch  p-6 bg-opacity-40  rounded-tl-lg rounded-tr-lg flex-col justify-start items-start gap-2 flex'>
                <div className='flex-col justify-start items-start gap-1.5 flex'>
                  <div className="self-stretch text-zinc-400 text-[10px] font-normal font-['Manrope']">
                    {fetchTaskPreview?.task?.updated_at
                      ? format(
                          new Date(fetchTaskPreview.task.updated_at),
                          'yyyy-MM-dd HH:mm'
                        )
                      : 'Loading...'}
                  </div>
                  <div className="capitalize text-3xl font-medium font-['Manrope']">
                    {
                      fetchTaskPreview?.task?.task_type === 'advert' ? `Post Advert on your ${fetchTaskPreview?.task?.platform} Page` :                       
                          (fetchTaskPreview?.task?.goal === 'comment' && `Comment on ${fetchTaskPreview?.task?.platform} Post`)
                          (fetchTaskPreview?.task?.goal === 'follow and like' && `Follow and Like ${fetchTaskPreview?.task?.platform} Page`)
                          (fetchTaskPreview?.task?.goal === 'follow' && `Follow ${fetchTaskPreview?.tassk?.platform} Page`)
                          (fetchTaskPreview?.task?.goal === 'like' && `Like ${fetchTaskPreview?.task?.platform} Post`)                      
                    }
                  </div>
                  <div className='py-1.5 justify-start items-center gap-2 inline-flex'>
                    <div className='justify-start items-center gap-0.5 flex'>
                      <Icons type='wallet' />
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
              <div className='self-stretch p-3 bg-sky-100 justify-start items-start gap-[29px] inline-flex'>
                <div className='grow shrink basis-0 justify-start items-center gap-2.5 flex'>
                  {
                    fetchTaskPreview?.task?.task_type === 'engagement' && 
                    <div className="grow shrink basis-0 text-blue-600 text-xs font-normal font-['Manrope']">
                    You must NOT UNLIKE or UNFOLLOW the{' '}
                    {fetchTaskPreview?.task?.platform?.toUpperCase()}
                    {''} page after you have like and followed the page. Your
                    Trendit³ account will be suspended once you UNLIKE or
                    UNFOLLOW the {fetchTaskPreview?.task?.platform?.toUpperCase()}
                    {''}
                    Page.
                  </div>
                  }
                  {
                    fetchTaskPreview?.task?.task_type === 'advert' &&
                    <div className="grow shrink basis-0 text-blue-600 text-xs font-normal font-['Manrope']">
                    You must NOT DELETE the{' '}
                    {fetchTaskPreview?.task?.platform?.toUpperCase()}
                    {''} advert post after posting. Your
                    Trendit³ account will be suspended once you DELETE the {fetchTaskPreview?.task?.platform?.toUpperCase()} Post.
                  </div>
                  }
                    <Icons type='caution' />
                </div>
              </div>
            </div>

            <div className='grid gap-3 md:gap-6 md:grid-cols-2'>
              <div className=' p-3 bg-zinc-800 bg-opacity-40 rounded-lg flex-col justify-start items-center gap-10 inline-flex'>
                <div className='self-stretch py-6 flex-col justify-start items-center gap-3 flex'>
                  <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                    <div className="grow shrink basis-0 text-center text-2xl font-medium font-['Manrope']">
                      Task
                    </div>
                  </div>
                </div>
                <div className=' flex-col justify-start items-center gap-8 flex'>
                  <div className='self-stretch flex-col justify-start items-center gap-3 flex'>
                    {fetchTaskPreview?.task?.task_type === 'engagement' && 
                    <div className='self-stretch flex flex-col gap-y-2'>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Please follow the step-by-step instructions below to do
                        your task:
                        <br />
                        Step 1: 
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                        Open the Task Link above on your{' '}
                        {fetchTaskPreview?.task?.platform} {''} Mobile App or
                        browser
                        <br />
                      </span>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Step 2: 
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                        The link will direct you to a{' '}
                        {fetchTaskPreview?.task?.platform} {''} Page which you
                        are meant to like and follow.
                        <br />
                      </span>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Step 3: 
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                        Click on the Like or Follow button on the{' '}
                        {fetchTaskPreview?.task?.platform} {''} Page to start
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
                        {fetchTaskPreview?.task?.platform} {''} Username or Name
                        which you used to perform the task
                      </span>
                    </div>
                    }
                    {
                      fetchTaskPreview?.task?.task_type === 'advert' && 
                      <div className='self-stretch flex flex-col gap-y-2'>
                      <span className=" text-xs font-semibold font-['Manrope']">
                        Please follow the step-by-step instructions below to do
                        your task:
                        <br />
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                      Step 1: Open the Task Link above on your{' '}
                        {fetchTaskPreview?.task?.platform} {''} Mobile App or
                        browser
                        <br />
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                          Step 2: Create a post, copy the information below on the description of the advert which you are meant to post on your page.
                        <br />
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                          Step 3: Add the image or video provided for the advert.  Make sure it's high-quality and visually appealing and post it on your page.
                        <br />
                      </span>
                      <span className=" text-xs font-normal font-['Manrope']">
                          Step 4: Take a screenshot of the page that shows you have performed this 
                          task on your page and upload the screenshot under the Proof of Work Form below.
                           You are also required to enter your {fetchTaskPreview?.task?.platform} Username or Name which you used to perform the tas
                      </span>
                    </div>
                    }
                    {fetchTaskPreview?.task?.caption && 
                    <Snippet
                      // variant='solid'
                      symbol=''
                      copyIcon={
                        <svg
                        xmlns='http://www.w3.org/2000/svg'
                       width='18'
                       height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      onClick={() => navigator.clipboard.writeText(fetchTaskPreview?.task?.caption)}
                       >
                       <path d='M12.6 13.5C13.4401 13.5 13.8601 13.5 14.181 13.3365C14.4632 13.1927 14.6927 12.9632 14.8365 12.681C15 12.3601 15 11.9401 15 11.1V3.9C15 3.05992 15 2.63988 14.8365 2.31901C14.6927 2.03677 14.4632 1.8073 14.181 1.66349C13.8601 1.5 13.4401 1.5 12.6 1.5H8.4C7.55992 1.5 7.13988 1.5 6.81901 1.66349C6.53677 1.8073 6.3073 2.03677 6.16349 2.31901C6 2.63988 6 3.05992 6 3.9M5.4 16.5H9.6C10.4401 16.5 10.8601 16.5 11.181 16.3365C11.4632 16.1927 11.6927 15.9632 11.8365 15.681C12 15.3601 12 14.9401 12 14.1V6.9C12 6.05992 12 5.63988 11.8365 5.31901C11.6927 5.03677 11.4632 4.8073 11.181 4.66349C10.8601 4.5 10.4401 4.5 9.6 4.5H5.4C4.55992 4.5 4.13988 4.5 3.81901 4.66349C3.53677 4.8073 3.3073 5.03677 3.16349 5.31901C3 5.63988 3 6.05992 3 6.9V14.1C3 14.9401 3 15.3601 3.16349 15.681C3.3073 15.9632 3.53677 16.1927 3.81901 16.3365C4.13988 16.5 4.55992 16.5 5.4 16.5Z'
                       stroke='#CB29BE'
                        />
                       </svg>
                      }
                      className='self-stretch rounded-none h-[60px] p-2 bg-white bg-opacity-10  items-center gap-1 '
                    >
                      <div className="grow shrink basis-0 text-white dark:text-zinc-400 text-[10px] font-normal font-['Manrope']">
                        {fetchTaskPreview?.task?.caption}
                      </div>
                    </Snippet>
                    }

                    {fetchTaskPreview?.task?.account_link && (
                      <Link
                        isExternal
                        href={fetchTaskPreview?.task?.account_link}
                        className='self-stretch h-9 p-2 bg-white justify-center items-center gap-1 inline-flex'
                      >
                        <div className="grow shrink basis-0  text-black text-[12.83px] font-normal font-['Manrope']">
                          {fetchTaskPreview?.task?.account_link}
                        </div>
                        <div className='justify-start items-center gap-2 flex'>
                         <Icons type='visit-link' />
                          <Link href={fetchTaskPreview?.task?.account_link} className="text-fuchsia-600 text-sm font-medium font-['Manrope']">
                            Visit Link
                          </Link>
                        </div>
                      </Link>
                    )}

                    {fetchTaskPreview?.task?.media_path && (
                      <div className='w-[243px] items-center inline-flex flex-col py-2 relative opacity-50 bg-neutral-800 w-full overflow-x-scroll'>
                        {
                          fetchTaskPreview?.task?.media_path?.map((image, index) => (
                            <Image
                            className='w-40 h-40'
                            key={index}
                            src={image}
                            alt='Image'
                          />
                          ))
                        }
                      </div>
                    )}

                    <div className='self-stretch p-3 bg-rose-100 justify-start items-start gap-[29px] inline-flex'>
                      <div className='grow shrink basis-0 h-[50px] justify-start items-center gap-2.5 flex'>
                        <div className="grow shrink basis-0 text-orange-600 text-xs font-normal font-['Manrope']">
                          You must NOT DELETE THE ADVERT POST on the{' '}
                          <span className='uppercase'>
                            {fetchTaskPreview?.task?.platform}
                          </span>{' '}
                          page after you have post the avdert on your account
                          Your Trendit³ account will be suspended once you Delete
                          the advert on your{' '}
                          <span className='uppercase'>
                            {fetchTaskPreview?.task?.platform}
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

              <div className=' p-3 bg-zinc-800 bg-opacity-40 rounded-lg flex-col justify-start items-center gap-10 inline-flex'>
                <div className='self-stretch py-6 flex-col justify-start items-center gap-3 flex'>
                  <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                    <div className="grow shrink basis-0 text-center text-white text-2xl font-medium font-['Manrope']">
                      Uploaded proof
                    </div>
                  </div>
                </div>
                <div className=' flex-col justify-start items-center gap-8 flex'>
                  <div className='w-[243px] h-40 opacity-50 bg-neutral-800 justify-center items-center inline-flex'>
                    <Image
                      className='w40 w-full h-40'
                      src={fetchTaskPreview?.proof_screenshot_path}
                      alt='Image'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <p className='text-[12px] font-semibold'>
                        The username on your {fetchTaskPreview?.task?.platform} account that performed this task
                    </p>
                    {
                      fetchTaskPreview?.account_link && (
                      <div className='bg-zinc-700 py-2 pl-2 text-[#B1B1B1] font-semibold text-[12px]'>
                        {fetchTaskPreview?.account_name}
                    </div>
                      )
                    }
            
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
