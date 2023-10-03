import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqvgBq2pcWse_z6vU73ihqGv82ruc4vQ4qg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKmsY-TXOKpQh2CnO27NXzxNkaP5FzO41wg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNT6BbyhRmsM49ocZbFWqmnGbtWOAVJ6vUg&usqp=CAU",
  ];

  const handleNextButtonClick = () => {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  };

  const handlePrevButtonClick = () => {
    setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <>
      <div className='hidden md:flex items-center justify-center gap-10 w-[60%] m-auto mt-6'>
        {/* Previous button */}
        <button onClick={handlePrevButtonClick}>
          {" "}
          <BsFillArrowLeftCircleFill className='text-4xl text-[#2F1CA6]' />
        </button>
        {/* Display your image */}
        <div className='w-[900px] h-[600px]'>
          <img className='w-full h-full' src={imageUrls[currentIndex]} />
        </div>

        {/* Next button */}
        <button onClick={handleNextButtonClick}>
          {" "}
          <BsFillArrowRightCircleFill className='text-4xl text-[#2F1CA6]' />
        </button>
      </div>

      {/* responsive slide */}
      <div className='md:hidden flex flex-col items-center justify-center gap-4 w-[60%] m-auto mt-6'>
        {/* Display your image */}
        <div className='w-[300px] h-[300px]'>
          <img className='w-full h-full' src={imageUrls[currentIndex]} />
        </div>

        <div className='w-[100%] flex justify-center gap-6'>
          {/* Previous button */}
          <button onClick={handlePrevButtonClick}>
            <BsFillArrowLeftCircleFill className='text-2xl text-[#2F1CA6]' />
          </button>
          {/* Next button */}
          <button onClick={handleNextButtonClick}>
            <BsFillArrowRightCircleFill className='text-2xl text-[#2F1CA6]' />
          </button>
        </div>
      </div>
    </>
  );
};
