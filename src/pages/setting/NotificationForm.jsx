import { Checkbox } from '@nextui-org/react'
import { useForm, Controller } from 'react-hook-form'
import {
  useGetNoticPrefence,
  useUpdateNoticePrefence,
} from '../../api/settingsApis'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'

export default function NotificationForm() {
  const { isLoading } = useGetNoticPrefence()
  return (
    <>
      {isLoading ? (
        <div className='min-h-screen'>
          {' '}
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
        </div>
      ) : (
        <NotificationsFormContents />
      )}
    </>
  )
}

const NotificationsFormContents = () => {
  const { data: noticePrefencents } = useGetNoticPrefence()
  const queryClient = useQueryClient()
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      email_new_features: noticePrefencents.email_new_features,
      email_new_tasks: noticePrefencents.email_new_tasks,
      email_money_earned: noticePrefencents.email_money_earned,

      in_app_new_features: noticePrefencents.in_app_new_features,
      in_app_new_tasks: noticePrefencents.in_app_new_tasks,
      in_app_money_earned: noticePrefencents.in_app_money_earned,

      push_new_features: noticePrefencents.push_new_features,
      push_new_tasks: noticePrefencents.push_new_tasks,
      push_money_earned: noticePrefencents.push_money_earned,
    },
  })
  const { mutateAsync: handleNoticePrefencents } = useUpdateNoticePrefence()

  console.log('warrr', watch())
  console.log(noticePrefencents, 'noticePrefencents')

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        email: {
          new_features: data.email_new_features,
          new_tasks: data.email_new_tasks,
          money_earned: data?.email_money_earned,
        },
        in_app: {
          new_features: data.in_app_new_features,
          new_tasks: data.in_app_new_tasks,
          money_earned: data.in_app_money_earned,
        },
        push: {
          new_features: data.push_new_features,
          new_tasks: data.push_new_tasks,
          money_earned: data.push_money_earned,
        },
      }

      const res = await handleNoticePrefencents({ data: formattedData })
      if (res?.data?.status) {
        toast.success(res.data.message)
        queryClient.invalidateQueries({ queryKey: ['notice_prefrence'] })
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full md:px-16 py-6 flex-col justify-start items-start gap-12 inline-flex'>
          <div className='self-stretch h-[182px] flex-col justify-start items-start gap-6 flex'>
            <div className="text-sm font-bold font-['Campton']">
              Email Alert
            </div>
            <div className='self-stretch  flex-col justify-start items-center gap-0.5 flex'>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='email_new_features'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.email_new_features}
                      radius='none'
                      color='secondary'
                      className='text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      New features and updates
                    </Checkbox>
                  )}
                />
              </div>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='email_new_tasks'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.email_new_tasks}
                      radius='none'
                      color='secondary'
                      className='text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      New Tasks
                    </Checkbox>
                  )}
                />
              </div>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='email_money_earned'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.email_money_earned}
                      radius='none'
                      color='secondary'
                      className='text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      Money earned
                    </Checkbox>
                  )}
                />
              </div>
            </div>
          </div>
          <div className='self-stretch  flex-col justify-start items-start gap-6 flex'>
            <div className="text-sm font-bold font-['Campton']">
              In-App Alert
            </div>
            <div className='self-stretch  flex-col justify-start items-center gap-0.5 flex'>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='in_app_new_features'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.in_app_new_features}
                      radius='none'
                      color='secondary'
                      className='text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                      name='in_app_new_features'
                    >
                      New features and updates
                    </Checkbox>
                  )}
                />
              </div>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='in_app_new_tasks'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.in_app_new_tasks}
                      radius='none'
                      color='secondary'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      className='text-white'
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      New Tasks
                    </Checkbox>
                  )}
                />
              </div>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='in_app_money_earned'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.in_app_money_earned}
                      radius='none'
                      color='secondary'
                      className='text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      Money earned
                    </Checkbox>
                  )}
                />
              </div>
            </div>
          </div>
          <div className='self-stretch flex-col justify-start items-start gap-6 flex'>
            <div className=" text-sm font-bold font-['Campton']">
              Push Notifications{' '}
            </div>
            <div className='self-stretch  flex-col justify-start items-center gap-0.5 flex'>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='push_new_features'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.push_new_features}
                      radius='none'
                      color='secondary'
                      className='text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      New features and updates
                    </Checkbox>
                  )}
                />
              </div>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='push_new_tasks'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={!!noticePrefencents?.push_new_tasks}
                      radius='none'
                      color='secondary'
                      className='text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      New Tasks
                    </Checkbox>
                  )}
                />
              </div>
              <div className='self-stretch p-3 bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:border dark:border-stone-900 justify-start items-center gap-1.5 inline-flex'>
                <Controller
                  name='push_money_earned'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      // defaultSelected={noticePrefencents?.push_money_earned}
                      radius='none'
                      color='secondary'
                      className='text-black dark:text-white'
                      {...field}
                      isSelected={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked)
                        handleSubmit(onSubmit)() // Trigger form submission after state update
                      }}
                      classNames={{
                        label:
                          "grow shrink basis-0 text-black dark:text-white dark:text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                      }}
                    >
                      Money earned
                    </Checkbox>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
