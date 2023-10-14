import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { GetCommunity } from "../Components/Community/GetCommunity";

export const Community = () => {
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [code, setCode] = useState("Coding");
  const user = JSON.parse(localStorage.getItem("code-user")) || {};
  const token = JSON.parse(localStorage.getItem("code-token")) || null;

  const handleTog = () => {
    setToggle(!toggle);
  };

  const handlePost = (e) => {
    e.preventDefault();

    const payload = {
      userId: user?._id,
      title: title,
      description: des,
      category: code,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/community`, payload, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header with the token
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Post Added");
          setTitle("");
          setDes("");
        }
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='w-full dark:bg-slate-800 h-full flex justify-center gap-4'>
      {/* div-1 */}
      <div className='p-4 flex flex-col gap-6 md:pt-10 w-full  md:w-[70%] '>
        <div className='w-full bg-[#F5F7FD] dark:bg-slate-700 dark:border-0 rounded-md p-4 flex flex-col gap-4 items-center justify-center border'>
          <div className='w-[98%] h-[50px] flex items-center justify-between'>
            <p className='text-gray-500 font-sans font-medium'>
              Add a new thread
            </p>
            <div
              onClick={handleTog}
              className=' h-[35px] w-[35px] cursor-pointer text-white flex items-center justify-center rounded-md font-bold text-xl bg-[#2F1CA6]'
            >
              {!toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </div>
          </div>
          {toggle && (
            <div className=' w-full'>
              {/* form div */}
              <form onSubmit={handlePost} className='flex flex-col gap-4'>
                <div>
                  <label className='font-medium dark:text-zinc-200'>
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    placeholder='Tell your Issues'
                    className='w-full border rounded-md p-2 dark:bg-slate-600  dark:text-zinc-100 dark:border-0 outline-none'
                  />
                </div>
                <div>
                  <label className='font-medium dark:text-zinc-200'>
                    Description
                  </label>
                  <textarea
                    type='text'
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    className='w-full p-2 h-[80px] dark:bg-slate-600 dark:border-0 dark:text-zinc-100 rounded-md border outline-none'
                  ></textarea>
                </div>
                <div>
                  <button
                    type='submit'
                    className='bg-[#2F1CA6] px-4 text-white p-2 rounded-md font-medium'
                  >
                    Add Post
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <GetCommunity />
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
