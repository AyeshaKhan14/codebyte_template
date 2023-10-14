import React from "react";
import { Link } from "react-router-dom";
import arrow_forward from "../../assests/arrow-forward.svg";
import tag from "../../assests/tag.webp";
import electric from "../../assests/electric.svg";

export const LastComponent = () => {
  return (
    <div className='dark:bg-midnightBlack w-full p-2 md:pt-4 pt-8'>
      <div className=' md:w-[70%] m-auto bg-lightcard dark:bg-slate-800 flex flex-col justify-center items-center gap-8 p-10 md:p-20  rounded-2xl relative'>
        <div className='hidden md:block absolute right-2 top-3'>
          <img
            alt='Tag Icon'
            width='120'
            height='120'
            src={tag}
            style={{ color: "transparent" }}
          />
        </div>
        <div className='flex items-center justify-center px-4 py-2 bg-pink-200 rounded-full text-pink-500 font-bold'>
          <div className='mx-2'>
            <img
              alt='Electric Icon'
              width='20'
              height='20'
              src={electric}
              style={{ color: "transparent" }}
            />
          </div>
          <h2> Get Free Projects </h2>
        </div>
        <div className='font-semibold text-2xl md:text-4xl  text-midnightBlack dark:text-white'>
          <p className='text-center'>
            {" "}
            Try it today, no credit card required!{" "}
          </p>
        </div>
        <div className='text-lg text-gray-500  font-light '>
          <p className='text-center'>
            {" "}
            Totally free . Just sign up and start your website{" "}
          </p>
        </div>
        <div className='flex items-center gap-2 hover:scale-110 rounded-full p-4 px-6 bg-[#FA383E] hover:bg-red-400 hover:dark:bg-midnightBlack cursor-pointer transition duration-700 ease-in-out'>
          <div className='text-lg text-white bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500'>
            <Link to='/projects'>Get started for free </Link>
          </div>
          <img
            alt='forward arrow icon'
            width='20'
            height='20'
            src={arrow_forward}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};
