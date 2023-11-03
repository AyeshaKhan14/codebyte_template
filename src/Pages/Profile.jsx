import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../Components/Loading/Loading";

export const Profile = () => {
  const [protog, setProTog] = useState(true);
  const [blgtog, setBlgTog] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [userPro, setUserPro] = useState([]);
  const [blog, setBlog] = useState([]);
  const user = JSON.parse(localStorage.getItem("code-user")) || {};
  const token = JSON.parse(localStorage.getItem("code-token")) || null;

  const handleTog = () => {
    setProTog(!protog);
    setBlgTog(false);
  };

  const handlePostFollow = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/u/follow/${userDetail?._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!data.success) {
        toast.warning(data.message);
      } else {
        toast.success(data.message);
        getUser();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleBlogTog = () => {
    setBlgTog(!blgtog);
    setProTog(false);
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/u/${user?._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the Authorization header with the token
          },
        }
      );
      // console.log(data.user, "det");
      setUserDetail(data.user);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const geUserProject = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/projects/q?userId=${user?._id}`
      );
      // console.log(data.project, "pro");
      setUserPro(data.project);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const geUserBlog = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/posts/q?userId=${user?._id}`
      );
      // console.log(data.posts, "posts");
      setBlog(data.posts);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const timeAgo = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);

    const timeDifference = currentTime - postTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(hours / 24);
      return `${days} days ago`;
    }
  };
  useEffect(() => {
    getUser();
    geUserProject();
    geUserBlog();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className=' dark:bg-midnightBlack dark:text-white w-full h-full'>
      <div className='w-[95%] p-4 m-auto flex flex-col gap-4'>
        {/* div-1 */}
        <div className='flex md:justify-between gap-3 md:flex-row flex-col '>
          <div className='flex items-center gap-2'>
            <div className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] text-xl text-zinc-100 bg-gradient-to-r from-[#2F1CA6] to-blue-500 flex items-center justify-center rounded-full'>
              {userDetail?.name
                ? userDetail.name
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase())
                    .join("")
                : ""}
            </div>
            <div>
              <h2 className='text-xl font-bold'>{userDetail?.name}</h2>
              <p>{userDetail?.introduction}</p>
            </div>
          </div>
          <div className=' flex items-center gap-4'>
            <button className='border p-2 font-medium px-4 rounded-md'>
              View Portfolio
            </button>
            <button
              onClick={handlePostFollow}
              className=' text-zinc-100 bg-gradient-to-r from-[#2F1CA6] to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 font-medium px-4 rounded-md'
            >
              + Follow
            </button>
          </div>
        </div>
        {/* social icons and likes */}
        <div className='flex flex-col gap-2 md:flex-row items-start justify-start md:justify-between'>
          <div>
            {userDetail?.socials?.length === 0 ? (
              ""
            ) : (
              <div className='flex gap-1 justify-between '>
                {userDetail?.socials?.map((el, i) => {
                  return (
                    <div className='flex justify-start'>
                      {/* fb-div */}
                      <div>
                        {el.name === "Facebook" ? (
                          <BsFacebook
                            onClick={() => window.open(el.link)}
                            className='font-bold cursor-pointer text-blue-700 md:text-3xl'
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      {/* twitter-div */}
                      <div>
                        {el.name === "Twitter" ? (
                          <BsTwitter
                            onClick={() => window.open(el.link)}
                            className='font-bold cursor-pointer text-blue-700 md:text-3xl'
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      {/* github-div */}
                      <div>
                        {el.name === "Github" ? (
                          <BsGithub
                            onClick={() => window.open(el.link)}
                            className='font-bold cursor-pointer text-black md:text-3xl'
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      {/* youtube-div */}
                      <div>
                        {el.name === "YouTube" ? (
                          <BsYoutube
                            onClick={() => window.open(el.link)}
                            className='font-bold cursor-pointer text-red-500 md:text-3xl'
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      {/* Linkendin-div */}
                      <div>
                        {el.name === "LinkedIn" ? (
                          <BsLinkedin
                            onClick={() => window.open(el.link)}
                            className='font-bold cursor-pointer text-blue-500 md:text-3xl'
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      {/* instagram-div */}
                      <div>
                        {el.name === "Instagram" ? (
                          <BsInstagram
                            onClick={() => window.open(el.link)}
                            className='font-bold cursor-pointer text-[#feda75] md:text-3xl'
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* folling liked */}
          <div className=' flex items-center justify-center gap-4'>
            <div>
              <p>Followers</p>
              <p className='font-medium'>{userDetail?.followers?.length}</p>
            </div>
            <div>
              <p>Following</p>
              <p className='font-medium'>{userDetail?.following?.length}</p>
            </div>
            <div>
              <p>Likes</p>
              <p className='font-medium'>0</p>
            </div>
          </div>
        </div>

        {/* div-2 */}
        <div className='flex flex-col gap-2'>
          <div className=' flex justify-center gap-10'>
            <div className='cursor-pointer' onClick={handleTog}>
              Projects
            </div>
            <div className='cursor-pointer' onClick={handleBlogTog}>
              Blogs
            </div>
          </div>
          <div className='text-center text-gray-600'>
            Some of my recent work.
          </div>
          {/* project div */}
          {protog && (
            <div className='pt-4'>
              {/* map div projects */}
              <div className='w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                {userPro.map((el) => {
                  return (
                    <Link to={`/projects/${el._id}`}>
                      <div
                        className='border drop-shadow-2xl
               rounded-md 
              flex flex-col px-2 items-center justify-between gap-20 hover:scale-105 transition-transform duration-150'
                        key={el._id}
                      >
                        {/* content div */}
                        <div className='flex flex-col gap-2 p-2'>
                          <h1 className='text-xl font-bold text-center'>
                            {el.projectTitle}
                          </h1>
                          <p className='text-gray-400'>{el.shortDescription}</p>
                          <div className='flex gap-2 items-center justify-center'>
                            {el.techStack.map((ele) => (
                              <p className='text-purple-500 text-lg'>{ele}</p>
                            ))}
                          </div>
                        </div>
                        {/* img div */}
                        <div className='h-[200px] w-[300px]'>
                          <img
                            className='h-full w-full'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&usqp=CAU'
                            alt=''
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* blog div */}
          {blgtog && (
            <>
              {blog.length === 0 ? (
                <h1 className='text-center'>No Blog</h1>
              ) : (
                <div className='pt-4'>
                  {/* map div projects */}
                  <div className='w-[90%] m-auto grid gap-8 lg:grid-cols-2'>
                    {blog?.map((el) => {
                      return (
                        <Link to={`/projects/${el._id}`}>
                          <article class='p-6 bg-lightCard rounded-lg border border-gray-200 shadow-md dark:bg-darkCard dark:border-gray-700'>
                            <div class='flex justify-between items-center mb-5 text-gray-500'>
                              <span class='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
                                <svg
                                  class='mr-1 w-3 h-3'
                                  fill='currentColor'
                                  viewBox='0 0 20 20'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
                                </svg>
                                Information
                              </span>
                              <span class='text-sm'>
                                {timeAgo(el.createdAt)}
                              </span>
                            </div>
                            <h2 class='mb-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white'>
                              {el.title}
                            </h2>
                            <p class='mb-5 font-light text-gray-500 dark:text-gray-400'>
                              {el.content.length > 170
                                ? el.content.substring(0, 170) + "..."
                                : el.content}
                            </p>
                            <div class='flex justify-between items-center'>
                              <div class='flex items-center space-x-4'>
                                {/* <div className='h-[30px] w-[30px]  text-xl text-zinc-100 bg-gradient-to-r from-[#2F1CA6] to-blue-500 flex items-center justify-center rounded-full'>
                              {el?.author
                                ? el.author.name
                                    .split(" ")
                                    .map((word) => word.charAt(0).toUpperCase())
                                    .join("")
                                : ""}
                            </div> */}
                                <span class='font-medium text-gray-500'>
                                  Admin
                                </span>
                              </div>
                              <a
                                class='inline-flex items-center font-medium text-blue-500 hover:underline'
                                href='/blogpost/earn-money-with-coding-templates-on-snipbyte'
                              >
                                <Link to={`/blog/${el._id}`}> Read more</Link>
                                <svg
                                  class='ml-2 w-4 h-4'
                                  fill='currentColor'
                                  viewBox='0 0 20 20'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fill-rule='evenodd'
                                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                    clip-rule='evenodd'
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </article>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
