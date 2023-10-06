import React from "react";
import { Link } from "react-router-dom";

export const ThirdComponents = () => {
  return (
    <div className='bg-[#F5F7FD] dark:bg-slate-900 dark:text-gray-400 w-full h-full p-4 md:h-[300px] flex flex-col gap-10 md:flex-row items-center justify-around'>
      {/* div-1 */}
      <div className='w-[80%] md:w-[60%] h-[80%] flex flex-col gap-4 '>
        <p className='dark:text-gray-300 text-2xl md:text-5xl text-center md:text-start font-semibold '>
          Freebies.Premium.Templates.
        </p>
        <p className='text-lg text-[#6B7280] leading-6 font-sans font-normal'>
          Unlock the potential of your projects with our diverse collection of
          free and premium templates. Discover a world of design possibilities
          and elevate your website or application with our carefully crafted
          offerings.
        </p>
      </div>
      {/* div-2 */}
      <div className=' w-[70%] md:w-[30%] h-[70%]  flex  items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-start h-full w-[70%]'>
          <div className='border dark:border-zinc-300 border-black rounded-md p-3 px-10 font-medium'>
            Start Buying
          </div>
          <div className='border-2 border-black shadow-2xl rounded-md p-3 px-6 font-medium custom-animation'>
            <Link to='/projects'>Tour the Product</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
