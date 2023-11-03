import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../Components/Loading/Loading";
import { Link } from "react-router-dom";
export const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const getAllBlog = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/posts`
      );
      console.log(data.posts, "blg");
      setBlog(data.posts);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllBlog();
  }, []);
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <section class='bg-white dark:bg-midnightBlack'>
          <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
            <div class='lg:mb-16 mb-8 mx-auto text-center max-w-screen-sm  '>
              <h2 class='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-gray-950 dark:text-white'>
                Our Blog
              </h2>
              <p class='mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
                {" "}
                We use an agile approach to test assumptions and connect with
                the needs of your audience early and often.
              </p>
            </div>

            {/* blog post get */}
            <div class='grid gap-8 lg:grid-cols-2'>
              {currentPosts?.map((el) => {
                return (
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
                      <span class='text-sm'>{timeAgo(el.createdAt)}</span>
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
                        <div className='h-[30px] w-[30px]  text-xl text-zinc-100 bg-gradient-to-r from-[#2F1CA6] to-blue-500 flex items-center justify-center rounded-full'>
                          {el?.author
                            ? el.author.name
                                .split(" ")
                                .map((word) => word.charAt(0).toUpperCase())
                                .join("")
                            : ""}
                        </div>
                        <span class='font-medium text-gray-500'>Admin</span>
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
                );
              })}
            </div>

            {/* pagination */}
            <div class='flex justify-between p-3 md:pl-[80px] md:pr-[80px]'>
              <button
                class='bg-lightCard dark:bg-darkCard m-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500  border border-gray-300 rounded-lg   dark:border-darkCard dark:text-gray-400 '
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastPost >= blog.length}
                class='bg-white dark:bg-midnightBlack hover:bg-lightCard hover:text-darkCard dark:hover:bg-darkCard dark:hover:text-white m-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500  border border-gray-300 rounded-lg   dark:border-darkCard dark:text-gray-400 '
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
