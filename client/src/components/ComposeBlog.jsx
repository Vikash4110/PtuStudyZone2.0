import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { toast } from "react-toastify";
import underline from '../assets/underline.png';
import blogImage from '../assets/blog-image2.png';

const ComposeBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/api/blogs/add`, { title, content, authorName }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTitle('');
      setContent('');
      setAuthorName('');
      toast.success("Blog Created Successfully");
      navigate('/my-blogs');
    } catch (err) {
      toast.error("Failed to create blog");
      console.error('Failed to create blog:', err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fbfbfb] px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-screen-lg w-full">
        
        {/* Form Section */}
        <div className=" w-5/6 justify-self-center md:w-full bg-white rounded-[40px] p-8 shadow-lg">
          <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6">
            <h1 className="font-black text-[30px] text-black">
              <FaPen className="inline-block mr-2" /> New Blog
            </h1>
            <img src={underline} alt="underline" className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 h-auto md:top-[-4rem]" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white p-4 rounded-[20px] mt-4 shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
              placeholder="Title"
              required
            />
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full bg-white p-4 rounded-[20px] mt-4 shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
              placeholder="Author Name"
              required
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-white p-4 rounded-[20px] mt-4 shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
              placeholder="Write Blog!"
              rows="5"
              required
            />
            <button 
              type="submit" 
              className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-4 mt-6 rounded-[20px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95">
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          <img src={blogImage} alt="Blog Illustration" className="w-full h-auto object-cover rounded-lg" />
        </div>

      </div>
    </div>
  );
};

export default ComposeBlog;
