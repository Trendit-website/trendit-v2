/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import { Button, Modal, Input, ModalContent } from '@nextui-org/react'
import { AiOutlineClose } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useFundWallet } from '../../api/walletApi'
import { useForm, Controller } from 'react-hook-form'

export default function WithdrawWalletModal({ isOpen, onClose }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({})
  const { mutateAsync: fundWallet, isPending } = useFundWallet()
  const onSubmit = async (data) => {
    try {
      const res = await fundWallet({ data })
      console.log(res?.data)
      if (res.data.status) {
        const authorizationUrl = res?.data?.authorization_url
        toast.success(res.data.message, {
          duration: 20000,
        })
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
  return (
    <>
      <div>
        <Modal
          placement='center'
          size='md'
          backdrop='blur'
          isOpen={isOpen}
          onClose={onClose}
          hideCloseButton={true}
          className='rounded-none w-[23rem] md:w-[28rem]'
        >
          <ModalContent className=' overflow-visible'>
            <div className='p-6 rounded flex-col justify-center items-center gap-12 inline-flex'>
              <div
                onClick={onClose}
                className='p-2 bg-fuchsia-400 top-[-20px] -right-2 md:-right-4 absolute z-40  cursor-pointer rounded-[100px] '
              >
                <AiOutlineClose size={20} color='#fff' />
              </div>
              <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='self-stretch p-6 flex-col justify-center items-start gap-6 flex'>
                  <div className='self-stretch  flex-col justify-start items-start gap-[18px] flex'>
                    <div className='self-stretch flex-col justify-start items-center gap-3 flex'>
                      <div className="grow shrink basis-0 text-sm font-semibold font-['Campton']">
                        Withdraw Fund
                      </div>
                    </div>
                    <div className='justify-start flex-col items-start gap-[19px] flex'>
                      <div className='self-stretch rounded-none  gap-2 flex-col flex'>
                        <div className="text-sm font-medium font-['Campton']">
                          Amount
                        </div>
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
                              startContent={
                                `₦`

                                // <MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                              }
                              classNames={{
                                input: [
                                  'bg-transparent',
                                  'text-black/90 dark:text-white/90',
                                  'placeholder:text-black dark:placeholder:text-black',
                                ],
                                innerWrapper: 'bg-transparent',
                                inputWrapper: [
                                  'bg-zinc-700 bg-opacity-10 rounden-none',
                                  'dark:bg-white',
                                  'hover:bg-white hover:bg-opacity-10',
                                  'dark:hover:bg-opacity-80',
                                  'group-data-[focused=true]:bg-default-200/50',
                                  'dark:group-data-[focused=true]:bg-default/60',
                                  '!cursor-text',
                                  'border-2 border-transparent',
                                  'focus-within:!border-fuchsia-600  ',
                                ],
                              }}
                              className=" rounded  text-black text-[12.83px] font-normal font-['Campton']"
                            />
                          )}
                        />
                      </div>
                      <div className='self-stretch'>
                        <Button
                          type='submit'
                          isDisabled={isPending}
                          className="w-full px-6 py-6  bg-fuchsia-600 rounded text-center text-white text-[12.83px] font-medium font-['Campton']"
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
                            'Withdraw Fund'
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </>
  )
}
