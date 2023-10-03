import React, { useState } from "react";
import bgPic from "../../assests/5172658.jpg";

export const HomeImage = () => {
  const [token, setToken] = useState("");
  return (
    <div
      // style={{
      //   backgroundImage: `url(${bgPic})`,
      // }}
      className='h-[600px] p-2 w-full'
    >
      <div className='w-[80%] text-xs md:text-4xl md:w-1/2  m-auto text-center font-sans font-bold'>
        Elevate your coding game with our curated collection of powerful
        templates.
      </div>
      {/* template button */}
      <div className='flex w-[30%] justify-center gap-6 m-auto mt-4'>
        {token ? (
          <>
            <div className='border-2 p-3 px-6 rounded-md bg-[#FA383E] text-white'>
              Get First Free Template
            </div>
            <div>by</div>
          </>
        ) : (
          <div className='border-2 p-3 md:px-6 rounded-md bg-[#FA383E] text-white'>
            Get First Free Template
          </div>
        )}
      </div>
    </div>
  );
};
