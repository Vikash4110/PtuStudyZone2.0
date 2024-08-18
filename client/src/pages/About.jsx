import React from 'react';
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaBlog, FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaTwitter, FaYoutubeSquare, FaBook, FaBlogger } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/mypic.jpg'; // Replace with the path to your image
import logo from '../assets/PTULogo.gif'; // Replace with the path to your logo

const About = () => {
  return (
    <>
      <br /><br />
      <div className="min-h-screen bg-white mt-36">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to PTU Study Zone!
          </motion.h1>

          {/* Intro Section */}
          <motion.div
            className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg shadow-2xl p-8 mb-8 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="PTU Study Zone Logo" className="w-32 h-32 mb-4 rounded-full" />
            <div className="text-center">
              <p className="text-gray-800 text-lg leading-relaxed">
                PTU Study Zone is a comprehensive platform designed to simplify the academic experience for students at Punjab Technical University. Whether you're looking for well-organized notes, previous year questions (PYQ), the latest syllabus, or educational resources, everything you need is available in one place.
              </p>
              <p className="mt-4 text-gray-800 text-lg leading-relaxed">
                This platform is created to address the common challenges students face during their academic journey. PTU Study Zone not only provides essential study materials but also fosters a community where students can share their insights and experiences through blogs, contributing to the growth and success of their peers.
              </p>
            </div>
          </motion.div>

          {/* What PTU Study Zone Offers Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaBookOpen className="text-blue-700 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-blue-900">Comprehensive Notes</h3>
              <p className="mt-2 text-gray-700">
                A well-curated collection of notes aligned with the latest syllabus, ensuring you study the right material.
              </p>
            </div>

            <div className="bg-green-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaUserGraduate className="text-green-700 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-green-900">Previous Year Questions (PYQ)</h3>
              <p className="mt-2 text-gray-700">
                A vast repository of previous year question papers to help you understand exam patterns and prepare effectively.
              </p>
            </div>

            <div className="bg-yellow-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaChalkboardTeacher className="text-yellow-700 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-yellow-900">Syllabus Information</h3>
              <p className="mt-2 text-gray-700">
                Stay informed with the most recent syllabus updates to plan your studies efficiently.
              </p>
            </div>

            <div className="bg-pink-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaBlog className="text-pink-700 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-pink-900">Blogs</h3>
              <p className="mt-2 text-gray-700">
                Engage with the community by writing and reading blogs that share insights, tips, and experiences.
              </p>
            </div>

            <div className="bg-red-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaYoutubeSquare className="text-red-700 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-red-900">Curated YouTube Channels</h3>
              <p className="mt-2 text-gray-700">
                Explore our curated YouTube channels for each subject, where you can access video lectures and tutorials tailored to the syllabus of Punjab Technical University.
              </p>
            </div>

            <div className="bg-purple-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <FaBook className="text-purple-700 text-4xl mb-4" />
              <h3 className="text-xl font-bold text-purple-900">Books Available</h3>
              <p className="mt-2 text-gray-700">
                Access a collection of recommended books for each subject to enhance your learning and understanding.
              </p>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-lg shadow-2xl p-8 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              As we continue to grow, we aim to expand PTU Study Zone into a more integrated platform, including a Teacher Panel that will further enhance communication between students and teachers. This future feature will allow teachers to take attendance, assign tasks, and upload exam results, while students will be able to submit assignments and stay connected with their educators.
            </p>
          </motion.div>

          <motion.div
  className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg shadow-2xl p-8 mt-8 flex flex-col md:flex-row items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="md:w-1/3 text-center mb-6 md:mb-0">
    <div className="relative w-48 h-48 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full filter blur-md shadow-lg"></div>
      <img
        src={profilePic}
        alt="Vikash Bharal"
        className="relative rounded-full w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 border-4 border-white"
      />
    </div>
    <h2 className="text-2xl font-bold text-blue-900 mt-4">Developed by Vikash Bharal</h2>
    {/* Social Media Icons */}
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://www.linkedin.com/in/vikash-bharal-5a2a49238/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900 transition-colors duration-300" />
      </a>
      <a href="https://github.com/Vikash4110" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-700 text-2xl hover:text-black transition-colors duration-300" />
      </a>
      <a href="https://geteternalknowledge.blogspot.com" target="_blank" rel="noopener noreferrer">
        <FaBlogger className="text-orange-600 text-2xl hover:text-orange-800 transition-colors duration-300" />
      </a>
      <a href="https://www.instagram.com/its_me_vikash18/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-600 text-2xl hover:text-pink-800 transition-colors duration-300" />
      </a>
      <a href="https://www.youtube.com/channel/UC6HDiYhkf6bMHz_CCbVi41A" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-red-600 text-2xl hover:text-red-800 transition-colors duration-300" />
      </a>
      <a href="https://x.com/bharal_vikash?s=08" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600 transition-colors duration-300" />
      </a>
    </div>
  </div>
  <div className="md:w-2/3 md:pl-8">
  <h1 className="text-3xl font-bold text-blue-900 text-center w-full mb-3">
    The Story Behind PTU Study Zone
  </h1>
    <p className="text-gray-700 text-lg leading-relaxed">
      I'm Vikash Bharal, the developer behind PTU Study Zone. As a passionate Computer Science Engineering 3rd year student at Punjab Technical University The idea for PTU Study Zone came from the challenges I personally faced during my initial days at college. As a first-year student, I struggled with common questions like Where to study? What to study? What is the syllabus? and more. The lack of a centralized resource made the experience overwhelming.
    </p>
    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
    To solve this problem, I created PTU Study Zone—a platform where all the essential resources related to student study and growth are available in one place. My aim is to ensure that future students don't face the same struggles I did, and instead have a seamless, supportive environment to aid their academic journey.
    </p>
  </div>
</motion.div>

        </div>
      </div>
    </>
  );
};

export default About;
