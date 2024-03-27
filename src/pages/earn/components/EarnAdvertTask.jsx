/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */

import { useNavigate } from 'react-router-dom'
import { Button, Image, Input } from '@nextui-org/react'
import Igframe from '../../../assets/IGFrame131.svg'
import {
  useCalcelTask,
  usePerformTask,
  useSubmitPerformTask,
} from '../../../api/earnApi'
import DownloadImageButton from '../../../components/DownloadButton'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import Timer from './Timer'
import { useQueryClient } from '@tanstack/react-query'

export default function EarnAdvertTask() {
  const { data: fetchTask } = usePerformTask('pending')
  const [imageUrls, setImageUrls] = useState([])
  const [media, setMedia] = useState(null)
  const { mutateAsync: submitPerformTask, isPending } = useSubmitPerformTask()
  const { mutateAsync: calcelTask, isPending: loading } = useCalcelTask()

  const queryClient = useQueryClient()
  const {
    handleSubmit,

    watch,
    register,
  } = useForm({})
  console.log(fetchTask, 'Task')
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await Promise.all(
          fetchTask?.map(async (image) => {
            const response = await fetch(image.task.media_path)
            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            return url
          })
        )
        setImageUrls(urls)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  const handleChange = async ({ target }) => {
    const { name } = target

    if (name === 'screenshot') {
      const file = target.files[0]
      if (!file) {
        return // No file selected, do nothing
      }
      // If the file is valid, set the image URL, log the file, and set the image state
      setMedia(file)
      console.log(media, 'media')
    }
  }

  const navigate = useNavigate()

  const onSubmit = async () => {
    try {
      const data = watch()
      const formData = new FormData()
      // Append selected image to formData if available
      if (media) {
        formData.append('screenshot', media)
      }
      fetchTask?.forEach((task) => {
        // Append reward_money and task_id_key for each task
        formData.append(`reward_money`, task?.reward_money)
        formData.append(`task_id_key`, task?.task?.task_key)
      })
      // Append other form fields
      console.log(data, 'formmm data')
      const res = await submitPerformTask(formData)
      console.log(res, 'form ress')
      if (res?.data.status) {
        queryClient.invalidateQueries(['perform_task', 'pending'])
        toast.success(res.data.message, {
          position: 'top-right',
          duration: 20000,
        })
        navigate('/dashboard/earn-advert_fb-task')
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message, {
        position: 'top-right',
        duration: 20000,
      })
    }
  }

  const onCancel = async (id) => {
    try {
      const res = await calcelTask(id)
      if (res?.data.status) {
        queryClient.invalidateQueries(['perform_task', 'pending'])
        toast.success(res.data.message, {
          position: 'top-right',
          duration: 20000,
        })
        navigate('/dashboard/earn-advert_fb-task')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message ?? error.message, {
        position: 'top-right',
        duration: 20000,
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=' min-h-screen w-full p-3 flex-col justify-start items-start gap-3 inline-flex'>
          <div className='justify-start cursor-pointer items-center gap-[7px] inline-flex'>
            <div onClick={() => navigate(-1)} className='cursor-pointer'>
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
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <div className="text-center text-fuchsia-400 text-sm font-medium font-['Campton']">
              Go back
            </div>
          </div>

          <div className='self-stretch relative border border-white flex-col justify-start items-start flex'>
            <div className='self-stretch  p-6 bg-zinc-400 bg-opacity-30 rounded-tl-lg rounded-tr-lg flex-col justify-start items-start gap-2 flex'>
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
              <div className='w-40 hidden md:w-[304.97px] origin-top-left  absolute right-0 top-0 justify-start items-start gap-[115.18px] md:inline-flex'>
                <Image
                  src={Igframe}
                  alt='igFrme'
                  className='h- md:h-[10.1rem]'
                />
              </div>
            </div>
            <div className='self-stretch p-3 bg-sky-100 justify-start items-start gap-[29px] inline-flex'>
              <div className='grow shrink basis-0 justify-start items-center gap-2.5 flex'>
                <div className="grow shrink basis-0 text-blue-600 text-xs font-normal font-['Campton']">
                  You must NOT UNLIKE or UNFOLLOW the Facebook page after you
                  have like and followed the page. Your Trendit account will be
                  suspended once you UNLIKE or UNFOLLOW the Facebook Page.
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

          {/* <div className='w-full px-3 py-6 bg-red-300 rounded-lg flex-col justify-start items-center gap-3 inline-flex'>
            <svg
              className={`countdown-icon ${
                timeLeft <= 3600 ? 'shake-animation' : ''
              }`}
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
          </div> */}
          {fetchTask?.map((task, index) => (
            <>
              <div className='w-full'>
                <Timer onDone={() => onCancel(task?.key)} />
              </div>
              <div
                key={index}
                className='grid md:self-stretch justify-start items-start gap-3 md:inline-flex'
              >
                <div className='grow shrink basis-0 self-stretch p-3 bg-zinc-400 bg-opacity-30 rounded-lg flex-col justify-start items-center gap-10 inline-flex'>
                  <div className='self-stretch py-6 flex-col justify-start items-center gap-3 flex'>
                    <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                      <div className="grow shrink basis-0 text-center text-stone-900 text-2xl font-medium font-['Campton']">
                        Task
                      </div>
                    </div>
                  </div>
                  <div className=' flex-col justify-start items-center gap-8 flex'>
                    <div className='self-stretch  flex-col justify-start items-center gap-3  flex'>
                      <div className='self-stretch'>
                        <span className="text-black text-xs font-semibold font-['Campton']">
                          Please follow the step-by-step instructions below to
                          do your task:
                          <br />
                          Step 1: 
                        </span>
                        <span className="text-black text-xs font-normal font-['Campton']">
                          Open the Task Link above on your Facebook Mobile App
                          or browser
                          <br />
                        </span>
                        <span className="text-black text-xs font-semibold font-['Campton']">
                          Step 2: 
                        </span>
                        <span className="text-black text-xs font-normal font-['Campton']">
                          The link will direct you to a Facebook Page which you
                          are meant to like and follow.
                          <br />
                        </span>
                        <span className="text-black text-xs font-semibold font-['Campton']">
                          Step 3: 
                        </span>
                        <span className="text-black text-xs font-normal font-['Campton']">
                          Click on the Like or Follow button on the Facebook
                          Page to start liking or following the page. You MUST
                          NOT Unfollow the account after you have followed the
                          account.
                          <br />
                        </span>
                        <span className="text-black text-xs font-semibold font-['Campton']">
                          Step 4: 
                        </span>
                        <span className="text-black text-xs font-normal font-['Campton']">
                          Create a screenshot of the page that shows you have
                          liked or followed the page and upload the screenshot
                          under the Proof of Work Form below. You are also
                          required to enter your Facebook Username or Name which
                          you used to perform the task
                        </span>
                      </div>
                      <div className="text-black dark:text-white text-xs font-semibold font-['Campton']">
                        what to do for this task
                      </div>
                      <div className='self-stretch'>
                        <span className="text-black text-xs font-semibold font-['Campton']">
                          Step 1: 
                        </span>
                        <span className="text-black text-xs font-normal font-['Campton']">
                          Download the image{' '}
                          <Image
                            className='w-40 h-40'
                            src={task?.task?.media_path}
                            alt='Image'
                          />
                          <Button
                            variant='ghost'
                            className='p-2 mt-3 bg-fuchsia-400'
                          >
                            <DownloadImageButton object={task} />
                          </Button>
                          <br />
                        </span>
                        <span className="text-black text-xs font-semibold font-['Campton']">
                          Step 2: 
                        </span>
                        <span className="text-black text-xs font-normal font-['Campton']">
                          post the caption{' '}
                          <strong>{task?.task?.caption}</strong> along with the
                          medial on your {task?.task?.platform} <br />
                        </span>
                        <span className="text-black text-xs font-semibold font-['Campton']">
                          Step 3: 
                        </span>
                        <span className="text-black text-xs font-normal font-['Campton']">
                          Get view of <strong>{task?.task?.posts_count}</strong>
                          <br />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grow shrink basis-0 self-stretch p-3 bg-zinc-400 bg-opacity-30 rounded-lg flex-col justify-start items-center gap-10 inline-flex'>
                  <div className='self-stretch py-6 flex-col justify-start items-center gap-3 flex'>
                    <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                      <div className="grow shrink basis-0 text-center text-stone-900 text-2xl font-medium font-['Campton']">
                        Upload proof
                      </div>
                    </div>
                  </div>
                  <div className=' flex-col relative justify-start items-center gap-8 flex'>
                    <div className='w-[243px] h-40 opacity-50 bg-neutral-800 justify-center items-center inline-flex'>
                      <div className='px-2 py-1 absolute left-50 z-30  w-12 bg-zinc-400 bg-opacity-30 border border-fuchsia-400 justify-center items-center gap-1 flex'>
                        <input
                          type='file'
                          // accept='image/*'
                          id='image-upload'
                          name='media'
                          className='absolute hidden w-full opacity-0 cursor-pointer'
                          {...register('screenshot')}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor='image-upload'
                          className="text-center cursor-pointer text-zinc-400 text-[10px] font-normal font-['Campton']"
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                          >
                            <path
                              d='M12 4V20M20 12L4 12'
                              stroke='white'
                              strokeWidth='2'
                              strokeLinecap='round'
                            />
                          </svg>
                        </label>
                      </div>
                      {media && (
                        <Image
                          src={URL.createObjectURL(media)}
                          alt='Preview'
                          className='w-full h-full object-cover'
                        />
                      )}
                    </div>
                    <div
                      className={`${
                        task?.task?.platform === 'whatsapp' ? 'hidden' : 'grid'
                      }  self-stretch flex-col justify-start items-start gap-3 flex`}
                    >
                      <div className="self-stretch text-black text-xs font-semibold font-['Campton']">
                        Please enter the name on your Facebook account that
                        performed this task
                      </div>
                      <Input
                        placeholder='Corehunter007'
                        size='sm'
                        className="grow self-stretch rounded-none gap-1 inline-flex shrink basis-0 text-black text-[12.83px] font-normal font-['Campton']"
                      />

                      {/* <div className='self-stretch justify-between items-center inline-flex'>
                      <div className='p-2 bg-fuchsia-400 rounded-md border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex'>
                        <div className="text-center text-stone-900 text-[10px] font-medium font-['Campton']">
                          Upload Proof
                        </div>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='self-stretch h-[43px]  justify-between items-end gap-2 flex'>
                <Button
                  type='submit'
                  isDisabled={loading}
                  onClick={() => onCancel(task?.key)}
                  className='md:w-[290px] px-6 opacity-80 py-3.5 bg-red-400 rounded-[100px] justify-center items-center gap-2 inline-flex'
                >
                  <div className="text-center text-black text-[12.83px] font-medium font-['Campton']">
                    {loading ? ' canceling... ' : 'Cancel'}
                  </div>
                </Button>
                <Button
                  type='submit'
                  isDisabled={isPending}
                  className='md:w-[290px] px-6 py-3.5 bg-emerald-200 rounded-[100px] justify-center items-center gap-2 inline-flex'
                >
                  <div className="text-center text-black text-[12.83px] font-medium font-['Campton']">
                    {isPending ? 'Please wait...' : 'Mark as Done'}
                  </div>
                </Button>
              </div>
            </>
          ))}
          <div className='self-stretch p-3 justify-end items-end inline-flex'>
            <div className='justify-start items-center gap-[7px] flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
              >
                <path
                  d='M10.748 13.3417V9.17507M10.748 6.67507V6.66673M4.36458 5.35227L9.9148 2.14785C10.4305 1.85013 11.0658 1.85013 11.5815 2.14785L17.1317 5.35227C17.6473 5.64999 17.965 6.2002 17.965 6.79564V13.2045C17.965 13.7999 17.6473 14.3501 17.1317 14.6479L11.5815 17.8523C11.0658 18.15 10.4305 18.15 9.9148 17.8523L4.36458 14.6479C3.84892 14.3501 3.53125 13.7999 3.53125 13.2045V6.79564C3.53125 6.2002 3.84892 5.64999 4.36458 5.35227Z'
                  stroke='#FF3D00'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
              <div className="text-center text-orange-600 text-sm font-medium font-['Campton']">
                Report Task
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
