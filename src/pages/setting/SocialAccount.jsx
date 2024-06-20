import Icons from '../../components/Icon'
import { useGetSocialLinks } from '../../api/verifySocialApi'
import Loader from '../Loader'

export default function SocialAccount() {
  const { data: socialLinks } = useGetSocialLinks()
  const socials = [
    {
      state: socialLinks?.socials?.instagram_verified,
      link: socialLinks?.socials?.instagram_link,
      platform: 'instagram'
    },
    {
      state: socialLinks?.socials?.x_verified,
      link: socialLinks?.socials?.x_link,
      platform: 'twitter'
    },
    {
      state: socialLinks?.socials?.facebook_verified,
      link: socialLinks?.socials?.facebook_link,
      platform: 'facebook'
    },
    {
      state: socialLinks?.socials?.tiktok_verified,
      link: socialLinks?.socials?.tiktok_link,
      platform: 'tik-tok'
    },
  ]
  return (
    <>
      <div className='md:px-16'>
        <div className='text-white text-sm font-bold font-Manrope'>
          Social Media accounts
        </div>
        {
          socialLinks ? 
        <div className='flex flex-col gap-y-4 mt-8'>
          {socials.map((social, index) => (
            <div key={index} className='flex flex-col lg:items-center lg:flex-row justify-between bg-black py-2 px-2'>
              <div className='flex items-center gap-x-2'>
                  <Icons type={social.platform} />                  
                    {social.link != null ? 
                      <a href={social.link} target='_blank'>{social.link}</a> : social.state 
                    }                  
              </div>
              <p className={`flex items-center self-end font-bold gap-x-2 ${social.state === 'pending' && 'text-yellow-400' || social.state === 'approved' && 'text-green-800' || social.state === 'idle' && 'text-[#FF3D00]'}`}>
                {social.state}
                <Icons type='delete' />
              </p>
            </div>
          ))}
        </div>
        : <Loader />
      }
      </div>
    </>
  )
}
