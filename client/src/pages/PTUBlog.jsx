import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUser, FaPen, FaRegNewspaper, FaCalendarAlt } from 'react-icons/fa'; 
import { toast } from "react-toastify";
import underline from '../assets/underline.png';
import HandLoader from '../components/HandLoader';

const PTUBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const res = await axios.get(`${backendUrl}/api/blogs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        // Sort blogs by date in descending order (newest first)
        const sortedBlogs = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setBlogs(sortedBlogs);
      } catch (err) {
        toast.error("Failed to fetch blogs");
        console.error('Failed to fetch blogs:', err.response ? err.response.data : err.message);
      } finally {
        setLoading(false); // Stop the loader once the data is fetched or if an error occurs
      }
    };

    fetchBlogs();
  }, [backendUrl]);

  return (
    <>
      <br /> <br />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className='relative flex justify-center items-center text-center sm:text-left mb-10 mt-6' data-aos="zoom-out" data-aos-duration="1000" >
            <h1 className='text-5xl sm:text-5xl md:text-6xl font-bold flex item-start justify-center sm:justify-start text-center'>
              <span className='mr-2'>Latest Blogs</span>
            </h1>
            <img src={underline} className='-z-10 absolute top-[-3rem] sm:top-[-4rem] lg:top-[-5rem] xl:top-[-5rem] md:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72' />
          </div>

          {/* Dynamic Buttons for Compose Blog and My Blog */}
          <div className="flex justify-center mt-14 space-x-4 ">
            <Link to="/compose-blog" className="items-center justify-center flex space-x-2 bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200">
              <FaPen /> <span>Compose Blog</span>
            </Link>
            <Link to="/my-blogs" className="flex space-x-2 items-center justify-center bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200">
              <FaRegNewspaper /> <span>My Blog</span>
            </Link>
          </div>

          <div className="container mx-auto gap-8 px-4 w-5/6 justify-center">
            {loading ? (  // Conditional rendering based on loading state
              <div className="flex justify-center items-center min-h-[300px]">
                <HandLoader loading={loading} size={50} />
              </div>
            ) : blogs.length === 0 ? (
              <div className='relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6 col-start-1 col-span-3'>
                <h1 className='text-base sm:text-lgxl md:text-xl font-bold flex items-center justify-center sm:justify-start'>
                  <span className='mr-2 text-[#ed1f26]'>No Blogs available!</span>
                </h1>
              </div>
            ) : (
              blogs.map((blog) => (
                <div key={blog._id} className="bg-white rounded-2xl shadow-2xl shadow-[#323290ba] p-6 relative mt-20 flex flex-col hover:scale-105 transition-transform duration-300 w-full" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                  <div className="flex items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">{blog.title}</h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <FaUser className="text-sm md:text-base lg:text-lg text-[#323290] leading-relaxed text-center mr-2" />
                      <span className="text-sm md:text-base lg:text-lg text-[#323290] leading-relaxed text-center font-semibold">{blog.authorName}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <FaCalendarAlt className="mr-2 text-gray-600" />
                      <span className="text-sm md:text-base lg:text-lg text-gray-600 font-semibold leading-relaxed text-center">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + '...' }}
                  />
                  <Link to={`/blogs/${blog._id}`} className="bg-white text-[#323290] text-center font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 w-36 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300">
                    Read More
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PTUBlog;
