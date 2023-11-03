import React, { useState } from "react";
import light from "../../assests/light.svg";
import axios from "axios";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { useRef } from "react";

export const ProjectsDashboard = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [liveurl, setLiveUrl] = useState("");
  const [vediourl, setVedioUrl] = useState("");
  const [sourcecode, setSourceCode] = useState("");
  const [des, setDes] = useState("");
  const [shortdes, setShortDes] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [techStack, setTechStack] = useState([]);

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

  const handletechStack = (e) => {
    let tech = e.target.value;
    let stack = tech.split(",");
    setTechStack(stack);
  };

  const handleEditorChange = (content) => {
    setDes(content);
  };
  const handleProject = async (e) => {
    e.preventDefault();
    // const form = new FormData();
    try {
      // form.append("thumbnail", images);
      // form.append("projectTitle", title);
      // form.append("shortDescription", shortdes);
      // form.append("projectDescription", des);
      // form.append("projectLink", liveurl);
      // form.append("videoLink", vediourl);
      // form.append("sourceCodeLink", sourcecode);
      // form.append("category", category);
      // form.append("customSlug", slug);
      // form.append("techStack", techStack);

      const token = JSON.parse(localStorage.getItem("code-token")) || null;

      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/projects`,
        {
          thumbnail: images,
          projectTitle: title,
          shortDescription: shortdes,
          projectDescription: des,
          projectLink: liveurl,
          videoLink: vediourl,
          sourceCodeLink: sourcecode,
          category: category,
          customSlug: slug,
          techStack: techStack,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data.project, "project-done");
      if (data.project) {
        toast.success("Project Created Sucessfully");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='border dark:border-0 w-full '>
      <div className='dark:bg-midnightBlack dark:border-0 bg-white border overflow-y-auto max-h-screen dark:text-white  text-gray-950'>
        <div className='p-2'>
          <div className='w-full p-2 lg:p-4 mx-auto dark:bg-slate-800 rounded-lg my-4 bg-lightcard'>
            <form
              onSubmit={handleProject}
              encType='multipart/form-data'
              className='md:space-y-6'
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
                    name='projectUrl'
                    type='text'
                    value={liveurl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                    placeholder='https://www.codebyte.com'
                  />
                  <div className='text-xs font-light text-indigo-500'>
                    This is not required but it will add a good impression
                  </div>
                </div>
                {/* <div className='md:ml-1 md:w-1/2 w-full'>
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
                </div> */}
              </div>
              <div className='md:ml-1 md:w-1/2 w-full'>
                <label
                  for='sourceCodeLink'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Source Code Link (if any)
                </label>
                <input
                  type='text'
                  value={sourcecode}
                  onChange={(e) => setSourceCode(e.target.value)}
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Souce code link '
                />
                <div className='text-xs font-light text-indigo-500'>
                  This is not required but it will add a good impression
                </div>
              </div>
              <div className='md:ml-1 md:w-1/2 w-full'>
                <label
                  for='sourceCodeLink'
                  className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'
                >
                  Vedio Link
                </label>
                <input
                  type='text'
                  value={vediourl}
                  onChange={(e) => setVedioUrl(e.target.value)}
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Souce code link '
                />
                <div className='text-xs font-light text-indigo-500'>
                  This is not required but it will add a good impression
                </div>
              </div>
              <div className=''>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
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
                <JoditEditor
                  ref={editor}
                  type='text'
                  value={des}
                  onChange={handleEditorChange}
                  className='shadow-sm bg-lightCard border h-[80px] border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Short Description (43 Characters for Project and 205 for blog
                  )
                </label>
                <input
                  type='text'
                  value={shortdes}
                  onChange={(e) => setShortDes(e.target.value)}
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Short Description'
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Tech Stack
                </label>
                <input
                  type='text'
                  value={techStack}
                  onChange={(e) => handletechStack(e)}
                  className='shadow-sm bg-lightCard border border-gray-200 text-gray-950 text-sm rounded-lg block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus:outline-none'
                  placeholder='Html, css, javascript'
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Please select</option>
                  <option value='Free'>Free</option>
                  <option value='Paid'>Paid</option>
                </select>
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-950 dark:text-white'>
                  Slug
                </label>
                <input
                  type='text'
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
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
