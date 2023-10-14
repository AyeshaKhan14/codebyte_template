import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Loading } from "../Components/Loading/Loading";

export const Portfolio = () => {
  const [port, setPort] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(port.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPortfolio = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/portfolio`
      );
      //console.log(data.portfolios, "get");
      setPort(data.portfolios);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='dark:bg-midnightBlack dark:text-white p-2 w-full h-full flex flex-col gap-20'>
      <div className=' p-2 flex flex-col gap-2 w-[90%] md:w-[50%] m-auto'>
        <h1 className='text-center text-4xl md:text-5xl font-bold'>Our Work</h1>
        <p className='text-center text-lg md:text-xl text-gray-500 font-medium'>
          Empowering developers with cutting-edge coding templates and tools to
          shape the future of software development.
        </p>
      </div>

      {/* map-div-2 */}
      {port
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((el, i) => {
          return (
            <>
              {i % 2 === 0 ? (
                <div
                  key={el._id}
                  className='w-full flex flex-col md:flex-row md:gap-8'
                >
                  <div className='w-full md:w-[50%]'>
                    <img
                      className='h-full w-full'
                      src='https://snipbyte.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2Fdashboard-template.webp&w=750&q=80'
                      alt=''
                    />
                  </div>
                  <div className='w-full md:w-[50%] flex flex-col gap-2'>
                    <h1 className='text-2xl font-sans font-bold'>{el.title}</h1>
                    <p
                      className='text-purple-500 font-medium text-lg'
                      onClick={() => window.open(el.liveProjectLink)}
                    >
                      {el.liveProjectLink}
                    </p>
                    <p className='text-lg text-gray-500 font-medium'>
                      {el.description}
                    </p>
                    <div>tetc stack</div>
                    <div className='flex'>
                      <button
                        onClick={() => window.open(el.liveProjectLink)}
                        className='p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 text-zinc-100 font-medium text-lg hover:from-pink-500 hover:to-yellow-500  flex items-center gap-2 rounded-full'
                      >
                        <p> Live Preview</p>
                        <BsFillArrowRightCircleFill />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={el._id}
                  className='w-full flex flex-col md:flex-row md:gap-8'
                >
                  <div className='w-full md:w-[50%] p-2 flex flex-col gap-2'>
                    <h1 className='text-2xl font-sans font-bold'>{el.title}</h1>
                    <p
                      className='text-purple-500 font-medium text-lg'
                      onClick={() => window.open(el.liveProjectLink)}
                    >
                      {el.liveProjectLink}
                    </p>
                    <p className='text-lg text-gray-500 font-medium'>
                      {el.description}
                    </p>
                    <div>tetc stack</div>
                    <div className='flex'>
                      <button
                        onClick={() => window.open(el.liveProjectLink)}
                        className='p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 text-zinc-100 font-medium text-lg hover:from-pink-500 hover:to-yellow-500  flex items-center gap-2 rounded-full'
                      >
                        <p> Live Preview</p>
                        <BsFillArrowRightCircleFill />
                      </button>
                    </div>
                  </div>
                  <div className='w-full md:w-[50%]'>
                    <img
                      className='h-full w-full'
                      src='https://snipbyte.com/_next/image?url=%2Fassets%2Fimages%2Fwebp%2Fdashboard-template.webp&w=750&q=80'
                      alt=''
                    />
                  </div>
                </div>
              )}
            </>
          );
        })}
      {/* Pagination buttons */}
      <div className='flex justify-between w-full md:w-[80%] m-auto mt-4'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`mx-2 p-2 px-4 font-medium border rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500"
              : "hover:bg-gray-300"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`mx-2 p-2 px-4 font-medium  border rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500"
              : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
