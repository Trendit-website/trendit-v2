import { useFetchTransactionHistory } from '../../api/walletApi'

export default function TransactionCard() {
  const { data: transactionHistory } = useFetchTransactionHistory()
  return (
    <div>
      {}

      {transactionHistory?.length === 0 ? (
        <div className="text-[12.83px] font-medium font-['Campton']">
          No transaction
        </div>
      ) : (
        transactionHistory?.map((history, key) => (
          <div key={key} className=''>
            <div className='w-full self-stretch p-3 bg-[#B1B1B1] my-0.5  bg-opacity-10 borde borderstone-900 justify-start items-center gap-6 inline-flex'>
              <div className='p-1.5 bg-[#B1B1B1] dark:bg-white dark:bg-opacity-10 rounded-md justify-center items-center gap-1.5 flex'>
                {history?.transaction_type === 'payment' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                  >
                    <path
                      d='M12.7123 5.78809L5.81799 12.6824M11.6516 13.2127H6.03766C5.62345 13.2127 5.28766 12.8769 5.28766 12.4627V6.84875'
                      className='dark:stroke-[#B1B1B1] stroke-black '
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </svg>
                ) : history.transaction_type === 'withdraw' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                  >
                    <path
                      d='M5.28772 13.2127L12.182 6.31842M6.34838 5.78809H11.9623C12.3766 5.78809 12.7123 6.12387 12.7123 6.53809V12.152'
                      className='dark:stroke-[#B1B1B1] stroke-black '
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                  >
                    <path
                      d='M9 14.7499L9 4.99989M4.5 8.74989L8.46967 4.78022C8.76256 4.48732 9.23744 4.48732 9.53033 4.78022L13.5 8.74989'
                      className='dark:stroke-[#B1B1B1] stroke-black '
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </svg>
                )}
              </div>
              <div className='flex-col justify-center items-start gap-1.5 inline-flex'>
                <div className="self-stretch text-black dark:text-white text-[12.83px] font-medium font-['Campton']">
                  {history?.transaction_type}
                </div>
                {/* <div className="self-stretch dark:text-white text-black text-[8.83px] font-medium font-['Campton']">
                Nov 13th 2023 9:21pm
              </div> */}
              </div>
              <div className="grow shrink basis-0 dark:text-white text-black text-[12.83px] font-medium font-['Campton'] md:pl-12 lg:pl-24 ">
                {history?.description}
              </div>
              <div className="dark:text-white text-black text-[12.83px] font-medium font-['Campton']">
                {history?.amount}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
