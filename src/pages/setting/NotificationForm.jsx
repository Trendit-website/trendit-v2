import { Checkbox } from '@nextui-org/react'

export default function NotificationForm() {
  return (
    <div>
      <div className='w-full md:px-16 py-6 flex-col justify-start items-start gap-12 inline-flex'>
        <div className='self-stretch h-[182px] flex-col justify-start items-start gap-6 flex'>
          <div className="text-white text-sm font-bold font-['Campton']">
            Email Alert
          </div>
          <div className='self-stretch  flex-col justify-start items-center gap-0.5 flex'>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                New features and updates
              </Checkbox>
            </div>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                New Tasks
              </Checkbox>
            </div>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                Money earned
              </Checkbox>
            </div>
          </div>
        </div>
        <div className='self-stretch  flex-col justify-start items-start gap-6 flex'>
          <div className="text-white text-sm font-bold font-['Campton']">
            In-App Alert
          </div>
          <div className='self-stretch  flex-col justify-start items-center gap-0.5 flex'>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                New features and updates
              </Checkbox>
            </div>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                New Tasks
              </Checkbox>
            </div>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                // defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                Money earned
              </Checkbox>
            </div>
          </div>
        </div>
        <div className='self-stretch flex-col justify-start items-start gap-6 flex'>
          <div className="text-white text-sm font-bold font-['Campton']">
            Push Notifications{' '}
          </div>
          <div className='self-stretch  flex-col justify-start items-center gap-0.5 flex'>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                New features and updates
              </Checkbox>
            </div>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                // defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                New Tasks
              </Checkbox>
            </div>
            <div className='self-stretch p-3 bg-white bg-opacity-10 border border-stone-900 justify-start items-center gap-1.5 inline-flex'>
              <Checkbox
                // defaultSelected
                radius='none'
                color='secondary'
                className='text-white'
                classNames={{
                  label:
                    "grow shrink basis-0 text-white text-opacity-50 text-[12.83px] font-medium font-['Campton']",
                }}
              >
                Money earned
              </Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
