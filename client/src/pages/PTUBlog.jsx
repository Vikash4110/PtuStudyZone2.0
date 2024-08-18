import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUser, FaPen, FaRegNewspaper } from 'react-icons/fa'; // Importing user, pen, and newspaper icons
import { toast } from "react-toastify";
import Footer from "../components/Footer" 
import underline from '../assets/underline.png';
const PTUBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
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
      }
    };

    fetchBlogs();
  }, [backendUrl]);

  return (
    <>
      <br /> <br />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className='relative flex justify-center items-center text-center sm:text-left mb-10 mt-6'>
            <h1 className='text-5xl sm:text-5xl md:text-6xl font-bold flex item-start justify-center sm:justify-start text-center'>
              <span className='mr-2'>Latest Blogs</span>
            </h1>
            <img src={underline} className='-z-10 absolute top-[-3rem] sm:top-[-4rem] lg:top-[-5rem] xl:top-[-5rem] md:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72' />

          </div>

          {/* Dynamic Buttons for Compose Blog and My Blog */}
          <div className="flex justify-center mt-14  space-x-4 ">
            <Link to="/compose-blog" className=" items-center justify-center flex space-x-2 bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300">
              <FaPen /> <span>Compose Blog</span>
            </Link>
            <Link to="/my-blogs" className=" flex space-x-2 items-center ustify-center bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300">
              <FaRegNewspaper /> <span>My Blog</span>
            </Link>
          </div>

          
          <div className="container mx-auto  gap-8 px-4 w-5/6  justify-center">

            {blogs.length === 0 ? (
              <p className="text-center text-gray-600">No blogs available.</p>
            ) : (
              blogs.map((blog) => (

                <div key={blog._id} className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-20 flex flex-col space-y-4 hover:scale-105 transition-transform duration-300 w-full ">

                 
                    <div className="flex items-center ">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 ">{blog.title}</h2>

                    </div>
                   
                    <div className="flex justify-between">
                  <div className="flex items-center ">
                    <FaUser className="text-sm md:text-base lg:text-lg text-[#323290]  leading-relaxed text-center " />
                    <span className="text-sm md:text-base lg:text-lg text-[#323290]  leading-relaxed text-center font-semibold ">{blog.authorName}</span>
                  </div>
                  <span className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 font-semibold leading-relaxed text-center ">{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>


                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed  ">{blog.content.substring(0, 100)}...</p>


                  <Link to={`/blogs/${blog._id}`} className="bg-white text-[#323290] text-center font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 w-36 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300">
                    Read More
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PTUBlog;
