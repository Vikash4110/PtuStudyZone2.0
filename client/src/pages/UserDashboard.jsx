import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Instagram } from "react-content-loader";
import profileImg from '../assets/profile2.jpg';
import Footer from "../components/Footer" 

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaUniversity,
  FaIdBadge,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const { authorizationToken } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/auth/user`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data.userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [authorizationToken, backendUrl]);

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Instagram />
      </div>
    );
  }

  return (
    <>
    <br /><br />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
  <div className="container mx-auto px-6 py-8">
    <div className="bg-white shadow-2xl  rounded-xl overflow-hidden flex flex-col lg:flex-row min-h-[70vh] w-full lg:w-5/6 mx-auto mt-20 lg:mt-0">
      {/* Left Section */}
      <div className="bg-gradient-to-br from-purple-500 to-red-500 p-8 lg:w-1/3 flex flex-col items-center justify-center">
        <img
          src={profileImg}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-white text-3xl font-semibold capitalize">
          {userData.username}
        </h2>
        <p className="text-white text-base mb-4">Student</p>
        <motion.button
          className="text-white mt-4 px-4 py-2 rounded-full border border-white flex items-center"
          onClick={() => navigate("/update-profile")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEdit className="mr-2" /> Edit Profile
        </motion.button>
      </div>

      {/* Right Section */}
      <div className="p-8 pt-8 lg:w-2/3 flex flex-col justify-center">
      
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Student Data
        </h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          <ProfileItem
            label="Email"
            value={userData.email}
            icon={<FaEnvelope className="text-gray-500" />}
          />
          <ProfileItem
            label="Phone"
            value={userData.phone}
            icon={<FaPhone className="text-gray-500" />}
          />
          <ProfileItem
            label="University Roll No"
            value={userData.rollno}
            icon={<FaIdBadge className="text-gray-500" />}
          />
          <ProfileItem
            label="Department"
            value={userData.department}
            icon={<FaUniversity className="text-gray-500" />}
          />
          <ProfileItem
            label="Semester"
            value={userData.semester}
            icon={<FaUniversity className="text-gray-500" />}
          />
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  );
};

const ProfileItem = ({ label, value, icon }) => (
  <div className="flex items-center">
    {icon}
    <div className="ml-4">
      <p className="text-gray-600">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default UserDashboard;
