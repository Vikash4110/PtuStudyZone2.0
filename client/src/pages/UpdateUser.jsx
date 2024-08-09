import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaIdBadge, FaUniversity } from 'react-icons/fa';

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
    <br /><br />
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-semibold text-center text-gray-800">Update Profile</h1>
        </div>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              <FaUser className="inline-block mr-2" /> Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={data.username}
              onChange={handleInput}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rollno" className="block text-gray-700 mb-2">
              <FaIdBadge className="inline-block mr-2" /> Roll No
            </label>
            <input
              type="text"
              name="rollno"
              id="rollno"
              value={data.rollno}
              onChange={handleInput}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-700 mb-2">
              <FaUniversity className="inline-block mr-2" /> Department
            </label>
            <input
              type="text"
              name="department"
              id="department"
              value={data.department}
              onChange={handleInput}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="semester" className="block text-gray-700 mb-2">
            <FaUniversity className="inline-block mr-2" />
              Semester
            </label>
            <input
              type="text"
              name="semester"
              id="semester"
              value={data.semester}
              onChange={handleInput}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              <FaEnvelope className="inline-block mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleInput}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              <FaPhone className="inline-block mr-2" /> Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handleInput}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default UpdateUser;
