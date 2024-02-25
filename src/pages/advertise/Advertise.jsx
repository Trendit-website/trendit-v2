import { Button } from '@nextui-org/button'
import { ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Tab, Tabs } from '@nextui-org/tabs'
import { useState } from 'react'
// import { Chip } from '@nextui-org/chip'
import AdvertiseTaskCard from './AdvertiseTaskCard'
import EngagementTaskCard from './EngagementTaskCard'

export default function Advertise() {
  const [selected, setSelected] = useState('advert task')

  return (
    <div>
      <div className='w-full p-3 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='self-stretch  pb-6 flex-col justify-start items-center gap-6 flex'>
          <div className=' justify-center items-center inline-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='159'
              height='138'
              viewBox='0 0 159 138'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M82.1268 10.0142C81.4308 11.8561 80.7353 13.6983 80.0393 15.5403C79.5931 16.7207 79.1474 17.9009 78.7014 19.0813C78.5431 19.4998 78.4552 19.9291 78.1494 20.2196C77.4284 20.9037 76.1344 21.3391 75.268 21.8203C74.6875 22.1428 74.1069 22.4653 73.5265 22.7878C73.2272 22.9542 72.5635 23.1631 72.3537 23.4393C72.123 23.7435 72.2321 24.3024 72.2321 24.7231V28.3558V35.2008C75.2304 34.8259 78.229 34.4512 81.2273 34.0764C77.2325 38.6857 73.238 43.2949 69.2432 47.9043C68.2586 49.0402 67.0634 50.1335 66.3298 51.4552C64.7687 54.2684 63.2427 57.1019 61.6995 59.9251C60.263 62.5528 58.8265 65.1808 57.3899 67.8085L70.3136 67.2584C73.6596 67.1161 77.0969 67.3302 80.3208 66.3819C82.9785 65.6002 85.6359 64.8187 88.2935 64.037C88.647 63.9329 89.7481 63.8153 89.9986 63.5308C90.2331 63.2643 90.2282 62.2575 90.2945 61.9166C91.5489 55.4693 93.1458 48.3644 96.8068 42.8146C99.4316 38.8362 102.974 35.353 106.217 31.8838C107.483 30.5298 108.771 29.1919 109.993 27.7968C110.305 27.4394 110.757 27.034 110.964 26.6C111.098 26.3195 111.284 25.7852 111.201 25.5363C111.165 25.4283 110.331 25.0411 110.211 24.9642C109.365 24.4206 108.527 23.8656 107.687 23.3133C105.326 21.7612 102.967 20.2052 100.593 18.6738C98.7422 17.4797 96.8963 16.2136 94.9439 15.1875C92.9202 14.1238 90.6914 13.3752 88.5697 12.5348C86.4257 11.6854 84.2776 10.8458 82.1268 10.0142Z'
                fill='#1E1E1E'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M154.897 108.419C153.868 109.389 151.993 110.691 150.511 110.099C149.766 109.801 149.131 109.149 148.453 108.728C147.656 108.233 146.907 107.738 146.232 107.079C144.885 105.763 143.865 103.84 142.273 102.81C141.739 102.464 140.695 102.389 140.324 101.836C140.157 101.588 140.142 101.212 140.172 100.925C140.239 100.308 140.573 100.344 140.015 99.8909H140.881C140.898 99.5565 140.564 99.5288 140.315 99.572C140.431 99.0419 140.548 96.9679 139.582 97.9079C138.745 98.7226 139.164 100.074 138.571 100.957C138.117 101.633 136.912 101.085 136.749 100.342C136.676 100.008 137.044 99.4865 137.088 99.1591C137.184 98.433 136.86 97.8051 136.389 97.2553C135.356 97.9436 135.942 99.3682 135.353 100.273C134.82 101.091 133.634 100.709 132.822 100.565C131.85 100.393 130.751 100.567 129.82 100.338C128.415 99.9909 128.94 98.3417 128.801 97.2771C128.652 96.1367 127.5 94.554 127.846 93.4035C128.218 92.1682 130.392 91.9013 131.432 91.6015C133.807 90.9163 137.195 90.7845 138.961 88.8663C140.366 90.4328 141.496 92.2265 142.969 93.7345C144.56 95.3633 146.26 96.8671 147.787 98.5616C149.377 100.325 151.018 102.055 152.551 103.869C153.219 104.661 153.806 105.514 154.498 106.286C155.112 106.973 155.761 107.605 154.897 108.419ZM84.2927 77.9533C85.0227 77.5651 85.1156 77.8085 85.1153 78.6079C84.9053 78.224 84.6968 78.1213 84.2927 77.9533ZM78.104 93.4939V92.0848C78.8076 92.0664 78.375 93.2717 78.104 93.4939ZM77.932 95.5925C77.932 94.9685 77.9151 94.3743 78.095 93.7674C78.1894 94.4287 78.3698 95.0013 77.932 95.5925ZM80.9575 138.46C81.6038 138.52 82.5998 138.075 83.1433 138.582C83.7017 139.103 83.657 140.62 83.7892 141.324C84.0078 142.487 84.2014 143.654 84.3856 144.823C84.5063 145.589 84.6557 146.368 83.7892 146.661C82.5087 147.094 80.6791 146.476 79.3444 146.42C76.7079 146.309 74.0725 146.155 71.4338 146.101C68.8762 146.049 66.3128 146.09 63.7669 146.356C62.6169 146.476 61.4923 146.689 60.3539 146.881C59.7539 146.982 58.1463 147.406 57.6043 146.9C56.5847 145.948 58.2798 143.725 59.0089 143.097C60.362 141.932 62.2863 141.092 63.983 140.586C64.8898 140.315 66.4014 139.556 67.1156 140.405C67.6637 141.057 67.6419 141.927 68.4271 142.42C70.2467 143.564 69.1821 140.283 68.0451 139.879C68.8085 138.092 70.2637 140.615 70.8673 141.221C71.0821 141.437 71.7806 142.148 72.0839 141.79C72.3111 141.523 71.8575 140.564 71.7734 140.303C71.6456 139.907 71.3225 139.304 71.4154 138.874C71.5836 138.097 72.6742 137.885 73.3275 137.82C74.3406 137.72 75.3344 138.041 76.336 138.148C77.8719 138.313 79.4198 138.315 80.9575 138.46ZM70.7857 65.2136C68.7858 65.3728 66.7734 65.0669 64.7782 65.3172C62.8906 65.5543 61.1118 66.2473 59.3323 66.884C61.9778 60.6793 65.4005 55.031 69.5722 49.7397C71.6497 47.1044 73.8841 44.4872 76.1289 41.993C77.1734 40.8326 78.2538 39.7107 79.3323 38.5829C80.2943 37.5768 80.9836 35.8682 82.1381 35.1168C83.1236 34.4755 84.8457 34.9329 85.9377 34.9727C87.1721 35.0177 88.6743 35.1299 89.8781 34.719C90.7504 34.4213 90.9903 33.6268 89.8983 33.6005C88.6104 33.5692 87.3437 33.7035 86.0389 33.5827C82.6583 33.2703 79.3995 32.7569 75.9915 33.0482C75.2107 33.1147 74.183 33.4473 73.4168 33.3475C72.8658 33.2753 73.2281 33.5523 72.8452 33.1102C72.6985 32.9411 72.5218 32.5435 72.4784 32.3189C72.2344 31.0571 72.9272 29.254 73.093 27.9836C73.2463 26.8079 73.1105 25.5158 73.3975 24.3709C73.6588 23.329 74.4553 23.1901 75.4362 23.0787C78.1197 22.774 80.8583 22.6119 83.554 22.3823C89.7058 21.8583 96.0531 21.0679 102.163 22.3627C104.369 22.8303 107.06 23.5532 109.031 24.7109C109.647 25.0728 110.269 25.4989 110.045 26.2487C109.812 27.027 108.672 27.8491 108.107 28.3619C103.934 32.1507 99.9026 36.0152 96.9708 40.8767C93.232 47.076 91.0864 53.7714 89.8275 60.8752C89.5567 62.4034 89.3053 63.2033 87.7329 63.6432C86.045 64.1157 84.4157 64.4227 82.6655 64.5664C78.7089 64.8913 74.7402 64.898 70.7857 65.2136ZM72.1258 24.1593C71.8226 26.416 71.4122 28.6677 71.3717 30.9422C71.3564 31.8012 71.275 32.2316 70.3616 32.4232C69.2846 32.649 68.1897 32.8172 67.1078 33.0515C61.8863 34.1831 56.7635 35.5729 51.6551 37.1372C46.6904 38.6578 41.8073 40.3685 36.7311 41.4949C34.5475 41.9795 31.9924 42.3061 30.0035 43.379C27.864 44.5335 28.1456 46.4263 27.9535 48.5054C27.6969 51.2831 26.8732 53.9727 26.5835 56.7493C26.445 58.0761 26.3189 59.4107 26.3398 60.7459C26.3575 61.884 26.5206 63.1424 25.7555 64.1002C24.2207 62.0484 23.4932 59.4676 23.1908 56.9528C23.0437 55.7303 23.1019 54.498 23.0599 53.2699C23.0259 52.2811 23.048 50.7083 22.4039 49.8825C21.0038 48.088 19.1829 55.2797 19.0098 56.0476C18.7186 57.3403 18.4784 58.6437 18.1883 59.9365C18.0597 60.5095 17.8946 62.5926 17.1269 62.8001C15.5358 63.2306 15.8851 58.7597 15.8599 58.079C15.8095 56.705 15.7753 55.3294 15.8075 53.9542C15.8309 52.9616 16.0229 51.8844 15.9089 50.8913C15.6289 48.453 14.2578 51.022 13.8724 51.9296C12.8984 54.2209 12.4579 56.6735 11.5844 59.0014C11.4392 59.3887 11.0978 60.6923 10.557 60.7166C9.95517 60.7434 9.9599 59.397 9.92549 59.0037C9.7258 56.7236 9.05138 54.4595 9.25489 52.1559C9.46044 49.8297 10.2759 47.4383 11.4297 45.415C13.8692 41.1374 18.2746 38.6812 22.4943 36.4439C27.3234 33.8838 32.4217 31.8612 37.6288 30.2135C43.8913 28.2319 50.3215 26.6285 56.7905 25.4874C60.0816 24.907 63.4235 24.4919 66.7484 24.1591C67.9169 24.0421 69.0858 23.9738 70.2392 23.7514C70.6746 23.6673 72.2454 23.2676 72.1258 24.1593ZM75.4898 16.8563C73.8398 16.8693 72.1543 16.0694 70.5469 15.7389C68.6331 15.3449 66.7642 14.7748 64.8538 14.3635C61.1129 13.5582 57.37 12.7729 53.6325 11.9498C52.0099 11.5925 50.3795 11.2815 48.7633 10.8977C47.0342 10.4871 45.1661 10.0292 43.3963 10.4715C40.7137 11.1421 39.5805 14.077 38.5956 16.3674C37.8998 17.9852 37.3547 19.7885 36.2696 21.1963C35.8833 21.6982 35.3341 22.2968 34.6336 22.1342C33.3322 21.8325 33.5389 20.1103 33.7046 19.1584C33.9448 17.777 34.285 16.4117 34.5574 15.0366C34.6671 14.4815 35.5176 10.8491 33.9992 11.4115C32.8728 11.8286 32.2769 14.5762 31.8505 15.5576C31.5336 16.2869 31.1979 17.0115 30.8423 17.7228C30.3678 18.6715 29.0141 21.8417 27.5152 21.4328C25.3703 20.8477 27.4277 15.2088 27.7932 14.0203C27.9938 13.3679 30.174 8.4204 28.3338 8.82473C27.5501 8.99722 26.7866 10.4529 26.387 11.0562C25.6784 12.1264 24.972 13.2042 24.3051 14.3007C23.6189 15.4285 23.2686 16.7121 22.5881 17.8235C22.2301 18.4084 21.4994 19.1879 20.7861 18.6463C19.6741 17.8028 20.3332 14.8686 20.528 13.759C20.8902 11.6962 21.7902 9.58146 23.025 7.89507C24.8805 5.36112 28.3817 4.54232 31.3258 4.05006C35.1261 3.41455 38.9792 3.58838 42.7954 3.96438C47.0873 4.38738 51.3137 4.84029 55.5442 5.70518C59.8077 6.57682 64.0734 7.44149 68.2713 8.59423C70.2489 9.13732 72.2548 9.61879 74.2043 10.2563C76.2768 10.9339 78.2994 11.7771 80.4297 12.2653C79.6804 14.1352 78.9309 16.0051 78.1816 17.8752C77.4644 17.1657 76.4855 16.8482 75.4898 16.8563ZM112.218 22.009C112.875 21.6496 113.601 21.4801 113.841 20.6858C114.053 19.9839 113.691 19.1888 113.517 18.515C113.033 16.6287 112.905 14.6747 113.334 12.7662C113.744 13.3915 115.277 15.7971 116.21 14.3408C116.773 13.4624 115.265 12.1988 114.825 11.5813C115.791 10.9854 117.17 9.38604 118.283 10.3506C119.002 10.9741 119.306 11.5745 120.275 11.8776C121.452 12.2458 122.559 12.1614 123.761 12.0598C124.602 11.9887 124.804 11.8765 125.133 12.5242C125.391 13.0333 125.524 13.6634 125.675 14.2101C125.972 15.288 126.659 17.4117 125.845 18.4215C125.132 19.3059 122.365 18.5476 121.98 19.6893C121.771 20.312 122.771 20.3343 123.153 20.6424C123.627 21.0238 124.018 21.6307 124.275 22.1729C124.466 22.5739 124.756 23.2364 124.431 23.6463C123.983 24.2135 123.153 23.7833 122.792 23.3711C122.312 22.8235 122.157 22.0749 121.757 21.4785C121.023 20.3842 120.979 21.2547 120.779 22.0405C120.571 22.8568 120.08 22.8006 119.328 22.9054C118.008 23.0895 116.674 23.3493 115.389 23.703C114.731 23.8843 114.093 24.1152 113.466 24.3851C113.062 24.5587 112.361 25.0847 111.922 25.0896C111.11 25.0989 110.547 23.7399 110.127 23.173C110.824 22.7842 111.518 22.3917 112.218 22.009ZM155.851 105.22C153.822 102.784 152.065 100.138 150.063 97.6805C148.088 95.257 145.803 93.1379 143.587 90.9429C142.541 89.9068 141.539 88.7703 140.385 87.8523C139.523 87.1673 138.861 87.1568 137.825 87.4601C134.881 88.3223 131.883 89.3602 129.098 90.6467C126.504 91.8449 124.141 93.3833 121.327 94.0514C118.456 94.7335 115.47 94.9525 112.527 94.7834C109.508 94.61 106.661 93.9819 103.79 93.0588C101.072 92.1844 98.2367 91.421 95.9114 89.688C93.4737 87.8714 91.5903 85.2585 89.8453 82.801C88.9617 81.557 88.0847 80.2505 87.4894 78.8404C86.9728 77.6169 86.6353 76.1727 85.7083 75.1753C85.481 75.4976 85.1981 75.774 85.0825 76.1524C85.0299 76.3245 85.3398 76.3191 85.3081 76.4558C85.248 76.7133 84.9053 76.976 84.706 77.1161C83.9902 77.6198 83.986 77.2188 84.1738 78.1609C84.2831 78.71 84.0762 79.9489 83.1807 79.5441C83.5104 79.9388 82.9866 80.4369 82.8155 80.7621C82.6979 80.6269 82.5515 80.5799 82.3765 80.6206C82.7039 81.2728 82.5105 81.2901 82.1932 81.808C82.1352 81.9026 81.9299 82.3981 81.9594 82.3562C81.6351 82.8181 81.2604 82.9344 81.0713 83.5097C80.9159 83.9821 80.9557 84.5016 80.7826 84.9734C80.5732 84.684 80.3638 84.3946 80.1545 84.1054C80.1972 84.3329 80.2826 84.6698 80.382 84.8763C80.4446 85.0053 80.7126 85.3067 80.709 85.3771C80.6944 85.6402 80.3661 85.577 80.2725 85.8039C80.0969 86.2296 80.3508 86.2923 80.255 86.7077C80.1452 87.1844 79.8506 86.9937 79.7105 87.4001C79.684 87.4772 79.8909 87.7808 79.8581 87.9472C79.812 88.1824 79.5988 88.314 79.5234 88.5231C79.3318 89.0552 79.4016 89.4447 79.1355 89.955C79.0325 90.1529 78.8825 90.2846 78.8099 90.5095C78.7463 90.7074 78.8832 91.1286 78.7604 91.3058C78.1672 92.1601 78.2506 90.6885 78.2956 90.3235C78.6732 87.2591 79.8846 84.0964 80.9933 81.2321C81.5442 79.809 82.0806 78.3414 82.7712 76.9784C83.0491 76.4295 83.37 75.863 83.8295 75.4432C84.4106 74.912 85.235 74.6995 85.7612 74.1063C85.6782 74.1998 86.3317 73.5814 86.2271 73.7847C86.3207 73.603 86.1574 73.3569 86.2155 73.1811C86.2876 72.9627 86.4241 72.9169 86.5762 72.7257C86.8494 72.3825 87.1739 72.2116 86.7448 71.7745C87.3817 71.6337 87.6862 71.427 87.8135 70.745C87.9063 70.2459 87.7188 70.2785 88.0462 69.946C88.3748 69.6118 88.5412 69.8726 88.7483 69.294C88.9959 68.6016 89.1603 67.66 89.3087 66.9355C89.4382 66.3029 89.1238 65.3726 89.657 64.9259C90.3324 64.3604 90.9366 64.5999 90.8156 63.4624C90.6975 62.3535 91.0421 61.6818 91.3884 60.6325C92.0794 58.5377 92.3466 56.326 92.9524 54.2063C94.2457 49.6826 96.5303 45.6039 98.9869 41.622C101.257 37.9425 104.43 34.8076 107.495 31.7886C108.334 30.9617 109.164 30.1229 109.917 29.2164C110.566 28.4359 110.862 27.3731 111.486 26.6321C111.865 26.1821 112.571 25.9896 113.1 25.751C113.982 25.353 115.034 24.8337 116.03 24.9142C115.634 26.2484 115.505 27.8075 116.673 28.808C118.09 30.0217 119.374 28.7608 120.673 28.0689C123.041 26.8075 126.427 27.9654 128.491 26.0748C128.983 25.6246 129.12 24.9052 129.631 24.4847C130.006 24.1764 130.54 24.0981 130.962 23.8683C132.245 23.17 132.868 21.8918 132.368 20.4798C131.912 19.189 131.202 18.7412 132.781 18.0871C134.063 17.5563 134.55 16.7567 133.97 15.3329C133.417 13.9756 132.404 13.8193 131.445 12.931C130.516 12.0706 131.583 11.0693 132.279 10.4234C133.176 9.59023 133.348 8.83935 132.307 7.97288C131.218 7.06571 129.663 7.09742 128.393 7.54606C126.957 8.05317 126.011 8.89625 125.403 10.2624C124.784 11.6532 123.25 11.2651 122.008 10.8774C120.82 10.5068 120.511 9.70717 119.731 8.8461C118.863 7.88833 117.095 8.70735 116.072 9.14496C113.551 10.2221 111.047 11.9222 110.947 14.9336C110.887 16.7292 111.646 18.2555 112.041 19.941C112.402 21.4823 109.926 21.3609 109.497 22.8518C104.923 20.4303 99.8288 19.6893 94.7155 19.5245C89.2808 19.3491 83.7678 19.2085 78.3795 20.0658C79.6303 17.8867 80.2907 15.4971 81.3789 13.2584C81.6922 12.6139 81.8271 12.669 82.5184 12.8638C83.8463 13.2377 85.1644 13.6562 86.4896 14.0415C91.3308 15.4488 96.0769 17.1444 100.758 19.0014C101.213 19.182 102.229 19.6833 102.627 19.1382C103.088 18.5096 102.023 17.7347 101.592 17.4185C99.7074 16.0357 97.3716 15.1964 95.2606 14.2263C90.6454 12.1059 85.5347 11.0994 80.7191 9.52456C70.3231 6.12414 59.568 3.5416 48.7642 1.83588C46.1277 1.41963 43.4631 1.35869 40.8151 1.0497C38.4696 0.776018 36.1199 0.782315 33.7746 1.06499C29.4429 1.58739 24.4211 2.71449 21.9746 6.67959C19.7661 10.2597 18.2917 14.2848 18.8553 18.5314C19.0246 19.807 19.5648 21.3175 21.1387 20.9887C22.2305 20.7607 22.8103 19.833 23.3171 18.9277C24.0831 17.5599 24.8396 16.1922 25.6696 14.8611C25.9775 16.857 24.8587 18.8195 25.0346 20.8526C25.1542 22.2323 25.9166 24.4121 27.7077 24.0214C30.1628 23.4862 31.1731 19.6509 32.3535 17.8109C32.4134 19.2281 31.9166 20.6248 32.0686 22.0452C32.2186 23.4482 33.3149 24.7728 34.8547 24.5805C36.3069 24.3992 37.2508 22.8433 37.8676 21.6719C38.726 20.0417 39.3426 18.294 40.181 16.653C40.9667 15.1148 41.8975 13.2836 43.7734 12.9946C45.4477 12.7365 47.3664 13.334 49.0201 13.5804C53.6075 14.2641 58.1024 15.4281 62.6396 16.3685C67.5045 17.3767 72.4842 17.989 77.1991 19.6158C75.5413 21.8723 71.2028 21.3847 68.7332 21.6269C65.0011 21.993 61.2211 22.2685 57.5101 22.8087C53.845 23.3421 50.2565 24.2891 46.62 24.9765C43.0026 25.6604 39.3914 26.3454 35.8911 27.5116C29.3923 29.677 22.7851 32.4174 17.0592 36.1956C14.395 37.9537 12.0284 39.963 10.3827 42.7381C8.72642 45.5304 7.93057 48.688 7.62698 51.8999C7.43808 53.9 7.75899 55.6309 8.14646 57.5775C8.42711 58.9868 8.51796 61.3465 9.64799 62.3785C11.8048 64.3482 13.5955 56.3587 13.9938 55.3937C14.2805 56.975 13.8117 65.8839 17.2724 65.1594C18.8168 64.8362 19.1672 62.7163 19.4233 61.4394C19.8906 59.1116 20.3091 56.7371 21.1084 54.4953C21.6213 57.5159 21.8352 60.6629 22.9402 63.5479C23.6743 65.4639 25.7686 68.8636 27.2287 65.5835C28.3239 63.1235 27.9481 60.3001 28.0795 57.6884C28.225 54.7942 29.0559 52.0025 29.35 49.1366C29.464 48.0264 29.3608 46.7751 30.4765 46.1693C31.4342 45.6494 32.8348 45.48 33.8805 45.1897C36.9778 44.3298 40.0953 43.5393 43.178 42.627C46.262 41.714 49.3033 40.6473 52.3461 39.6064C55.2563 38.6108 58.2277 38.0448 61.1732 37.1923C62.8479 36.7074 64.5023 36.2003 66.2004 35.7955C66.9906 35.6073 67.7905 35.4607 68.5789 35.2657C69.1634 35.1213 69.9334 34.5765 70.5343 34.5861C71.1527 34.5962 71.3852 35.1198 72.0943 35.1609C72.8577 35.205 73.634 35.0366 74.3932 34.9783C76.2429 34.8364 78.209 34.607 80.0544 34.8634C78.9453 36.179 77.4473 37.0884 76.1345 38.1782C74.6204 39.435 73.155 40.7922 71.8617 42.2764C69.2594 45.2628 66.7999 48.4195 64.5149 51.6548C62.2609 54.8465 60.4461 58.3392 58.8684 61.9076C58.0822 63.6857 57.3189 65.5028 56.7758 67.3717C56.5528 68.1395 56.3706 68.9101 55.9678 69.6084C55.5984 70.2489 55.0778 70.8009 55.5145 71.5743C55.8151 71.3861 56.0852 71.1522 56.3571 70.9262C56.0429 73.1393 55.3649 75.2801 55.0164 77.4864C54.6727 79.6601 54.6867 81.8957 54.709 84.091C54.7557 88.6884 55.0976 93.1818 56.0301 97.6913C56.9733 102.251 58.1849 106.777 59.7128 111.175C61.1835 115.411 62.6594 119.852 64.7123 123.844C66.9049 128.108 69.5133 132.591 72.6871 136.2C70.6139 137.049 67.9756 136.89 65.7803 137.232C63.4856 137.59 61.5006 138.265 59.545 139.534C57.5665 140.819 56.4925 142.474 56.219 144.816C56.0247 146.484 55.4475 148.793 57.6351 149.231C59.2086 149.546 60.9676 149.028 62.5443 148.9C65.3022 148.677 68.0642 148.537 70.8282 148.417C73.585 148.296 76.3425 148.19 79.1002 148.105C80.3973 148.065 81.6951 148.044 82.9918 147.998C83.5729 147.977 83.9253 147.968 84.4463 148.136C84.8583 148.269 84.8282 148.545 85.2869 148.204C86.0268 147.654 85.8745 145.919 85.8538 145.156C85.8223 143.979 85.7108 142.788 85.4812 141.633C85.3449 140.947 83.6907 136.522 84.977 136.336C83.4827 134.694 82.8859 132.349 82.2146 130.291C81.3735 127.713 80.6353 125.141 80.0557 122.489C78.8178 116.824 78.2706 111.098 78.2706 105.301C84.0091 108.838 90.0807 110.754 96.8397 110.968C103.56 111.181 110.942 110.629 117.323 108.393C120.278 107.358 122.925 105.998 125.459 104.167C126.367 103.51 127.339 102.023 128.531 102.049C129.954 102.079 131.547 102.618 132.959 102.848C135.66 103.288 139.186 103.537 141.473 105.208C142.715 106.115 143.606 107.385 144.714 108.431C145.557 109.227 146.673 109.659 147.51 110.454C148.413 111.313 148.054 112.434 149.552 112.504C150.832 112.563 152.235 112.048 153.339 111.443C155.542 110.237 157.887 107.663 155.851 105.22Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M134.682 47.8557C137.905 50.1452 141.602 51.7093 144.97 53.7712C145.813 54.2873 148.44 55.3589 148.415 56.3162C148.4 56.8759 147.61 57.5778 147.265 57.9657C146.673 58.6302 146.116 59.3017 145.569 60.0047C143.068 63.2238 140.713 66.4734 138.002 69.5308C137.594 69.9907 136.364 72.1867 135.967 71.096C135.788 70.6015 135.936 70.0458 135.467 69.5848C135.226 69.3473 134.293 69.2165 134.565 68.7071C134.746 68.7885 134.927 68.8701 135.108 68.9513C134.967 68.5443 134.978 68.0984 134.767 67.7136C134.636 67.4745 134.38 67.3614 134.291 67.0922C134.168 66.7203 134.376 66.2881 134.341 65.9046C134.307 65.5223 134.109 65.161 133.991 64.8003C133.289 62.6621 133.037 60.5066 132.678 58.3005C132.323 56.1176 131.77 54.003 131.552 51.7958C131.323 49.4645 131.041 47.1379 130.666 44.8252C131.336 44.9192 131.851 45.6471 132.325 46.0587C133.07 46.7054 133.878 47.285 134.682 47.8557ZM132.155 70.4263C132.001 70.3056 131.881 70.1571 131.794 69.9813C133.374 69.1987 132.421 70.5338 132.155 70.4263ZM131.194 68.7573C130.506 68.9471 130.011 68.9855 129.48 68.7022C129.43 68.6754 129.488 68.4683 129.397 68.4258C129.318 68.3889 129.196 68.4346 129.128 68.3999C128.897 68.2823 128.492 68.54 128.453 68.0898C129.332 67.8209 130.196 67.3245 131.124 67.2409C132.413 67.1249 132.354 68.4375 131.194 68.7573ZM128.177 66.1621C127.238 66.3818 126.464 66.895 125.466 66.761C124.528 66.6355 123.714 66.1495 122.975 65.5896C124.824 65.0661 126.763 64.9716 128.611 64.4652C129.212 64.3003 130.003 63.8656 130.651 64.0408C131.372 64.2356 131.417 64.9102 131.633 65.5241C130.48 65.7315 129.319 65.8954 128.177 66.1621ZM122.301 63.5571C121.398 63.7728 120.476 64.2444 119.721 63.4305C119.599 63.2992 119.492 63.4303 119.507 63.0257C119.522 62.5991 119.909 62.3243 120.242 62.1741C121.025 61.821 122.123 62.0493 122.954 61.9973C124.281 61.9148 125.631 61.6391 126.943 61.4268C127.852 61.28 128.79 60.9539 129.719 61.0182C130.436 61.0679 131.301 61.6789 130.256 62.1246C129.304 62.5308 127.878 62.4685 126.847 62.6443C125.323 62.9043 123.805 63.1978 122.301 63.5571ZM121.419 59.3105C121.478 59.3701 121.536 59.4296 121.595 59.4892C121.585 59.487 121.941 59.1989 122.035 59.1906C122.493 59.1508 122.953 59.1823 123.411 59.1564C124.467 59.0968 125.532 58.9129 126.569 58.7103C127.414 58.5452 128.274 58.2607 129.144 58.332C129.897 58.3936 129.976 58.5479 130.025 59.2745C128.103 59.2745 126.124 59.234 124.235 59.6408C123.005 59.9055 121.65 60.6939 121.034 59.2727C121.163 59.2853 121.291 59.2979 121.419 59.3105ZM122.621 56.2343C123.097 56.5973 124.396 55.9937 124.968 55.9334C125.588 55.8678 126.171 55.7996 126.773 55.6451C127.305 55.508 129.069 54.823 129.478 55.478C130.104 56.4817 127.567 56.6659 127.164 56.7156C125.477 56.924 123.726 57.1089 122.084 57.5514C122.263 57.1125 122.442 56.6735 122.621 56.2343ZM124.935 52.8253C125.058 53.2893 128.874 51.5797 128.944 52.8222C128.997 53.7755 125.168 54.2504 124.48 54.1668C124.641 53.7278 125.07 53.3347 124.935 52.8253ZM126.216 49.9093C126.298 48.9736 126.423 48.979 127.173 48.8908C127.746 48.8236 128.532 48.4881 128.384 49.5081C128.256 50.3816 126.135 50.8536 126.216 49.9093ZM127.58 46.6897C127.761 46.1873 128.167 46.8635 128.176 47.119C128.198 47.7988 127.683 47.6517 127.187 47.6517C127.325 47.3342 127.456 47.0131 127.58 46.6897ZM133.861 42.9187C133.759 42.7968 133.191 42.7502 133.03 42.6911C132.632 42.5454 132.688 42.2348 132.18 42.5411C132.154 42.5155 132.203 42.2852 132.175 42.2746C132.161 42.2692 131.805 42.1347 131.689 42.0605C131.409 41.8815 131.157 41.7063 130.901 41.4817C130.628 41.2431 130.354 40.8968 130.042 40.7067C129.911 40.6267 129.803 40.5131 129.645 40.4886C129.233 40.4252 129.351 40.7117 128.992 40.7686C128.77 40.8037 128.609 40.545 128.319 40.6566C128.069 40.7528 127.924 41.1039 127.812 41.3128C127.407 42.0731 127.094 42.8915 126.697 43.6599C124.667 47.5892 122.36 51.3695 120.394 55.3355C119.447 57.2461 118.459 59.1699 117.792 61.2004C117.312 62.6648 116.227 64.8041 117.16 66.2674C117.839 67.3313 119.199 67.7907 120.283 68.3048C121.915 69.0784 123.42 70.0895 125.069 70.8394C127.037 71.7338 128.948 72.6693 130.865 73.668C131.683 74.0939 132.421 74.7074 133.236 75.1108C133.735 75.3575 134.505 74.9365 134.667 75.5021C135.292 74.7452 136.304 75.2498 137.027 74.7168C137.452 74.4033 137.763 73.7858 138.118 73.3997C138.65 72.8209 139.227 72.2838 139.77 71.7151C141.925 69.4562 143.914 67.1035 145.874 64.6772C147.747 62.3603 149.934 60.1713 151.516 57.6351C152.144 56.6283 152.258 55.5725 151.843 54.4602C151.54 53.6489 150.811 52.4237 149.77 52.9609C150.165 52.3052 148.642 51.6049 148.179 51.4767C148.172 51.4749 148.081 51.9787 147.952 51.9661C147.998 51.9706 147.565 50.85 147.375 50.7063C146.81 50.2788 146.123 49.78 145.506 49.4281C144.941 49.1054 144.344 48.9455 143.797 48.5843C143.133 48.1467 142.524 47.6277 141.857 47.193C141.214 46.7734 140.497 46.2773 139.786 45.9887C139.169 45.7384 138.615 45.6894 138.061 45.2792C137.374 44.7717 136.776 44.4274 135.984 44.0777C135.299 43.7752 134.35 43.511 133.861 42.9187Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M40.3905 103.691C40.5165 103.396 40.6419 103.1 40.7679 102.804C40.9235 103.32 40.9671 103.576 40.3905 103.691ZM40.5581 105.057C40.2853 105.106 40.3928 104.25 40.3928 104.101C40.8639 104.368 40.4737 104.688 40.5581 105.057ZM40.1328 102.589C40.3653 102.451 40.5979 102.314 40.8304 102.177C40.5066 102.777 40.6336 102.402 40.7672 102.803C40.523 102.873 40.2855 102.791 40.1328 102.589ZM38.7547 107.278C37.8831 110.44 35.1146 112.935 32.1905 114.227C30.5102 114.969 28.8582 115.154 27.0436 115.072C26.3438 115.04 25.5203 114.812 24.8468 114.855C24.3282 114.887 24.3516 114.91 23.922 115.349C23.732 114.999 23.8697 114.753 23.4885 114.549C23.0129 114.295 22.8154 114.591 22.5795 114.943C22.2707 114.623 22.1444 114.456 21.7443 114.266C21.7569 114.272 21.3613 114.257 21.3775 114.262C21.306 114.24 20.8758 113.963 20.7411 113.913C20.1884 113.706 19.5492 113.62 19.0392 113.323C18.5931 113.063 18.2256 112.334 17.7151 112.894C17.7147 111.958 16.4533 111.57 15.8621 111.079C14.9383 110.313 14.2038 109.178 13.7433 108.08C13.2521 106.91 13.0882 105.788 12.8584 104.581C12.6978 103.739 11.6463 102.52 12.2777 101.67C12.4282 102.026 12.3575 102.391 12.6074 102.715C12.8323 102.282 12.956 101.797 13.0576 101.322C13.1075 101.09 13.3967 100.408 13.3639 100.206C13.2971 99.7916 12.7844 99.7692 13.0686 99.2614C13.6583 99.903 14.1341 98.7763 13.6886 98.3272C13.4687 98.5753 13.388 98.857 13.2865 99.1642C12.7068 97.9939 14.3113 98.3708 13.9603 97.3144C14.5459 97.2017 14.8825 97.0542 15.1051 96.4755C15.3527 95.8317 15.1706 95.6914 15.7328 95.2659C15.9262 95.1197 16.4731 94.9095 16.5732 94.6689C16.7668 94.204 16.2741 94.0662 16.7056 93.6306C16.8513 93.8863 17.4194 94.3925 17.7304 93.9108C17.7927 93.8148 17.5312 93.7466 17.7214 93.5253C18.0032 93.1979 18.3185 92.8768 18.795 92.9456C18.4176 92.0022 20.8288 91.9276 21.4463 91.7049C22.0652 91.4821 22.5903 91.3357 23.2465 91.2839C23.902 91.2322 23.9346 91.0402 24.4897 90.6455C24.5367 91.2102 24.6725 91.086 25.0739 91.1857C25.1704 91.0202 25.2693 91.0015 25.3705 91.1299C25.4713 91.2257 25.5945 91.2707 25.7398 91.2653C25.9601 91.2767 26.2102 91.248 26.4412 91.2527C26.9834 91.2633 27.5426 91.2181 28.0745 91.2295C28.2117 91.2066 28.3398 91.1589 28.4599 91.0863C28.5101 91.1807 28.5604 91.2754 28.6104 91.3701C28.8921 91.4054 28.914 91.7584 29.2605 91.3723C29.363 91.8632 29.6576 91.6078 29.9689 91.7409C30.2527 91.8626 30.2979 92.0569 30.5599 92.1925C30.7321 92.3321 30.9168 92.3506 31.1142 92.2482C31.302 92.3874 31.4927 92.5226 31.6861 92.6537C32.0425 92.855 32.4626 92.9782 32.8381 93.1372C33.088 93.2402 33.3362 93.3475 33.5825 93.4585C33.5899 93.7558 33.7233 93.8609 33.9823 93.7734C34.2164 93.9693 34.2823 93.9616 34.5094 94.2951C35.024 95.0509 35.4805 95.6381 36.1304 96.3136C38.9551 99.2506 39.8229 103.403 38.7547 107.278ZM39.6217 94.7894C38.3464 93.0816 36.5412 91.1261 34.9192 90.0475C34.097 89.5006 32.9429 88.519 31.9375 88.2298C31.6991 88.1613 31.4524 88.1567 31.2181 88.0848C31.0371 88.0292 30.9386 87.8435 30.7321 87.81C30.5877 87.7866 30.5718 88.1097 30.4184 88.0801C30.0977 88.0175 29.8944 87.6993 29.668 87.5003C29.1816 88.3385 28.9176 86.9289 28.2033 87.8765C27.3533 86.5437 25.3563 86.8351 23.999 86.9024C23.5964 86.9222 23.4073 87.0654 23.0504 87.1715C22.7183 87.2703 22.6854 87.2449 22.3227 87.2422C21.4193 87.2352 20.6174 87.3488 19.7824 87.7454C18.3796 88.4118 17.092 89.45 15.7595 90.2531C14.2704 91.1506 12.9281 92.293 11.7888 93.6056C7.67036 98.352 6.56911 105.28 9.85305 110.782C15.0692 119.521 28.524 120.455 36.1482 114.526C42.0385 109.944 44.2801 101.026 39.6217 94.7894Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M104.18 70.1969C104.034 70.5461 102.667 70.4285 102.637 70.0168C102.592 69.4015 104.434 69.5899 104.18 70.1969ZM105.632 69.9684C106.407 70.0314 107.68 70.5576 108.426 70.2396C109.566 69.7543 108.369 69.0095 107.758 68.7869C107.136 68.5604 106.209 68.6807 105.89 68.0304C105.649 67.5413 106.244 66.1758 105.506 66.3953C104.732 66.6255 104.957 68.5816 103.742 67.9222C103.163 67.6076 103.399 65.6912 102.429 66.6703C102.164 66.9381 102.14 67.4299 101.789 67.6296C101.43 67.8336 100.98 67.6211 100.601 67.6389C99.5974 67.6859 99.2779 68.6243 100.294 68.9965C100.671 69.1343 102.089 69.3025 101.23 69.9174C100.688 70.3046 99.4859 69.4919 99.0211 70.1661C98.3822 71.0921 100.094 71.113 100.553 71.3901C101.332 71.8592 100.689 72.955 100.751 73.7354C100.846 74.9277 101.539 74.6785 101.79 73.6695C102.004 72.8134 101.739 71.581 103.03 71.9213C105.132 72.4754 101.861 75.1436 103.401 75.8263C104.382 76.2617 104.521 73.9083 104.597 73.5031C104.88 72.0074 105.72 72.3564 106.993 72.4023C108.48 72.4558 108.838 71.3559 107.264 71.0409C106.761 70.9403 106.07 71.0674 105.634 70.7474C105.376 70.5583 105.021 69.9189 105.632 69.9684Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M50.7329 118.833C49.5296 118.403 47.5164 118.496 47.2187 120.05C47.0941 120.7 47.3368 121.389 47.7861 121.861C48.3071 122.409 49.1369 122.46 49.0926 121.506C49.0618 120.845 48.4333 120.272 49.5383 120.138C50.226 120.056 51.2432 120.57 51.2773 121.33C51.3547 123.042 48.3908 123.176 47.2985 122.88C45.1307 122.293 45.7196 120.022 47.2084 118.986C47.5929 118.718 48.6964 118.305 48.7468 117.749C48.8138 117.012 47.9017 117.162 47.4546 117.26C44.1684 117.975 43.4522 123.48 46.8859 124.518C48.4452 124.989 50.6412 124.502 51.5809 123.09C52.462 121.766 52.4739 119.457 50.7329 118.833Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.16104 79.8626C6.13378 80.3571 5.10652 80.8516 4.07949 81.3461C3.73992 80.6195 3.16625 78.6345 2.30496 78.3811C0.910695 77.9706 1.79852 80.1345 2.03915 80.6292C2.23682 81.0356 2.69535 81.6652 2.58403 82.1496C2.43471 82.8022 1.51405 83.0334 1.03213 83.37C-0.160413 84.2034 -0.15097 85.9537 1.57612 85.212C2.55345 84.7922 3.76353 83.628 4.51261 84.9498C4.85848 85.5597 5.67795 88.9671 6.53384 86.7388C7.06344 85.3591 4.51441 83.9257 5.77105 82.7586C6.17561 82.383 6.64921 82.3513 7.05332 82.1354C8.0293 81.6139 7.47902 80.6503 7.16104 79.8626Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M157.765 30.4922C157.153 30.2683 156.395 29.8309 155.714 29.98C154.991 30.1383 154.7 30.8628 154.174 31.2984C152.744 32.4829 151.911 30.7176 151.125 29.7501C150.383 28.8367 149.477 28.6149 148.43 29.1762C148.013 29.4 146.256 30.4252 146.562 31.0821C146.783 31.5548 147.651 31.1304 147.947 31.0272C148.59 30.8035 149.187 30.6076 149.845 30.9339C151.078 31.5456 151.398 33.223 152.89 33.4845C154.434 33.755 154.484 32.2866 155.585 31.7338C156.324 31.3634 156.838 32.0192 157.55 31.8885C158.229 31.7642 158.543 30.7765 157.765 30.4922Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M145.301 36.4106C145.846 36.5291 146.203 35.4706 146.544 35.2021C147.111 34.757 148.093 34.6673 148.67 35.1152C149.797 35.9896 149.409 37.8772 151.013 38.3693C152.448 38.8091 153.123 36.9204 154.33 36.4501C155.032 36.1767 155.803 35.9977 155.529 35.0165C155.339 34.3381 154.782 34.1638 154.176 34.4244C153.135 34.8719 152.782 36.695 151.547 36.7276C150.27 36.7614 150.132 34.9203 149.583 34.1183C148.748 32.8961 147.029 32.6009 146.053 33.7696C145.758 34.1222 144.261 36.1855 145.301 36.4106Z'
                fill='#B1B1B1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M120.056 15.5391C120.815 16.0586 122.328 16.0406 123.028 15.3963C123.74 14.7408 122.789 14.64 122.21 14.66C121.764 14.6756 120.929 14.8966 121.183 14.1264C121.409 13.443 122.648 13.7909 122.752 13.0407C121.819 12.8734 120.791 12.9336 120.101 13.667C119.602 14.197 119.346 15.0527 120.056 15.5391Z'
                fill='#B1B1B1'
              />
            </svg>
          </div>
          <div className=' flex-col justify-start items-center gap-3 flex'>
            <div className="text-white text-sm font-bold font-['Campton']">
              Earn on Trendit just got easier
            </div>
            <div className="self-stretch md:w-[30rem] text-center text-zinc-400 text-xs font-normal font-['Campton']">
              Get people with atleast 1000 active followers to repost your
              adverts and perform certain social tasks for you on their social
              media accounts. Select the type of task you want people to perform
              below:
            </div>
          </div>
        </div>
        <div className='self-stretch py-3 justify-start items-start gap-2 inline-flex'>
          <div className="text-white text-2xl font-medium font-['Campton']">
            Advertise
          </div>
        </div>
        <div className='self-stretch flex-col justify-start items-start gap-3 flex '>
          <div className='border-b border-stone-900 justify-between w-full items-center flex'>
            <div className='justify-start items-center gap-[11px] flex'>
              <AnimatePresence mode='wait'>
                <div className='flex flex-col w-full'>
                  <Tabs
                    fullWidth
                    size='md'
                    aria-label='Tabs form'
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    variant='underlined'
                    classNames={{
                      tabList: '  bordered  py-2',
                      cursor: ' bg-fuchsia-400',
                      selectedKey: 'text-green-400',
                      tabContent:
                        'group-data-[selected=true]:text-fuchsia-400 ',
                    }}
                    className="text-center text-fuchsia-400 text-[12.83px] font-bold font-['Campton']"
                    color='secondary'
                  >
                    <Tab
                      key='advert task'
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                      title='Advert Task'
                    ></Tab>
                    <Tab
                      key='engagement tasks'
                      title={
                        <div>
                          Engagement Tasks
                          {/* <Chip
                            size='sm'
                            className='text-white'
                            variant='light'
                          >
                            23+
                          </Chip> */}
                        </div>
                      }
                      className=" text-zinc-400 text-[12.83px] font-bold font-['Campton']"
                    ></Tab>
                  </Tabs>
                </div>
              </AnimatePresence>
            </div>
            <Button
              endContent={<ChevronRight />}
              variant='light'
              className="text-white justify-start items-center flex text-sm font-medium font-['Campton']"
            >
              History{' '}
            </Button>
          </div>
        </div>
        {selected === 'advert task' && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className='flex flex-col gap-2 w-full'
            transition={{
              rotate: { duration: 2 },
              scale: { duration: 0.4 },
            }}
          >
            <AdvertiseTaskCard />
          </motion.div>
        )}
        {selected === 'engagement tasks' && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className='flex flex-col gap-2 w-full'
            transition={{
              rotate: { duration: 2 },
              scale: { duration: 0.4 },
            }}
          >
            <EngagementTaskCard />
          </motion.div>
        )}
      </div>
    </div>
  )
}
