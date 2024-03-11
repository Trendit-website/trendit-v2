/* eslint-disable react/no-unescaped-entities */

import { Select, SelectItem, Textarea, useDisclosure } from '@nextui-org/react'
import { animals } from '../../../utilities/data'
import AdvertPaymentModal from './AdvertPaymentModal'
import IgPageHeader from './IgPageHeader'

export default function CreateIgAdvertTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div>
        <div className='p-3 bg-white dark:bg-zinc-900 flex-col justify-start items-start gap-3 inline-flex'>
          <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
            <div className='w-full'>
              <IgPageHeader />
            </div>
            <div className='self-stretch  mt-8 grow shrink basis-0 flex-col justify-start items-start gap-4 flex'>
              <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
                <div className="text-stone-900 text-2xl font-medium font-['Campton']">
                  Create Advert Task
                </div>
              </div>
              <div className='self-stretch grow shrink basis-0 px-16 py-6 flex-col justify-start items-start gap-12 flex'>
                <div className='self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex'>
                  <div className='self-stretch h-[673px] flex-col justify-start items-center gap-3.5 flex'>
                    <div className='self-stretch h-[84px] flex-col justify-start items-start gap-[7px] flex'>
                      <div className='px-2 justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                          Select Platform
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
                            popoverContent: ['dark:bg-zinc-700', 'bg-white '],
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
                          className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className='justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[10px] font-normal font-['Campton']">
                          Please select the social media or App Store platform
                          where you want to perform this action
                        </div>
                      </div>
                    </div>
                    <div className='self-stretch h-[84px] flex-col justify-start items-start gap-[7px] flex'>
                      <div className='px-2 justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                          Select Location
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
                            popoverContent: ['dark:bg-zinc-700', 'bg-white '],
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
                          className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className='justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[10px] font-normal font-['Campton']">
                          This is the desired Number of Whatsapp Status Advert
                          Posts you want us to get for you.
                        </div>
                      </div>
                    </div>
                    <div className='self-stretch h-24 flex-col justify-start items-start gap-[7px] flex'>
                      <div className='px-2 justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                          Number of WhatsApp Status post you want
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
                            popoverContent: ['dark:bg-zinc-700', 'bg-white '],
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
                          className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                        <div className="grow shrink basis-0 text-stone-900 text-[10px] font-normal font-['Campton']">
                          You can select the kind of gender whether male or
                          female that you want to see your task. For example, if
                          you are selling women fashion items, you can select
                          the Female gender so your task will be shown to only
                          females. Select 'All Gender' if you want to target all
                          genders
                        </div>
                      </div>
                    </div>
                    <div className='self-stretch h-[84px] flex-col justify-start items-start gap-[7px] flex'>
                      <div className='px-2 justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                          Select Gender
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
                            popoverContent: ['dark:bg-zinc-700', 'bg-white '],
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
                          className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                        <div className="grow shrink basis-0 text-stone-900 text-[10px] font-normal font-['Campton']">
                          You can target and select a particular location where
                          your task or advert will be mostly shown. Select 'All
                          Nigeria' if you want to target every location in
                          Nigeria
                        </div>
                      </div>
                    </div>
                    <div className='self-stretch h-[84px] flex-col justify-start items-start gap-[7px] flex'>
                      <div className='px-2 justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                          Select Religion
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
                            popoverContent: ['dark:bg-zinc-700', 'bg-white '],
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
                          className="grow shrink rounded basis-0 text-black dark:text-zinc-400 text-[12.83px] font-normal font-['Campton']"
                        >
                          {animals.map((animal) => (
                            <SelectItem key={animal.value} value={animal.value}>
                              {animal.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                        <div className="grow shrink basis-0 text-stone-900 text-[10px] font-normal font-['Campton']">
                          You can target people of a particular religion or
                          belief. Your advert and task will be shown to the
                          particular religion you select. Select 'All Religion'
                          if you want to target all religion
                        </div>
                      </div>
                    </div>
                    <div className='self-stretch rounded-md flex-col justify-start items-start gap-[7px] flex'>
                      <div className='px-2 justify-center items-center gap-2 inline-flex'>
                        <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                          Enter Advert Task or Caption
                        </div>
                      </div>

                      <Textarea className="text-black  self-stretch grow shrink basis-0 px2 py3.5  bg-opacity-30 rounded justify-start items-start gap-2 inline-flex text-[12.83px] font-normal font-['Campton']">
                        Select
                      </Textarea>
                      <div className='self-stretch justify-center items-center gap-2 inline-flex'>
                        <div className="grow shrink basis-0 text-stone-900 text-[10px] font-normal font-['Campton']">
                          Please enter the advert text or caption. The advert
                          text or caption should be well detailed. You can also
                          include a link to your site, a phone number for people
                          to contact you or any information you want people to
                          see on your advert
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='self-stretch h-[251.59px] flex-col justify-start items-start gap-3 flex'>
                    <div className='px-2 justify-center items-center gap-2 inline-flex'>
                      <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                        Choose one of the Advert Media Upload Below:
                      </div>
                    </div>
                    <div className='justify-start items-center gap-[11px] inline-flex'>
                      <div className='px-2 py-1 bg-zinc-400 bg-opacity-30 border border-fuchsia-400 justify-center items-center gap-1 flex'>
                        <div className='w-5 h-5 relative' />
                        <div className="text-center text-fuchsia-400 text-[12.83px] font-medium font-['Campton']">
                          Photo
                        </div>
                      </div>
                      <div className='px-2 py-1 bg-zinc-400 bg-opacity-30 border border-violet-500 border-opacity-25 justify-center items-center gap-1 flex'>
                        <div className='w-5 h-5 relative' />
                        <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                          Video
                        </div>
                      </div>
                    </div>
                    <div className="w-[559px] h-6 text-stone-900 text-[10px] font-normal font-['Campton']">
                      Upload a Photo of the Advert You want people to post on
                      their social media post accounts like Whatsapp, Facebook,
                      Instagram, Twitter etc
                    </div>
                    <div className='w-[243px] h-[148.59px] opacity-50 bg-stone-900 justify-center items-center inline-flex'>
                      <div className='w-6 h-6 relative flex-col justify-start items-start flex' />
                    </div>
                  </div>
                </div>
                <div className='self-stretch px-3 py-2 bg-zinc-400 bg-opacity-30 rounded flex-col justify-center items-center gap-2 flex'>
                  <div className='w-[68px] grow shrink basis-0 px-2 flex-col justify-center items-center gap-2 flex'>
                    <div className="text-center text-stone-900 text-[12.83px] font-medium font-['Campton']">
                      Total Pay
                    </div>
                    <div className="text-stone-900 text-3xl font-medium font-['Campton']">
                      ₦0
                    </div>
                  </div>
                  <div
                    onClick={onOpen}
                    className='w-[290px]  cursor-pointer px-6 py-3.5 bg-fuchsia-600 rounded-[100px] justify-center items-center gap-2 inline-flex'
                  >
                    <div className="text-center text-white text-[12.83px] font-medium font-['Campton']">
                      Submit and Pay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <AdvertPaymentModal isOpen={isOpen} onClose={onClose} />}
    </>
  )
}
