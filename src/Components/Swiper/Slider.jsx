import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import s1 from "../../assests/slide/s5.jpg";
import s2 from "../../assests/slide/s2.jpg";
import s3 from "../../assests/slide/s4.jpg";

export const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [s1, s2, s3];

  const handleNextButtonClick = () => {
    setCurrentIndex((currentIndex + 1) % imageUrls.length);
  };

  const handlePrevButtonClick = () => {
    setCurrentIndex((currentIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextButtonClick();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className='hidden md:flex items-center justify-center gap-10 w-[60%] m-auto mt-6'>
        {/* Previous button */}
        <button className='animate-bounce' onClick={handlePrevButtonClick}>
          {" "}
          <BsFillArrowLeftCircleFill className='text-4xl text-white' />
        </button>
        {/* Display your image */}
        <div className='w-[900px] h-[600px]'>
          <img className='w-full h-full' src={imageUrls[currentIndex]} />
        </div>

        {/* Next button */}
        <button className='animate-bounce' onClick={handleNextButtonClick}>
          {" "}
          <BsFillArrowRightCircleFill className='text-4xl text-white' />
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
          <button className='animate-bounce' onClick={handlePrevButtonClick}>
            <BsFillArrowLeftCircleFill className='text-2xl text-white' />
          </button>
          {/* Next button */}
          <button className='animate-bounce' onClick={handleNextButtonClick}>
            <BsFillArrowRightCircleFill className='text-2xl text-white' />
          </button>
        </div>
      </div>
    </>
  );
};
