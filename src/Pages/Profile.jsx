import React, { useState } from "react";

export const Profile = () => {
  const [protog, setProTog] = useState(true);
  const [blgtog, setBlgTog] = useState(false);
  const user = JSON.parse(localStorage.getItem("code-user")) || {};
  const handleTog = () => {
    setProTog(!protog);
    setBlgTog(false);
  };

  const handleBlogTog = () => {
    setBlgTog(!blgtog);
    setProTog(false);
  };

  return (
    <div className=' dark:bg-midnightBlack dark:text-white w-full h-full'>
      <div className='w-[95%] p-4 m-auto flex flex-col gap-4'>
        {/* div-1 */}
        <div className='flex md:justify-between gap-3 md:flex-row flex-col '>
          <div className='flex items-center gap-2'>
            <div className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] text-xl text-zinc-100 bg-gradient-to-r from-[#2F1CA6] to-blue-500 flex items-center justify-center rounded-full'>
              {user?.name
                ? user.name
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase())
                    .join("")
                : ""}
            </div>
            <div>
              <h2 className='text-xl font-bold'>{user?.name}</h2>
              <p>web dev</p>
            </div>
          </div>
          <div className=' flex items-center gap-4'>
            <button className='border p-2 font-medium px-4 rounded-md'>
              View Portfolio
            </button>
            <button className=' text-zinc-100 bg-gradient-to-r from-[#2F1CA6] to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 font-medium px-4 rounded-md'>
              + Follow
            </button>
          </div>
        </div>

        {/* div-2 */}
        <div className='flex flex-col gap-2'>
          <div className=' flex justify-center gap-10'>
            <div onClick={handleTog}>Projects</div>
            <div onClick={handleBlogTog}>Blogs</div>
          </div>
          <div className='text-center text-gray-600'>
            Some of my recent work.
          </div>
          {protog && <div>hii</div>}
          {blgtog && <div>blg</div>}
        </div>
      </div>
    </div>
  );
};
