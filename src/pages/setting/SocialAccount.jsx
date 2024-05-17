import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'
import { useGetSocialLinks } from '../../api/verifySocialApi'

export default function SocialAccount() {
  const { data: userDetails } = useGetSocialLinks()
  console.log(userDetails, 'userDetails')
  return (
    <div className='md:px-16'>
      <div className=''>
        {!userDetails?.facebook &&
          !userDetails?.x &&
          !userDetails?.tiktok &&
          !userDetails?.instagram && (
            <div className='shadow-lg py-10 px-3 bg-gray-400 rounded-md'>
              Your social account has not been linked yet
            </div>
          )}
        <div className='grid gap-3 w-full justifycenter mt-4 space-x-4'>
          {userDetails?.facebook && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-400 p-6 font-Manrope'>
              <a
                href={userDetails?.facebook}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook size={24} className='text-blue-600' />
              </a>
            </div>
          )}
          {userDetails?.x && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-400 p-6 font-Manrope'>
              <a
                href={userDetails?.x}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter size={24} className='text-blue-400' />
              </a>
            </div>
          )}
          {userDetails?.tiktok && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-400 p-6 font-Manrope'>
              <a
                href={userDetails?.tiktok}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTiktok size={24} className='text-black' />
              </a>
            </div>
          )}
          {userDetails?.instagram && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-400 p-6 font-Manrope'>
              <a
                href={userDetails?.instagram}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram size={24} className='text-pink-500' />
              </a>
            </div>
          )}
          {userDetails?.google_id && (
            <div className='w-full rounded overflow-hidden shadow-lg bg-gray-400 p-6 font-Manrope'>
              <a
                href={userDetails?.google_id}
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
