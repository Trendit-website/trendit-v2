import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useBankDetails, useUpdateBankDetils } from '../../api/walletApi'
export default function BankDetailsForm() {
  const { data: userBank } = useBankDetails()
  const { handleSubmit, control } = useForm({
    defaultValues: {
      bank_name: userBank?.bank_name,
      account_no: userBank?.account_no,
      account_name: userBank?.account_name,
    },
  })

  const { mutateAsync: updateUserPrefence, isPending } = useUpdateBankDetils()

  const onSubmit = async (data) => {
    try {
      const res = await updateUserPrefence(data)
      if (res?.data?.status) {
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message ?? error.message)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='self-stretch grow shrink min-h-screen basis-0 md:px-16 py-6 flex-col justify-start items-start gap-12 flex'>
          <div className='self-stretch  flex-col justify-start items-start gap-6 flex'>
            <div className="text-black dark:text-white text-sm font-bold font-['Campton']">
              Account Details
            </div>
          </div>
          <div className='self-stretch  flex-col justify-start items-start gap-6 flex'>
            <div className='self-stretch flex-col justify-start items-center gap-3.5 flex'>
              <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Controller
                  name='bank_name'
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder='Access Bank'
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
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Controller
                  name='account_no'
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder='06688763554'
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
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Controller
                  name='account_name'
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder='ADEWALE ADEDAMOLA'
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
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <Button
            variant='light'
            type='submit'
            className='self-stretch w-40 cursor-pointer justify-start items-center gap-[7px] inline-flex'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M5.01198 16.9639L5.96066 17.2801H5.96066L5.01198 16.9639ZM5.76117 14.7163L4.81248 14.4001H4.81248L5.76117 14.7163ZM6.53421 13.4655L7.24132 14.1726L7.24132 14.1726L6.53421 13.4655ZM14.0001 5.9997L13.2929 5.29259V5.29259L14.0001 5.9997ZM18 9.9997L18.7072 10.7068H18.7072L18 9.9997ZM10.5342 17.4655L9.8271 16.7584L9.8271 16.7584L10.5342 17.4655ZM9.2834 18.2386L9.59963 19.1873H9.59963L9.2834 18.2386ZM7.03584 18.9878L7.35206 19.9365L7.35206 19.9365L7.03584 18.9878ZM10.1242 17.8483L9.52193 17.0499L9.52192 17.05L10.1242 17.8483ZM9.8091 18.043L9.36439 17.1473L9.8091 18.043ZM18.9637 7.11167L18.0676 7.55568V7.55568L18.9637 7.11167ZM18.9637 8.88773L18.0676 8.44371V8.44371L18.9637 8.88773ZM15.112 5.03609L15.556 5.93211V5.93211L15.112 5.03609ZM16.8881 5.03609L16.4441 5.93211V5.93211L16.8881 5.03609ZM5.95676 14.1907L6.85244 14.6354L6.85244 14.6354L5.95676 14.1907ZM6.15148 13.8756L5.35317 13.2733L5.35317 13.2733L6.15148 13.8756ZM4.63928 18.7544L3.69738 19.0903L4.63928 18.7544ZM5.24531 19.3605L4.90943 20.3024L4.90943 20.3024L5.24531 19.3605ZM13.7072 6.29262C13.3166 5.9021 12.6835 5.9021 12.2929 6.29262C11.9024 6.68315 11.9024 7.31631 12.2929 7.70684L13.7072 6.29262ZM16.2929 11.7068C16.6835 12.0974 17.3166 12.0974 17.7072 11.7068C18.0977 11.3163 18.0977 10.6831 17.7072 10.2926L16.2929 11.7068ZM12 18.9997C11.4478 18.9997 11 19.4474 11 19.9997C11 20.552 11.4478 20.9997 12 20.9997V18.9997ZM19 20.9997C19.5523 20.9997 20 20.552 20 19.9997C20 19.4474 19.5523 18.9997 19 18.9997V20.9997ZM5.96066 17.2801L6.70985 15.0326L4.81248 14.4001L4.0633 16.6477L5.96066 17.2801ZM7.24132 14.1726L14.7072 6.7068L13.2929 5.29259L5.8271 12.7584L7.24132 14.1726ZM17.2929 9.29259L9.8271 16.7584L11.2413 18.1726L18.7072 10.7068L17.2929 9.29259ZM8.96717 17.2899L6.71961 18.0391L7.35206 19.9365L9.59963 19.1873L8.96717 17.2899ZM9.8271 16.7584C9.60902 16.9765 9.56482 17.0176 9.52193 17.0499L10.7264 18.6466C10.906 18.5111 11.061 18.353 11.2413 18.1726L9.8271 16.7584ZM9.59963 19.1873C9.84158 19.1066 10.0524 19.0387 10.2538 18.9387L9.36439 17.1473C9.31627 17.1712 9.25977 17.1924 8.96717 17.2899L9.59963 19.1873ZM9.52192 17.05C9.47254 17.0872 9.4198 17.1198 9.36439 17.1473L10.2538 18.9387C10.42 18.8561 10.5782 18.7584 10.7264 18.6466L9.52192 17.05ZM17.2929 6.7068C17.8953 7.30915 18.0131 7.4457 18.0676 7.55568L19.8597 6.66765C19.6227 6.18944 19.1953 5.78075 18.7072 5.29259L17.2929 6.7068ZM18.7072 10.7068C19.1953 10.2186 19.6227 9.80995 19.8597 9.33174L18.0676 8.44371C18.0131 8.55369 17.8953 8.69025 17.2929 9.29259L18.7072 10.7068ZM18.0676 7.55568C18.2063 7.83546 18.2063 8.16394 18.0676 8.44371L19.8597 9.33174C20.2756 8.49241 20.2756 7.50698 19.8597 6.66765L18.0676 7.55568ZM14.7072 6.7068C15.3095 6.10447 15.4461 5.98661 15.556 5.93211L14.668 4.14007C14.1898 4.37704 13.7811 4.80444 13.2929 5.29259L14.7072 6.7068ZM18.7072 5.29259C18.219 4.80443 17.8103 4.37704 17.3321 4.14007L16.4441 5.93211C16.554 5.98661 16.6906 6.10446 17.2929 6.7068L18.7072 5.29259ZM15.556 5.93211C15.8358 5.79346 16.1643 5.79346 16.4441 5.93211L17.3321 4.14007C16.4928 3.72414 15.5073 3.72414 14.668 4.14007L15.556 5.93211ZM6.70985 15.0326C6.80738 14.74 6.82854 14.6835 6.85244 14.6354L5.06108 13.7459C4.96106 13.9474 4.89313 14.1582 4.81248 14.4001L6.70985 15.0326ZM5.82711 12.7584C5.64676 12.9388 5.48862 13.0938 5.35317 13.2733L6.9498 14.4778C6.98215 14.4349 7.02323 14.3907 7.24132 14.1726L5.82711 12.7584ZM6.85244 14.6354C6.87995 14.5799 6.91254 14.5272 6.9498 14.4778L5.35317 13.2733C5.2414 13.4215 5.14362 13.5797 5.06108 13.7459L6.85244 14.6354ZM4.0633 16.6477C3.90675 17.1173 3.76644 17.5351 3.68656 17.875C3.61018 18.2001 3.53801 18.6434 3.69738 19.0903L5.58119 18.4186C5.6247 18.5406 5.57603 18.5772 5.63353 18.3325C5.68755 18.1026 5.79151 17.7876 5.96066 17.2801L4.0633 16.6477ZM6.71961 18.0391C6.21215 18.2082 5.89711 18.3122 5.66724 18.3662C5.42254 18.4237 5.45916 18.375 5.58119 18.4186L4.90943 20.3024C5.35634 20.4617 5.79968 20.3896 6.12475 20.3132C6.46465 20.2333 6.88243 20.093 7.35206 19.9365L6.71961 18.0391ZM3.69738 19.0903C3.89902 19.6558 4.34398 20.1007 4.90943 20.3024L5.58119 18.4186L5.58119 18.4186L3.69738 19.0903ZM12.2929 7.70684L16.2929 11.7068L17.7072 10.2926L13.7072 6.29262L12.2929 7.70684ZM12 20.9997H19V18.9997H12V20.9997Z'
                fill='white'
                className='text-black dark:stroke-white'
              />
            </svg>
            <div className="text-center text-black dark:text-white text-sm font-medium font-['Campton']">
              {isPending ? 'Updating....' : 'Update'}
            </div>
          </Button>
        </div>
      </form>
    </div>
  )
}
