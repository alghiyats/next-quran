import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
   const router = useRouter();
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();
   const [isTop, setIsTop] = useState(true);

   const Nav = [
      {
         title: 'Home',
         path: '/',
         icon: (
            <svg
               className='fill-gray-500 dark:fill-slate-200 h-5 w-5'
               viewBox='0 0 24 24'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'>
               <g>
                  <path d='M20.8593 8.36985L13.9293 2.82985C12.8593 1.96985 11.1293 1.96985 10.0693 2.81985L3.13929 8.36985C2.35929 8.98985 1.85929 10.2998 2.02929 11.2798L3.35929 19.2398C3.59929 20.6598 4.95929 21.8098 6.39929 21.8098H17.5993C19.0293 21.8098 20.3993 20.6498 20.6393 19.2398L21.9693 11.2798C22.1293 10.2998 21.6293 8.98985 20.8593 8.36985ZM11.9993 15.4998C10.6193 15.4998 9.49929 14.3798 9.49929 12.9998C9.49929 11.6198 10.6193 10.4998 11.9993 10.4998C13.3793 10.4998 14.4993 11.6198 14.4993 12.9998C14.4993 14.3798 13.3793 15.4998 11.9993 15.4998Z'></path>
               </g>
            </svg>
         ),
      },
      {
         title: 'Surah',
         path: '/surah',
         icon: (
            <svg
               className='fill-gray-500 dark:fill-slate-200 h-5 w-5'
               viewBox='0 0 24 24'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'>
               <g>
                  <path d='M11.25 5.99813V19.9081C11.25 20.6181 10.53 21.1081 9.88 20.8381C8.02 20.0581 5.71 19.3781 4.07 19.1581L3.76 19.1181C2.79 18.9981 2 18.1081 2 17.1381V5.24813C2 4.04813 2.97 3.07812 4.17 3.07812H4.24C6.12 3.23812 8.89 4.11813 10.72 5.10813C11.05 5.28813 11.25 5.61812 11.25 5.99813Z'></path>
                  <path d='M19.83 3.07812H19.77C19.53 3.09812 19.27 3.12813 19 3.17813C17.77 3.37813 16.31 3.79813 15 4.31813C14.38 4.56813 13.8 4.83813 13.29 5.10813C12.96 5.28813 12.75 5.62813 12.75 5.99813V19.9081C12.75 20.6181 13.47 21.1081 14.12 20.8381C15.98 20.0581 18.29 19.3781 19.93 19.1581L20.24 19.1181C21.21 18.9981 22 18.1081 22 17.1381V5.24813C22 4.04813 21.03 3.07812 19.83 3.07812ZM19.27 13.7281C19.27 14.1181 18.99 14.2881 18.65 14.0981L17.59 13.5081C17.48 13.4481 17.3 13.4481 17.18 13.5081L16.12 14.0981C15.78 14.2881 15.5 14.1181 15.5 13.7281V10.6581C15.5 10.1981 15.88 9.81812 16.34 9.81812H18.44C18.9 9.81812 19.28 10.1981 19.28 10.6581V13.7281H19.27Z'></path>
               </g>
            </svg>
         ),
      },
      {
         title: 'Bookmark',
         path: '/bookmark',
         icon: (
            <svg
               className='fill-gray-500 dark:fill-slate-200 h-5 w-5'
               viewBox='0 0 24 24'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'>
               <g>
                  <path d='M14.9303 2.5V8.4C14.9303 8.84 14.4103 9.06 14.0903 8.77L12.3403 7.16C12.1503 6.98 11.8503 6.98 11.6603 7.16L9.91031 8.76C9.59031 9.06 9.07031 8.83 9.07031 8.4V2.5C9.07031 2.22 9.29031 2 9.57031 2H14.4303C14.7103 2 14.9303 2.22 14.9303 2.5Z'></path>
                  <path d='M16.98 2.05891C16.69 2.01891 16.43 2.26891 16.43 2.55891V8.57891C16.43 9.33891 15.98 10.0289 15.28 10.3389C14.58 10.6389 13.77 10.5089 13.21 9.98891L12.34 9.18891C12.15 9.00891 11.86 9.00891 11.66 9.18891L10.79 9.98891C10.43 10.3289 9.96 10.4989 9.49 10.4989C9.23 10.4989 8.97 10.4489 8.72 10.3389C8.02 10.0289 7.57 9.33891 7.57 8.57891V2.55891C7.57 2.26891 7.31 2.01891 7.02 2.05891C4.22 2.40891 3 4.29891 3 6.99891V16.9989C3 19.9989 4.5 21.9989 8 21.9989H16C19.5 21.9989 21 19.9989 21 16.9989V6.99891C21 4.29891 19.78 2.40891 16.98 2.05891ZM17.5 18.7489H9C8.59 18.7489 8.25 18.4089 8.25 17.9989C8.25 17.5889 8.59 17.2489 9 17.2489H17.5C17.91 17.2489 18.25 17.5889 18.25 17.9989C18.25 18.4089 17.91 18.7489 17.5 18.7489ZM17.5 14.7489H13.25C12.84 14.7489 12.5 14.4089 12.5 13.9989C12.5 13.5889 12.84 13.2489 13.25 13.2489H17.5C17.91 13.2489 18.25 13.5889 18.25 13.9989C18.25 14.4089 17.91 14.7489 17.5 14.7489Z'></path>
               </g>
            </svg>
         ),
      },
   ];

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   const handleScroll = () => {
      setIsTop(window.scrollY === 0);
   };

   if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
   }

   return (
      <div
         className={`${
            isTop
               ? ''
               : 'dark:border-b dark:border-[rgba(255,255,255,.15)] dark:border-solid shadow-md dark:shadow-none '
         }bg-[#fffdfc] fixed top-0 dark:bg-darkPrimary w-full px-3 z-40`}>
         <div className={`duration-300 py-4`}>
            <div className='flex justify-between max-w-screen-xl mx-auto px-3'>
               <div className='flex items-center'>
                  <Link href={'/'}>
                     <span className='font-bold'>Next Quran</span>
                  </Link>
               </div>

               <div className='flex gap-x-2'>
                  {Nav.map((to, i) => (
                     <Link
                        href={to.path}
                        key={i}>
                        <div
                           className={`${
                              router.pathname === to.path && 'bg-lightBg dark:bg-darkSecondary'
                           } flex cursor-pointer items-center gap-x-1 rounded-md  p-2 sm:py-2 sm:px-4 hover:bg-lightBg hover:dark:bg-darkSecondary`}>
                           {to.icon}
                           <span className='hidden sm:block text-sm font-medium'>{to.title}</span>
                        </div>
                     </Link>
                  ))}
                  <div
                     onClick={theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')}
                     className='flex cursor-pointer select-none items-center rounded-md p-2 hover:bg-lightBg hover:dark:bg-darkSecondary'>
                     <svg
                        className='fill-gray-500 dark:fill-slate-200 w-5 h-5'
                        viewBox='0 0 24 24'>
                        {theme !== 'dark' ? (
                           <g>
                              <path d='M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z'></path>
                           </g>
                        ) : (
                           <g>
                              <path d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z'></path>{' '}
                              <path d='M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z'></path>
                           </g>
                        )}
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
