import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const BlogDashboard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentLength, setContentLength] = useState(0);
  const [contentText, setContentText] = useState(false);

  const handleContent = (e) => {
    setContent(e.target.value);
    setContentLength(e.target.value.length);
  };

  const handleBlog = (e) => {
    e.preventDefault();
    if (contentLength <= 150) {
      setContentText(true);
      return;
    }
    try {
      const payload = {
        title: title,
        content: content,
      };
      const token = JSON.parse(localStorage.getItem("code-token")) || null;
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .post(`${process.env.REACT_APP_BASE_URL}/posts`, payload, { headers })
        .then((res) => {
          if (res.data.message === "Post created successfully") {
            toast.success(res.data.message);
          }
          setContent("");
          setTitle("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='w-full h-full'>
      <div className='dark:bg-midnightBlack bg-white dark:text-white text-gray-950'>
        <div className='p-2'>
          <div className='w-full p-2 lg:p-4 mx-auto dark:bg-slate-800 rounded-lg md:my-4 bg-lightcard'>
            <form onSubmit={handleBlog} className='space-y-4 md:space-y-6'>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Add Title'
                />
              </div>

              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Content
                </label>
                <textarea
                  rows='20'
                  type='text'
                  value={content}
                  onChange={handleContent}
                  className='shadow-sm bg-lightCard border border-gray-200 p-2 h-[300px] text-gray-950 text-sm rounded-lg block w-full  dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Add Content'
                ></textarea>
                {contentText && (
                  <p className='text-sm text-[#FA383E] font-medium dark:text-gray-300'>
                    {content.length}/150 characters
                  </p>
                )}
              </div>

              <div className=' flex items-center justify-center'>
                <button
                  type='submit'
                  className='py-3 px-2 items-center justify-center text-md font-medium text-center hover:bg-red-400 rounded-lg focus:outline-none  w-1/4  bg-[#FA383E] text-white '
                >
                  Post Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
