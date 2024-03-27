/* eslint-disable react/prop-types */
export const EarnIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || width || 24}
      height={size || height || 24}
      viewBox='0 0 24 25'
      fill='none'
      {...props}
    >
      <path
        d='M6.18404 21.4712L6.63803 20.5802L6.18404 21.4712ZM4.43597 19.7231L5.32698 19.2691L4.43597 19.7231ZM19.564 19.7231L18.673 19.2691L19.564 19.7231ZM17.816 21.4712L17.362 20.5802L17.816 21.4712ZM19.727 10.9616L19.273 11.8526L19.727 10.9616ZM19.9455 11.1801L19.0545 11.6341L19.9455 11.1801ZM4.273 10.9616L4.727 11.8526L4.273 10.9616ZM4.0545 11.1801L4.9455 11.6341L4.0545 11.1801ZM4 6.90714C3.44772 6.90714 3 7.35485 3 7.90714C3 8.45942 3.44772 8.90714 4 8.90714V6.90714ZM20 8.90714C20.5523 8.90714 21 8.45942 21 7.90714C21 7.35485 20.5523 6.90714 20 6.90714V8.90714ZM20 12.9071C19.4477 12.9071 19 13.3548 19 13.9071C19 14.4594 19.4477 14.9071 20 14.9071V12.9071ZM22 14.9071C22.5523 14.9071 23 14.4594 23 13.9071C23 13.3548 22.5523 12.9071 22 12.9071V14.9071ZM2 12.9071C1.44772 12.9071 1 13.3548 1 13.9071C1 14.4594 1.44772 14.9071 2 14.9071V12.9071ZM4 14.9071C4.55228 14.9071 5 14.4594 5 13.9071C5 13.3548 4.55228 12.9071 4 12.9071V14.9071ZM4.8 11.9071H19.2V9.90714H4.8V11.9071ZM19 11.7071V15.5071H21V11.7071H19ZM13.6 20.9071H10.4V22.9071H13.6V20.9071ZM5 15.5071V11.7071H3V15.5071H5ZM10.4 20.9071C9.26339 20.9071 8.47108 20.9064 7.85424 20.856C7.24907 20.8065 6.90138 20.7143 6.63803 20.5802L5.73005 22.3622C6.32234 22.664 6.96253 22.7898 7.69138 22.8493C8.40855 22.9079 9.2964 22.9071 10.4 22.9071V20.9071ZM3 15.5071C3 16.6107 2.99922 17.4986 3.05782 18.2158C3.11737 18.9446 3.24318 19.5848 3.54497 20.1771L5.32698 19.2691C5.19279 19.0058 5.10062 18.6581 5.05118 18.0529C5.00078 17.4361 5 16.6437 5 15.5071H3ZM6.63803 20.5802C6.07354 20.2925 5.6146 19.8336 5.32698 19.2691L3.54497 20.1771C4.02433 21.1179 4.78924 21.8828 5.73005 22.3622L6.63803 20.5802ZM19 15.5071C19 16.6437 18.9992 17.4361 18.9488 18.0529C18.8994 18.6581 18.8072 19.0058 18.673 19.2691L20.455 20.1771C20.7568 19.5848 20.8826 18.9446 20.9422 18.2158C21.0008 17.4986 21 16.6107 21 15.5071H19ZM13.6 22.9071C14.7036 22.9071 15.5914 22.9079 16.3086 22.8493C17.0375 22.7898 17.6777 22.664 18.27 22.3622L17.362 20.5802C17.0986 20.7143 16.7509 20.8065 16.1458 20.856C15.5289 20.9064 14.7366 20.9071 13.6 20.9071V22.9071ZM18.673 19.2691C18.3854 19.8336 17.9265 20.2925 17.362 20.5802L18.27 22.3622C19.2108 21.8828 19.9757 21.1179 20.455 20.1771L18.673 19.2691ZM19.2 11.9071C19.2723 11.9071 19.325 11.9072 19.3697 11.9079C19.4145 11.9086 19.4368 11.9098 19.447 11.9106C19.4567 11.9114 19.4405 11.9108 19.4097 11.9035C19.3757 11.8955 19.3273 11.8803 19.273 11.8526L20.181 10.0706C19.963 9.95958 19.755 9.92913 19.6098 9.91727C19.4763 9.90636 19.3235 9.90714 19.2 9.90714V11.9071ZM21 11.7071C21 11.5836 21.0008 11.4308 20.9899 11.2973C20.978 11.1521 20.9476 10.9441 20.8365 10.7261L19.0545 11.6341C19.0268 11.5798 19.0117 11.5315 19.0036 11.4975C18.9964 11.4666 18.9957 11.4504 18.9965 11.4602C18.9973 11.4703 18.9986 11.4927 18.9993 11.5374C19 11.5821 19 11.6348 19 11.7071H21ZM19.273 11.8526C19.1789 11.8047 19.1024 11.7282 19.0545 11.6341L20.8365 10.7261C20.6927 10.4439 20.4632 10.2144 20.181 10.0706L19.273 11.8526ZM4.8 9.90714C4.67649 9.90714 4.52371 9.90636 4.39017 9.91727C4.24495 9.92913 4.03696 9.95958 3.81901 10.0706L4.727 11.8526C4.67267 11.8803 4.62435 11.8955 4.59032 11.9035C4.55946 11.9108 4.54326 11.9114 4.55303 11.9106C4.56319 11.9098 4.58554 11.9086 4.63028 11.9079C4.67499 11.9072 4.72771 11.9071 4.8 11.9071V9.90714ZM5 11.7071C5 11.6348 5.00003 11.5821 5.00073 11.5374C5.00143 11.4927 5.00266 11.4703 5.00349 11.4602C5.00429 11.4504 5.00363 11.4666 4.99636 11.4975C4.98835 11.5315 4.97318 11.5798 4.9455 11.6341L3.16349 10.7261C3.05244 10.9441 3.022 11.1521 3.01013 11.2973C2.99922 11.4308 3 11.5836 3 11.7071H5ZM3.81901 10.0706C3.53677 10.2144 3.3073 10.4439 3.16349 10.7261L4.9455 11.6341C4.89757 11.7282 4.82108 11.8047 4.727 11.8526L3.81901 10.0706ZM4 8.90714H20V6.90714H4V8.90714ZM9 7.90714C9 6.25028 10.3431 4.90714 12 4.90714V2.90714C9.23858 2.90714 7 5.14571 7 7.90714H9ZM12 4.90714C13.6569 4.90714 15 6.25028 15 7.90714H17C17 5.14571 14.7614 2.90714 12 2.90714V4.90714ZM20 14.9071H22V12.9071H20V14.9071ZM2 14.9071H4V12.9071H2V14.9071Z'
        fill='currentColor'
      />
    </svg>
  )
}

