import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        toast.error("Failed to fetch the blog post. Please try again later.");
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  const handleBack = () => {
    navigate('/blogs');
  };

  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl shadow-[#323290ba] p-6 relative mt-20 flex flex-col space-y-5 transition-transform duration-300 w-full md:w-5/6 lg:w-4/6">
        <div className="text-[#6e6b80] text-[0.8rem] flex items-center">
          <FaCalendarAlt className="mr-2" />
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>

        <h1 className="font-bold text-[#3c3852] text-4xl capitalize">
          {blog.title}
        </h1>
        <div className="flex items-center text-[#323290] mb-6">
          <FaUser className="mr-2" />
          <span className="font-semibold">{blog.authorName}</span>
        </div>

        <div
          className="prose prose-sm text-[#3c3852] max-w-full"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <button
          onClick={handleBack}
          className="absolute text-white bg-[#323290] p-2 rounded-tl-lg rounded-br-lg bottom-0 right-0 transition duration-200 flex justify-center items-center hover:scale-105">
          <FaArrowLeft className="mr-2" />
          <span>Back to Blogs</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
