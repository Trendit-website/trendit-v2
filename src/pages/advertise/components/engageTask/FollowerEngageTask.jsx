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
import { useGetCountry, useGetReligion } from '../../../../api/locationApis'
import toast from 'react-hot-toast'
import { useState } from 'react'
import {
  useCreateAdvert,
  useCreateAdvertPaymentWallet,
} from '../../../../api/advertApi'
import IgPageHeaderEngage from '../IgPageHeaderEngage'
import SpotyFram from '../../../../assets/logos_apple-app-store.svg'
// import { useNavigate } from 'react-router'

export default function FollowerEngageTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // // const navigate = useNavigate()

  const [count, setCount] = useState(1)

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { amount: 150, posts_count: 1 } })
  const { data: countries, isLoading: isCountryLoading } = useGetCountry()
  const { data: religions, isLoading: isReligionLoading } = useGetReligion()
  const { mutateAsync: createAdvert, isPending } = useCreateAdvert()
  const { mutateAsync: createAdvertWithWallet } = useCreateAdvertPaymentWallet()
  const calculatedAmount = +watch().posts_count * +watch().amount

  const onSubmit = async () => {
    onOpen()
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

      const res = await createAdvert(formData)
      if (res?.data.status) {
        toast.success(res.data.message, {
          duration: 20000,
        })
        // navigate('dashboard/advertise-history')
        const authorizationUrl = res?.data?.authorization_url
        if (authorizationUrl) {
          localStorage.setItem('paystack_redirect', window.location.pathname)
          window.open(authorizationUrl) // Open the URL in a new tab
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
      formData.append('goal', 'join group')
      formData.append('account_link', data.account_link)

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
                <IgPageHeaderEngage
                  frame={SpotyFram}
                  title={`Get People to Download and Review Your App on Apple store`}
                  descp={`Get real people to post your ads on their social media account. Get real people to post your ads on their social media account. Get real 
people to post your ads on their social media account.`}
                  price={`₦5 per Like`}
                />
              </div>
              <div className='self-stretch  mt-8 grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
                <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                  <div className=" text-2xl font-medium font-['Campton']">
                    Create an Engagement Task
                  </div>
                </div>
                <div className='self-stretch grow shrink basis-0 px-16 py-6 flex-col justify-start items-start gap-12 flex'>
                  <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex'>
                    <div className='self-stretch  flex-col justify-start items-center gap-3.5 flex'>
                      <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
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
                                className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Campton']"
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
                          />
                        </div>
                        <div className='justify-center items-center gap-2 inline-flex'>
                          <div className="text-center  text-[10px] font-normal font-['Campton']">
                            Please select the social media or App Store platform
                            where you want to perform this action
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center  text-[12.83px] font-medium font-['Campton']">
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
                                className="grow shrink basis-0 dark:text-white text-black  rounded  text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                                placeholder='Select country'
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
                            You can target and select a particular location
                            where your task or advert will be mostly shown. You
                            can also select all States if you want to target
                            every location in Nigeria
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center text-[12.83px] font-medium font-['Campton']">
                            Number of Followers do you want?
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
                          <div className="grow shrink text-[10px] font-normal font-['Campton']">
                            This is the number of Download and Review want us to
                            get for you
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center dark:text-white text-stone-900 text-[12.83px] font-medium font-['Campton']">
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
                                placeholder='Enter the number of view you want'
                                {...field}
                                className="grow shrink basis-0  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Campton']"
                              />
                            )}
                            rules={{ required: true }}
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink dark:text-white basis-0 text-stone-900 text-[10px] font-normal font-['Campton']">
                            Enter the link to the post you want people to like.
                            ensure the link you paste here is the link to your
                            post not your page
                          </div>
                        </div>
                      </div>
                      <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                        <div className='px-2 justify-center items-center gap-2 inline-flex'>
                          <div className="text-center dark:text-white text-stone-900 text-[12.83px] font-medium font-['Campton']">
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
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink dark:text-white basis-0 text-stone-900 text-[10px] font-normal font-['Campton']">
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
                          <div className="text-center dark:text-white text-stone-900 text-[12.83px] font-medium font-['Campton']">
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
                                className="grow shrink basis-0 dark:text-white text-black  rounded  text-opacity-50 text-[12.83px] font-normal font-['Campton']"
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
                          />
                        </div>
                        <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                          <div className="grow shrink dark:text-white basis-0 text-stone-900 text-[10px] font-normal font-['Campton']">
                            You can target people of a particular religion or
                            belief. Your advert and task will be shown to the
                            particular religion you select. Select 'All
                            Religion' if you want to target all religion
                          </div>
                        </div>
                      </div>
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
