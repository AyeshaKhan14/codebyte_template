import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { GetComment } from "./GetComment";
import { useDispatch } from "react-redux";
import { setComment } from "../../Redux/slices/comment.slice";

export const PostComment = ({ post }) => {
  const [title, setTitle] = useState("");
  const user = JSON.parse(localStorage.getItem("code-user")) || {};
  const token = JSON.parse(localStorage.getItem("code-token")) || null;
  const dispatch = useDispatch();
  const handlePostCommt = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/comments`,
        {
          text: title,
          post: post,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the Authorization header with the token
          },
        }
      );
      //console.log(data);
      if (data.message === "Comment created successfully") {
        toast.success("Comment Added");
        setTitle("");
        // dispatch(setComment(data.comments));
        // console.log(setComment(data.comments));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=' flex flex-col gap-4'>
      <h1 className='font-medium text-xl md:text-2xl'>Discussion (3)</h1>
      <div>
        <form onSubmit={handlePostCommt} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label className='font-medium dark:text-zinc-200 md:text-lg'>
              Comment
            </label>
            <textarea
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='w-full p-2 h-[80px] bg-[#F5F7FD] dark:bg-slate-600 dark:border-0 dark:text-zinc-100 rounded-md border outline-none'
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='bg-[#2F1CA6] px-4 text-white p-2 rounded-md font-medium'
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>
      <GetComment />
    </div>
  );
};
