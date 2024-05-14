import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Avatar, useDisclosure } from '@nextui-org/react'
import { useGetProfile } from '../../api/profileApis'
import SignOutModal from '../../components/auth/SignOutModal'

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  const { data: profileDeatils } = useGetProfile()
  // const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='relative '>
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        // onClick={() => navigate('/dashboard/settings')}
        className='flex items-center gap-4  hover:no-underline text-inherit'
        to='#'
      >
        <span className='rounded-full flex items-center'>
          <Avatar
            className='w-[42px] h-[42px] rounded-md border border-fuchsia-600'
            src={profileDeatils?.profile_picture}
            title={profileDeatils?.firstname + ' ' + profileDeatils?.lastname}
          />
        </span>
        <span className='hidden text-left lg:block'>
          <div className='flex gap-1'>
            <div className='flex-col justify-start  gap-1.5 inline-flex'>
              <div className="text-center  text-[12.83px] font-bold font-['Manrope']">
                {profileDeatils?.firstname + ' ' + profileDeatils?.lastname}
              </div>
              <div className="text-zinc-400 text-sm font-medium font-['Manrope']">
                @{profileDeatils?.username}
              </div>
            </div>

            {/* <ChevronDown className='text-gray-300 hidden lg:block' /> */}

            <div
              // onClick={() => navigate('/dashboard/transactions')}
              // onClick={navigate('/dashboard/settings')}
              className=''
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='15'
                viewBox='0 0 14 15'
                fill='none'
              >
                <path
                  d='M10.5 5.75L7 9.25L3.5 5.75'
                  stroke='#B1B1B1'
                  strokeWidth='1.16667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className='relative'
      >
        <div
          // onClick={() => navigate('/dashboard/settings')}
          className={dropdownOpen === true ? 'block' : 'hidden'}
        >
          <svg
            className={`fill-current sm:block absolute  right-4 top-[0.6rem] z-50 rotate-180`}
            fill='#272C33'
            color='white'
            width='16'
            height='13'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 386.257 386.257'
          >
            <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
          </svg>
        </div>
        <div
          className={`absolute right-0 mt-[1.2rem] px-3 flex w-60 flex-col rounded-sm border dark:border-transparent z-[555] bg-[#b1b1b1] shadow-default ${
            dropdownOpen === true ? 'block' : 'hidden'
          }`}
        >
          <ul className='flex flex-col gap-5 border-b px-6 py-7 dark:border-gray-500'>
            <li className=' group'>
              <Link
                to='/dashboard/settings'
                className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-fuchsia-600 lg:text-base'
              >
                <svg
                  className='fill-current group-hover:rotate-45 duration-75 ease-in-out'
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z'
                    fill=''
                  />
                  <path
                    d='M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z'
                    fill=''
                  />
                </svg>
                My Profile
              </Link>
            </li>
          </ul>
          <button
            className='flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-fuchsia-600 lg:text-base group'
            onClick={onOpen}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M5.99991 7C5.99991 7.55228 6.44762 8 6.99991 8C7.55219 8 7.99991 7.55228 7.99991 7H5.99991ZM7.99991 17C7.99991 16.4477 7.55219 16 6.99991 16C6.44762 16 5.99991 16.4477 5.99991 17H7.99991ZM8.09192 20.782L8.54591 19.891L8.54591 19.891L8.09192 20.782ZM7.21789 19.908L6.32689 20.362L7.21789 19.908ZM20.7819 19.908L21.6729 20.362L20.7819 19.908ZM19.9079 20.782L19.4539 19.891L19.4539 19.891L19.9079 20.782ZM19.9079 3.21799L19.4539 4.10899V4.10899L19.9079 3.21799ZM20.7819 4.09202L19.8909 4.54601V4.54601L20.7819 4.09202ZM7.21789 4.09202L8.1089 4.54601L7.21789 4.09202ZM8.09192 3.21799L7.63793 2.32698V2.32698L8.09192 3.21799ZM13.9999 13C14.5522 13 14.9999 12.5523 14.9999 12C14.9999 11.4477 14.5522 11 13.9999 11V13ZM2.9999 11C2.44762 11 1.9999 11.4477 1.9999 12C1.9999 12.5523 2.44762 13 2.9999 13V11ZM4.83196 9.5547C5.13831 9.09517 5.01413 8.4743 4.55461 8.16795C4.09508 7.8616 3.47421 7.98577 3.16785 8.4453L4.83196 9.5547ZM2.1848 11.7227L3.01686 12.2774H3.01686L2.1848 11.7227ZM2.1848 12.2774L3.01686 11.7227L2.1848 12.2774ZM3.16785 15.5547C3.47421 16.0142 4.09508 16.1384 4.55461 15.8321C5.01413 15.5257 5.13831 14.9048 4.83196 14.4453L3.16785 15.5547ZM7.99991 7V6.2H5.99991V7H7.99991ZM10.1999 4H17.7999V2H10.1999V4ZM19.9999 6.2V17.8H21.9999V6.2H19.9999ZM17.7999 20H10.1999V22H17.7999V20ZM7.99991 17.8V17H5.99991V17.8H7.99991ZM10.1999 20C9.62335 20 9.25108 19.9992 8.96774 19.9761C8.69608 19.9539 8.59536 19.9162 8.54591 19.891L7.63793 21.673C8.01631 21.8658 8.40953 21.9371 8.80488 21.9694C9.18855 22.0008 9.65635 22 10.1999 22V20ZM5.99991 17.8C5.99991 18.3436 5.99913 18.8114 6.03047 19.195C6.06278 19.5904 6.13409 19.9836 6.32689 20.362L8.1089 19.454C8.08371 19.4045 8.04603 19.3038 8.02383 19.0322C8.00068 18.7488 7.99991 18.3766 7.99991 17.8H5.99991ZM8.54591 19.891C8.35775 19.7951 8.20477 19.6422 8.1089 19.454L6.32689 20.362C6.61451 20.9265 7.07345 21.3854 7.63794 21.673L8.54591 19.891ZM19.9999 17.8C19.9999 18.3766 19.9991 18.7488 19.976 19.0322C19.9538 19.3038 19.9161 19.4045 19.8909 19.454L21.6729 20.362C21.8657 19.9836 21.937 19.5904 21.9693 19.195C22.0007 18.8114 21.9999 18.3436 21.9999 17.8H19.9999ZM17.7999 22C18.3435 22 18.8113 22.0008 19.1949 21.9694C19.5903 21.9371 19.9835 21.8658 20.3619 21.673L19.4539 19.891C19.4045 19.9162 19.3037 19.9539 19.0321 19.9761C18.7487 19.9992 18.3765 20 17.7999 20V22ZM19.8909 19.454C19.795 19.6422 19.6421 19.7951 19.4539 19.891L20.3619 21.673C20.9264 21.3854 21.3853 20.9265 21.6729 20.362L19.8909 19.454ZM17.7999 4C18.3765 4 18.7487 4.00078 19.0321 4.02393C19.3037 4.04612 19.4045 4.0838 19.4539 4.10899L20.3619 2.32698C19.9835 2.13419 19.5903 2.06287 19.1949 2.03057C18.8113 1.99922 18.3435 2 17.7999 2V4ZM21.9999 6.2C21.9999 5.65645 22.0007 5.18864 21.9693 4.80497C21.937 4.40963 21.8657 4.01641 21.6729 3.63803L19.8909 4.54601C19.9161 4.59545 19.9538 4.69617 19.976 4.96784C19.9991 5.25117 19.9999 5.62345 19.9999 6.2H21.9999ZM19.4539 4.10899C19.6421 4.20487 19.795 4.35785 19.8909 4.54601L21.6729 3.63803C21.3853 3.07354 20.9264 2.6146 20.3619 2.32698L19.4539 4.10899ZM7.99991 6.2C7.99991 5.62345 8.00068 5.25117 8.02383 4.96784C8.04603 4.69617 8.08371 4.59545 8.1089 4.54601L6.32689 3.63803C6.13409 4.01641 6.06278 4.40963 6.03047 4.80497C5.99913 5.18864 5.99991 5.65645 5.99991 6.2H7.99991ZM10.1999 2C9.65635 2 9.18855 1.99922 8.80488 2.03057C8.40953 2.06287 8.01631 2.13419 7.63793 2.32698L8.54591 4.10899C8.59536 4.0838 8.69608 4.04612 8.96774 4.02393C9.25108 4.00078 9.62335 4 10.1999 4V2ZM8.1089 4.54601C8.20477 4.35785 8.35775 4.20487 8.54591 4.10899L7.63793 2.32698C7.07345 2.6146 6.61451 3.07354 6.32689 3.63803L8.1089 4.54601ZM13.9999 11H2.9999V13H13.9999V11ZM3.16785 8.4453L1.35275 11.168L3.01686 12.2774L4.83196 9.5547L3.16785 8.4453ZM1.35275 12.8321L3.16785 15.5547L4.83196 14.4453L3.01686 11.7227L1.35275 12.8321ZM1.35275 11.168C1.01685 11.6718 1.01686 12.3282 1.35275 12.8321L3.01686 11.7227C3.12882 11.8906 3.12882 12.1094 3.01686 12.2774L1.35275 11.168Z'
                fill='#B1B1B1'
              />
            </svg>
            Sign Out
          </button>
        </div>
      </div>
      {/* <!-- Dropdown End --> */}

      <SignOutModal isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default UserDropdown
