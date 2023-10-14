import React from "react";
import { FaUsers } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { PostComment } from "../Comment/PostComment";

export const SingleComminity = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getSingleCommunity = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/community/${id}`
      );
      //console.log(data.community);
      setData(data.community);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleCommunity();
  }, []);
  return (
    <div className='w-full dark:bg-slate-800 h-full flex justify-center gap-4'>
      {/* div-1 */}
      <div className='p-4 flex flex-col gap-6 md:pt-10 w-full  md:w-[70%] '>
        <div className='w-full bg-[#F5F7FD] dark:bg-slate-700 dark:border-0 rounded-md p-4 flex flex-col gap-4 items-start justify-start border'>
          <h1 className='text-xl md:text-3xl  font-bold'>{data.title}</h1>
          <p className='text-[#6B7280] md:text-lg'>{data.description}</p>
        </div>

        {/* post comment */}
        <PostComment post={data._id} />
      </div>

      {/* 2nd div */}
      <div className='hidden md:block w-[20%]'>
        <div className='p-2 flex flex-col gap-4 w-[80%] m-auto'>
          <div className='flex items-center gap-2'>
            <FaUsers className='text-2xl text-gray-400' />
            <p className='font-medium text-lg dark:text-zinc-200'>
              Recent Members
            </p>
          </div>

          {/* mem-1 */}
          <div className='flex items-start gap-2'>
            <div className='p-1 px-2 rounded-md dark:bg-slate-500 dark:text-zinc-100 bg-[#F5F7FD]'>
              <CiUser className='text-xl text-gray-400' />
            </div>
            <div className='font-sans'>
              <p className='text-md dark:text-zinc-200'>Ibrahim Azam</p>
              <p className='text-sm text-[#6B7280]'>Web Developer</p>
            </div>
          </div>

          {/* mem-2 */}
          <div className='flex items-start gap-2'>
            <div className='p-1 px-2 dark:bg-slate-500 rounded-md bg-[#F5F7FD]'>
              <CiUser className='text-xl text-gray-400' />
            </div>
            <div className='font-sans'>
              <p className='text-md dark:text-zinc-200'>Bella</p>
              <p className='text-sm text-[#6B7280]'>Web Developer</p>
            </div>
          </div>

          {/* mem-3 */}
          <div className='flex items-start gap-2'>
            <div className='p-1 px-2 dark:bg-slate-500 rounded-md bg-[#F5F7FD]'>
              <CiUser className='text-xl text-gray-400' />
            </div>
            <div className='font-sans'>
              <p className='text-md dark:text-zinc-200'>Rohan Kumar</p>
              <p className='text-sm text-[#6B7280]'>Web Developer</p>
            </div>
          </div>

          {/* mem-4 */}
          <div className='flex items-start gap-2'>
            <div className='p-1 px-2 dark:bg-slate-500 rounded-md bg-[#F5F7FD]'>
              <CiUser className='text-xl text-gray-400' />
            </div>
            <div className='font-sans'>
              <p className='text-md dark:text-zinc-200'>Jasmine</p>
              <p className='text-sm text-[#6B7280]'>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
