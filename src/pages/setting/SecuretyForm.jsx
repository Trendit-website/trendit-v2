import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Switch } from '@nextui-org/switch'
import { useGetSecurityPrefrence } from '../../api/settingsApis'
import { useForm } from 'react-hook-form'

export default function SecuretyForm() {
  const { data: securityPrefrence } = useGetSecurityPrefrence()
  const { handleSubmit } = useForm({})
  console.log(securityPrefrence, 'securityPrefrence')

  const onSubmit = async (data) => {
    console.log(data, 'data')
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
              <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
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
              </div>

              <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-[12.83px] font-medium font-['Campton']">
                    Confirm Password
                  </div>
                </div>

                <div className='self-stretch w-full hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                  <Input
                    endContent={
                      <Button
                        variant='light'
                        className="text-[#FF6DFB] dark:text-fuchsia-200 text-[12.83px] font-normal font-['Campton']"
                      >
                        Edit
                      </Button>
                    }
                    placeholder='.....................'
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
          <div className='self-stretch  flex-col justify-start items-start gap-3 flex'>
            <div className=" text-sm font-bold font-['Campton']">
              2 Factor Authentication
            </div>
            <div className='self-stretch flex-col justify-start items-center gap-1.5 flex'>
              <div className='self-stretch w-full hover:text-white bg-opacity-10 justify-start items-center gap-2 inline-flex'>
                <Input
                  endContent={
                    <Switch size='sm' defaultSelected color='default' />
                  }
                  placeholder='Email'
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
