import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'
import { useGetSocialLinks } from '../../api/verifySocialApi'

export default function SocialAccount() {
  const { data: socialLinks } = useGetSocialLinks()
  return (
    <>
      <div className='md:px-16'>
        <div className='text-white text-sm font-bold font-Manrope'>
          Social Media accounts
        </div>
        <div className=''>
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
        </div>
      </div>
    </>
  )
}
