import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import underline from '../assets/underline.png';
import { FaUser, FaEnvelope, FaPhone,  FaMobile, FaBuilding, FaListOl } from 'react-icons/fa';

const UpdateUser = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    rollno: "",
    department: "",
    semester: ""
  });
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/auth/user`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();
        setData(userData.userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [authorizationToken, backendUrl]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/auth/update`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Updated Successfully");
        navigate("/dashboard"); // Redirect to user dashboard after successful update
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error("Update Failed");
    }
  };

  return (
    <>
   <br/><br/>
            <div className="flex justify-center items-center min-h-screen bg-[#fbfbfb] px-4 pt-10 md:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-10 max-w-screen-lg w-full md:w-5/6 lg:w-3/6 ">
                    <div className=" w-5/6 justify-self-center md:w-full bg-white rounded-[40px] p-8 shadow-lg">
                        <div className="relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6">
                            <h1 className="font-black text-[30px] text-black">
                                Update Profile
                            </h1>
                            <img src={underline} alt="underline" className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-48 h-auto md:top-[-4rem]" />
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    
                            <div className="flex flex-col">
                                <label htmlFor="username" className="flex  ml-2 font-semibold">
                                    <span><FaUser className="inline-block mr-2 " /></span><span>Username</span> 
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={data.username}
                                    onChange={handleInput}
                                    required
                                    className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="rollno" className="flex  ml-2 font-semibold">
                                <span><FaMobile className="inline-block mr-2" /></span><span>Roll No.</span>
                                </label>
                                <input
                                    type="text"
                                    name="rollno"
                                    id="rollno"
                                    value={data.rollno}
                                    onChange={handleInput}
                                    required
                                    className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="department" className="flex  ml-2 font-semibold">
                                <span><FaBuilding className="inline-block mr-2" /></span><span>Department</span>
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    value={data.department}
                                    onChange={handleInput}
                                    required
                                    className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="semester" className="flex  ml-2 font-semibold">
                                <span><FaListOl className="inline-block mr-2" /></span><span>Semester</span>
                                </label>
                                <input
                                    type="text"
                                    name="semester"
                                    id="semester"
                                    value={data.semester}
                                    onChange={handleInput}
                                    required
                                    className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="flex  ml-2 font-semibold">
                                <span><FaEnvelope className="inline-block mr-2" /></span><span>Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={handleInput}
                                    required
                                    className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="flex  ml-2 font-semibold">
                                    <span><FaPhone className="inline-block mr-2" /></span><span>Phone</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={data.phone}
                                    onChange={handleInput}
                                    required
                                    className="w-full bg-white p-4 rounded-[20px]  shadow-sm border placeholder:text-gray-500 focus:outline-none focus:border-blue-400"
                                />
                            </div>
                            </div>
                            <button
                                type="submit"
                                className="block w-full font-bold bg-gradient-to-r from-purple-500 to-red-500 text-white py-4 mt-6 rounded-[20px] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>  
    </>
  );
};

export default UpdateUser;