export const HomeIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || width || 24}
      height={size || height || 24}
      viewBox='0 0 24 25'
      fill='none'
      {...props}
    >
      <path
        d='M1 11.4328L10.4993 4.39754C11.382 3.74379 12.618 3.74379 13.5007 4.39754L23 11.4328M4.66667 8.71724V19.5796C4.66667 20.8651 5.76108 21.9072 7.11111 21.9072H16.8889C18.2389 21.9072 19.3333 20.8651 19.3333 19.5796V8.71724'
        stroke='#B1B1B1'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
export const GrowIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 25'
      fill='none'
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      <path
        d='M11.3536 10.2607L12.0607 9.55358L11.3536 10.2607ZM14.6464 13.5536L13.9393 14.2607L14.6464 13.5536ZM15.3536 13.5536L16.0607 14.2607L16.0607 14.2607L15.3536 13.5536ZM21.7071 8.61424C22.0976 8.22372 22.0976 7.59055 21.7071 7.20003C21.3166 6.8095 20.6834 6.8095 20.2929 7.20003L21.7071 8.61424ZM5.29289 14.2C4.90237 14.5906 4.90237 15.2237 5.29289 15.6142C5.68342 16.0048 6.31658 16.0048 6.70711 15.6142L5.29289 14.2ZM10.6464 10.2607L11.3536 10.9678L11.3536 10.9678L10.6464 10.2607ZM17 5.90714C16.4477 5.90714 16 6.35485 16 6.90714C16 7.45942 16.4477 7.90714 17 7.90714V5.90714ZM21 11.9071C21 12.4594 21.4477 12.9071 22 12.9071C22.5523 12.9071 23 12.4594 23 11.9071H21ZM22 21.9071C22.5523 21.9071 23 21.4594 23 20.9071C23 20.3548 22.5523 19.9071 22 19.9071V21.9071ZM3 4.90714C3 4.35485 2.55228 3.90714 2 3.90714C1.44772 3.90714 1 4.35485 1 4.90714H3ZM4.18404 20.4712L4.63803 19.5802H4.63803L4.18404 20.4712ZM2.43597 18.7231L1.54497 19.1771L2.43597 18.7231ZM10.6464 10.9678L13.9393 14.2607L15.3536 12.8465L12.0607 9.55358L10.6464 10.9678ZM16.0607 14.2607L21.7071 8.61424L20.2929 7.20003L14.6464 12.8465L16.0607 14.2607ZM6.70711 15.6142L11.3536 10.9678L9.93934 9.55358L5.29289 14.2L6.70711 15.6142ZM13.9393 14.2607C14.5251 14.8465 15.4749 14.8465 16.0607 14.2607L14.6464 12.8465C14.8417 12.6512 15.1583 12.6512 15.3536 12.8465L13.9393 14.2607ZM12.0607 9.55358C11.4749 8.9678 10.5251 8.96779 9.93934 9.55358L11.3536 10.9678C11.1583 11.1631 10.8417 11.1631 10.6464 10.9678L12.0607 9.55358ZM17 7.90714H21.5V5.90714H17V7.90714ZM21 7.40714V11.9071H23V7.40714H21ZM21.5 7.90714C21.2239 7.90714 21 7.68328 21 7.40714H23C23 6.57871 22.3284 5.90714 21.5 5.90714V7.90714ZM22 19.9071H8.4V21.9071H22V19.9071ZM3 14.5071V4.90714H1V14.5071H3ZM8.4 19.9071C7.26339 19.9071 6.47108 19.9064 5.85424 19.856C5.24907 19.8065 4.90138 19.7143 4.63803 19.5802L3.73005 21.3622C4.32234 21.664 4.96253 21.7898 5.69138 21.8493C6.40855 21.9079 7.2964 21.9071 8.4 21.9071V19.9071ZM1 14.5071C1 15.6107 0.999222 16.4986 1.05782 17.2158C1.11737 17.9446 1.24318 18.5848 1.54497 19.1771L3.32698 18.2691C3.19279 18.0058 3.10062 17.6581 3.05118 17.0529C3.00078 16.4361 3 15.6437 3 14.5071H1ZM4.63803 19.5802C4.07354 19.2925 3.6146 18.8336 3.32698 18.2691L1.54497 19.1771C2.02433 20.1179 2.78924 20.8828 3.73005 21.3622L4.63803 19.5802Z'
        fill='currentColor'
      />
    </svg>
  )
}
export const TransIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || width || 24}
      height={size || height || 24}
      {...props}
      viewBox='0 0 24 25'
      fill='none'
    >
      <path
        d='M9 21.9072L9 3.90723M3 21.9072L3 16.9072M15 21.9072L15 7.90723M21 21.9072V12.9072'
        stroke='#B1B1B1'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
