import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { toast } from "react-toastify";
import underline from '../assets/underline.png';

// Utility function to strip HTML tags
const stripHtmlTags = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ title: '', content: '', authorName: '' });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Strip HTML tags from the fetched content
        setBlog({
          ...res.data,
          content: stripHtmlTags(res.data.content)
        });
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        toast.error("Failed to fetch blog");
      }
    };

    fetchBlog();
  }, [id, token, backendUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Strip HTML tags from the content before updating
      const plainContent = stripHtmlTags(blog.content);

      await axios.put(`${backendUrl}/api/blogs/${id}`, {
        title: blog.title,
        content: plainContent,
        authorName: blog.authorName,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Blog Updated Successfully");
      navigate('/my-blogs');
    } catch (err) {
      toast.error("Failed to update blog");
      console.error('Failed to update blog:', err);
    }
  };

  return (
    <>
      <br /><br />
      <div className="flex justify-center items-center min-h-screen bg-[#fbfbfb] px-4 pt-8 w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-10 w-full sm:w-5/6 md:w-4/6 lg:w-3/6">
          <div className="w-full justify-self-center md:w-full bg-white rounded-[40px] p-8 shadow-lg">
            <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-0">
              <h1 className="font-black text-[30px] text-black">
                <FaPen className="inline-block mr-2" /> Edit Blog
              </h1>
              <img src={underline} alt="underline" className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 h-auto md:top-[-4rem]" />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
              <div className='flex flex-col'>
                <label htmlFor='title' className='font-bold'>Title</label>
                <input
                  type="text"
                  id='title'
                  value={blog.title}
                  onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                  className="w-full bg-white p-4 rounded-[20px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='authName' className='font-bold'>Author Name</label>
                <input
                  type="text"
                  id='authName'
                  value={blog.authorName}
                  onChange={(e) => setBlog({ ...blog, authorName: e.target.value })}
                  className="w-full bg-white p-4 rounded-[20px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='content' className='font-bold'>Content</label>
                <textarea
                  value={blog.content}
                  id='content'
                  onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                  className="w-full bg-white p-4 rounded-[20px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                  rows="3"
                  required
                />
              </div>
              <button
                type="submit"
                className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-4 mt-6 rounded-[20px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                Update Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
