import React from "react";
import { Link } from "react-router-dom";

import user from "../assests/user.webp";
import user2 from "../assests/user2.webp";
import user3 from "../assests/user3.webp";
import user4 from "../assests/user4.webp";
import users from "../assests/users.webp";
import adminpic from "../assests/admin.webp";
import electric from "../assests/electric.svg";
import arrow_forward from "../assests/arrow-forward.svg";
import tag from "../assests/tag.webp";

export const About = () => {
  return (
    <div>
      <div class='dark:bg-midnightBlack bg-white '>
        <div class='mx-4'>
          <div className='md:flex md:items-center md:justify-center mb-4 bg-white bg-none dark:bg-midnightBlack dark:bg-cover'>
            <div className='w-full md:w-1/2 text-center md:text-left'>
              <div className='lg:mb-16 mb-8'>
                <h2 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-950 dark:text-white'>
                  Empowering Developers with Innovative Solutions
                </h2>
                <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
                  We provide developers with innovative solutions, including
                  coding templates and cutting-edge tools, to streamline
                  development processes and unleash their full potential. Join
                  us in shaping the future of software development.
                </p>
              </div>
            </div>
            <div className='md:w-1/2 w-full images md:mt-[30px] '>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='md:mt-[80px]'>
                  <div className='md:mb-[30px] h-auto'>
                    <img
                      alt='User Icon'
                      width='500'
                      height='500'
                      src={user}
                      style={{ color: "transparent", borderRadius: "14px" }}
                    />
                  </div>
                  <div>
                    <img
                      alt='User Icon'
                      width='500'
                      height='500'
                      src={user2}
                      style={{ color: "transparent", borderRadius: "14px" }}
                    />
                  </div>
                </div>
                <div>
                  <div className='md:mb-[30px]'>
                    <img
                      alt='User Icon'
                      width='500'
                      height='500'
                      src={user3}
                      style={{ color: "transparent", borderRadius: "14px" }}
                    />
                  </div>
                  <div>
                    <img
                      alt='User Icon'
                      width='500'
                      height='500'
                      src={user4}
                      style={{ color: "transparent", borderRadius: "14px" }}
                    />
                  </div>
                </div>
                <div className='md:mt-[80px]'>
                  <img
                    alt='User Icon'
                    width='500'
                    height='500'
                    src={users}
                    style={{ color: "transparent", borderRadius: "14px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <ol className='items-center sm:flex mb-4'>
            <li className='relative mb-6 sm:mb-0'>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-950 dark:text-white'>
                  Company Founded
                </h3>
                <time className='block mb-2 text-sm font-normal leading-none text-indigo-500'>
                  Feb 05 , 2023
                </time>
                <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                  The moment our journey began, marking the birth of our company
                  and its mission to drive innovation in the coding industry.
                </p>
              </div>
            </li>
            <li className='relative mb-6 sm:mb-0'>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-950 dark:text-white'>
                  Key Projects
                </h3>
                <time className='block mb-2 text-sm font-normal leading-none text-indigo-500'>
                  Feb 08 , 2023 (More Comming)
                </time>
                <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                  Showcasing our expertise through groundbreaking coding
                  solutions.
                </p>
              </div>
            </li>
            <li className='relative mb-6 sm:mb-0'>
              <div className='mt-3 sm:pr-8'>
                <h3 className='text-lg font-semibold text-gray-950 dark:text-white'>
                  Future Initiatives
                </h3>
                <time className='block mb-2 text-sm font-normal leading-none text-indigo-500'>
                  Upcoming
                </time>
                <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                  Driving innovation and shaping the future of coding with
                  upcoming groundbreaking initiatives."
                </p>
              </div>
            </li>
          </ol>
          <div>
            <section className='bg-lightcard dark:bg-slate-800 relative '>
              <div className='py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:items-center lg:py-16 lg:px-6'>
                <div className='w-full lg:w-1/3 font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                  <h2 className='mb-4 text-center md:text-left text-4xl tracking-tight font-extrabold text-gray-950 dark:text-white'>
                    Access an Array of Inspiring Templates for Your Visionary
                    Projects!
                  </h2>
                  <p className='mb-5 text-gray-500 font-light text-base'>
                    We are excited to introduce our new template providing
                    website! Our platform is designed to empower you with a wide
                    range of high-quality templates for all your creative needs.
                    Whether you're a business owner, a student, a freelancer, or
                    anyone looking to enhance your projects, we've got you
                    covered.
                  </p>
                  <Link
                    to='/projects'
                    className='w-[250px] bg-indigo-500 text-white py-3 px-5 text-sm font-medium text-center rounded-3xl focus:outline-none'
                  >
                    Get Your Website
                  </Link>
                  <div className='flex items-start mb-4 mt-5'>
                    <img
                      alt='Admin Icon'
                      loading='lazy'
                      width='30'
                      height='30'
                      decoding='async'
                      data-nimg='1'
                      src={adminpic}
                      style={{ color: "transparent", borderRadius: "14px" }}
                    />
                    <p className='  mx-3 mt-4 text-gray-400 font-light text-base'>
                      Explore a wide range of high-quality templates for all
                      your creative needs and bring your ideas to life
                      effortlessly. Start designing and achieving your vision
                      today! ☺️
                    </p>
                  </div>
                </div>
                <div className='hidden right-0 top-[230px] w-3/4 lg:flex flex-wrap justify-center absolute transform rotate-45 '>
                  <div className='card mb-4 mx-1'>
                    <Link
                      className='block max-w-sm p-6 border-0 text-white rounded-lg shadow bg-gradient-to-r from-cyan-500 to-blue-500 '
                      to='/projects'
                    >
                      <h5 className='mb-2 text-2xl font-bold tracking-tight snipcss0-3-3-4'>
                        Collection of Free Templates
                      </h5>
                      <p className='font-normal snipcss0-3-3-5'>
                        Explore our collection of free templates and accelerate
                        your project's development. Download and use them
                        without any cost.
                      </p>
                    </Link>
                  </div>
                  <div className='card mb-4 mx-1 snipcss0-1-1-6'>
                    <Link
                      className='block max-w-sm p-6 border-0 rounded-lg shadow hover:bg-gray-100 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 snipcss0-2-6-7'
                      to='/projects'
                    >
                      <h5 className='mb-2 text-2xl font-bold tracking-tight snipcss0-3-7-8'>
                        Premium Paid Templates
                      </h5>
                      <p className='font-normal snipcss0-3-7-9'>
                        Discover our premium templates with professional designs
                        . Elevate your projects with these high-quality
                        templates.
                      </p>
                    </Link>
                  </div>
                  <div className='card rounded-lg mb-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mx-1 '>
                    <Link
                      className='block max-w-sm p-6 border-0 rounded-lg shadow text-white '
                      to='/projects'
                    >
                      <h5 className='mb-2 text-2xl font-bold tracking-tight '>
                        Monetize Your Creativity
                      </h5>
                      <p className='font-normal '>
                        Monetize your creativity by selling your templates on
                        our platform. Join our community of creators and start
                        earning from your designs.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className=' flex flex-col gap-24 pt-4 pb-4 md:px-8 lg:p-24'>
            <div className=' bg-lightcard dark:bg-slate-800 flex flex-col justify-center items-center gap-8 p-10 md:p-20  rounded-2xl relative'>
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
        </div>
      </div>
    </div>
  );
};
