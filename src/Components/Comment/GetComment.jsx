import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-toastify";
import { PostComment } from "./PostComment";
import { useDispatch } from "react-redux";
import { setComment } from "../../Redux/slices/comment.slice";

export const GetComment = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("code-user")) || {};
  const token = JSON.parse(localStorage.getItem("code-token")) || null;
  const dispatch = useDispatch();
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

  const handleDel = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/comments/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the Authorization header with the token
          },
        }
      );
      if (data.message === "Comment deleted") {
        getAllComment();
        toast.success("Comment Deleted");
      }
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllComment = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/comments`
      );
      // console.log(data.comments);
      setData(data.comments);
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
    getAllComment();
  }, []);
  return (
    <div className='flex flex-col gap-4'>
      {sortedData?.map((el) => (
        <div key={el._id} className='p-4 rounded-md bg-gray-100'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <div className='rounded-full flex justify-center items-center bg-[#2F1CA6] text-zinc-100 font-medium h-[50px] w-[50px]'>
                {el.author?.name
                  ? el.author.name
                      .split(" ")
                      .map((word) => word.charAt(0).toUpperCase())
                      .join("")
                  : ""}
              </div>
              <p>{el.author?.name}</p>
              <p className='text-gray-500'>{timeAgo(el.createdAt)}</p>
            </div>
            <div className='flex flex-col items-end'>
              <button onClick={() => toggledel(el._id)}>
                {el.author?._id === user?._id ? (
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
          <div>
            <p>{el.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
