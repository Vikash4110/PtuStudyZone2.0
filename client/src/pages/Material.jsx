import React, { useState } from 'react';
import { toast } from "react-toastify";
import underline from '../assets/underline.png';
import Contribute from "../assets/contribute.png"
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Material = () => {
    const [formData, setFormData] = useState({
        yourName: '',
        service: '',
        department: '',
        semester: '',
        subjectCode: '',
        subject: '',
        link: '',
        note: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try { 
            const response = await fetch(`${backendUrl}/api/data/material/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                toast.success("Material Sent Successfully");
                setFormData({
                    yourName: '',
                    service: '',
                    department: '',
                    semester: '',
                    subjectCode: '',
                    subject: '',
                    link: '',
                    note: '',
                });
            } else {
                const errorData = await response.json();
                toast.error(errorData.error || 'Failed to submit material');
            }
        } catch (error) {
            toast.error('Failed to submit material');
        }
    };

    return (
        <>
        <div className="flex justify-center min-h-screen items-center bg-[#fbfbfb] pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 items-center gap-10 max-w-screen-lg w-full lg:w-5/6 md:w-4/6 px-4">
                {/* Image Section */}
                <div className="flex flex-col justify-between w-full mx-auto">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6">
                            <h1 className="font-black text-3xl md:text-4xl text-black">
                                Contribute Resources
                            </h1>
                            <img 
                                src={underline} 
                                alt="underline" 
                                className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 md:w-56 h-auto md:top-[-5rem]" 
                            />
                        </div>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 text-justify">
                            "Let’s come together and contribute your resources to uplift the community. By sharing time, skills, and knowledge, we can make a real difference. Every contribution counts—let’s work together to create positive change!"
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2 text-center md:px-0 justify-center">
                        <img src={Contribute} className="w-full col-start-1 col-span-2" alt="Contribute" />
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full bg-white rounded-[20px] p-6 shadow-lg mb-10 lg:mb-0">
                    <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-6">
                        <h1 className="font-semibold text-2xl md:text-3xl text-black">Add Material</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        {/* Name Input */}
                        <div className="flex flex-col">
                            <label htmlFor="yourName" className="font-semibold">Your Name</label>
                            <input
                                type="text"
                                name="yourName"
                                value={formData.yourName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>

                        {/* Service Dropdown */}
                        <div className="flex flex-col">
                            <label htmlFor="service" className="font-semibold">Service</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                required
                            >
                                <option value="">Select Service</option>
                                <option value="Books">Books</option>
                                <option value="Syllabus">Syllabus</option>
                                <option value="pyqs">Previous Year Questions</option>
                                <option value="youtube channel">YouTube Channel</option>
                                <option value="notes">Notes</option>
                            </select>
                        </div>

                        {/* Department and Semester */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="department" className="font-semibold">Department</label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                    required
                                >
                                    <option value="">Select Department</option>
                                    <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
                                    <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                    {/* Add more departments */}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="semester" className="font-semibold">Semester</label>
                                <select
                                    name="semester"
                                    value={formData.semester}
                                    onChange={handleChange}
                                    className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                    required
                                >
                                    <option value="">Select Semester</option>
                                    {[...Array(8)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Subject and Subject Code */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="subject" className="font-semibold">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter subject"
                                    className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="subjectCode" className="font-semibold">Subject Code</label>
                                <input
                                    type="text"
                                    name="subjectCode"
                                    value={formData.subjectCode}
                                    onChange={handleChange}
                                    placeholder="Enter subject code"
                                    className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                        </div>

                        {/* Link Input */}
                        <div className="flex flex-col">
                            <label htmlFor="link" className="font-semibold">Link</label>
                            <input
                                type="text"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                placeholder="Enter Google Drive link to material"
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>

                        {/* Notes Textarea */}
                        <div className="flex flex-col">
                            <label htmlFor="note" className="font-semibold">Notes</label>
                            <textarea
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                placeholder="Optional: Add any notes here"
                                className="w-full bg-white p-3 py-2 rounded-[15px] shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                rows="2"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-3 mt-4 rounded-[15px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Material;
