import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const GetCommunity = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("code-user")) || {};
  const token = JSON.parse(localStorage.getItem("code-token")) || null;

  // console.log(user);
  const delID = data.reduce((acc, el) => {
    acc[el._id] = false;
    return acc;
  }, {});
  const [deltog, setDelTog] = useState(delID);

  const toggledel = (id) => {
    setDelTog((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getCommutnityData = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/community`)
      .then((res) => {
        // console.log(res.data.communities);
        setData(res.data.communities);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDel = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/community/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the Authorization header with the token
          },
        }
      );
      if (data.message === "Community deleted successfully") {
        getCommutnityData();
        toast.success("Post Deleted");
      }
      // console.log(data);
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

  const sortedData = data.slice().sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  useEffect(() => {
    getCommutnityData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=' h-[100%] flex flex-col gap-4 items-center rounded-md hover:scale-100 w-full '>
      {sortedData.map((el) => (
        <div
          key={el._id}
          className='hover:scale-110 transition duration-700 ease-in-out w-full h-auto flex flex-col gap-2 p-4 px-6 dark:bg-slate-700 hover:duration-150 dark:text-zinc-100 bg-[#F5F7FD] rounded-md'
        >
          <div className='flex items-center justify-between'>
            <h1 className='font-bold md:text-2xl'>{el.title}</h1>
            <div className='flex flex-col items-end'>
              <button onClick={() => toggledel(el._id)}>
                {el.userId?._id === user?._id ? (
                  <p>
                    <BsThreeDots />
                  </p>
                ) : (
                  ""
                )}
              </button>
              {deltog[el._id] && (
                <div className='rounded-md flex justify-center md:p-1 md:py-2 items-center h-[30px] bg-green-100 w-[80px] md:w-[100px] dark:text-gray-500 md:h-[40px]'>
                  <button onClick={() => handleDel(el._id)}>Delete</button>
                </div>
              )}
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-start gap-2'>
              <div className='rounded-md flex justify-center items-center bg-[#2F1CA6] text-zinc-100 font-medium h-[50px] w-[45px]'>
                {el.userId?.name
                  ? el.userId.name
                      .split(" ")
                      .map((word) => word.charAt(0).toUpperCase())
                      .join("")
                  : ""}
              </div>
              <div>
                <p>{el.userId?.name}</p>
                <p className='text-gray-500'>{timeAgo(el.createdAt)}</p>
              </div>
            </div>
            <div className='border p-2 rounded-full md:px-4 px-2 text-sm bg-[#E0E7FF] text-blue-500'>
              {el.category}
            </div>
          </div>

          <div className='overflow-hidden'>
            <p> {el.description}</p>
          </div>

          <div className='flex justify-start'>
            <div className='flex items-center dark:bg-slate-600  rounded-full p-2 px-4 bg-gray-300 gap-2'>
              <Link
                to={`/community/${el._id}`}
                className='flex items-center dark:bg-slate-600  rounded-full p-2 px-4 bg-gray-300 gap-2'
              >
                {" "}
                <FaRegCommentDots className='md:text-2xl dark:text-zinc-200 text-gray-600 text-xl' />
                <p className='text-sm md:text-base'>Add Response</p>{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
