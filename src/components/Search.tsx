export default function Searc({ search, setSearch, placeholder }) {
   return (
      <div className='my-6 p-1'>
         <form className='relative flex items-center'>
            <span className='w-6 h-6 flex items-center justify-center absolute ml-4'>
               <svg
                  className='fill-gray-500 dark:fill-slate-200 h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g>
                     <path
                        d='M11.01 20.02C15.9861 20.02 20.02 15.9861 20.02 11.01C20.02 6.03391 15.9861 2 11.01 2C6.03391 2 2 6.03391 2 11.01C2 15.9861 6.03391 20.02 11.01 20.02Z'
                     ></path>
                     <path
                        d='M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z'
                     ></path>
                  </g>
               </svg>
            </span>
            <input
               className='dark:bg-darkSecondary shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary w-full py-4 pl-12 pr-4 font-semibold focus:outline-none'
               value={search}
               onChange={(e) =>
                  setSearch(e.target.value)}
               placeholder={placeholder}
            />
         </form>
      </div>
   );
}
