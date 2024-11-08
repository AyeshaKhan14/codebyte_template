import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { Loading } from "../Components/Loading/Loading";

export const ProjectSinglePage = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getSingleProject = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/projects/${id}`
      );
      console.log(data.project, "sin");
      setSingleData(data.project);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLikes = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  useEffect(() => {
    getSingleProject();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='dark:bg-midnightBlack dark:text-white'>
      <div className='w-[90%] md:w-[50%] flex flex-col gap-4 m-auto'>
        <div className='h-[250px] md:h-[450px] w-full'>
          <img
            className='h-full w-full'
            src='https://snipbyte.com/_next/image?url=%2Fuploads%2Fcathy%20pearl%20portfolio%20website%20template.webp&w=828&q=80'
            alt=''
          />
        </div>

        {/* div-2 */}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <div>
              <AiOutlineStar
                onClick={handleLikes}
                className={`cursor-pointer text-${
                  isLiked ? "yellow" : "gray"
                }-500 text-2xl md:text-4xl`}
              />
            </div>
            <p className='text-gray-600 font-medium'>
              {" "}
              {isLiked ? "1 Like" : "No Likes"}
            </p>
          </div>

          {/* prifile div */}
          <div className='w-full flex justify-between items-start '>
            <div className='flex gap-2'>
              <div className='h-[40px] w-[40px] text-xl text-zinc-100 bg-gradient-to-r from-[#2F1CA6] to-blue-500 flex items-center justify-center rounded-full'>
                {singleData.author?.name
                  ? singleData.author?.name
                      .split(" ")
                      .map((word) => word.charAt(0).toUpperCase())
                      .join("")
                  : ""}
              </div>
              <div>
                <p className='text-pink-400 font-bold'>
                  {singleData.author?.name}
                </p>
                <p className='text-gray-500'>Web Developer</p>
                <p>time</p>
              </div>
            </div>
            <Link to={`/user-profile/${singleData?.author?._id}`}>
              {" "}
              <p className=' text-pink-400 font-bold font-sans'>
                Visit User Profile
              </p>
            </Link>
          </div>

          {/* title */}
          <h1 className='text-2xl md:text-4xl font-extrabold'>
            {singleData.projectTitle}
          </h1>

          {/* links button div */}
          <div className='flex justify-between items-center'>
            <button
              onClick={() => window.open(singleData.projectLink)}
              className='border-2 px-4 hover:text-white font-medium border-purple-600 p-2 rounded-md hover:bg-gradient-to-r from-violet-500 to-fuchsia-500'
            >
              Live Preview
            </button>
            <button
              onClick={() => window.open(singleData.sourceCodeLink)}
              className='text-white font-medium p-2 px-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md'
            >
              Download Source Code
            </button>
          </div>

          {/* project dis */}
          <div>
            <p>{singleData.projectDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