export const SettingIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || width || 24}
      height={size || height || 24}
      {...props}
      viewBox='0 0 24 25'
      fill='none'
    >
      <path
        d='M4 5.90723H16M16 5.90723C16 7.0118 16.8954 7.90723 18 7.90723C19.1046 7.90723 20 7.0118 20 5.90723C20 4.80266 19.1046 3.90723 18 3.90723C16.8954 3.90723 16 4.80266 16 5.90723ZM8 12.9072H20M8 12.9072C8 14.0118 7.10457 14.9072 6 14.9072C4.89543 14.9072 4 14.0118 4 12.9072C4 11.8027 4.89543 10.9072 6 10.9072C7.10457 10.9072 8 11.8027 8 12.9072ZM4 19.9072H16M16 19.9072C16 21.0118 16.8954 21.9072 18 21.9072C19.1046 21.9072 20 21.0118 20 19.9072C20 18.8027 19.1046 17.9072 18 17.9072C16.8954 17.9072 16 18.8027 16 19.9072Z'
        stroke='#B1B1B1'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
export const ReferalIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 25'
      fill='none'
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      <path
        d='M21 11.3159C21.8639 12.9148 21.7221 14.905 20.5616 16.4122C19.2895 18.0644 15.4395 21.5491 14.1777 22.6769C14.0365 22.8031 13.966 22.8662 13.8836 22.891C13.8118 22.9126 13.7331 22.9126 13.6613 22.891C13.5789 22.8662 13.5084 22.8031 13.3672 22.6769C12.9444 22.2991 12.2312 21.6566 11.4217 20.9072M9.77245 5.58386C8.2174 3.74897 5.62425 3.25539 3.67587 4.9356C1.7275 6.61581 1.4532 9.42504 2.98327 11.4122C4.25541 13.0644 8.10538 16.5491 9.36719 17.6769C9.50836 17.8031 9.57894 17.8662 9.66128 17.891C9.73314 17.9126 9.81177 17.9126 9.88363 17.891C9.96596 17.8662 10.0365 17.8031 10.1777 17.6769C11.4395 16.5491 15.2895 13.0644 16.5616 11.4122C18.0917 9.42504 17.8509 6.59813 15.869 4.9356C13.8872 3.27306 11.3275 3.74897 9.77245 5.58386Z'
        stroke='#B1B1B1'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
export const SupportIcon = ({ size, height, width, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 25'
      fill='none'
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      <path
        d='M12 16.9172V11.9172M12 8.91716V8.90716M4.33984 7.3298L11.0001 3.4845C11.6189 3.12724 12.3813 3.12724 13.0001 3.4845L19.6604 7.3298C20.2792 7.68707 20.6604 8.34732 20.6604 9.06185V16.7525C20.6604 17.467 20.2792 18.1272 19.6604 18.4845L13.0001 22.3298C12.3813 22.6871 11.6189 22.6871 11.0001 22.3298L4.33984 18.4845C3.72104 18.1272 3.33984 17.467 3.33984 16.7525V9.06185C3.33984 8.34732 3.72104 7.68707 4.33984 7.3298Z'
        stroke='#B1B1B1'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}
