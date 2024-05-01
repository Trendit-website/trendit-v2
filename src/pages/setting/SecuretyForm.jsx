import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Switch } from '@nextui-org/switch'
import {
  // useGetSecurityPrefrence,
  useUpdateSecPrefence,
} from '../../api/settingsApis'
import { useForm, Controller } from 'react-hook-form'

import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { EyeIcon } from 'lucide-react'

export default function SecuretyForm() {
  // const { data: securityPrefrence } = useGetSecurityPrefrence()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // '2fa_method': securityPrefrence?.2FA_method,
    },
  })
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const queryClient = useQueryClient()
  const { mutateAsync: handleSecurityUpdate } = useUpdateSecPrefence()

  // console.log(securityPrefrence, 'securityPrefrence')

  const onSubmit = async (data) => {
    // console.log(data, 'data')
    try {
      const res = await handleSecurityUpdate({ data })
      if (res?.data?.status) {
        toast.success(res.data.message)
        queryClient.invalidateQueries({ queryKey: ['sec_prefence'] })
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='self-stretch grow shrink basis-0 md:px-16 py-6 flex-col justify-start items-start gap-12 flex'>
          <div className='self-stretch h[446px] flex-col justify-start items-start gap-6 flex'>
            <div className=" text-sm font-bold font-['Campton']">Security</div>

            <div className='self-stretch h[302px] flex-col justify-start items-center gap-3.5 flex'>
              {/* <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-black dark:text-white text-[12.83px] font-medium font-['Campton']">
                    Password
                  </div>
                </div>
                <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                  <Input
                    placeholder='...........'
                    size='sm'
                    classNames={{
                      input: [
                        'bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                      ],
                      innerWrapper: 'bg-transparent',
                      inputWrapper: [
                        'bg-zinc-700 bg-opacity-10',
                        'dark:bg-white dark:bg-opacity-10',
                        'hover:bg-bg-white hover:bg-opacity-10',
                        'dark:hover:bg-default/70',
                        'group-data-[focused=true]:bg-default-200/50',
                        'dark:group-data-[focused=true]:bg-default/60',
                        '!cursor-text',
                        'border-2 border-transparent',
                        'focus-within:!border-fuchsia-600  ',
                      ],
                    }}
                    className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                  />
                </div>
              </div> */}
              {/* <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-[12.83px] font-medium font-['Campton']">
                    Change Password
                  </div>
                </div>

                <div className='self-stretch w-full bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                  <Input
                    endContent={
                      <Button
                        variant='light'
                        className="text-[#FF6DFB] dark:text-fuchsia-200 text-[12.83px] font-normal font-['Campton']"
                      >
                        Edit
                      </Button>
                    }
                    placeholder='................'
                    size='sm'
                    classNames={{
                      input: [
                        'bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                      ],

                      innerWrapper: 'bg-transparent',
                      inputWrapper: [
                        'bg-zinc-700 rounded-none bg-opacity-10',
                        'dark:bg-white dark:bg-opacity-10',
                        'hover:bg-bg-white hover:bg-opacity-10',
                        'dark:hover:bg-default/70',
                        'group-data-[focused=true]:bg-default-200/50',
                        'dark:group-data-[focused=true]:bg-default/60',
                        '!cursor-text',
                        'border-2 border-transparent',
                        'focus-within:!border-fuchsia-600  ',
                      ],
                    }}
                    className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                  />
                </div>
              </div> */}

              <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-[12.83px] font-medium font-['Campton']">
                    Change Password
                  </div>
                </div>

                <div className='self-stretch w-full hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                  <Controller
                    name='new_password'
                    control={control}
                    render={({ field }) => (
                      <Input
                        endContent={
                          <div className='flex gap-2 items-center'>
                            <button
                              className='focus:outline-none'
                              type='button'
                              onClick={toggleVisibility}
                            >
                              {isVisible ? (
                                <EyeIcon
                                  size={20}
                                  className='text-2xl text-[#B1B1B1] pointer-events-none'
                                />
                              ) : (
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='14'
                                  height='15'
                                  viewBox='0 0 14 15'
                                  fill='none'
                                >
                                  <path
                                    d='M12.4067 5.85509C12.2375 5.58676 12.0567 5.33592 11.87 5.10259C11.6542 4.82842 11.2459 4.80509 11.0009 5.05009L9.25086 6.80009C9.3792 7.18509 9.40253 7.62842 9.28586 8.08926C9.0817 8.91176 8.4167 9.57676 7.5942 9.78092C7.13336 9.89759 6.69003 9.87426 6.30503 9.74592C6.30503 9.74592 5.47086 10.5801 4.87003 11.1809C4.57836 11.4726 4.6717 11.9859 5.06253 12.1376C5.6867 12.3768 6.3342 12.4993 6.9992 12.4993C8.03753 12.4993 9.0467 12.1959 9.96836 11.6301C10.9075 11.0468 11.7534 10.1893 12.4359 9.09842C12.99 8.21759 12.9609 6.73592 12.4067 5.85509Z'
                                    fill='#B1B1B1'
                                  />
                                  <path
                                    d='M8.1787 6.32179L5.82203 8.67845C5.52453 8.37512 5.33203 7.95512 5.33203 7.50012C5.33203 6.58429 6.0787 5.83179 7.00036 5.83179C7.45536 5.83179 7.87536 6.02429 8.1787 6.32179Z'
                                    fill='#B1B1B1'
                                  />
                                  <path
                                    d='M10.6471 3.85407L8.66963 5.83157C8.2438 5.3999 7.65464 5.14323 7.0013 5.14323C5.69464 5.14323 4.64464 6.19907 4.64464 7.4999C4.64464 8.15323 4.90714 8.7424 5.33297 9.16823L3.3613 11.1457H3.35547C2.70797 10.6207 2.11297 9.9499 1.60547 9.15657C1.02214 8.24073 1.02214 6.75323 1.60547 5.8374C2.28214 4.77573 3.11047 3.94157 4.03214 3.3699C4.9538 2.8099 5.96297 2.50073 7.0013 2.50073C8.30214 2.50073 9.56214 2.97907 10.6471 3.85407Z'
                                    fill='#B1B1B1'
                                  />
                                  <path
                                    d='M8.66984 7.50005C8.66984 8.41588 7.92318 9.16838 7.00151 9.16838C6.96651 9.16838 6.93734 9.16838 6.90234 9.15671L8.65818 7.40088C8.66984 7.43588 8.66984 7.46505 8.66984 7.50005Z'
                                    fill='#B1B1B1'
                                  />
                                  <path
                                    d='M12.6976 1.80093C12.5226 1.62593 12.2367 1.62593 12.0617 1.80093L1.29922 12.5693C1.12422 12.7443 1.12422 13.0301 1.29922 13.2051C1.38672 13.2868 1.49755 13.3334 1.61422 13.3334C1.73089 13.3334 1.84172 13.2868 1.92922 13.1993L12.6976 2.43093C12.8784 2.25593 12.8784 1.97593 12.6976 1.80093Z'
                                    fill='#B1B1B1'
                                  />
                                </svg>
                              )}
                            </button>
                            <Button
                              variant='light'
                              type='submit'
                              onClick={() => handleSubmit(onSubmit)()}
                              className="text-[#FF6DFB] dark:text-fuchsia-200 text-[12.83px] font-normal font-['Campton']"
                            >
                              Edit
                            </Button>
                          </div>
                        }
                        type={isVisible ? 'text' : 'Password'}
                        placeholder='.....................'
                        size='sm'
                        errorMessage={errors?.new_password?.message}
                        isInvalid={!!errors?.new_password}
                        classNames={{
                          input: [
                            'bg-transparent',
                            'text-black/90 dark:text-white/90',
                            'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                          ],
                          innerWrapper: 'bg-transparent',
                          inputWrapper: [
                            'bg-zinc-700 rounded-none bg-opacity-10',
                            'dark:bg-white dark:bg-opacity-10',
                            'hover:bg-bg-white hover:bg-opacity-10',
                            'dark:hover:bg-default/70',
                            'group-data-[focused=true]:bg-default-200/50',
                            'dark:group-data-[focused=true]:bg-default/60',
                            '!cursor-text',
                            'border-2 border-transparent',
                            'focus-within:!border-fuchsia-600  ',
                          ],
                        }}
                        {...field}
                        className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch  flex-col justify-start items-start gap-3 flex'>
            <div className=" text-sm font-bold font-['Campton']">
              2 Factor Authentication
            </div>
            <div className='self-stretch flex-col justify-start items-center gap-1.5 flex'>
              <div className='self-stretch w-full hover:text-white bg-opacity-10 justify-start items-center gap-2 inline-flex'>
                <Controller
                  name='2fa_method'
                  control={control}
                  render={({ field }) => (
                    <Input
                      isReadOnly
                      endContent={
                        <Switch
                          size='sm'
                          defaultSelected
                          {...field}
                          // isSelected={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.checked)
                            handleSubmit(onSubmit)() // Trigger form submission after state update
                          }}
                          color='default'
                        />
                      }
                      placeholder='Email'
                      size='sm'
                      value='email'
                      classNames={{
                        input: [
                          'bg-transparent',
                          'text-black/90 dark:text-white/90',
                          'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                        ],
                        innerWrapper: 'bg-transparent',
                        inputWrapper: [
                          'bg-zinc-700 rounded-none bg-opacity-10',
                          'dark:bg-white dark:bg-opacity-10',
                          'hover:bg-bg-white hover:bg-opacity-10',
                          'dark:hover:bg-default/70',
                          'group-data-[focused=true]:bg-default-200/50',
                          'dark:group-data-[focused=true]:bg-default/60',
                          '!cursor-text',
                          'border-2 border-transparent',
                          'focus-within:!border-fuchsia-600  ',
                        ],
                      }}
                      className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                    />
                  )}
                />
              </div>
              <div className='self-stretch w-full hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  isDisabled
                  endContent={
                    <Switch
                      size='sm'
                      disabled={true}
                      defaultSelected
                      color='default'
                    />
                  }
                  disabled={true}
                  placeholder='Phone'
                  size='sm'
                  classNames={{
                    input: [
                      'bg-transparent',
                      'text-black/90 dark:text-white/90',
                      'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                    ],
                    innerWrapper: 'bg-transparent',
                    inputWrapper: [
                      'bg-zinc-700 rounded-none bg-opacity-10',
                      'dark:bg-white dark:bg-opacity-10',
                      'hover:bg-bg-white hover:bg-opacity-10',
                      'dark:hover:bg-default/70',
                      'group-data-[focused=true]:bg-default-200/50',
                      'dark:group-data-[focused=true]:bg-default/60',
                      '!cursor-text',
                      'border-2 border-transparent',
                      'focus-within:!border-fuchsia-600  ',
                    ],
                  }}
                  className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                />
              </div>
              <div className='self-stretch w-full hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  isDisabled
                  endContent={
                    <Button
                      variant='light'
                      className="text-[#FF6DFB] dark:text-fuchsia-200 text-[12.83px] font-normal font-['Campton']"
                    >
                      Activate
                    </Button>
                  }
                  placeholder='Google Auth App'
                  size='sm'
                  classNames={{
                    input: [
                      'bg-transparent',
                      'text-black/90 dark:text-white/90',
                      'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                    ],
                    innerWrapper: 'bg-transparent',
                    inputWrapper: [
                      'bg-zinc-700 rounded-none bg-opacity-10',
                      'dark:bg-white dark:bg-opacity-10',
                      'hover:bg-bg-white hover:bg-opacity-10',
                      'dark:hover:bg-default/70',
                      'group-data-[focused=true]:bg-default-200/50',
                      'dark:group-data-[focused=true]:bg-default/60',
                      '!cursor-text',
                      'border-2 border-transparent',
                      'focus-within:!border-fuchsia-600  ',
                    ],
                  }}
                  className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
