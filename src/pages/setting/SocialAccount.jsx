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
    <div className='md:px-16'>
      <div className=''>
        {!socialLinks?.facebook_verified &&
          !socialLinks?.x_verified &&
          !socialLinks?.tiktok_verified &&
          !socialLinks?.instagram_verified && (
            <div className='shadow-lg py-10 px-3 bg-gray-800 rounded-md'>
              Your social account has not been linked yet
            </div>
          )}
        <div className='grid gap-3 w-full justifycenter mt-4 '>
          {socialLinks?.facebook_link && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-800 p-6 font-Manrope'>
              <a
                href={socialLinks?.facebook_link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white flex gap-2'
              >
                <FaFacebook size={24} className='text-blue-600' /> Facebook
              </a>
            </div>
          )}
          {socialLinks?.x_link && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-800 p-6 font-Manrope'>
              <a
                href={socialLinks?.x_link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white flex gap-2'
              >
                <FaTwitter size={24} className='text-blue-400' /> X
              </a>
            </div>
          )}
          {socialLinks?.tiktok_link && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-800 p-6 font-Manrope'>
              <a
                href={socialLinks?.tiktok_link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white flex gap-2'
              >
                <FaTiktok size={24} className='text-black' /> TikTok
              </a>
            </div>
          )}
          {socialLinks?.instagram_link && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-800 p-6 font-Manrope'>
              <a
                href={socialLinks?.instagram_link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white flex gap-2'
              >
                <FaInstagram size={24} className='text-pink-500' /> Instagram
              </a>
            </div>
          )}
          {socialLinks?.google_id && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-400 p-6 font-Manrope'>
              <a
                href={socialLinks?.google_id}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGoogle size={24} className='textpink-500' />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
