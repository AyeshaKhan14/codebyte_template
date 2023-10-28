import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Components/Loading/Loading";

export const Projects = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const getAllProjects = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/projects`
      );
      console.log(data.projects, "get");
      setProject(data.projects);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProjects();
  }, []);

  const filterProjects = () => {
    return project.filter((el) => {
      // Check if any techStack item matches the search input
      const hasMatchingTechStack = el.techStack.some((techStackItem) =>
        techStackItem.toLowerCase().includes(searchInput.toLowerCase())
      );
      return hasMatchingTechStack;
    });
  };

  const sortedProjects = filterProjects()
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col gap-6 w-full h-full'>
      {/* ttitle div */}
      <div className='flex flex-col gap-4 p-4'>
        <div className='text-center w-[90%] md:w-[50%] m-auto flex flex-col gap-2'>
          <h1 className='text-4xl md:text-5xl font-bold'>Templates Hub</h1>
          <p className='text-lg text-gray-500'>
            Enhance your coding skills and expedite your development process
            with ready-to-use templates in various programming languages. Your
            Email
          </p>
        </div>

        <div className='w-[90%] md:w-[50%] m-auto flex items-center justify-center'>
          <input
            type='text'
            placeholder='Search Next js,PHP'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className='shadow-sm bg-lightCard rounded-md border border-gray-200 text-gray-950 text-sm block w-full p-2.5  focus:outline-none'
          />
        </div>
      </div>
      {/* map div projects */}
      <div className='w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {sortedProjects.map((el) => {
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
  );
};
