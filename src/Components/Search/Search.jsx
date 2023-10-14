import React from "react";
import dragAndDrop from "../../assests/React/dragAndDrop.png";
import pricingPage from "../../assests/React/pricingPage.png";
import cvMaker from "../../assests/React/cvMaker.png";
import reactDashboard from "../../assests/React/reactDashboard.png";
import { useParams } from "react-router-dom";

export const Search = () => {
  const { search } = useParams();

  console.log(search, "re");

  return (
    <div>
      <div class='bg-white bg-none dark:bg-midnightBlack dark:bg-hero-pattern dark:bg-cover'>
        <div class='search'>
          <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <div class='lg:mb-16 mb-8 mx-auto text-center max-w-screen-sm  '>
              <h2 class='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-950 dark:text-white'>
                Templates Hub
              </h2>
              <p class='mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
                {" "}
                Enhance your coding skills and expedite your development process
                with ready-to-use templates in various programming languages.
              </p>
            </div>
            <form>
              <div class='flex'>
                <label
                  for='search-dropdown'
                  class='mb-2 text-sm font-medium text-gray-950 sr-only dark:text-white'
                >
                  Your Email
                </label>
                <div class='relative w-full'>
                  <input
                    type='search'
                    id='search-dropdown'
                    class='block p-2.5 w-full z-20 text-sm text-gray-950 bg-lightCard rounded-lg  border border-gray-300  focus:outline-none dark:bg-darkCard dark:border-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white '
                    placeholder='Search Next js, PHP, HTML Templates...'
                    required=''
                    value='react'
                  />
                  <button class='absolute top-2 right-4 text-black dark:text-white'>
                    x
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class='border border-red-600 px-1 pt-4 md:px-8 flex justify-center flex-wrap gap-6'>
          <div>
            <a
              className='block max-w-sm md:w-[450px] h-[450px] bg-white border border-gray-200 rounded-lg shadow hover:bg-lightCard dark:bg-darkCard dark:border-gray-700 dark:hover:bg-midnightBlack flex flex-col hover:scale-110 transition duration-700 ease-in-out'
              href='/blogpost/implement-drag-and-drop-functionality-in-react-js'
            >
              <h2 className='mb-2 p-2 text-xl font-medium tracking-tight text-gray-950 dark:text-white text-center'>
                Implement drag and drop Functionality in React js{" "}
              </h2>
              <p class='font-normal p-2 text-gray-500 text-center'>
                Simple drag and drop feature in React js
              </p>
              <div class='flex items-center justify-center'>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  Reactjs
                </div>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  javascript
                </div>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  css
                </div>
              </div>
              <div class='flex justify-center items-center mt-auto mb-0'>
                <div class='overflow-hidden'>
                  <img
                    alt='Implement drag and drop Functionality in React js '
                    loading='lazy'
                    width='300'
                    height='300'
                    decoding='async'
                    data-nimg='1'
                    src={dragAndDrop}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              className='block max-w-sm md:w-[450px] h-[450px] bg-white border border-gray-200 rounded-lg shadow hover:bg-lightCard dark:bg-darkCard dark:border-gray-700 dark:hover:bg-midnightBlack flex flex-col hover:scale-110 transition duration-700 ease-in-out'
              href='/blogpost/tailwind-and-react-dashboard-template-with-code-included'
            >
              <h2 class='mb-2 p-2 text-xl font-medium tracking-tight text-gray-950 dark:text-white text-center'>
                Tailwind and React Dashboard Template with Code Included
              </h2>
              <p class='font-normal p-2 text-gray-500 text-center'>
                dashboard created with tailwind and react
              </p>
              <div class='flex items-center justify-center'>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  Reactjs
                </div>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  javascript
                </div>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  tailwindcss
                </div>
              </div>
              <div class='flex justify-center items-center mt-auto mb-0'>
                <div class='overflow-hidden'>
                  <img
                    alt='Tailwind and React Dashboard Template with Code Included'
                    loading='lazy'
                    width='300'
                    height='300'
                    decoding='async'
                    data-nimg='1'
                    src={reactDashboard}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              class='block max-w-sm md:w-[450px] h-[450px] bg-white border border-gray-200 rounded-lg shadow hover:bg-lightCard dark:bg-darkCard dark:border-gray-700 dark:hover:bg-midnightBlack flex flex-col hover:scale-110 transition duration-700 ease-in-out'
              href='/blogpost/pricing-page-with-slider-using-reactjs-tailwindcss'
            >
              <h2 class='mb-2 p-2 text-xl font-medium tracking-tight text-gray-950 dark:text-white text-center'>
                Pricing Page With Slider Using React Js and Tailwind CSS{" "}
              </h2>
              <p class='font-normal p-2 text-gray-500 text-center'>
                Pricing Page with a Slider using React JS{" "}
              </p>
              <div class='flex items-center justify-center'>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  Reactjs
                </div>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  Tailwindcss
                </div>
              </div>
              <div class='flex justify-center items-center mt-auto mb-0'>
                <div class='overflow-hidden'>
                  <img
                    alt='Pricing Page With Slider Using React Js and Tailwind CSS '
                    loading='lazy'
                    width='300'
                    height='300'
                    decoding='async'
                    data-nimg='1'
                    src={pricingPage}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              class='block max-w-sm md:w-[450px] h-[450px] bg-white border border-gray-200 rounded-lg shadow hover:bg-lightCard dark:bg-darkCard dark:border-gray-700 dark:hover:bg-midnightBlack flex flex-col hover:scale-110 transition duration-700 ease-in-out'
              href='/blogpost/cv-maker-website-reactjs-bootstrap'
            >
              <h2 class='mb-2 p-2 text-xl font-medium tracking-tight text-gray-950 dark:text-white text-center'>
                CV Maker Website Using React js and Bootstrap
              </h2>
              <p class='font-normal p-2 text-gray-500 text-center'>
                CV Maker Website in React js and Bootstrap
              </p>
              <div class='flex items-center justify-center'>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  Reactjs
                </div>
                <div class='mx-2 transition duration-700 delay-150 ease-in-out text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500'>
                  Bootstrap
                </div>
              </div>
              <div class='flex justify-center items-center mt-auto mb-0'>
                <div class='overflow-hidden'>
                  <img
                    alt='CV Maker Website Using React js and Bootstrap'
                    loading='lazy'
                    width='300'
                    height='300'
                    decoding='async'
                    data-nimg='1'
                    src={cvMaker}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* pagination */}
        <div class='flex justify-between p-3 md:pl-[80px] md:pr-[80px]'>
          <button
            class='bg-lightCard dark:bg-darkCard m-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500  border border-gray-300 rounded-lg   dark:border-darkCard dark:text-gray-400 '
            disabled=''
          >
            Previous
          </button>
          <button
            class='bg-lightCard dark:bg-darkCard m-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500  border border-gray-300 rounded-lg   dark:border-darkCard dark:text-gray-400 '
            disabled=''
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
