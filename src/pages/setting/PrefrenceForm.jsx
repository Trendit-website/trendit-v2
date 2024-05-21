import { RadioGroup, Radio } from '@nextui-org/react'
import { useDarkMode } from 'usehooks-ts'
import { useGetUserPrefence } from '../../api/settingsApis'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useEffect, useContext, useState } from 'react'
import {
  AppearanceContext,
  SetAppearanceContext,
} from '../../providers/AppearanceProvider'
import API from '../../services/AxiosInstance'
import Loader from '../Loader'

export default function PrefrenceForm() {
  const { data: userPrefrence } = useGetUserPrefence()

  const { toggle: toggleDarkMode, isDarkMode } = useDarkMode()
  const { setValue, watch } = useForm({
    defaultValues: {
      appearance: userPrefrence?.appearance || 'system',
    },
  })
  const [isLoading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)
    API.get('/settings/preferences')
    .then((response) => (setLoading(false), setValue('appearance',response.data?.user_preferences?.appearance)))
    .catch((error) => console.error(error))
    // if (userPrefrence?.appearance) {
    //   setValue('appearance', userPrefrence?.appearance)
    // }
  }, [userPrefrence, setValue])

  const userPrefrences = useContext(AppearanceContext)
  const setPrefrence = useContext(SetAppearanceContext)

  const handleToggleDarkMode = (prefOption) => {
    toggleDarkMode()
    setValue('appearance', prefOption)
    if (prefOption === 'dark') {
      document.body.classList.add('dark')
      document.body.classList.add('text-foreground')
      document.body.classList.add('bg-background')
      // toggleDarkMode(true)
      API.post('/settings/preferences', {
        setting_name: 'appearance',
        value: 'dark',
      })
        .then(
          (response) => (
            toast.success(response.data?.message), setPrefrence('dark')
          )
        )
        .catch(
          (error) => toast.errorerror.response?.data?.message ?? error.message
        )
    } else if (prefOption === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.remove('text-foreground')
      // toggleDarkMode(false)
      API.post('/settings/preferences', {
        setting_name: 'appearance',
        value: 'light',
      })
        .then(
          (response) => (
            toast.success(response.data?.message), setPrefrence('light')
          )
        )
        .catch((error) => toast.error.response?.data?.message ?? error.message)
    } else if (prefOption === 'system') {
      // document.body.classList.remove('dark')
      // document.body.classList.remove('text-foreground')
      // document.body.classList.remove('bg-background')
    }
  }

  const appearance = watch('appearance')
  return (
    <div>
      {isLoading ? <div className='flex flex-row items-center justify-center'>
        <Loader />
        </div> :
      <form>
        <div className='self-stretch grow min-h-screen shrink basis-0 md:px-16 py-6 flex-col justify-start items-start gap-12 flex'>
          <div className='text-sm font-bold font-Manrope'>Appearance</div>
          <div className='self-stretch flex-col justify-start items-start gap-6 flex'>
            <RadioGroup
              label='Select Appearance'
              orientation='vertical'
              color='secondary'
              className='w-full'
              value={appearance}
            >
              <div className='self-stretch py-2 px-2 w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Radio
                  onClick={() => handleToggleDarkMode('dark')}
                  value='dark'
                  isDisabled={appearance === 'dark'}
                >
                  Dark Mode
                </Radio>
              </div>

              <div className='self-stretch py-2 px-2 w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Radio
                  onClick={() => handleToggleDarkMode('light')}
                  value='light'
                  isDisabled={appearance === 'light'}
                >
                  Light Mode
                </Radio>
              </div>
              <div className='self-stretch py-2 px-2 w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Radio
                  onClick={() => handleToggleDarkMode('system')}
                  value='system'
                  isDisabled={appearance === 'system'}
                >
                  System Settings
                </Radio>
              </div>
            </RadioGroup>
          </div>
        </div>
      </form>
      }
    </div>
  )
}
