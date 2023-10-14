import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const PortfolioDashboard = () => {
  const [imgs, setImgs] = useState([]);
  const [title, setTitle] = useState("");
  const [liveurl, setLiveUrl] = useState("");
  const [des, setDes] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const getTechStack = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/tech-stack`
      );
      //console.log(data.techStacks);
      setImgs(data.techStacks);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setImages(file);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handlePostPortfolio = async (e) => {
    e.preventDefault();
    const form = new FormData();
    try {
      form.append("image", images);
      form.append("title", title);
      form.append("description", des);
      form.append("liveProjectLink", liveurl);
      form.append("techStack", selectedTech);
      const token = JSON.parse(localStorage.getItem("code-token")) || null;

      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/portfolio`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //console.log(data, "port-done");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTechStack();
  }, []);

  return (
    <div className='border w-full'>
      <div className='dark:bg-midnightBlack bg-white dark:text-white text-gray-950'>
        <div className='p-2'>
          <div className='w-full p-2 lg:p-4 mx-auto dark:bg-slate-800 rounded-lg md:my-4 bg-lightcard'>
            <form
              onSubmit={handlePostPortfolio}
              encType='multipart/form-data'
              className='md:space-y-6 flex flex-col gap-4 md:gap-0'
            >
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Image
                </label>
                <input
                  type='file'
                  accept='images/*'
                  name='featuredImage'
                  onChange={handleImageChange}
                  id='imageInput'
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                />
                <label htmlFor='imageInput' className='cursor-pointer'>
                  {/* After Selection the Image, Image Will display */}
                  {selectedImage ? (
                    <div className='h-[70px] w-[120px] flex justify-start gap-2'>
                      <img
                        src={selectedImage}
                        alt='Uploaded'
                        className='max-w-full min-w-full object-contain h-auto max-h-[90px]'
                      />
                      <div className='flex justify-between items-center gap-2 rounded-b'>
                        <span className='text-theme2 underline'>
                          {images?.name}
                        </span>
                        <span className='bg-slate-400 w-[120px] p-1 text-center rounded text-slate-950 hover:drop-shadow-secondary'>
                          Change Image
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </label>
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Project title
                </label>
                <input
                  type='text'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Calculator App'
                />
              </div>
              <div className='md:flex'>
                <div className='md:mr-1 md:w-1/2 w-full'>
                  <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                    Project Url (For Live Preview)
                  </label>
                  <input
                    type='text'
                    value={liveurl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    placeholder='https://www.codebyte.com'
                  />
                </div>
              </div>

              <div className=''>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Project Description
                </label>

                <textarea
                  rows='20'
                  type='text'
                  value={des}
                  onChange={(e) => setDes(e.target.value)}
                  className='shadow-sm bg-lightCard border h-[140px] border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                ></textarea>
              </div>

              {/* tech stack */}
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Tech Stack
                </label>
                {/* tech img-parent div */}
                <div className='border border-black w-full md:w-[60%] flex flex-wrap gap-4'>
                  {/* map-div */}
                  {imgs.map((el) => {
                    const newicon =
                      `${process.env.REACT_APP_BASE_URL}/` + el.icon;
                    return (
                      <div
                        key={el._id}
                        className='border  border-red-500 flex '
                      >
                        {" "}
                        <input
                          type='checkbox'
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedTech([...selectedTech, el._id]);
                            } else {
                              setSelectedTech(
                                selectedTech.filter((tech) => tech !== el._id)
                              );
                            }
                          }}
                        />
                        <div className='h-[50px] w-[50px]'>
                          <img className='w-full h-full' src={newicon} alt='' />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className=' flex items-center justify-center'>
                <button
                  type='submit'
                  className='py-3 px-2 items-center justify-center text-md font-medium text-center rounded-lg focus:outline-none  w-[60%] md:w-1/4  bg-[#FA383E] text-white '
                >
                  Post Portfolio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
