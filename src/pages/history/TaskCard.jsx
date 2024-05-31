/* eslint-disable react/prop-types */
// import { useGetAdvert } from '../../api/advertApi'
// import { format } from 'date-fns'

import Icons from "../../components/Icon";

export default function TaskCard({
  goal,
  when,
  status,
  onNextPage,
  platform,
  payment_status,
  account_link,
  fee,
  fee_paid,
  engagements_count,
  total_allocated
  // task_type,
}) {
  return (
    <>
      <div
        onClick={onNextPage}
        className='w-full cursor-pointer p-3 bg-[#2F2F2F6B] bg-opacity30 rounded-lg flex-col justify-start items-start gap-2 inline-flex'
      >
            <div className="flex flex-col lg:flex-row items-start justify-between w-11/12 pl-4">
                <div className="flex items-start gap-x-8">
                      <Icons type={platform} />
                    <div className="flex flex-col gap-y-2 text-sm">
                        <p className="text-[#909090]">{when}</p>
                        <p className="font-bold text-sm">{goal}</p>
                        <div className="flex items-center gap-x-2">
                            <Icons type='wallet' /> <span className="text-[#909090]">Pricing: </span> <p className="font-bold">{fee} per like</p>
                        </div>
                        <div className="flex items-start gap-x-4">
                          <p className="flex flex-col gap-y-2 text-[#909090]">
                              Number of likes
                              <span className="text-white font-bold">{engagements_count}</span>
                          </p>
                          <p className="flex flex-col gap-y-2 text-[#909090]">
                              Amount Paid
                              <span className="text-white font-bold">{fee_paid}</span>
                          </p>
                        </div>
                        <div className="flex flex-col mt-4 gap-y-2">
                          <p className="text-sm">Status</p>
                          {total_allocated <= 0 ? 
                          <div className={`flex items-center justify-center gap-x-2  ${status === 'pending' ? 'bg-white text-black' : 'bg-[#13BF62] text-white'}  w-8/12 py-2 rounded-lg`}>
                            <Icons type={status} /> {status}
                          </div> :
                           <div className={`flex items-center justify-center gap-x-2  bg-[#1877F2] text-white'}  w-8/12 py-2 rounded-lg`}>
                           <Icons type='active' /> active
                         </div> }
                        </div>
                    </div>
                </div>
                <div className="text-xs text-[#D8D8D8] w-4/12 hidden lg:flex lg:flex-col">
                    <p className="text-white">Your Link: <a href={account_link} target="_blank" className="text-secondary">Click to visit</a></p>
                    {account_link}
                </div>
                <div className="bg-[#FF6B6B] text-white text-xs text-center py-2 px-4 rounded-lg font-semibold mt-4 ml-20 lg:mt-0 lg:ml-0">
                  {payment_status} payment
                </div>
          </div>
      </div>
    </>
  )
}
{/* <div className='justify-start items-center gap-2 inline-flex'>

          <div
            className={`${
              status === 'pending'
                ? 'bg-[#323232] text-white'
                : status === 'approved'
                ? 'bg-[#4CAF50] text-white'
                : status === 'declined'
                ? 'bg-[#fff] text-black'
                : ''
            } p-2 rounded justify-start items-start gap-[29px] flex`}
          >
            <div className='justify-start items-center gap-2.5 flex'>
              <div
                className={` capitalize text-xs font-normal font-['Manrope']`}
              >
                {status}
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='flex-col justify-start items-start gap-3 flex'>
          <div className=" text-sm font-medium font-['Manrope']">{goal}</div>
          <div className="self-stretch text-[10px] font-semibold font-['Manrope']">
            {when}
          </div>
          <div className='py-[4.50px] justify-start items-center gap-1.5 inline-flex'>
            <div className='justify-start items-center gap-[1.50px] flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='13'
                height='14'
                viewBox='0 0 13 14'
                fill='none'
              >
                <g clipPath='url(#clip0_3848_13926)'>
                  <path
                    d='M2.70514 11.0092L2.87538 10.6751L2.70514 11.0092ZM2.24081 10.5449L2.57493 10.3746H2.57493L2.24081 10.5449ZM10.0449 11.0092L9.87462 10.6751H9.87462L10.0449 11.0092ZM10.5092 10.5449L10.1751 10.3746V10.3746L10.5092 10.5449ZM10.0449 3.80334L9.87462 4.13746L9.87462 4.13746L10.0449 3.80334ZM10.5092 4.26766L10.1751 4.43791L10.5092 4.26766ZM2.70514 3.80334L2.53489 3.46921H2.53489L2.70514 3.80334ZM2.24081 4.26766L1.90668 4.09742H1.90668L2.24081 4.26766ZM8.25882 8.41088L8.42906 8.07675L8.25882 8.41088ZM8.02665 8.17871L8.36078 8.00847L8.02665 8.17871ZM11.6296 8.17871L11.2955 8.00847L11.6296 8.17871ZM11.3974 8.41088L11.2272 8.07675L11.3974 8.41088ZM11.3974 6.40168L11.2272 6.73581L11.3974 6.40168ZM11.6296 6.63385L11.2955 6.80409L11.6296 6.63385ZM8.25882 6.40168L8.42906 6.73581L8.25882 6.40168ZM8.02665 6.63385L8.36078 6.80409L8.02665 6.63385ZM3.04823 3.33935C2.85593 3.41627 2.7624 3.63451 2.83932 3.8268C2.91624 4.0191 3.13448 4.11263 3.32677 4.03571L3.04823 3.33935ZM7.77145 1.85395L7.63218 1.50577V1.50577L7.77145 1.85395ZM8.125 3.68753C8.125 3.89464 8.29289 4.06253 8.5 4.06253C8.70711 4.06253 8.875 3.89464 8.875 3.68753H8.125ZM3.825 4.06253H8.925V3.31253H3.825V4.06253ZM8.925 10.75H3.825V11.5H8.925V10.75ZM2.5 9.42503V5.38753H1.75V9.42503H2.5ZM10.25 5.38753V6.47659H11V5.38753H10.25ZM10.25 8.56839V9.42503H11V8.56839H10.25ZM3.825 10.75C3.52128 10.75 3.31605 10.7497 3.15769 10.7368C3.00371 10.7242 2.92735 10.7016 2.87538 10.6751L2.53489 11.3434C2.7102 11.4327 2.89625 11.4679 3.09662 11.4843C3.2926 11.5003 3.53366 11.5 3.825 11.5V10.75ZM1.75 9.42503C1.75 9.71637 1.74971 9.95743 1.76572 10.1534C1.78209 10.3538 1.81735 10.5398 1.90668 10.7151L2.57493 10.3746C2.54846 10.3227 2.52581 10.2463 2.51323 10.0923C2.50029 9.93398 2.5 9.72875 2.5 9.42503H1.75ZM2.87538 10.6751C2.74602 10.6092 2.64085 10.504 2.57493 10.3746L1.90668 10.7151C2.0445 10.9856 2.26441 11.2055 2.53489 11.3434L2.87538 10.6751ZM8.925 11.5C9.21634 11.5 9.4574 11.5003 9.65339 11.4843C9.85375 11.4679 10.0398 11.4327 10.2151 11.3434L9.87462 10.6751C9.82265 10.7016 9.74629 10.7242 9.59231 10.7368C9.43395 10.7497 9.22872 10.75 8.925 10.75V11.5ZM10.25 9.42503C10.25 9.72875 10.2497 9.93398 10.2368 10.0923C10.2242 10.2463 10.2015 10.3227 10.1751 10.3746L10.8433 10.7151C10.9326 10.5398 10.9679 10.3538 10.9843 10.1534C11.0003 9.95743 11 9.71637 11 9.42503H10.25ZM10.2151 11.3434C10.4856 11.2055 10.7055 10.9856 10.8433 10.7151L10.1751 10.3746C10.1092 10.504 10.004 10.6092 9.87462 10.6751L10.2151 11.3434ZM8.925 4.06253C9.22872 4.06253 9.43395 4.06282 9.59231 4.07576C9.74629 4.08834 9.82265 4.11099 9.87462 4.13746L10.2151 3.46921C10.0398 3.37988 9.85375 3.34462 9.65338 3.32825C9.4574 3.31224 9.21634 3.31253 8.925 3.31253V4.06253ZM11 5.38753C11 5.09619 11.0003 4.85513 10.9843 4.65914C10.9679 4.45878 10.9326 4.27273 10.8433 4.09742L10.1751 4.43791C10.2015 4.48988 10.2242 4.56624 10.2368 4.72022C10.2497 4.87858 10.25 5.08381 10.25 5.38753H11ZM9.87462 4.13746C10.004 4.20338 10.1092 4.30855 10.1751 4.43791L10.8433 4.09742C10.7055 3.82694 10.4856 3.60703 10.2151 3.46921L9.87462 4.13746ZM3.825 3.31253C3.53366 3.31253 3.2926 3.31224 3.09662 3.32825C2.89625 3.34462 2.7102 3.37988 2.53489 3.46921L2.87538 4.13746C2.92735 4.11099 3.00371 4.08834 3.15769 4.07576C3.31605 4.06282 3.52128 4.06253 3.825 4.06253V3.31253ZM2.5 5.38753C2.5 5.08381 2.50029 4.87858 2.51323 4.72022C2.52581 4.56624 2.54846 4.48988 2.57493 4.43791L1.90668 4.09742C1.81735 4.27273 1.78209 4.45878 1.76572 4.65914C1.74971 4.85513 1.75 5.09619 1.75 5.38753H2.5ZM2.53489 3.46921C2.26441 3.60703 2.0445 3.82694 1.90668 4.09742L2.57493 4.43791C2.64085 4.30855 2.74602 4.20338 2.87538 4.13746L2.53489 3.46921ZM8.81875 6.71878H10.8375V5.96878H8.81875V6.71878ZM11.3125 7.19378V7.61878H12.0625V7.19378H11.3125ZM10.8375 8.09378H8.81875V8.84378H10.8375V8.09378ZM8.34375 7.61878V7.19378H7.59375V7.61878H8.34375ZM8.81875 8.09378C8.6638 8.09378 8.57014 8.09349 8.50036 8.08779C8.43497 8.08244 8.42421 8.07428 8.42906 8.07675L8.08857 8.745C8.20707 8.80538 8.32751 8.82616 8.43929 8.8353C8.54669 8.84407 8.67617 8.84378 8.81875 8.84378V8.09378ZM7.59375 7.61878C7.59375 7.76136 7.59346 7.89084 7.60223 7.99824C7.61137 8.11002 7.63215 8.23046 7.69253 8.34896L8.36078 8.00847C8.36325 8.01332 8.35509 8.00256 8.34974 7.93717C8.34404 7.86739 8.34375 7.77373 8.34375 7.61878H7.59375ZM8.42906 8.07675C8.39966 8.06177 8.37576 8.03787 8.36078 8.00847L7.69253 8.34896C7.77941 8.51948 7.91805 8.65812 8.08857 8.745L8.42906 8.07675ZM11.3125 7.61878C11.3125 7.77373 11.3122 7.86739 11.3065 7.93717C11.3012 8.00256 11.293 8.01332 11.2955 8.00847L11.9637 8.34896C12.0241 8.23046 12.0449 8.11002 12.054 7.99824C12.0628 7.89084 12.0625 7.76136 12.0625 7.61878H11.3125ZM10.8375 8.84378C10.9801 8.84378 11.1096 8.84407 11.217 8.8353C11.3287 8.82616 11.4492 8.80538 11.5677 8.745L11.2272 8.07675C11.232 8.07428 11.2213 8.08244 11.1559 8.08779C11.0861 8.09349 10.9925 8.09378 10.8375 8.09378V8.84378ZM11.2955 8.00847C11.2805 8.03787 11.2566 8.06177 11.2272 8.07675L11.5677 8.745C11.7382 8.65812 11.8768 8.51948 11.9637 8.34896L11.2955 8.00847ZM10.8375 6.71878C10.9925 6.71878 11.0861 6.71907 11.1559 6.72477C11.2213 6.73012 11.232 6.73828 11.2272 6.73581L11.5677 6.06756C11.4492 6.00718 11.3287 5.9864 11.217 5.97726C11.1096 5.96849 10.9801 5.96878 10.8375 5.96878V6.71878ZM12.0625 7.19378C12.0625 7.0512 12.0628 6.92172 12.054 6.81432C12.0449 6.70254 12.0241 6.5821 11.9637 6.4636L11.2955 6.80409C11.293 6.79924 11.3012 6.81 11.3065 6.87539C11.3122 6.94517 11.3125 7.03883 11.3125 7.19378H12.0625ZM11.2272 6.73581C11.2566 6.75079 11.2805 6.77469 11.2955 6.80409L11.9637 6.4636C11.8768 6.29308 11.7382 6.15444 11.5677 6.06756L11.2272 6.73581ZM8.81875 5.96878C8.67617 5.96878 8.54669 5.96849 8.43929 5.97726C8.32751 5.9864 8.20707 6.00718 8.08857 6.06756L8.42906 6.73581C8.42421 6.73828 8.43497 6.73012 8.50036 6.72477C8.57014 6.71907 8.6638 6.71878 8.81875 6.71878V5.96878ZM8.34375 7.19378C8.34375 7.03883 8.34404 6.94517 8.34974 6.87539C8.35509 6.81 8.36325 6.79924 8.36078 6.80409L7.69253 6.4636C7.63215 6.5821 7.61137 6.70254 7.60223 6.81432C7.59346 6.92172 7.59375 7.0512 7.59375 7.19378H8.34375ZM8.08857 6.06756C7.91805 6.15444 7.77941 6.29308 7.69253 6.4636L8.36078 6.80409C8.37576 6.77469 8.39966 6.75079 8.42906 6.73581L8.08857 6.06756ZM3.32677 4.03571L7.91072 2.20213L7.63218 1.50577L3.04823 3.33935L3.32677 4.03571ZM8.125 2.3472V3.68753H8.875V2.3472H8.125ZM7.91072 2.20213C8.01336 2.16107 8.125 2.23666 8.125 2.3472H8.875C8.875 1.70606 8.22746 1.26766 7.63218 1.50577L7.91072 2.20213Z'
                    className='fill-black dark:fill-[#B1B1B1] '
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3848_13926'>
                    <rect
                      width='12.75'
                      height='12.75'
                      fill='white'
                      transform='translate(0 0.5)'
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="dark:text-opacity-50  text-[10.50px] font-medium font-['Manrope']">
                Earning:
              </div>
            </div>
            <div className=" text-[10.50px] font-bold font-['Manrope']">
              ₦3 per Page Like and Follow
            </div>
          </div>
        </div>  */}
