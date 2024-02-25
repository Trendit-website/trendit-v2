import { Input } from '@nextui-org/input'
import { Switch } from '@nextui-org/switch'

export default function PrefrenceForm() {
  return (
    <div>
      <div className='self-stretch grow min-h-screen shrink basis-0 md:px-16 py-6 flex-col justify-start items-start gap-12 flex'>
        <div className="text-white text-sm font-bold font-['Campton']">
          Appearance
        </div>
        <div className='self-stretch  flex-col justify-start items-start gap-6 flex'>
          <div className='self-stretch flex-col justify-start items-center gap-3.5 flex'>
            <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
              <Input
                endContent={
                  <Switch size='sm' defaultSelected color='default' />
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
                  ],
                }}
                className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
              />
            </div>
            <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
              <Input
                endContent={
                  <Switch size='sm' defaultSelected color='default' />
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
                  ],
                }}
                className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
              />
            </div>
            <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
              <Input
                endContent={
                  <Switch size='sm' defaultSelected color='default' />
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
                  ],
                }}
                className="grow shrink hover:text-white basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
