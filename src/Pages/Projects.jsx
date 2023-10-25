import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Components/Loading/Loading";

export const Projects = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProjects = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/projects`
      );
      //console.log(data.projects, "get");
      setProject(data.projects);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='border-2 border-black w-full h-full'>
      <div>projects</div>
      {/* map div projects */}
      <div className='w-[80%] m-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {project.map((el) => {
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
