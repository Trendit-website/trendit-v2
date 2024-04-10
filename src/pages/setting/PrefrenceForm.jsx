import { Input } from '@nextui-org/input'
import { Switch } from '@nextui-org/switch'
import { useDarkMode } from 'usehooks-ts'
import {
  useGetUserPrefence,
  useUpdateUserPrefence,
} from '../../api/settingsApis'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'

export default function PrefrenceForm() {
  const { toggle: toggleDarkMode, isDarkMode } = useDarkMode()
  const { control, setValue } = useForm({})

  const { data: userPrefrence } = useGetUserPrefence()

  const { mutateAsync: updateUserPrefence } = useUpdateUserPrefence()
  // console.log(userPrefrence, 'userPrefrence')
  // useEffect(() => {
  //   if (userPrefrence) {
  //     setValue('appearance', userPrefrence.isDarkMode)
  //   }
  // }, [userPrefrence])

  console.log(userPrefrence, 'userPrefrence 22')

  const handleToggleDarkMode = async () => {
    toggleDarkMode()
    setValue('appearance', !isDarkMode)
    console.log(!isDarkMode, 'isDarkMode')
    try {
      const res = await updateUserPrefence({ appearance: !isDarkMode })
      if (res?.data?.status) {
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
  return (
    <div>
      <form>
        <div className='self-stretch grow min-h-screen shrink basis-0 md:px-16 py-6 flex-col justify-start items-start gap-12 flex'>
          <div className="text-black dark:text-white text-sm font-bold font-['Campton']">
            Appearance
          </div>

          <div className='self-stretch  flex-col justify-start items-start gap-6 flex'>
            <div className='self-stretch flex-col justify-start items-center gap-3.5 flex'>
              <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  isReadOnly
                  name='appearance'
                  endContent={
                    <Switch
                      size='sm'
                      isSelected={isDarkMode}
                      color='default'
                      onClick={handleToggleDarkMode}
                    />
                  }
                  placeholder='Dark Mode'
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
                  control={control}
                  className="grow  shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                />
              </div>
              <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  isReadOnly
                  name='appearance'
                  endContent={
                    <Switch
                      size='sm'
                      isSelected={!isDarkMode}
                      color='default'
                      onClick={handleToggleDarkMode}
                    />
                  }
                  placeholder='Light Mode'
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
                  control={control}
                  className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                />
              </div>
              <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  isReadOnly
                  endContent={
                    <Switch
                      size='sm'
                      defaultSelected
                      color='default'
                      // onClick={handleSystemColorModeToggle}
                    />
                  }
                  placeholder='System Settings'
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
