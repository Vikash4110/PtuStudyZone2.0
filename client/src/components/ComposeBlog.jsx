import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { toast } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import underline from '../assets/underline.png';

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
    <div className="flex justify-center items-center min-h-screen bg-[#fbfbfb] px-4 pt-12 md:pt-28">
      <div className="max-w-screen-lg w-full bg-white rounded-[40px] p-8 shadow-lg transition-transform duration-200 ease-in-out">
        
        {/* Form Header */}
        <div className="relative flex justify-center items-center flex-col text-center mb-10 mt-6">
          <h1 className="font-black text-[30px] text-black">
            <FaPen className="inline-block mr-2" /> New Blog
          </h1>
          <img src={underline} alt="underline" className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 h-auto" />
        </div>

        {/* Blog Form */}
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
          <ReactQuill
            value={content}
            onChange={setContent}
            className="mt-4 h-56 min-h-60" 
            placeholder="Write Blog!"
            theme="snow"
            modules={{
              toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'align': [] }],
                ['clean']
              ],
            }}
          />
          <button 
            type="submit" 
            className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-4 mt-40 md:mt-16 rounded-[20px] hover:scale-100 active:scale-95">
            Submit
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default ComposeBlog;
