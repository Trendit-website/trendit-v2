/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button, Modal, ModalContent, Input } from '@nextui-org/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useForm, Controller } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useVerifySocial } from '../../api/verifySocialApi'
import Loader from '../Loader'

export default function SocialLinkModal({ isOpen, onClose, type, LogoBand }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: type,
    },
  })

  const { mutateAsync: verifySocial, isPending } = useVerifySocial()

  const onSubmit = async (data) => {
    console.log(data, 'data received')
    try {
      const res = await verifySocial({ ...data })
      if (res.data.status) {
        toast.success(res.data.message, {
          duration: 20000,
        })
        const authorizationUrl = res?.data?.authorization_url
        if (authorizationUrl) {
          localStorage.setItem('paystack_redirect', window.location.pathname)
          window.open(authorizationUrl) // Open the URL in a new tab
        }
        onClose()
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message, {
        duration: 20000,
      })
    }
  }

  return (
    <>
      <Modal
        placement='center'
        size='lg'
        backdrop='blur'
        isOpen={isOpen}
        onClose={onClose}
        hideCloseButton={true}
        className='rounded-none'
        scrollBehavior='outside'
      >
        <ModalContent className=' overflow-visible'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=' px-[26px] py-8 rounded flex-col justify-start items-center gap-12 inline-flex'>
              <div
                onClick={onClose}
                className='p-2 bg-fuchsia-400 top-[-20px] absolute z-40 -right-2 md:-right-4 cursor-pointer rounded-[100px] '
              >
                <AiOutlineClose size={20} color='#fff' />
              </div>
              <div className='flex-col justify-start items-center gap-3 flex'>
                <div className='justify-start flex-col items-center gap-2 inline-flex'>
                  <img src={LogoBand} alt='logo' />
                  <div className="text-base capitalize font-bold font-['Manrope']">
                    Link Your {type} Account
                  </div>
                </div>
                <div className="text-center text-zinc-400 text-sm font-semibold font-['Manrope']">
                  You must obey the following rules in order to successfully
                  link your {type} account to Trendti3.
                </div>
              </div>
              <div className='flex-col justify-start items-start gap-6 flex'>
                <div className=" text-zinc-400 text-sm font-normal font-['Manrope']">
                  Your account on {type} must have at least 500 Active
                  Followers. Note that Ghost or Bots followers are not allowed
                  and your account on Trendit3 will be banned if you have ghost
                  followers
                </div>
                <div className=" text-zinc-400 text-sm font-normal font-['Manrope']">
                  You Account on {type} must have been opened one year ago.
                </div>

                <div className=" text-zinc-400 text-sm font-semibold font-['Manrope']">
                  You must have posted at least five times on your {type}
                  account within the last one year
                </div>
              </div>
              <div className='w-full px-3 py-6 bg-zinc-400 gap-3 bg-opacity-20 rounded justify-between itemscenter flex flex-col'>
                <div className=" px-2 text-[12.83px] font-medium font-['Manrope']">
                  Please enter your {type} profile link which you want to use to
                  perform this task:
                </div>
                <div className='self-stretch px-2 md:justifybetween itemscenter gap-4 flex-col inline-flex'>
                  <Controller
                    name='link'
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        size='sm'
                        errorMessage={errors?.link?.message}
                        isInvalid={!!errors?.link}
                        required={true}
                        placeholder={`${type} profile link`}
                        type='string'
                        classNames={{
                          inputWrapper: [
                            'border-2 border-transparent rounded-none',
                            'focus-within:!border-fuchsia-600  ',
                            '!cursor-text',
                          ],
                        }}
                        className={`grow shrink basis-0 focus:ring focus:ring-fuchsia-600 focus:border-2 focus:border-fuchsia-600  rounded text-stone-900 text-opacity-50 text-[12.83px] font-normal font-['Manrope']`}
                      />
                    )}
                    rules={{
                      required: true,
                    }}
                  />
                  <Button
                    type='submit'
                    isDisabled={isPending}
                    className='md:w-[290px]  cursor-pointer px-6 py-6 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex'
                  >
                    {isPending ? <Loader /> : 'Link Account'}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}