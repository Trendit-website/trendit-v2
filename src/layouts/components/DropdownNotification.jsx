import { Link } from 'react-router-dom';
import { useState } from 'react';

const DropdownNotification = () => {
  const notfications = ['Activities', 'Messages', 'Notifications']
  const [notificationType, setNotificationType] = useState(notfications[0])
  return (
    <div className="text-[#FFFFFF]">
      <div
        className={`sm:absolute z-[555]  mt-2.5 flex h-96 max-h-90 sm:w-5/12 flex-col rounded-sm bg-white shadow-default dark:bg-black sm:right-0 absolute`}
      >
        <div className="px-4 py-4 text-[12px] font-bold flex items-center justify-between">
          {
            notfications.map((item, index) => (
              <p key={index} onClick={() => setNotificationType(item)} className={`${notificationType === item ? 'text-secondary border-b-[1px] border-solid border-[#FF6DFB] ' : 'text-white'} pb-2`}>{item}</p>
            ))
          }
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto px-2">
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2  dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2  dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm dark:text-[#FFFFFF]">
                <span className="">
                  Edit your information in a swipe
                </span>{' '}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 px-4.5 py-3 hover:bg-gray-2 dark:hover:bg-meta-4"
              to="#"
            >
              <p className="text-sm">
                <span className="">
                  It is a long established fact
                </span>{' '}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
   
    
        </ul>
      </div>
    </div>
  );
};

export default DropdownNotification;
