import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import nodePic from "../../assests/Tech Logo/nodejs-logo.webp";
import php from "../../assests/Tech Logo/php-logo.webp";
import reactPic from "../../assests/Tech Logo/react-logo.webp";
import { Log } from "../Login/Log";
import { useSelector } from "react-redux";

export const Secondcomponent = () => {
  const token1 = JSON.parse(localStorage.getItem("code-token"));
  const token2 = useSelector((state) => state.user.token);
  const token = token1 || token2;
  //console.log(token);

  return (
    <div className='dark:bg-slate-800 pb-6 md:h-[645px] w-full flex justify-center items-center'>
      <div className='md:h-[600px] mt-4 w-[90%] flex gap-6  flex-col md:flex-row'>
        {!token ? (
          <>
            <div className='h-full w-full flex flex-col gap-6 md:w-[60%]'>
              {/* div-1 */}
              <div className='w-full flex items-center justify-center md:justify-start'>
                <div className='rounded-full dark:bg-slate-600 hover:dark:bg-slate-500 dark:text-white bg-blue-100 h-[50px] w-[95%] md:w-[52%] p-4 flex items-center gap-4'>
                  <div className='bg-[#FA383E] p-2 text-white rounded-full w-[70px] h-[30px] flex items-center justify-center text-center'>
                    New
                  </div>
                  <p className='text-md text-center font-medium  font-sans'>
                    New Project is out! See what's new
                  </p>
                  <div>
                    <MdOutlineKeyboardArrowRight className='font-semibold text-2xl ' />
                  </div>
                </div>
              </div>

              {/* div-2 */}
              <div className='b h-full w-full flex flex-col gap-4'>
                <h1 className='dark:text-zinc-100  md:text-6xl md:text-start text-center text-4xl font-sans font-bold'>
                  Boost your coding success with our Ready-to-use Templates.
                </h1>
                <p className='mb-2 dark:text-gray-400 md:mb-6 md:text-xl text-center md:text-start font-sans text-gray-500 leading-normal'>
                  Welcome to SnipByte, your ultimate destination for free and
                  premium coding templates! Whether you're an experienced
                  developer or just starting your coding journey, SnipByte is
                  here to provide you with a vast collection of meticulously
                  crafted templates to enhance your projects. Our platform
                  offers a wide range of coding solutions, from HTML and CSS to
                  JavaScript and Python, ensuring that you'll find the perfect
                  template to suit your needs.
                </p>

                <div className='border-2 border-b-0 border-r-0 border-l-0 h-[100px] flex items-center justify-center'>
                  <div className='h-[60%] w-full md:w-[90%] flex items-center justify-between'>
                    {/* img-1 */}
                    <div className='h-[50px] w-[65px] md:w-[100px]'>
                      <img className='h-full w-full' src={nodePic} alt='' />
                    </div>

                    {/* img-2 */}
                    <div className='h-[50px] w-[60px] md:w-[100px]'>
                      <img className='h-full w-full' src={php} alt='' />
                    </div>

                    {/* img-3 */}
                    <div className='h-[50px] w-[80px] md:w-[100px]'>
                      <img className='h-full w-full' src={reactPic} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd login div */}
            <div className='h-full w-full md:w-[40%]'>
              <Log />
            </div>
          </>
        ) : (
          // without login
          <>
            {/* responsive  */}
            <div className=' h-full w-full md:flex flex-col gap-6'>
              {/* div-1 */}
              <div className='w-full flex items-center justify-center md:justify-start'>
                <div className='rounded-full w-[90%] dark:bg-slate-600 hover:dark:bg-slate-500 dark:text-white bg-blue-100 h-[50px] md:w-[33%] p-4 flex items-center gap-4'>
                  <div className='bg-[#FA383E] p-2 text-white rounded-full w-[70px] h-[30px] flex items-center justify-center text-center'>
                    New
                  </div>
                  <p className='text-xs text-center md:text-lg font-medium  font-sans'>
                    New Project is out! See what's new
                  </p>
                  <div>
                    <MdOutlineKeyboardArrowRight className='font-semibold text-2xl ' />
                  </div>
                </div>
              </div>

              {/* div-2 */}
              <div className='b h-full w-full flex flex-col gap-4'>
                <h1 className='dark:text-zinc-100 md:text-6xl md:text-start text-center text-4xl font-sans font-bold'>
                  Boost your coding success with our Ready-to-use Templates.
                </h1>
                <p className='dark:text-gray-400 mb-2 md:mb-6 md:text-xl text-center md:text-start font-sans text-gray-500 leading-normal'>
                  Welcome to SnipByte, your ultimate destination for free and
                  premium coding templates! Whether you're an experienced
                  developer or just starting your coding journey, SnipByte is
                  here to provide you with a vast collection of meticulously
                  crafted templates to enhance your projects. Our platform
                  offers a wide range of coding solutions, from HTML and CSS to
                  JavaScript and Python, ensuring that you'll find the perfect
                  template to suit your needs.
                </p>

                <div className='border-2 border-b-0 border-r-0 border-l-0 h-[100px] flex items-center justify-center'>
                  <div className='h-[60%] w-full md:w-[90%] flex items-center justify-between'>
                    {/* img-1 */}
                    <div className='h-[50px] w-[65px] md:w-[100px]'>
                      <img className='h-full w-full' src={nodePic} alt='' />
                    </div>

                    {/* img-2 */}
                    <div className='h-[50px] w-[60px] md:w-[100px]'>
                      <img className='h-full w-full' src={php} alt='' />
                    </div>

                    {/* img-3 */}
                    <div className='h-[50px] w-[80px] md:w-[100px]'>
                      <img className='h-full w-full' src={reactPic} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
