import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Instagram } from "react-content-loader";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaUniversity,
  FaIdBadge,
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
    <br />
    <div className="bg-gradient-to-br from-blue-600 to-purple-800 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">
            User Dashboard
          </h1>
          <p className="text-gray-600">Welcome back, {userData.username}!</p>
        </motion.div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Profile Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileItem
              icon={<FaUser className="text-blue-500" />}
              label="Name"
              value={userData.username}
            />
            <ProfileItem
              icon={<FaIdBadge className="text-green-500" />}
              label="University Roll No"
              value={userData.rollno}
            />
            <ProfileItem
              icon={<FaUniversity className="text-yellow-500" />}
              label="Department"
              value={userData.department}
            />
            <ProfileItem
              icon={<FaUniversity className="text-yellow-500" />}
              label="Semester"
              value={userData.semester}
            />
            <ProfileItem
              icon={<FaEnvelope className="text-red-500" />}
              label="Email"
              value={userData.email}
            />
            <ProfileItem
              icon={<FaPhone className="text-green-500" />}
              label="Phone"
              value={userData.phone}
            />
          </div>
          <div className="flex justify-center mt-8">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center"
              onClick={() => navigate("/update-profile")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEdit className="mr-2" /> Update Profile
            </motion.button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <motion.div
    className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {icon}
    <div className="ml-4">
      <p className="font-semibold text-gray-700">{label}:</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </motion.div>
);

export default UserDashboard;
