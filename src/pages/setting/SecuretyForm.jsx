import { Input } from '@nextui-org/input'
import { Select, SelectItem } from '@nextui-org/select'
import { animals } from '../../utilities/data'
import { Button } from '@nextui-org/button'

export default function SecuretyForm() {
  return (
    <div>
      <div className='self-stretch grow shrink basis-0 px-16 py-6 flex-col justify-start items-start gap-12 flex'>
        <div className='self-stretch h[446px] flex-col justify-start items-start gap-6 flex'>
          <div className="text-white text-sm font-bold font-['Campton']">
            Profile
          </div>
          <div className='flex-col justify-start items-center gap-6 flex'>
            <div className='flex-col justify-center items-center gap-2 flex'>
              <div className='w-[66px] h-[66px] relative'>
                <div className='w-[66px] h-[66px] left-0 top-0 absolute bg-fuchsia-600 bg-opacity-40 rounded-[10px]' />
                <div className='w-6 h-6 left-[21px] top-[21px] absolute'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M3 21H21'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M7 17V13L17 3L21 7L11 17H7Z'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14 6L18 10'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center text-zinc-400 text-[10px] font-normal font-['Campton']">
                Upload photo
              </div>
            </div>
          </div>
          <div className='self-stretch h[302px] flex-col justify-start items-center gap-3.5 flex'>
            <div className='self-stretch justify-center items-start gap-3.5 inline-flex'>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                    Full Name
                  </div>
                </div>
                <div className='w-full flex gap-4'>
                  <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                    <Input
                      placeholder='Adewale'
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
                      className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                    />
                  </div>
                  <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                    <Input
                      placeholder='Adewale'
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
                      className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
              <div className='px-2 justify-center items-center gap-2 inline-flex'>
                <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                  Email address
                </div>
              </div>
              <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  placeholder='adedamolamoses@gmail.com'
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
                  className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                />
              </div>
            </div>
            <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
              <div className='px-2 justify-center items-center gap-2 inline-flex'>
                <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                  Phone Number
                </div>
              </div>

              <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  endContent={
                    <Button
                      variant='light'
                      className="text-fuchsia-200 text-[12.83px] font-normal font-['Campton']"
                    >
                      Edit
                    </Button>
                  }
                  placeholder='+234   Enter a phone'
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
                  className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                />
              </div>
            </div>
            <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
              <div className='px-2 justify-center items-center gap-2 inline-flex'>
                <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                  Username
                </div>
              </div>

              <div className='self-stretch w-full bg-white hover:text-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Input
                  endContent={
                    <Button
                      variant='light'
                      className="text-fuchsia-200 text-[12.83px] font-normal font-['Campton']"
                    >
                      Edit
                    </Button>
                  }
                  placeholder='@moski7'
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
        <div className='self-stretch  flex-col justify-start items-start gap-6 flex'>
          <div className="text-white mt-8 text-sm font-bold font-['Campton']">
            Update
          </div>
          <div className='self-stretch flex-col justify-start items-center gap-3.5 flex'>
            <div className='self-stretch  flex-col justify-start items-start gap-[7px] flex'>
              <div className="text-center px-2 text-white text-[12.83px] font-medium font-['Campton']">
                Select Gender
              </div>
              <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Select
                  placeholder='Select'
                  size='sm'
                  classNames={{
                    listbox: [
                      'bg-transparent',
                      'text-black/90 dark:text-white/90',
                      'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                    ],
                    popoverContent: ['bg-zinc-700', 'dark:bg-white '],
                    trigger: [
                      'bg-zinc-700 bg-opacity-10',
                      'dark:bg-white dark:bg-opacity-10',
                      'hover:bg-bg-white hover:bg-opacity-10',
                      'dark:hover:bg-default/70',
                      'group-data-[focused=true]:bg-default-200/50',
                      'dark:group-data-[focused=true]:bg-default/60',
                      '!cursor-text',
                    ],
                  }}
                  className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className='self-stretch justify-center items-start gap-3.5 inline-flex'>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                    Birthday
                  </div>
                </div>
                <div className=' flex gap-4 w-full'>
                  <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                    <Select
                      placeholder='Day'
                      size='sm'
                      classNames={{
                        listbox: [
                          'bg-transparent',
                          'text-black/90 dark:text-white/90',
                          'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                        ],
                        popoverContent: ['bg-zinc-700', 'dark:bg-white '],
                        trigger: [
                          'bg-zinc-700 bg-opacity-10',
                          'dark:bg-white dark:bg-opacity-10',
                          'hover:bg-bg-white hover:bg-opacity-10',
                          'dark:hover:bg-default/70',
                          'group-data-[focused=true]:bg-default-200/50',
                          'dark:group-data-[focused=true]:bg-default/60',
                          '!cursor-text',
                        ],
                      }}
                      className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value} value={animal.value}>
                          {animal.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                    <Select
                      placeholder='Mon'
                      size='sm'
                      classNames={{
                        listbox: [
                          'bg-transparent',
                          'text-black/90 dark:text-white/90',
                          'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                        ],
                        popoverContent: ['bg-zinc-700', 'dark:bg-white '],
                        trigger: [
                          'bg-zinc-700 bg-opacity-10',
                          'dark:bg-white dark:bg-opacity-10',
                          'hover:bg-bg-white hover:bg-opacity-10',
                          'dark:hover:bg-default/70',
                          'group-data-[focused=true]:bg-default-200/50',
                          'dark:group-data-[focused=true]:bg-default/60',
                          '!cursor-text',
                        ],
                      }}
                      className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value} value={animal.value}>
                          {animal.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                    <Select
                      placeholder='Year'
                      size='sm'
                      classNames={{
                        listbox: [
                          'bg-transparent',
                          'text-black/90 dark:text-white/90',
                          'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                        ],
                        popoverContent: ['bg-zinc-700', 'dark:bg-white '],
                        trigger: [
                          'bg-zinc-700 bg-opacity-10',
                          'dark:bg-white dark:bg-opacity-10',
                          'hover:bg-bg-white hover:bg-opacity-10',
                          'dark:hover:bg-default/70',
                          'group-data-[focused=true]:bg-default-200/50',
                          'dark:group-data-[focused=true]:bg-default/60',
                          '!cursor-text',
                        ],
                      }}
                      className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value} value={animal.value}>
                          {animal.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch flex-col justify-start items-start gap-[7px] flex'>
              <div className='px-2 justify-center items-center gap-2 inline-flex'>
                <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                  Select Country
                </div>
              </div>

              <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                <Select
                  placeholder='Select'
                  size='sm'
                  classNames={{
                    listbox: [
                      'bg-transparent',
                      'text-black/90 dark:text-white/90',
                      'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                    ],
                    popoverContent: ['bg-zinc-700', 'dark:bg-white '],
                    trigger: [
                      'bg-zinc-700 bg-opacity-10',
                      'dark:bg-white dark:bg-opacity-10',
                      'hover:bg-bg-white hover:bg-opacity-10',
                      'dark:hover:bg-default/70',
                      'group-data-[focused=true]:bg-default-200/50',
                      'dark:group-data-[focused=true]:bg-default/60',
                      '!cursor-text',
                    ],
                  }}
                  className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className='self-stretch justify-center items-start gap-3.5 inline-flex'>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                    State
                  </div>
                </div>
                <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                  <Select
                    placeholder='Select'
                    size='sm'
                    classNames={{
                      listbox: [
                        'bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                      ],
                      popoverContent: ['bg-zinc-700', 'dark:bg-white '],
                      trigger: [
                        'bg-zinc-700 bg-opacity-10',
                        'dark:bg-white dark:bg-opacity-10',
                        'hover:bg-bg-white hover:bg-opacity-10',
                        'dark:hover:bg-default/70',
                        'group-data-[focused=true]:bg-default-200/50',
                        'dark:group-data-[focused=true]:bg-default/60',
                        '!cursor-text',
                      ],
                    }}
                    className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className='grow shrink basis-0 flex-col justify-start items-start gap-[7px] inline-flex'>
                <div className='px-2 justify-center items-center gap-2 inline-flex'>
                  <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                    LGA
                  </div>
                </div>
                <div className='self-stretch w-full bg-white bg-opacity-10 rounded justify-start items-center gap-2 inline-flex'>
                  <Select
                    placeholder='Select'
                    size='sm'
                    classNames={{
                      listbox: [
                        'bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-zinc-400 dark:placeholder:text-white/60',
                      ],
                      popoverContent: ['bg-zinc-700', 'dark:bg-white '],
                      trigger: [
                        'bg-zinc-700 bg-opacity-10',
                        'dark:bg-white dark:bg-opacity-10',
                        'hover:bg-bg-white hover:bg-opacity-10',
                        'dark:hover:bg-default/70',
                        'group-data-[focused=true]:bg-default-200/50',
                        'dark:group-data-[focused=true]:bg-default/60',
                        '!cursor-text',
                      ],
                    }}
                    className="grow shrink basis-0 text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='self-stretch  cursor-pointer justify-start items-center gap-[7px] inline-flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M7.06274 2.93726L7.76985 3.64437L7.76985 3.64437L7.06274 2.93726ZM2.93726 7.06274L2.23015 6.35563L2.23015 6.35564L2.93726 7.06274ZM2.93726 16.9373L3.64437 16.2302H3.64437L2.93726 16.9373ZM7.06274 21.0627L6.35563 21.7698H6.35564L7.06274 21.0627ZM21.0627 7.06274L21.7698 6.35564L21.0627 7.06274ZM16.9373 2.93726L16.2302 3.64437V3.64437L16.9373 2.93726ZM21.9447 8.36154L22.9171 8.12809V8.12809L21.9447 8.36154ZM21.7053 7.78343L22.5579 7.26093V7.26093L21.7053 7.78343ZM21.7053 16.2166L22.5579 16.7391V16.7391L21.7053 16.2166ZM21.9447 15.6385L22.9171 15.8719L22.9171 15.8719L21.9447 15.6385ZM15.6385 21.9447L15.8719 22.9171L15.8719 22.9171L15.6385 21.9447ZM16.2166 21.7053L16.7391 22.5579H16.7391L16.2166 21.7053ZM7.78343 21.7053L7.26093 22.5579H7.26093L7.78343 21.7053ZM8.36154 21.9447L8.12809 22.9171H8.12809L8.36154 21.9447ZM2.05526 15.6385L1.08289 15.8719L1.08289 15.8719L2.05526 15.6385ZM2.29472 16.2166L3.14736 15.6941L3.14736 15.6941L2.29472 16.2166ZM2.29472 7.78343L3.14736 8.30593L3.14736 8.30593L2.29472 7.78343ZM2.05526 8.36154L3.02763 8.59498V8.59498L2.05526 8.36154ZM8.36154 2.05526L8.59498 3.02763H8.59498L8.36154 2.05526ZM7.78343 2.29472L8.30593 3.14736V3.14736L7.78343 2.29472ZM15.6385 2.05526L15.8719 1.08289L15.8719 1.08289L15.6385 2.05526ZM16.2166 2.29472L15.6941 3.14736L15.6941 3.14736L16.2166 2.29472ZM11 16.01C11 16.5623 11.4477 17.01 12 17.01C12.5523 17.01 13 16.5623 13 16.01H11ZM13 11.01C13 10.4577 12.5523 10.01 12 10.01C11.4477 10.01 11 10.4577 11 11.01H13ZM11 8.01001C11 8.56229 11.4477 9.01001 12 9.01001C12.5523 9.01001 13 8.56229 13 8.01001H11ZM13 8.00001C13 7.44772 12.5523 7.00001 12 7.00001C11.4477 7.00001 11 7.44772 11 8.00001H13ZM14.6745 1H9.32548V3H14.6745V1ZM6.35564 2.23015L2.23015 6.35563L3.64437 7.76985L7.76985 3.64437L6.35564 2.23015ZM1 9.32548V14.6745H3V9.32548H1ZM2.23015 17.6444L6.35563 21.7698L7.76985 20.3556L3.64437 16.2302L2.23015 17.6444ZM9.32548 23H14.6745V21H9.32548V23ZM17.6444 21.7698L21.7698 17.6444L20.3556 16.2302L16.2302 20.3556L17.6444 21.7698ZM23 14.6745V9.32548H21V14.6745H23ZM21.7698 6.35564L17.6444 2.23015L16.2302 3.64437L20.3556 7.76985L21.7698 6.35564ZM23 9.32548C23 8.8839 23.0064 8.50012 22.9171 8.12809L20.9724 8.59498C20.9936 8.6833 21 8.7887 21 9.32548H23ZM20.3556 7.76985C20.7352 8.14941 20.8052 8.22848 20.8526 8.30593L22.5579 7.26093C22.358 6.93471 22.0821 6.66788 21.7698 6.35564L20.3556 7.76985ZM22.9171 8.12809C22.8436 7.82198 22.7224 7.52935 22.5579 7.26093L20.8526 8.30593C20.9075 8.3954 20.9479 8.49295 20.9724 8.59498L22.9171 8.12809ZM21.7698 17.6444C22.0821 17.3321 22.358 17.0653 22.5579 16.7391L20.8526 15.6941C20.8052 15.7715 20.7352 15.8506 20.3556 16.2302L21.7698 17.6444ZM21 14.6745C21 15.2113 20.9936 15.3167 20.9724 15.405L22.9171 15.8719C23.0064 15.4999 23 15.1161 23 14.6745H21ZM22.5579 16.7391C22.7224 16.4707 22.8436 16.178 22.9171 15.8719L20.9724 15.405C20.9479 15.5071 20.9075 15.6046 20.8526 15.6941L22.5579 16.7391ZM14.6745 23C15.1161 23 15.4999 23.0064 15.8719 22.9171L15.405 20.9724C15.3167 20.9936 15.2113 21 14.6745 21V23ZM16.2302 20.3556C15.8506 20.7352 15.7715 20.8052 15.6941 20.8526L16.7391 22.5579C17.0653 22.358 17.3321 22.0821 17.6444 21.7698L16.2302 20.3556ZM15.8719 22.9171C16.178 22.8436 16.4707 22.7224 16.7391 22.5579L15.6941 20.8526C15.6046 20.9075 15.5071 20.9479 15.405 20.9724L15.8719 22.9171ZM6.35564 21.7698C6.66788 22.0821 6.93471 22.358 7.26093 22.5579L8.30593 20.8526C8.22848 20.8052 8.14941 20.7352 7.76985 20.3556L6.35564 21.7698ZM9.32548 21C8.7887 21 8.6833 20.9936 8.59498 20.9724L8.12809 22.9171C8.50012 23.0064 8.8839 23 9.32548 23V21ZM7.26093 22.5579C7.52935 22.7224 7.82198 22.8436 8.12809 22.9171L8.59498 20.9724C8.49295 20.9479 8.3954 20.9075 8.30593 20.8526L7.26093 22.5579ZM1 14.6745C1 15.1161 0.993573 15.4999 1.08289 15.8719L3.02763 15.405C3.00643 15.3167 3 15.2113 3 14.6745H1ZM3.64437 16.2302C3.2648 15.8506 3.19482 15.7715 3.14736 15.6941L1.44208 16.7391C1.64199 17.0653 1.91791 17.3321 2.23015 17.6444L3.64437 16.2302ZM1.08289 15.8719C1.15638 16.178 1.27759 16.4707 1.44208 16.7391L3.14736 15.6941C3.09253 15.6046 3.05213 15.5071 3.02763 15.405L1.08289 15.8719ZM2.23015 6.35564C1.91791 6.66788 1.64199 6.93471 1.44208 7.26093L3.14736 8.30593C3.19482 8.22849 3.26481 8.14941 3.64437 7.76985L2.23015 6.35564ZM3 9.32548C3 8.7887 3.00643 8.6833 3.02763 8.59498L1.08289 8.12809C0.993573 8.50012 1 8.8839 1 9.32548H3ZM1.44208 7.26093C1.27759 7.52935 1.15638 7.82198 1.08289 8.12809L3.02763 8.59498C3.05213 8.49295 3.09253 8.3954 3.14736 8.30593L1.44208 7.26093ZM9.32548 1C8.8839 1 8.50012 0.993573 8.12809 1.08289L8.59498 3.02763C8.6833 3.00643 8.7887 3 9.32548 3V1ZM7.76985 3.64437C8.14941 3.2648 8.22849 3.19482 8.30593 3.14736L7.26093 1.44208C6.93471 1.64199 6.66788 1.91791 6.35563 2.23015L7.76985 3.64437ZM8.12809 1.08289C7.82198 1.15638 7.52935 1.27759 7.26093 1.44208L8.30593 3.14736C8.3954 3.09253 8.49295 3.05213 8.59498 3.02763L8.12809 1.08289ZM14.6745 3C15.2113 3 15.3167 3.00643 15.405 3.02763L15.8719 1.08289C15.4999 0.993573 15.1161 1 14.6745 1V3ZM17.6444 2.23015C17.3321 1.91791 17.0653 1.64199 16.7391 1.44208L15.6941 3.14736C15.7715 3.19482 15.8506 3.2648 16.2302 3.64437L17.6444 2.23015ZM15.405 3.02763C15.5071 3.05213 15.6046 3.09253 15.6941 3.14736L16.7391 1.44208C16.4707 1.27759 16.178 1.15638 15.8719 1.08289L15.405 3.02763ZM13 16.01V11.01H11V16.01H13ZM13 8.01001V8.00001H11V8.01001H13Z'
              fill='#FF3D00'
            />
          </svg>
          <div className="text-center text-orange-600 text-sm font-medium font-['Campton']">
            Delete account
          </div>
        </div>
      </div>
    </div>
  )
}
