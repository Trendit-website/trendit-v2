/* eslint-disable react/no-unescaped-entities */

import {
  Button,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from '@nextui-org/react'
import {
  genders,
  generateVideoThumbnail,
  twplatforms,
} from '../../../../utilities/data'
import AdvertPaymentModal from '../AdvertPaymentModal'
import IgPageHeader from '../IgPageHeader'
import { Controller, useForm } from 'react-hook-form'
import { useGetCountry, useGetReligion, useGetState } from '../../../../api/locationApis'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import {
  useCreateAdvert,
  useCreateAdvertPaymentWallet,
} from '../../../../api/advertApi'
import TwFrame from '../../../../assets/logo_x_icon.svg'
// import { useNavigate } from 'react-router'

export default function CreateTwAdvertTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imageUrl, setImageUrl] = useState('')
  const [media, setMedia] = useState(null)
  const [count, setCount] = useState(1)

  const {
    handleSubmit,
    control,
    watch,
    register,
    setValue, 
    formState: { errors },
  } = useForm({
    defaultValues: { amount: 150, posts_count: 1, platform: 'twitter' },
  })
  const { data: countries, isLoading: isCountryLoading } = useGetCountry()
  
  const { data: states, isLoading: isStateLoading } = useGetState(
    watch().target_country
  )
  const { data: religions, isLoading: isReligionLoading } = useGetReligion()
  const { mutateAsync: createAdvert, isPending } = useCreateAdvert()
  const { mutateAsync: createAdvertWithWallet } = useCreateAdvertPaymentWallet()
  const calculatedAmount = +watch().posts_count * +watch().amount
  const handleChange = async ({ target }) => {
    const { name } = target

    if (name === 'media') {
      const file = target.files[0]

      if (!file) {
        return // No file selected, do nothing
      }

      const allowedTypes = ['image/*', 'video/*']
      const maxFileSize = 20 * 1024 * 1024 // 10 MB in bytes

      if (
        !allowedTypes.some((type) =>
          file.type.startsWith(type.replace('*', ''))
        )
      ) {
        return toast.error(
          `Invalid file type! Please select an image or video.`,
          {
            duration: 5000,
          }
        )
      }

      if (file.size > maxFileSize) {
        return toast.error(
          `File size exceeds the limit (10MB). Please choose a smaller file.`,
          {
            duration: 5000,
          }
        )
      }

      // If the file is valid, set the image URL, log the file, and set the image state
      setImageUrl(URL.createObjectURL(file))
      setMedia(file)

      console.log(media, 'media')
      console.log(imageUrl, 'imageUrl')

      if (file.type.startsWith('video/')) {
        try {
          const videoThumbnail = await generateVideoThumbnail(file)
          setImageUrl(videoThumbnail)
          console.log(videoThumbnail, 'videoThumbnail')
          // Use videoThumbnail to display the video thumbnail
        } catch (error) {
          console.error('Error generating video thumbnail:', error)
        }
      }
    }
  }

  // // const navigate = useNavigate()

   useEffect(() => {
     setValue('target_state', '')
     //  setValue('local_government', '')
   }, [watch().target_country, setValue])

  const onSubmit = async () => {
    onOpen()
  }

  const handlePaymentSuccess = async () => {
    try {
      const data = watch()
      const formData = new FormData()
      // Append selected image to formData if available
      if (media) {
        formData.append('media', media)
      }
      // Append other form fields
      formData.append('task_type', 'advert')
      formData.append('target_country', data.target_country)
            formData.append('target_state', data.target_state)

      formData.append('platform', data.platform)
      formData.append('amount', calculatedAmount)
      formData.append('engagements_count', data.posts_count)
      formData.append('posts_count', data.posts_count)
      formData.append('gender', data.gender)
      formData.append('caption', data.caption)
      formData.append('religion', data.religion)
      formData.append('goal', data.phone)
      formData.append('account_link', data.phone)

      const res = await createAdvert(formData)
      if (res?.data.status) {
        toast.success(res.data.message, {
          duration: 20000,
        })
        //  navigate('dashboard/advertise-history')
        const authorizationUrl = res?.data?.authorization_url
        if (authorizationUrl) {
          localStorage.setItem('paystack_redirect', window.location.pathname)
          window.open(authorizationUrl) // Open the URL in a new tab
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
      const data = watch()
      const formData = new FormData()
      // Append selected image to formData if available
      if (media) {
        formData.append('media', media)
      }
      // Append other form fields
      formData.append('task_type', 'advert')
      formData.append('target_country', data.target_country)
            formData.append('target_state', data.target_state)

      formData.append('platform', data.platform)
      formData.append('amount', calculatedAmount)
      formData.append('engagements_count', data.posts_count)
      formData.append('posts_count', data.posts_count)
      formData.append('gender', data.gender)
      formData.append('caption', data.caption)
      formData.append('religion', data.religion)
      formData.append('goal', data.phone)
      formData.append('account_link', data.phone)

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
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='p-3 bg-white dark:bg-zinc-900 flex-col justify-start items-start gap-3 inline-flex'>
            <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
              <div className='w-full'>
                <IgPageHeader
                  title={'Get People to Post Your Advert on Twitter'}
                  frame={TwFrame}
                  descp={`Get real people to post your advert on their Twitter account having at least 1000 active followers each on their account to post your
advert to their followers. This will give your advert massive views within a short period of time. You can indicate any number of people you 
want to post your advert.`}
                  price={`₦150 per Advert Post`}
                />
              </div>
              <div className='self-stretch  mt-8 grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
                <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                  <div className="dark:text-white text-stone-900 text-2xl font-medium font-['Campton']">
                    Create Advert Task
                  </div>
                </div>
                <div className='self-stretch grow shrink basis-0 px-16 py-6 flex-col justify-start items-start gap-12 flex'>
                  <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex'>
                    <div className='self-stretch  flex-col justify-start items-center gap-3.5 flex'>
                      <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center dark:text-white text-stone-900 text-[12.83px] font-medium font-['Campton']">
                            Select Platform
                          </div>
                        </div>

                        <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                          <Controller
                            name='platform'
                            control={control}
                            render={({ field }) => (
                              <Select
                                placeholder='Select'
                                aria-labelledby='platform'
                                size='sm'
                                selectedKeys={field.value ? [field.value] : []}
                                classNames={{
                                  listbox: [
                                    'bg-transparent',
                                    'text-black/90 dark:text-white/90',
                                    'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                  ],

                                  trigger: [
                                    'bg-zinc-700 bg-opacity-10',
                                    'dark:bg-white dark:bg-opacity-10',
                                    'hover:bg-bg-white hover:bg-opacity-10',
                                    'dark:hover:bg-default/70',
                                    'group-data-[focused=true]:bg-default-200/50',
                                    'dark:group-data-[focused=true]:bg-default/60',
                                    '!cursor-text',
                                  ],
                                }}
                                className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                                {...field}
                              >
                                {twplatforms?.map((platform) => (
                                  <SelectItem
                                    key={platform.value}
                                    value={platform.value}
                                  >
                                    {platform.label}
                                  </SelectItem>
                                ))}
                              </Select>
                            )}
                          />
                        </div>
                        <div className='justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[10px] font-normal font-['Campton']">
                            Please select the social media or App Store platform
                            where you want to perform this action
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
                            Select Location
                          </div>
                        </div>
                        <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                          <Controller
                            name='target_country'
                            control={control}
                            aria-labelledby='target_country'
                            render={({ field }) => (
                              <Select
                                aria-labelledby='target_country'
                                isInvalid={!!errors.target_country}
                                errorMessage={errors?.target_country?.message}
                                isLoading={isCountryLoading}
                                selectedKeys={field.value ? [field.value] : []}
                                className="grow shrink basis-0  rounded  text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                                placeholder='Select country'
                                classNames={{
                                  listbox: [
                                    'bg-transparent',
                                    'text-black/90 dark:text-white/90',
                                    'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                  ],

                                  trigger: [
                                    'bg-zinc-700 bg-opacity-10',
                                    'dark:bg-white dark:bg-opacity-10',
                                    'hover:bg-bg-white hover:bg-opacity-10',
                                    'dark:hover:bg-default/70',
                                    'group-data-[focused=true]:bg-default-200/50',
                                    'dark:group-data-[focused=true]:bg-default/60',
                                    '!cursor-text',
                                  ],
                                }}
                                {...field}
                              >
                                {countries?.map((cou) => (
                                  <SelectItem key={cou.name} value={cou.name}>
                                    {cou.name}
                                  </SelectItem>
                                ))}
                              </Select>
                            )}
                          />
                        </div>

                        <div className='justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[10px] font-normal font-['Campton']">
                            You can target a particular location where your
                            Advert task will be mostly shown. Select “All over
                            Nigeria” if you want to target every location within
                            the country.
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
                            State
                          </div>
                        </div>
                        <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                          <Controller
                            name='target_state'
                            aria-labelledby='target_state'
                            control={control}
                            render={({ field }) => (
                              <Select
                                aria-labelledby='target_state'
                                isInvalid={!!errors.target_state}
                                errorMessage={errors?.target_state?.message}
                                isLoading={isStateLoading}
                                selectedKeys={field.value ? [field.value] : []}
                                className="grow shrink basis-0 rounded  text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                                placeholder='Select state'
                                classNames={{
                                  listbox: [
                                    'bg-transparent',
                                    'text-black/90 dark:text-white/90',
                                    'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                  ],
                                  trigger: [
                                    'bg-zinc-700 bg-opacity-10',
                                    'dark:bg-white dark:bg-opacity-10',
                                    'hover:bg-bg-white hover:bg-opacity-10',
                                    'dark:hover:bg-default/70',
                                    'group-data-[focused=true]:bg-default-200/50',
                                    'dark:group-data-[focused=true]:bg-default/60',
                                    '!cursor-text',
                                    'border-2 border-transparent',
                                    'focus-within:!border-fuchsia-600  ',
                                    '!cursor-text',
                                  ],
                                }}
                                {...field}
                              >
                                {states?.map((cou) => (
                                  <SelectItem key={cou.name} value={cou.name}>
                                    {cou.name}
                                  </SelectItem>
                                ))}
                              </Select>
                            )}
                          />
                        </div>

                        <div className='justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[10px] font-normal font-['Campton']">
                            You can target a particular location where your
                            Advert task will be mostly shown. Select “All over
                            Nigeria” if you want to target every location within
                            the country.
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
                            Number of Twitter Advert Post you want
                          </div>
                        </div>
                        <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                          <Controller
                            name='posts_count'
                            control={control}
                            render={({ field }) => (
                              <Input
                                size='sm'
                                errorMessage={errors?.posts_count?.message}
                                isInvalid={!!errors?.posts_count}
                                required={true}
                                value={count}
                                onChange={(e) => {
                                  setCount(e.target.value)
                                }}
                                placeholder='Enter the number of view you want'
                                {...field}
                                className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                              />
                            )}
                            rules={{ required: true }}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink basis-0 text-[10px] font-normal font-['Campton']">
                            Enter the desired Number of Twitter Advert Post you
                            want Us to get for you.
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
                            Select Gender
                          </div>
                        </div>
                        <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                          <Controller
                            name='gender'
                            control={control}
                            render={({ field }) => (
                              <Select
                                {...field}
                                aria-labelledby='gender'
                                isInvalid={!!errors.gender}
                                errorMessage={errors?.gender?.message}
                                selectedKeys={field.value ? [field.value] : []}
                                className="grow shrink basis-0 dark:text-white text-black  rounded  text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                                placeholder='Select Gender'
                                classNames={{
                                  listbox: [
                                    'bg-transparent',
                                    'text-black/90 dark:text-white/90',
                                    'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                  ],

                                  trigger: [
                                    'bg-zinc-700 bg-opacity-10',
                                    'dark:bg-white dark:bg-opacity-10',
                                    'hover:bg-bg-white hover:bg-opacity-10',
                                    'dark:hover:bg-default/70',
                                    'group-data-[focused=true]:bg-default-200/50',
                                    'dark:group-data-[focused=true]:bg-default/60',
                                    '!cursor-text',
                                  ],
                                }}
                              >
                                {genders.map((gender) => (
                                  <SelectItem
                                    key={gender.value}
                                    value={gender.value}
                                  >
                                    {gender.label}
                                  </SelectItem>
                                ))}
                              </Select>
                            )}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink text-[10px] font-normal font-['Campton']">
                            You can select the kind of gender whether male or
                            female that you want to see your task. For example,
                            if you are selling women fashion items, you can
                            select the Female gender so your task will be shown
                            to only females. Select 'All Gender' if you want to
                            target all genders
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
                            Select Religion
                          </div>
                        </div>
                        <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                          <Controller
                            name='religion'
                            control={control}
                            render={({ field }) => (
                              <Select
                                aria-labelledby='religion'
                                isInvalid={!!errors.religion}
                                errorMessage={errors?.religion?.message}
                                selectedKeys={field.value ? [field.value] : []}
                                className="grow shrink basis-0 rounded  text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                                placeholder='Select Religion'
                                isLoading={isReligionLoading}
                                {...field}
                                classNames={{
                                  listbox: [
                                    'bg-transparent',
                                    'text-black/90 dark:text-white/90',
                                    'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                  ],

                                  trigger: [
                                    'bg-zinc-700 bg-opacity-10',
                                    'dark:bg-white dark:bg-opacity-10',
                                    'hover:bg-bg-white hover:bg-opacity-10',
                                    'dark:hover:bg-default/70',
                                    'group-data-[focused=true]:bg-default-200/50',
                                    'dark:group-data-[focused=true]:bg-default/60',
                                    '!cursor-text',
                                  ],
                                }}
                              >
                                {religions?.map((religion) => (
                                  <SelectItem key={religion} value={religion}>
                                    {religion}
                                  </SelectItem>
                                ))}
                              </Select>
                            )}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink  basis-0 text-[10px] font-normal font-['Campton']">
                            You can target people of a particular religion or
                            belief. Your advert and task will be shown to the
                            particular religion you select. Select 'All
                            Religion' if you want to target all religion
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch rounded-md flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
                            Enter Advert Task or Caption
                          </div>
                        </div>

                        <Textarea
                          {...register('caption')}
                          placeholder='Caption'
                          className="text-black  self-stretch grow shrink basis-0 px2 py3.5  bg-opacity-30 rounded justify-start items-start gap-2 inline-flex text-[12.83px] font-normal font-['Campton']"
                        />

                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink basis-0  text-[10px] font-normal font-['Campton']">
                            Please enter the advert text or caption. The advert
                            text or caption should be well detailed. You can
                            also include a link to your site, a phone number for
                            people to contact you or any information you want
                            people to see on your advert
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='self-stretch  flex-col justify-start items-start gap-3 flex'>
                      <div className='px-2 justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-[12.83px] font-medium font-['Campton']">
                          Choose one of the Advert Media Upload Below:
                        </div>
                      </div>
                      <div className='justify-start items-center gap-[11px] inline-flex'>
                        <div className='px-2 py-1 bg-zinc-400 bg-opacity-30 border border-fuchsia-400 justify-center items-center gap-1 flex'>
                          <input
                            type='file'
                            // accept='image/*'
                            multiple
                            id='image-upload'
                            name='media'
                            className='absolute hidden w-full opacity-0 cursor-pointer'
                            {...register('media')}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor='image-upload'
                            className="text-center w-20 flex items-center gap-2 cursor-pointer  text-[#FF6DFB] text-[10px] font-normal font-['Campton']"
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                            >
                              <path
                                d='M2.50466 6.66667C2.5 7.01051 2.5 7.39635 2.5 7.83333V12.1667C2.5 14.0335 2.5 14.9669 2.86331 15.68C3.18289 16.3072 3.69282 16.8171 4.32003 17.1367C5.03307 17.5 5.96649 17.5 7.83333 17.5H12.1667C12.6037 17.5 12.9895 17.5 13.3333 17.4953M2.50466 6.66667C2.51991 5.54158 2.58504 4.86616 2.86331 4.32003C3.18289 3.69282 3.69282 3.18289 4.32003 2.86331C5.03307 2.5 5.96649 2.5 7.83333 2.5H12.1667C14.0335 2.5 14.9669 2.5 15.68 2.86331C16.3072 3.18289 16.8171 3.69282 17.1367 4.32003C17.5 5.03307 17.5 5.96649 17.5 7.83333V12.1667C17.5 13.4282 17.5 14.2635 17.3879 14.8925M2.50466 6.66667L6.67133 10.8333M13.3333 17.4953C14.4584 17.4801 15.1338 17.415 15.68 17.1367C16.3072 16.8171 16.8171 16.3072 17.1367 15.68C17.2545 15.4488 17.3341 15.1944 17.3879 14.8925M13.3333 17.4953L6.67133 10.8333M6.67133 10.8333L7.73726 9.7674C8.52929 8.97537 8.92531 8.57935 9.38197 8.43097C9.78365 8.30046 10.2163 8.30046 10.618 8.43097C11.0747 8.57935 11.4707 8.97537 12.2627 9.7674L17.3879 14.8925M14.175 5.83333H14.1583'
                                stroke='#FF6DFB'
                                strokeWidth='2'
                                strokeLinecap='round'
                              />
                            </svg>{' '}
                            Photo
                          </label>
                        </div>
                        <div className='px-2 py-1 bg-zinc-400 bg-opacity-30 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex'>
                          <input
                            type='file'
                            // accept='video/*'
                            id='video-upload'
                            className='absolute w-full hidden opacity-0 cursor-pointer'
                            {...register('media')}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor='video-upload'
                            className="text-center w-20 flex items-center gap-2 cursor-pointer text-[12.83px] font-medium font-['Campton']"
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                            >
                              <path
                                d='M15.0001 6.66683L17.298 6.09236C17.8239 5.96087 18.3334 6.35867 18.3334 6.90081V13.0995C18.3334 13.6417 17.8239 14.0395 17.298 13.908L15.0001 13.3335M7.00008 16.6668H9.66675C11.5336 16.6668 12.467 16.6668 13.1801 16.3035C13.8073 15.9839 14.3172 15.474 14.6368 14.8468C15.0001 14.1338 15.0001 13.2003 15.0001 11.3335V8.66683C15.0001 6.79999 15.0001 5.86657 14.6368 5.15353C14.3172 4.52632 13.8073 4.01639 13.1801 3.69681C12.467 3.3335 11.5336 3.3335 9.66675 3.3335H7.00008C5.13324 3.3335 4.19982 3.3335 3.48678 3.69681C2.85957 4.01639 2.34964 4.52632 2.03006 5.15353C1.66675 5.86657 1.66675 6.79999 1.66675 8.66683V11.3335C1.66675 13.2003 1.66675 14.1338 2.03006 14.8468C2.34964 15.474 2.85957 15.9839 3.48678 16.3035C4.19982 16.6668 5.13324 16.6668 7.00008 16.6668Z'
                                stroke='#B1B1B1'
                                strokeWidth='2'
                                strokeLinecap='round'
                              />
                            </svg>{' '}
                            Video
                          </label>
                        </div>
                      </div>
                      <div className="w-[559px] h-6 text-[10px] font-normal font-['Campton']">
                        Upload a Photo of the Advert You want people to post on
                        their social media post accounts like Whatsapp,
                        Facebook, Instagram, Twitter etc
                      </div>
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          className=' w-36 objectcontain'
                          alt=''
                        />
                      ) : <div className='mt-4'>
                          <video width='240' height='180' controls>
                            <source src={imageUrl} type='video/mp4' />
                          </video>
                        </div> ? (
                        <div className='w-[243px] h-[148.59px] opacity-40 dark:bg-white bg-stone-900 justify-center items-center inline-flex'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='24'
                            viewBox='0 0 25 24'
                            fill='none'
                          >
                            <path
                              d='M12.252 4V20M20.252 12L4.25195 12'
                              stroke='#FFD0FE'
                              strokeWidth='2'
                              strokeLinecap='round'
                            />
                          </svg>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className='w-full px-3 py-6 bg-zinc-400 bg-opacity-30 rounded justify-between items-center inline-flex'>
                    <div className='self-stretch px-2 flex-col justify-center items-center gap-2 inline-flex'>
                      <div className="text-white text-[12.83px] font-medium font-['Campton']">
                        Total Pay
                      </div>

                      <div className='self-stretch w-full  bg-zinc-400 bg-opacity-30 rounded-lg justify-start items-center gap-2 inline-flex'>
                        <Controller
                          name='amount'
                          control={control}
                          render={({ field }) => (
                            <Input
                              type='text'
                              size='sm'
                              placeholder='amount'
                              {...field}
                              errorMessage={errors?.amount?.message}
                              isInvalid={!!errors?.amount}
                              value={calculatedAmount}
                              classNames={{
                                input: [
                                  'text-black/90 dark:text-white/90',
                                  'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                ],
                                inputWrapper: [
                                  'bg-opacity-10',
                                  'dark:hover:bg-opacity-10',
                                  'group-data-[focused=true]:bg-opacity-10',
                                  'dark:group-data-[focused=true]:bg-opacity-10',
                                  'border-2 border-transparent',
                                  'focus-within:!border-fuchsia-600  ',
                                  '!cursor-text',
                                ],
                              }}
                              className=" rounded text-zinc-400 text-3xl font-normal font-['Campton']"
                            />
                          )}
                        />
                      </div>
                    </div>
                    <Button
                      type='submit'
                      isDisabled={isPending}
                      className='w-[290px]  cursor-pointer px-6 py-6 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex'
                    >
                      {isPending ? (
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
                      ) : (
                        'Submit and Pay'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {isOpen && (
        <AdvertPaymentModal
          isOpen={isOpen}
          onClose={onClose}
          amount={calculatedAmount}
          onSuccess={handlePaymentSuccess}
          onWalletPaymentSuccess={handlePaymentTenditSuccess}
        />
      )}
    </>
  )
}
