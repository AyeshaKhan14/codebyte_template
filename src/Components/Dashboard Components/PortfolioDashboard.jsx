import React from "react";

export const PortfolioDashboard = () => {
  return (
    <div className='border w-full'>
      <div className='dark:bg-midnightBlack bg-white dark:text-white text-gray-950'>
        <div className='p-2'>
          <div className='w-full p-2 lg:p-4 mx-auto dark:bg-slate-800 rounded-lg md:my-4 bg-lightcard'>
            {/* <form onSubmit={handleBlog} className='space-y-4 md:space-y-6'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
              placeholder='Add Title'
            />
          </div>

          <div>
            <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
              Content
            </label>
            <textarea
              rows='20'
              type='text'
              value={content}
              onChange={handleContent}
              className='shadow-sm bg-lightCard border border-gray-200 p-2 h-[300px] text-gray-950 text-sm rounded-lg block w-full  dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
              placeholder='Add Content'
            ></textarea>
            {contentText && (
              <p className='text-sm text-[#FA383E] font-medium dark:text-gray-300'>
                {content.length}/150 characters
              </p>
            )}
          </div>

          <div className=' flex items-center justify-center'>
            <button
              type='submit'
              className='py-3 px-2 items-center justify-center text-md font-medium text-center hover:bg-red-400 rounded-lg focus:outline-none  w-1/4  bg-[#FA383E] text-white '
            >
              Post Blog
            </button>
          </div>
        </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};
