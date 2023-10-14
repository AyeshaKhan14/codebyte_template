import React from "react";
import light from "../../assests/light.svg";

export const ProjectsDashboard = () => {
  return (
    <div className='border dark:border-0 w-full '>
      <div className='dark:bg-midnightBlack bg-white border overflow-y-auto max-h-screen dark:text-white  text-gray-950'>
        <div className='p-2'>
          <div className='w-full p-2 lg:p-4 mx-auto dark:bg-slate-800 rounded-lg my-4 bg-lightcard'>
            <form className='md:space-y-6'>
              <div>
                <label
                  for='featuredImage'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Thumbnail
                </label>
                <input
                  type='file'
                  accept='image/webp'
                  name='featuredImage'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                />
                <div className='text-xs font-light text-indigo-500'>
                  Only WEBP Image format is allowed
                </div>
              </div>
              <div>
                <label
                  for='title'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Project title
                </label>
                <input
                  name='title'
                  type='text'
                  id='title'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Calculator App'
                />
              </div>
              <div className='md:flex'>
                <div className='md:mr-1 md:w-1/2 w-full'>
                  <label
                    for='projectUrl'
                    className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                  >
                    Project Url (For Live Preview)
                  </label>
                  <input
                    name='projectUrl'
                    type='text'
                    id='projectUrl'
                    className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    placeholder='https://www.codebyte.com'
                  />
                  <div className='text-xs font-light text-indigo-500'>
                    This is not required but it will add a good impression
                  </div>
                </div>
                <div className='md:ml-1 md:w-1/2 w-full'>
                  <label
                    for='videoUrl'
                    className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                  >
                    Demo Video Src (Embedded Youtube Video Src Only -- iFrame)
                  </label>
                  <input
                    name='videoUrl'
                    type='text'
                    id='videoUrl'
                    className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    placeholder='https://www.youtube.com/embed/w3R21232x'
                  />
                  <div className='text-xs font-light text-indigo-500'>
                    This is not required but it will add a good impression
                  </div>
                </div>
              </div>
              <div className='md:ml-1 md:w-1/2 w-full'>
                <label
                  for='sourceCodeLink'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Source Code Link (if any)
                </label>
                <input
                  name='sourceCodeLink'
                  type='text'
                  id='sourceCodeLink'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Souce code link '
                />
                <div className='text-xs font-light text-indigo-500'>
                  This is not required but it will add a good impression
                </div>
              </div>

              <div className=''>
                <label
                  for='description'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Project Description
                </label>
                <div className='gap-2 flex my-2 cursor-pointer'>
                  <img
                    alt='Hint Icon'
                    width='20'
                    height='20'
                    src={light}
                    style={{ color: "transparent" }}
                  />
                  <p className='text-gray-500 text-sm '>
                    {" "}
                    Click here to view a video tutorial on writing a
                    description.
                  </p>
                </div>
                <textarea
                  rows='20'
                  name='description'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  id='description'
                ></textarea>
              </div>
              <div>
                <label
                  for='shortDescription'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Short Description (43 Characters for Project and 205 for blog
                  )
                </label>
                <input
                  name='shortDescription'
                  type='text'
                  id='shortDescription'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Short Description'
                />
              </div>
              <div>
                <label
                  for='languages'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Languages
                </label>
                <input
                  name='languages'
                  type='text'
                  id='languages'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Language 1, Language 2, Language 3'
                />
              </div>
              <div className='md:flex'>
                <div className='md:mr-1 md:w-1/2 w-full'>
                  <label
                    for='category'
                    className=' block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                  >
                    Category
                  </label>
                  <select
                    id='category'
                    name='category'
                    className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  >
                    <option value='Free' selected=''>
                      Free
                    </option>
                    <option value='Paid'>Paid</option>
                  </select>
                </div>
                <div className='md:ml-1 md:w-1/2 w-full'>
                  <label
                    for='type'
                    className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                  >
                    Type
                  </label>
                  <select
                    id='type'
                    name='type'
                    className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  >
                    <option value='Project' selected=''>
                      Project
                    </option>
                    <option value='Blog'>Blog</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  for='tags'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Your Tags
                </label>
                <input
                  name='tags'
                  type='text'
                  id='tags'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Tag 1, Tag 2, Tag 3'
                />
              </div>
              <div>
                <label
                  for='slug'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Slug
                </label>
                <input
                  name='slug'
                  type='text'
                  id='slug'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='how-to-make-a-calculator'
                />
                <div className='text-xs font-light text-indigo-500'>
                  Try to make a good seo friendly slug it will help you to get
                  more users
                </div>
              </div>
              <div className=' flex items-center justify-center'>
                <button
                  type='submit'
                  className='py-3 px-2 items-center justify-center text-md font-medium text-center rounded-lg focus:outline-none  w-1/4  bg-[#FA383E] text-white '
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
