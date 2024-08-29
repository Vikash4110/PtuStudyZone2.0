import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEye, FaEdit, FaPen, FaTrash, FaRegNewspaper } from 'react-icons/fa'; // Import user and action icons
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import underline from '../assets/underline.png';
import HandLoader from '../components/HandLoader'


const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(true); // State to manage loading
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const res = await axios.get(`${backendUrl}/api/blogs/my-blogs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        // Sort blogs by date in descending order (newest first)
        const sortedBlogs = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        setBlogs(sortedBlogs);
      } catch (err) {
        console.error('Failed to fetch blogs:', err.response ? err.response.data : err.message);
      }  finally {
        setLoading(false); // Stop the loader once the data is fetched or if an error occurs
      }
    };

    fetchMyBlogs();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Blog Deleted Successfully");
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (err) {
      toast.error("Failed to delete blog");
      console.error('Failed to delete blog:', err.response ? err.response.data : err.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/my-blogs/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleCompose = () => {
    navigate('/compose-blog');
  };

  return (
    <>
      <br /><br />
      <div className="py-12">
        <div className="container mx-auto px-4">
        <div className='relative flex justify-center items-center text-center sm:text-left mb-10 mt-6'>
            <h1 className='text-5xl sm:text-5xl md:text-6xl font-bold flex item-start justify-center sm:justify-start text-center'>
              <span className='mr-2'>My Blogs</span>
            </h1>
            <img src={underline} className='-z-10 absolute top-[-3rem] sm:top-[-4rem] lg:top-[-5rem] xl:top-[-5rem] md:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72' />

          </div>



          <div className="flex justify-center mt-14  space-x-4 ">
          <button onClick={handleCompose} className="items-center justify-center flex space-x-2 bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300">
            <FaPen /> <span>Compose Blog</span>
          </button>
          <Link to="/blogs" className="flex space-x-2 items-center ustify-center bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300">
              <FaRegNewspaper /> <span>PTU Blog</span>
            </Link>
            </div>
            


            <div className="container mx-auto  gap-8 px-4 w-5/6  justify-center">
            {loading ? (  // Conditional rendering based on loading state
            <div className="flex justify-center items-center min-h-[300px]">
            <HandLoader  loading={loading} size={50} />
          </div>
          ) : blogs.length === 0 ? (
            <div className='relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6 col-start-1 col-span-3'>
              <h1 className='text-base sm:text-lgxl md:text-xl font-bold flex items-center justify-center sm:justify-start'>
                <span className='mr-2 text-[#ed1f26]'>No Blogs found !</span>               
                <span className='mr-2 text-[#ed1f26]'>Please Compose a new Blog</span>               
              </h1>
             
            </div>
          ) : (
            blogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-20 flex flex-col space-y-4 hover:scale-105 transition-transform duration-300 w-full">
              <div className="flex items-center  ">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2  ">{blog.title}</h2>

                    </div>
                    <div className="flex justify-between">
                  <div className="flex items-center ">
                    <FaUser className="text-sm md:text-base lg:text-lg text-[#323290]  leading-relaxed text-center " />
                    <span className="text-sm md:text-base lg:text-lg text-[#323290]  leading-relaxed text-center font-semibold ">{blog.authorName}</span>
                  </div>
                  <span className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 font-semibold leading-relaxed text-center ">{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>

                  <p
                    className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + '...' }}
                  />
                <div className="flex justify-end mt-4">
                  <button onClick={() => handleView(blog._id)} className="flex items-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-2">
                    <FaEye className="mr-1" /> View
                  </button>
                  <button onClick={() => handleEdit(blog._id)} className="flex items-center bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors duration-300 mr-2">
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button onClick={() => handleDelete(blog._id)} className="flex items-center bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default MyBlog;
