import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export const FifthComponent = () => {
  return (
    <div className='w-full h-full md:h-[600px] p-4 dark:bg-midnightBlack flex flex-col gap-2 md:p-12'>
      {/* 1st div */}
      <div className=' w-[90%] md:w-[35%] text-4xl flex flex-col gap-2 m-auto'>
        <h1 className='text-center dark:text-zinc-100 font-bold md:text-5xl font-sans'>
          Our Blog
        </h1>
        <p className='text-[#6B7280] text-center text-lg'>
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>
      {/* 2nd div */}
      <div className=' w-[90%] h-full md:w-[80%] m-auto flex flex-col items-center justify-between md:flex-row gap-4'>
        {/* 1st chid div */}
        <div className='w-full md:w-[50%] dark:bg-slate-800 dark:text-zinc-200 h-auto p-2 md:h-[270px] bg-[#F5F7FD] flex justify-center items-center dark:border-0 border rounded-md border-gray-300'>
          <div className='w-[95%] h-[90%]  flex flex-col gap-4'>
            <div className='flex justify-between text-sm font-medium text-gray-600'>
              <p>Information</p>
              <p>26 days</p>
            </div>
            <div className='text-xl md:text-2xl text-start font-bold'>
              From Code To Cash : How To Earn Money on Snipbyte
            </div>
            <p className='text-gray-500'>
              Coding too is a way to cash your talent and snipbyte has come up
              with a great opportunity on how to earn money from home. Lets see
              how to earn money on codebyte.
            </p>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center dark:bg-slate-500 bg-gray-300 items-center rounded-full h-[30px] w-[30px]'>
                <AiOutlineUser />
              </div>
              <p className='text-gray-600 font-medium'>Admin</p>
            </div>
          </div>
        </div>
        {/* 2st chid div */}
        <div className='w-full md:w-[50%] dark:bg-slate-800 dark:text-zinc-200  h-auto p-2 md:h-[270px] bg-[#F5F7FD] rounded-md flex justify-center items-center dark:border-0  border border-gray-300'>
          <div className='w-[95%] h-[90%] flex flex-col gap-4'>
            <div className='flex justify-between text-sm font-medium text-gray-600'>
              <p>Educational</p>
              <p>28 days</p>
            </div>
            <div className='text-xl md:text-2xl text-start font-bold'>
              Decoding the Web: Web Designing vs. Web Development –Which one
              Suits you ?{" "}
            </div>
            <p className='text-gray-500'>
              Choosing between web development and web design is slightly
              difficult. Both fields are not easy, as some people say web design
              is easy, but this is not as easy as people think.
            </p>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center dark:bg-slate-500 bg-gray-300 items-center rounded-full h-[30px] w-[30px]'>
                <AiOutlineUser />
              </div>
              <p className='text-gray-600 font-medium'>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
