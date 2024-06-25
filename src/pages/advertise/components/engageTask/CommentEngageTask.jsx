/* eslint-disable react/no-unescaped-entities */

import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react'
import { genders, platforms } from '../../../../utilities/data'
import AdvertPaymentModal from '../AdvertPaymentModal'
import { Controller, useForm } from 'react-hook-form'
import {
  useGetCountry,
  useGetReligion,
  useGetState,
} from '../../../../api/locationApis'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import {
  useCreateAdvert,
  useCreateAdvertPaymentWallet,
} from '../../../../api/advertApi'
import IgPageHeaderEngage from '../IgPageHeaderEngage'
import AudFrame from '../../../../assets/comment_logo.svg'
import Loader from '../../../Loader'
import Icons from '../../../../components/Icon'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router'

export default function CommentEngageTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [count, setCount] = useState(1)
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { amount: 40, } })
  const { data: countries, isLoading: isCountryLoading } = useGetCountry()
  const { data: religions, isLoading: isReligionLoading } = useGetReligion()
  const { mutateAsync: createAdvert, isPending } = useCreateAdvert()
  const { mutateAsync: createAdvertWithWallet } = useCreateAdvertPaymentWallet()
  const calculatedAmount = +watch().posts_count * +watch().amount
  const { data: states, isLoading: isStateLoading } = useGetState(
    watch().target_country
  )
  const platform = watch('platform')
  const onSubmit = async () => {
    onOpen()
  }
  useEffect(() => {
    setValue('target_state', '')
  }, [watch().target_country, setValue])
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const handlePaymentSuccess = async () => {
    try {
      const data = watch()
      const formData = new FormData()
      // Append selected image to formData if available

      // Append other form fields
      formData.append('task_type', 'engagement')
      formData.append('target_country', data.target_country)
      formData.append('platform', data.platform)
      formData.append('amount', calculatedAmount)
      formData.append('engagements_count', data.posts_count)
      formData.append('posts_count', data.posts_count)
      formData.append('gender', data.gender)
      formData.append('caption', data.caption)
      formData.append('religion', data.religion)
      formData.append('goal', 'join group')
      formData.append('account_link', data.account_link)
      formData.append('target_state', data.target_state)

      // Update the amount state

      const res = await createAdvert(formData)
      console.log(res, 'res')
      if (res?.data.status) {
        toast.success(res.data.message, {
          duration: 20000,
        })
        // navigate('dashboard/advertise-history')
        const authorizationUrl = res?.data?.authorization_url
        if (authorizationUrl) {
          localStorage.setItem('paystack_redirect', window.location.pathname)
          openInNewTab(authorizationUrl) // Call the function to open in a new tab
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message, {
        duration: 20000,
      })
    }
  }

  const handlePaymentTenditSuccess = async () => {
    try {
      const data = watch()
      const formData = new FormData()

      // Append other form fields
      formData.append('task_type', 'engagement')
      formData.append('target_country', data.target_country)
      formData.append('platform', data.platform)
      formData.append('amount', calculatedAmount)
      formData.append('engagements_count', data.posts_count)
      formData.append('posts_count', data.posts_count)
      formData.append('gender', data.gender)
      formData.append('religion', data.religion)
      formData.append('goal', 'comment')
      formData.append('account_link', data.account_link)
      formData.append('target_state', data.target_state)

      const res = await createAdvertWithWallet(formData)
      console.log(res, 'res')
      if (res?.data.status) {
        toast.success(res.data.message, {
          duration: 20000,
        })
        // navigate('dashboard/advertise-history')
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message, {
        duration: 500,
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
              <div
                    onClick={() => navigate('/dashboard/advertise/?tab=engagement-tasks')}
                    className='justify-start cursor-pointer items-center gap-[7px] inline-flex'
                  >
                    <div className='cursor-pointer'>
                      <Icons type='arrow-back' />
                    </div>
                    <div className="text-center text-fuchsia-400 text-sm font-medium font-['Manrope']">
                      Go back
                    </div>
              </div>
                <IgPageHeaderEngage
                  frame={AudFrame}
                  title={`Get Genuine People to Comment on Your  Social Media Posts`}
                  descp={`Get Genuine people to comment your social media post. You can get as many comments as you desire simply by entering the link to your post either on Instagram, Facebook, TikTok,X or any other platform.`}
                  price={`₦40 per comments`}
                />
              </div>
              <div className='self-stretch  md:mt-8 grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
                <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                  <div className=" text-2xl font-medium font-['Manrope']">
                    Create an Engagement Task
                  </div>
                </div>
                <div className='self-stretch grow shrink basis-0 md:px-16 py-6 flex-col justify-start items-start gap-12 flex'>
                  <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex'>
                    <div className='self-stretch  flex-col justify-start items-center gap-3.5 flex'>
                      <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                        <div className="text-center text-[12.83px] font-medium font-['Manrope']">
                          Select Platform
                        </div>

                        <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                          <Controller
                            name='platform'
                            control={control}
                            render={({ field }) => (
                              <Select
                                placeholder='Select'
                                aria-labelledby='platform'
                                isInvalid={!!errors.platform}
                                errorMessage={errors?.platform?.message}
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
                                className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Manrope']"
                                {...field}
                              >
                                {platforms.map((platform) => (
                                  <SelectItem
                                    key={platform.value}
                                    value={platform.value}
                                  >
                                    {platform.label}
                                  </SelectItem>
                                ))}
                              </Select>
                            )}
                            rules={{ required: true }}
                          />
                        </div>
                        <div className='justify-center items-center gap-2 inline-flex'>
                          <div className="text-[10px] font-normal font-['Manrope']">
                            Please select the social media or App Store platform
                            where you want to perform this action
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Manrope']">
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
                                className="grow shrink basis-0  rounded  text-opacity-50 text-[12.83px] font-normal font-['Manrope']"
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
                            rules={{ required: true }}
                          />
                        </div>

                        <div className='justify-center items-center gap-2 inline-flex'>
                          <div className="text-[10px] font-normal font-['Manrope']">
                            You can target a particular location where your
                            Advert task will be mostly shown. Select “All over
                            Nigeria” if you want to target every location within
                            the country.
                          </div>
                        </div>
                      </div>
                      {watch().target_country !== 'All Countries' && (
                        <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                          <div className='px-2 justify-center items-center gap-2 inline-flex'>
                            <div className="text-center text-[12.83px] font-medium font-['Manrope']">
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
                                  selectedKeys={
                                    field.value ? [field.value] : []
                                  }
                                  className="grow shrink basis-0 rounded  text-opacity-50 text-[12.83px] font-normal font-['Manrope']"
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
                              rules={{ required: true }}
                            />
                          </div>

                          <div className='justify-center items-center gap-2 inline-flex'>
                            <div className="text-[10px] font-normal font-['Manrope']">
                              You can target a particular location where your
                              Advert task will be mostly shown. Select “All over
                              Nigeria” if you want to target every location
                              within the country.
                            </div>
                          </div>
                        </div>
                      )}
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Manrope']">
                            Number of Comment do you want?
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
                                type='number'
                                onChange={(e) => {
                                  setCount(e.target.value)
                                }}
                                placeholder='No. of comments'
                                {...field}
                                className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Manrope']"
                              />
                            )}
                            rules={{ required: true, min: 0, 
                                validate: {
                                  invalidInput: (fieldValue) => {
                                    return (
                                      fieldValue > 0 || 'invalid input' 
                                    )
                                  },
                                  isMinimum: (fieldValue) => {
                                    return (
                                      fieldValue * +watch().amount >= 1000 || `The total amount of #${+watch().posts_count * +watch().amount} is below our minimum order. Please note that the minimum order amount is #1,000. Kindly adjust your orer accordingly.`
                                    )
                                  },
                                  isMaximum: (fieldValue) => {
                                    return (
                                      fieldValue * +watch().amount <= 500000 || `Your order total amount of #${(+watch().posts_count * +watch().amount).toLocaleString()} exceeds the maximum allowed amount. Please review your order and adjust the total accordingly.`
                                    )
                                  }
                                }
                             }}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink text-[10px] font-normal font-['Manrope']">
                            This is the number of comment you want us to get for
                            you
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="  text-[12.83px] font-medium font-['Manrope']">
                            The Link to Your social Media Post
                          </div>
                        </div>
                        <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                          <Controller
                            name='account_link'
                            control={control}
                            render={({ field }) => (
                              <Input
                                size='sm'
                                errorMessage={errors?.account_link?.message}
                                isInvalid={!!errors?.account_link}
                                required={true}
                                value={count}
                                onChange={(e) => {
                                  setCount(e.target.value)
                                }}
                                placeholder='Enter your link'
                                {...field}
                                className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Manrope']"
                              />
                            )}
                            rules={{ required: true, 
                              validate: {
                                isValidLink: (fieldValue) => {
                                  return (
                                    (fieldValue.startsWith(`https://${platform}.`) || (fieldValue.startsWith(`https://www.${platform}.`)) || (platform === 'facebook' ? fieldValue.startsWith('https://fb.') || fieldValue.startsWith(`https://www.facebook.`) || fieldValue.startsWith(`https://www.fb.`) : '') || (platform === 'x' ? fieldValue.startsWith('https://twitter.') || fieldValue.startsWith(`https://www.twitter.`) || fieldValue.startsWith(`https://www.x.`) : '')) || 'Link not valid'
                                  )
                                }
                              }
                             }}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink text-[10px] font-normal font-['Manrope']">
                            Enter the link to the post you want people to like.
                            ensure the link you paste here is the link to your
                            post not your page
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Manrope']">
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
                                className="grow shrink basis-0 rounded  text-opacity-50 text-[12.83px] font-normal font-['Manrope']"
                                placeholder='Select Gender'
                                classNames={{
                                  listbox: [
                                    'bg-transparent',
                                    'text-black/90 dark:text-white/90',
                                    'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                  ],
                                  popoverContent: [
                                    'dark:bg-zinc-700',
                                    'bg-white ',
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
                            rules={{ required: true }}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink text-[10px] font-normal font-['Manrope']">
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
                          <div className="text-center text-[12.83px] font-medium font-['Manrope']">
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
                                className="grow shrink basis-0 dark:text-white text-black  rounded  text-opacity-50 text-[12.83px] font-normal font-['Manrope']"
                                placeholder='Select Religion'
                                isLoading={isReligionLoading}
                                {...field}
                                classNames={{
                                  listbox: [
                                    'bg-transparent',
                                    'text-black/90 dark:text-white/90',
                                    'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                                  ],
                                  popoverContent: [
                                    'dark:bg-zinc-700',
                                    'bg-white ',
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
                            rules={{ required: true }}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink basis-0 text-[10px] font-normal font-['Manrope']">
                            You can target people of a particular religion or
                            belief. Your advert and task will be shown to the
                            particular religion you select. Select 'All
                            Religion' if you want to target all religion
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full px-3 py-6 bg-zinc-400 bg-opacity-30 rounded justify-between itemscenter flex flex-col'>
                    <div className=" px-2 text-[12.83px] font-medium font-['Manrope']">
                      Total Pay
                    </div>
                    <div className='self-stretch px-2 md:justify-between items-center gap-2 inline-flex'>
                      <div className="w-40 text-3xl font-medium font-['Manrope']">
                      {calculatedAmount > 0 ? ` ₦${calculatedAmount?.toLocaleString()}` : '0'}
                      </div>
                      <Button
                        type='submit'
                        isDisabled={isPending}
                        className='md:w-[290px] text-white cursor-pointer px-6 py-6 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex'
                      >
                        {isPending ? <Loader /> : 'Submit and Pay'}
                      </Button>
                    </div>
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
