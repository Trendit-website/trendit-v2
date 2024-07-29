import { useEffect, useState } from "react"
import { useGetNotification } from "../../../api/notificationApi"
import { format } from "date-fns"
const NotificationPage = () => {
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
        <div className="sm:hidden">
            <div className="flex items-center justify-around px-2">
                {notfications.map((item, index) => (
                   <p key={index} onClick={() => setNotificationType(item)} className={`${notificationType === item ? 'text-secondary border-b-[1px] border-solid border-[#FF6DFB] ' : 'text-white'} pb-2 cursor-pointer`}>
                    {item} <span className="absolute text-[8px]">{notificationType === item ? unread : ''}</span>
                    </p>
                ))}
            </div>
            <div>
                <ul className="flex h-auto flex-col gap-y-2 overflow-y-auto px-2 mt-4">
                    {
                        notification?.map((item, index) => (
                        <li key={index} className={`flex flex-col gap-2.5 pl-2 w-[9/12] py-4 ${item?.read === false ? 'bg-[#2F2F2F]' : ''} hover:bg-gray-2 dark:hover:bg-meta-4`}>
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
    )
}
export default NotificationPage