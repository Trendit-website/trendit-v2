import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const animals = [
  {
    label: 'Cat',
    value: 'cat',
    description: 'The second most popular pet in the world',
  },
  {
    label: 'Dog',
    value: 'dog',
    description: 'The most popular pet in the world',
  },
  {
    label: 'Elephant',
    value: 'elephant',
    description: 'The largest land animal',
  },
  { label: 'Lion', value: 'lion', description: 'The king of the jungle' },
  { label: 'Tiger', value: 'tiger', description: 'The largest cat species' },
  {
    label: 'Giraffe',
    value: 'giraffe',
    description: 'The tallest land animal',
  },
  {
    label: 'Dolphin',
    value: 'dolphin',
    description: 'A widely distributed and diverse group of aquatic mammals',
  },
  {
    label: 'Penguin',
    value: 'penguin',
    description: 'A group of aquatic flightless birds',
  },
  {
    label: 'Zebra',
    value: 'zebra',
    description: 'A several species of African equids',
  },
  {
    label: 'Shark',
    value: 'shark',
    description:
      'A group of elasmobranch fish characterized by a cartilaginous skeleton',
  },
  {
    label: 'Whale',
    value: 'whale',
    description: 'Diverse group of fully aquatic placental marine mammals',
  },
  {
    label: 'Otter',
    value: 'otter',
    description: 'A carnivorous mammal in the subfamily Lutrinae',
  },
  {
    label: 'Crocodile',
    value: 'crocodile',
    description: 'A large semiaquatic reptile',
  },
]
export const platforms = [
  {
    label: 'Facebook',
    value: 'facebook',
  },
  {
    label: 'WhatsApp',
    value: 'whatsapp',
  },
  {
    label: 'Tiktok',
    value: 'tioktok',
  },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Twitter', value: 'twitter' },
]
export const genders = [
  {
    label: 'Others',
    value: 'others',
  },
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
]

export const days = Array.from({ length: 31 }, (_, i) => i + 1)

export const months = [
  { label: 'January', value: '01' },
  { label: 'February', value: '02' },
  { label: 'March', value: '03' },
  { label: 'April', value: '04' },
  { label: 'May', value: '05' },
  { label: 'June', value: '06' },
  { label: 'July', value: '07' },
  { label: 'August', value: '08' },
  { label: 'September', value: '09' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' },
]

export const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
)

export const generateVideoThumbnail = async (videoFile) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    video.src = URL.createObjectURL(videoFile)
    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0, canvas.width, canvas.height)

      const thumbnailUrl = canvas.toDataURL('image/jpeg')
      resolve(thumbnailUrl)
    })

    video.addEventListener('error', (error) => {
      reject(error)
    })

    video.load()
  })
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
