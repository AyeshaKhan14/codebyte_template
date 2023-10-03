import React, { useState } from "react";
import bgPic from "../../assests/5172658.jpg";
import { Link } from "react-router-dom";
import { SimpleSlider, Slider } from "../Swiper/Slider";

export const HomeImage = () => {
  const [token, setToken] = useState("fjkkllk");
  return (
    <div
      // style={{
      //   backgroundImage: `url(${bgPic})`,
      // }}
      className='h-full p-2 w-full'
    >
      <div className='w-[80%] text-xs md:text-4xl md:w-1/2  m-auto text-center font-sans font-bold'>
        Elevate your coding game with our curated collection of powerful
        templates.
      </div>
      {/* template button */}
      <div className='flex-col gap-2 flex w-[80%] md:w-[30%] md:flex-row justify-center md:gap-6 m-auto mt-6'>
        {token ? (
          <>
            <Link to='/projects'>
              {" "}
              <div className='p-3 px-6 rounded-md bg-[#FA383E] text-white text-center'>
                Get First Free Template
              </div>
            </Link>
            <Link to='/dashboard'>
              {" "}
              <div className='p-3 md:px-10 rounded-md bg-[#FA383E] text-white text-center'>
                Explore DashBoard
              </div>
            </Link>
          </>
        ) : (
          <Link to='/projects'>
            {" "}
            <div className='border-2 p-3 md:px-6 rounded-md bg-[#FA383E] text-white text-center'>
              Get First Free Template
            </div>
          </Link>
        )}
      </div>

      {/* slider */}
      <SimpleSlider />
    </div>
  );
};
