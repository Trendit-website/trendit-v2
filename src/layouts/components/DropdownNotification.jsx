import { useState, useEffect } from 'react';
import { useGetNotification } from '../../api/notificationApi';
import { format } from 'date-fns';

const DropdownNotification = () => {
  const notfications = ['Notifications' ,'Activities', 'Messages']
  const [notificationType, setNotificationType] = useState(notfications[0])
  const { data: notification} = useGetNotification()
  const [unread, setUnread] = useState(0)
  useEffect(() => {
      if(notification) {
          for(const item of notification) {
              if(item?.read === false) {
                  setUnread((prevRead) => prevRead + 1)
              }
          }
      }
  }, [notification])

  return (
    <div className="text-[#FFFFFF]">
      <div
        className={`sm:absolute z-[555]  mt-2.5 flex h-96 max-h-90 sm:w-5/12 flex-col rounded-sm bg-white shadow-default dark:bg-black sm:right-0 absolute`}
      >
        <div className="px-4 py-4 text-[12px] font-bold flex items-center justify-between">
          {
            notfications.map((item, index) => (
              <p key={index} onClick={() => setNotificationType(item)} className={`${notificationType === item ? 'text-secondary border-b-[1px] border-solid border-[#FF6DFB] ' : 'text-white'} pb-2`}>
                {item} <span className="absolute text-[8px] text-black dark:text-white">{notificationType === item ? unread : ''}</span></p>
            ))
          }
        </div>

        <ul className="flex h-auto flex-col gap-y-2 overflow-y-auto px-2">
        {
                        notification?.map((item, index) => (
                            <li key={index} className={`flex flex-col gap-2.5 pl-4 py-4 ${item?.read === false ? 'bg-[#2F2F2F]' : ''} hover:bg-gray-2 dark:hover:bg-meta-4`}>
                            <p className="text-[14px] font-semibold font-RedHat dark:text-[#FFFFFF]">
                                {item?.body}
                            </p>            
                            <p className="text-xs">{format(new Date(item?.updated_at), 'dd-MM-yyyy')}</p>                     
                        </li>

                        ))
                    }   
        </ul>
      </div>
    </div>
  );
};

export default DropdownNotification;
