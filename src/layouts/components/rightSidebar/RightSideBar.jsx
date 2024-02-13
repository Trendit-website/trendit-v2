/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */

export default function RightSidebar({ isOpen }) {
  return (
    <>
      {/* <div
      className={` top-0 right-0 h-full w-[22rem] bg-gray-200 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
    </div> */}
      <div className='flex-col justify-start items-start inline-flex'>
        <div className='h-[672px] py-3 bg-neutral-900 border-l border-stone-900 flex-col justify-start items-start gap-2 flex'>
          <div className='self-stretch h-9 px-[11px] flex-col justify-start items-start gap-2 flex'>
            <div className='self-stretch px-3 py-1.5 bg-zinc-900 rounded justify-start items-center gap-2 inline-flex'>
              <div className='w-6 h-6 relative' />
              <div className="text-center text-zinc-400 text-sm font-medium font-['Campton']">
                Search
              </div>
            </div>
          </div>
          <div className='self-stretch border-b border-stone-900 justify-start items-center inline-flex'>
            <div className='grow shrink basis-0 h-[39px] px-2 py-3 border-b border-fuchsia-400 justify-center items-center gap-1 flex'>
              <div className="text-center text-fuchsia-400 text-[12.83px] font-bold font-['Campton']">
                Activities
              </div>
            </div>
            <div className='grow shrink basis-0 h-[39px] px-2 py-3 justify-center items-center gap-1 flex'>
              <div className="text-center text-zinc-400 text-[12.83px] font-bold font-['Campton']">
                Messages
              </div>
              <div className='justify-center items-center gap-2 flex'>
                <div className="text-center text-white text-[10px] font-bold font-['Campton']">
                  20+
                </div>
              </div>
            </div>
            <div className='grow shrink basis-0 h-[39px] px-2 py-3 justify-center items-center gap-1 flex'>
              <div className="text-center text-zinc-400 text-[12.83px] font-bold font-['Campton']">
                Notifications
              </div>
              <div className='justify-center items-center gap-2 flex'>
                <div className="text-center text-white text-[10px] font-bold font-['Campton']">
                  5
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch h-[557px] flex-col justify-start items-center gap-2 flex'>
            <div className='self-stretch p-3 bg-neutral-900 bg-opacity-40 rounded-lg justify-start items-start gap-2 inline-flex'>
              <div className='w-5 h-5 relative' />
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className="self-stretch text-white text-sm font-normal font-['Campton']">
                  @anasahmed from Misau, Bauchi just earned ₦3 for following a
                  page or account on Instagram
                </div>
              </div>
            </div>
            <div className='self-stretch p-3 bg-neutral-900 bg-opacity-40 rounded-lg justify-start items-start gap-2 inline-flex'>
              <div className='w-5 h-5 relative' />
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className="self-stretch text-white text-sm font-normal font-['Campton']">
                  @anasahmed from Misau, Bauchi just earned ₦3 for following a
                  page or account on Instagram
                </div>
              </div>
            </div>
            <div className='self-stretch p-3 bg-neutral-900 bg-opacity-40 rounded-lg justify-start items-start gap-2 inline-flex'>
              <div className='w-5 h-5 relative' />
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className="self-stretch text-white text-sm font-normal font-['Campton']">
                  @anasahmed from Misau, Bauchi just earned ₦3 for following a
                  page or account on Instagram
                </div>
              </div>
            </div>
            <div className='self-stretch p-3 bg-neutral-900 bg-opacity-40 rounded-lg justify-start items-start gap-2 inline-flex'>
              <div className='w-5 h-5 relative' />
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className="self-stretch text-white text-sm font-normal font-['Campton']">
                  @anasahmed from Misau, Bauchi just earned ₦3 for following a
                  page or account on Instagram
                </div>
              </div>
            </div>
            <div className='self-stretch p-3 bg-neutral-900 bg-opacity-40 rounded-lg justify-start items-start gap-2 inline-flex'>
              <div className='w-5 h-5 relative' />
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className="self-stretch text-white text-sm font-normal font-['Campton']">
                  @anasahmed from Misau, Bauchi just earned ₦3 for following a
                  page or account on Instagram
                </div>
              </div>
            </div>
            <div className='self-stretch p-3 bg-neutral-900 bg-opacity-40 rounded-lg justify-start items-start gap-2 inline-flex'>
              <div className='w-5 h-5 relative' />
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className="self-stretch text-white text-sm font-normal font-['Campton']">
                  @anasahmed from Misau, Bauchi just earned ₦3 for following a
                  page or account on Instagram
                </div>
              </div>
            </div>
            <div className='self-stretch p-3 bg-neutral-900 bg-opacity-40 rounded-lg justify-start items-start gap-2 inline-flex'>
              <div className='w-5 h-5 relative' />
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex'>
                <div className="self-stretch text-white text-sm font-normal font-['Campton']">
                  @anasahmed from Misau, Bauchi just earned ₦3 for following a
                  page or account on Instagram
                </div>
              </div>
            </div>
            <div className='px-2 py-3 justify-center items-center gap-1 inline-flex'>
              <div className="text-center text-fuchsia-400 text-[12.83px] font-bold font-['Campton']">
                View more
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
