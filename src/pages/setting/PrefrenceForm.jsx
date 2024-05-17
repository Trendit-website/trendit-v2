import { Input } from '@nextui-org/input'
import { Switch } from '@nextui-org/switch'
import { useDarkMode } from 'usehooks-ts'
import {
  useGetUserPrefence,
  useUpdateUserPrefence,
} from '../../api/settingsApis'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useEffect, useContext } from 'react'
import { AppearanceContext, SetAppearanceContext } from '../../providers/AppearanceProvider'
import API from '../../services/AxiosInstance'

export default function PrefrenceForm() {
  const { data: userPrefrence } = useGetUserPrefence()

  const { toggle: toggleDarkMode, isDarkMode } = useDarkMode()
  const { control, setValue } = useForm({
    defaultValues: {
      appearance: userPrefrence?.appearance,
    },
  })

  const { mutateAsync: updateUserPrefence } = useUpdateUserPrefence()

  useEffect(() => {
    // Set dark mode state based on the user's preference when component mounts
    // if (userPrefrence?.appearance !== undefined) {
    //   toggleDarkMode(userPrefrence?.appearance)
    // }
    // if (userPrefrence?.appearance === 'light') {
    //   toggleDarkMode(!isDarkMode)
    // }
  }, [userPrefrence])

  const userPrefrences = useContext(AppearanceContext)
  const setPrefrence = useContext(SetAppearanceContext)

  const handleToggleDarkMode = async (prefOption) => {
    toggleDarkMode()
    setValue('appearance', prefOption)
    if(prefOption === 'dark') {
      document.body.classList.add('dark')
      document.body.classList.add('text-foreground')
      document.body.classList.add('bg-background')
      API.post('/settings/preferences', {
        "setting_name": "appearance",
        "value": "dark"
      }).then((response) => (toast.success(response.data?.message), setPrefrence('dark'))).catch((error) => toast.errorerror.response?.data?.message ?? error.message)
    } else if (prefOption === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.remove('text-foreground')
      document.body.classList.remove('bg-background')
      API.post('/settings/preferences', {
        "setting_name": "appearance",
        "value": "light"
      }).then((response) => (toast.success(response.data?.message), setPrefrence('light'))).catch((error) => toast.error.response?.data?.message ?? error.message)
    } else if (prefOption === 'system') {
      document.body.classList.remove('dark')
      document.body.classList.remove('text-foreground')
      document.body.classList.remove('bg-background')
    }
    // setValue('appearance', !isDarkMode ? 'dark' : 'light')
    // console.log(!isDarkMode, 'isDarkMode')
    // console.log(isDarkMode, 'isDarkMode  322')
    // try {
    //   const res = await updateUserPrefence({ appearance: prefOption })
    //   if (res?.data?.status) {
    //     toast.success(res.data.message)
    //   }
    // } catch (error) {
    //   toast.error(error.response?.data?.message ?? error.message)
    // }
  }
  return (
    <div>
      <form>
        <div className='self-stretch grow min-h-screen shrink basis-0 md:px-16 py-6 flex-col justify-start items-start gap-12 flex'>
          <div className="text-black dark:text-white text-sm font-bold font-['Manrope']">
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
                      onClick={() => handleToggleDarkMode('dark')}
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
                  className="grow  shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Manrope']"
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
                      onClick={() => handleToggleDarkMode('light')}
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
                  className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Manrope']"
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
                  className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Manrope']"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
