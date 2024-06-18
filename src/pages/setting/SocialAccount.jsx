import Icons from '../../components/Icon'
import { useGetSocialLinks } from '../../api/verifySocialApi'

export default function SocialAccount() {
  const { data: socialLinks } = useGetSocialLinks()
  console.log(socialLinks)
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
        {/* <div className=''>
          {!socialLinks?.facebook_verified &&
            !socialLinks?.x_verified &&
            !socialLinks?.tiktok_verified &&
            !socialLinks?.instagram_verified && (
              <div className='shadow-lg py-10 px-3  font-Manrope dark:bg-black rounded-md'>
                Your social account has not been linked yet
              </div>
            )}
          <div className='grid gap-3 w-full justifycenter mt-4 '>
            {socialLinks?.facebook_link && (
              <div className='w-full rounded flex justify-between overflow-hidden shadow-lg dark:bg-black p-3 font-Manrope'>
                <a
                  href={socialLinks?.facebook_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' flex gap-2'
                >
                  <FaFacebook size={24} className='text-blue-600' /> Facebook
                </a>
                <p
                  className={`${
                    socialLinks?.facebook_verified === 'verified'
                      ? 'text-green-500'
                      : socialLinks?.facebook_verified === 'pending'
                      ? 'text-orange-500'
                      : socialLinks?.facebook_verified === 'rejected'
                      ? 'text-red-500'
                      : socialLinks?.facebook_verified === 'idle'
                      ? 'text-gray-500'
                      : ''
                  } capitalize`}
                >
                  {socialLinks?.facebook_verified}
                </p>
              </div>
            )}
            {socialLinks?.x_link && (
              <div className='w-full rounded flex justify-between overflow-hidden shadow-lg dark:bg-black p-3 font-Manrope'>
                <a
                  href={socialLinks?.x_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' flex gap-2'
                >
                  <FaTwitter size={24} className='text-blue-400' /> X
                </a>
                <p
                  className={`${
                    socialLinks?.x_verified === 'verified'
                      ? 'text-green-500'
                      : socialLinks?.x_verified === 'pending'
                      ? 'text-orange-500'
                      : socialLinks?.x_verified === 'rejected'
                      ? 'text-red-500'
                      : socialLinks?.x_verified === 'idle'
                      ? 'text-gray-500'
                      : ''
                  } capitalize`}
                >
                  {socialLinks?.x_verified}
                </p>
              </div>
            )}
            {socialLinks?.tiktok_link && (
              <div className='w-full rounded flex justify-between overflow-hidden shadow-lg dark:bg-black p-3 font-Manrope'>
                <a
                  href={socialLinks?.tiktok_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' flex gap-2'
                >
                  <FaTiktok size={24} className='text-black' /> TikTok
                </a>
                <p
                  className={`${
                    socialLinks?.tiktok_verified === 'verified'
                      ? 'text-green-500'
                      : socialLinks?.tiktok_verified === 'pending'
                      ? 'text-orange-500'
                      : socialLinks?.tiktok_verified === 'rejected'
                      ? 'text-red-500'
                      : socialLinks?.tiktok_verified === 'idle'
                      ? 'text-gray-500'
                      : ''
                  } capitalize`}
                >
                  {socialLinks?.tiktok_verified}
                </p>
              </div>
            )}
            {socialLinks?.instagram_link && (
              <div className='w-full rounded flex justify-between overflow-hidden shadow-lg dark:bg-black p-3 font-Manrope'>
                <a
                  href={socialLinks?.instagram_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' flex gap-2'
                >
                  <FaInstagram size={24} className='text-pink-500' /> Instagram
                </a>
                <p
                  className={`${
                    socialLinks?.instagram_verified === 'verified'
                      ? 'text-green-500'
                      : socialLinks?.instagram_verified === 'pending'
                      ? 'text-orange-500'
                      : socialLinks?.instagram_verified === 'rejected'
                      ? 'text-red-500'
                      : socialLinks?.instagram_verified === 'idle'
                      ? 'text-gray-500'
                      : ''
                  } capitalize`}
                >
                  {socialLinks?.instagram_verified}
                </p>
              </div>
            )}
            {socialLinks?.google_id && (
              <div className='w-full rounded flex justify-between overflow-hidden shadow-lg dark:bg-black p-3 font-Manrope'>
                <a
                  href={socialLinks?.google_id}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGoogle size={24} className='textpink-500' />
                </a>
                <p
                  className={`${
                    socialLinks?.google_id === 'verified'
                      ? 'text-green-500'
                      : socialLinks?.google_id === 'pending'
                      ? 'text-orange-500'
                      : socialLinks?.google_id === 'rejected'
                      ? 'text-red-500'
                      : socialLinks?.google_id === 'idle'
                      ? 'text-gray-500'
                      : ''
                  }capitalize`}
                >
                  {socialLinks?.google_id}
                </p>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </>
  )
}
