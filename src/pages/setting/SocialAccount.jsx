import Icons from '../../components/Icon'
import { useGetDeleteLinks } from '../../api/verifySocialApi'
import Loader from '../Loader'
import { useDisclosure } from '@nextui-org/react'
import SocialLinkOption from '../components/SocialLinkOption'
import { useState, useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import { SocialAccountContext, setSocialAcccountContext } from '../../context/SocialAccount'
import API from '../../services/AxiosInstance'

export default function SocialAccount() {
  const { mutateAsync: deleteLinks} = useGetDeleteLinks()
  const {
    isOpen: isOpenVerify,
    onOpen: onOpenVerify,
    onClose: onCloseVerify,
  } = useDisclosure()
  const [socialLinks, setSocialLinks] = useState()
  const socialAccount = useContext(SocialAccountContext)
  const setAccount = useContext(setSocialAcccountContext)
  
  const GetVerified = () => {
    API.get(`/verified_socials`)
    .then((response) => {
      setSocialLinks(response.data?.socials)
    })
    .catch((error) => toast.error(error.response?.data?.message ?? error.message))
  }
  const handleDelete = async(platform) => {
    toast.success(`Deleting ${platform} accounts....`)
    try {
      const res = await deleteLinks(platform)
      if(res.data) {
        API.get('/verified_socials')
        .then((response) => (setAccount(response.data?.socials), setSocialLinks(response.data?.socials),  toast.success(res.data.message)))
        .catch((error) => toast.error(error.response?.data?.message ?? error.message))
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)      
    }
  }

  const socials =[
    {
      state: (socialAccount ? socialAccount?.instagram_verified : '') || socialLinks?.instagram_verified ,
      link: socialLinks?.instagram_link || (socialAccount ? socialAccount?.instagram_link : ''),
      platformIcon: 'instagram',
      platform: 'instagram'
    },
    {
      state: (socialAccount ? socialAccount?.x_verified :'') || socialLinks?.x_verified ,
      link: socialLinks?.x_link || (socialAccount ? socialAccount?.x_link : ''),
      platformIcon: 'twitter',
      platform: 'x'
    },
    {
      state: (socialAccount ? socialAccount?.facebook_verified : '') || socialLinks?.facebook_verified,
      link: socialLinks?.facebook_link || (socialAccount ? socialAccount?.facebook_link : ''),
      platformIcon: 'facebook',
      platform: 'facebook'
    },
    {
      state: (socialAccount ? socialAccount?.tiktok_verified : '') || socialLinks?.tiktok_verified,
      link: socialLinks?.tiktok_link || (socialAccount ? socialAccount?.tiktok_link : ''),
      platformIcon: 'tik-tok',
      platform: 'tiktok'
    },
    {
      state: (socialAccount ? socialAccount?.thread_verified : '') || socialLinks?.threads_verified,
      link: socialLinks?.threads_link || (socialAccount ? socialAccount?.threads_link : ''),
      platformIcon: 'thread',
      platform: 'thread'
    },
  ]

  useEffect(() => {
    GetVerified()
  }, [])
  
  const openModal = () => {
    onOpenVerify()
  }
  return (
    <>
      <div className='md:px-16'>
        <div className='text-zinc-400 dark:text-white text-sm font-bold font-Manrope'>
          Social Media accounts
        </div>
        {
          socialLinks ? 
        <div className='flex flex-col gap-y-4 mt-8'>
          {socials.map((social, index) => (
            <div key={index} className='flex flex-col lg:items-center lg:flex-row justify-between bg-zinc-700 py-3 px-2'>
             
              <div className='flex items-center gap-x-4'>
                  <Icons type={social.platformIcon} width={25} height={25}/>                  
                    {social.link != null ? 
                      <a href={social.link} target='_blank' className='text-white text-[14px]'>{social.link}</a> : (social.state) 
                    }                  
              </div>
              <p className={`flex items-center mt-6 justify-between font-bold gap-x-2 ${social.state === 'pending' && 'text-yellow-400' || social.state === 'verified' && 'text-green-500' || social.state === 'idle' && 'text-[#FF3D00]'}`}>
               {social.state.charAt(0).toUpperCase()+social.state.slice(1)}
                {
                  social.state === 'idle' ? '' : 
                    <span onClick={() => handleDelete(social.platform, index)}>
                        <Icons type='delete' />
                    </span>
                 }
              </p>
            </div>
          ))}
          <div className='flex items-center gap-x-2 mt-4' onClick={() => openModal()}>
             <Icons type='edit' />
             Add New
           </div>
        </div>
        : <div className='flex items-center w-full'>
         <Loader />
         </div>
        }
      </div>
      {isOpenVerify && (
        <SocialLinkOption isOpen={isOpenVerify}
        onClose={onCloseVerify}/>       
      )}
    </>
  )
}
