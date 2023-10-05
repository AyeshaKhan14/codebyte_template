import React from "react";

export const Log = () => {
  return (
    <>
      {/* login div */}
      <div className='dark:bg-slate-800 dark:text-white shadow-2xl shadow-blue-500/50 w-[95%] bg-zinc-200 m-auto  h-[560px] flex items-center justify-center'>
        <div className=' w-[85%] h-[500px] flex flex-col gap-6'>
          <h2 className='text-lg font-semibold'>Welcome Back</h2>
          <div>
            <button className='w-[100%] bg-[#FA383E] text-white p-2 rounded-md font-medium'>
              Sign in with Github
            </button>
          </div>
          {/* or divs */}
          <div className='h-12 flex items-end gap-2'>
            <div className='border-2 border-gray-300 w-[50%] border-t-0 border-r-0 border-l-0'></div>
            <div className='text-gray-400'>or</div>
            <div className='border-2 border-gray-300 w-[50%] border-t-0 border-r-0 border-l-0'></div>
          </div>

          {/* form div */}
          <div>
            <form className=' flex flex-col gap-6'>
              <div className=' flex flex-col gap-2'>
                <label className='font-medium font-sans'>Your Email</label>
                <input
                  placeholder='name@codebyte.com'
                  className='dark:bg-slate-700 dark:border-0 w-full outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
              </div>
              <div>
                <label className='font-medium font-sans'>Your Password</label>
                <input
                  placeholder='******'
                  className='dark:bg-slate-700 dark:border-0 w-full outline-none h-10 px-2 rounded-md border border-zinc-300 drop-shadow-2xl bg-zinc-200'
                />
              </div>
              <div className='mt-4'>
                <button className='w-[100%] bg-[#FA383E] text-white p-2 rounded-md font-medium'>
                  Login
                </button>
              </div>
              <div className='text-[#2F1CA6]'>Don't have an account?</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
