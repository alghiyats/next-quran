import Link from 'next/link';
import React from 'react';

export default function Footer() {
   return (
      <footer className='pb-5 pt-10 text-[97%] px-6 max-w-screen-xl mx-auto'>
         <div className='p-5 bg-secondary dark:bg-darkSecondary rounded-xl shadow-[0_5px_35px_rgba(0,0,0,.1)] relative overflow-hidden'>
            <div className='flex flex-wrap relative -left-[15px] -right-[15px]'>
               <div className='mx-[15px]'>
                  <div className='pb-4'>
                     <div
                        className='before:content-[attr(data-text)] before:text-[13px] before:block before:mb-1'
                        data-text='Made with ️❤️ by Next Quran'>
                        <div>
                           <div className='flex-[0_0_calc(100%_-_82px)]'>
                              <h2 className='text-inherit text-xl font-bold'>Next Quran</h2>
                              <p className='mt-1 overflow-hidden'>Baca Al-Quran Online.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex justify-between items-baseline relative w-[calc(100%_+_20px)] -left-[10px] -right-[10px]'>
               <div className='mx-[10px]'>
                  <div className='inline-flex'>
                     <span className='credit'>
                        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>©</span>
                        <span>{new Date().getFullYear()} </span>
                        <bdi>
                           <Link
                              href='/'
                              className='inline-flex items-center'>
                              Next Quran
                              <svg
                                 className='fill-link dark:fill-darkLink w-4 h-4'
                                 viewBox='0 0 24 24'
                                 fill='none'
                                 xmlns='http://www.w3.org/2000/svg'>
                                 <g>
                                    <path d='M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.1609 10.1086L11.3309 14.9386C11.1909 15.0786 11.0009 15.1586 10.8009 15.1586C10.6009 15.1586 10.4109 15.0786 10.2709 14.9386L7.85086 12.5186C7.56086 12.2286 7.56086 11.7486 7.85086 11.4586C8.14086 11.1686 8.62086 11.1686 8.91086 11.4586L10.8009 13.3486L15.1009 9.04859C15.3909 8.75859 15.8709 8.75859 16.1609 9.04859C16.4509 9.33859 16.4509 9.81859 16.1609 10.1086Z'></path>
                                 </g>
                              </svg>
                           </Link>
                        </bdi>
                        ‧ All rights reserved.
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
