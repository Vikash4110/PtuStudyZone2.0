import React from 'react';
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaBlog, FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaTwitter, FaYoutubeSquare, FaBook, FaBlogger, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePicVikash from '../assets/vikash1.png'; 
import profilePicSahil from '../assets/sahil.png'; 
import about from '../assets/aboutPage.png';
import about1 from '../assets/aboutPage1.png';
import brain from '../assets/brain.png';
import brains from '../assets/brains.png';
import bulb from '../assets/bulb.png';
import LinkdeinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import instagramLogo from '../assets/instagram.png';
import blogLogo from '../assets/blogger.png';
import notesLogo from '../assets/note.png';
import pyqLogo from '../assets/pyq.png';
import syllabusLogo from '../assets/syllabus.png'; 
import blogLogo1 from '../assets/blog.png';
import youtubeLogo from '../assets/youtube.png';
import bookLogo from '../assets/book.png';
import studyLogo from '../assets/study.png';
import resourceLogo from '../assets/resource.png';
import './About.css'

const About = () => {
  return (
    <>
      <br /><br />
      <div className="min-h-screen bg-white mt-10">
        <div className="max-w-7xl mx-auto">
{/* Title Section */}
<section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-16 ">
  <div className="w-full md:w-1/2 flex justify-center md:justify-start">
    <img
      src={about}
      alt="Person with Laptop"
      className="w-full h-auto object-cover rounded-lg scale-150"
    />
  </div>
  <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl ">
    <p className="text-[#323290] uppercase font-semibold text-sm mb-4">
      Learn Anything
    </p>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Welcome to PTU Study Zone!
    </h2>
    <div className="space-y-6">
      {/* First Card */}
      <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
        <div className="flex-shrink-0">
          <img src={studyLogo} className="w-14 h-14" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#323290] cursor-pointer">
            Your Ultimate Study Companion
          </h3>
          <p className="text-gray-600 mt-2 hidden group-hover:block">
            PTU Study Zone offers a streamlined platform for students to access essential academic resources. We provide curated study materials, past papers, and practice books specifically for PTU courses, making it easy to find reliable resources in one place.
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
        <div className="flex-shrink-0">
          <img src={resourceLogo} className="w-14 h-14" />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#323290] cursor-pointer">
            Empowering Students with Quality Resources
          </h3>
          <p className="text-gray-600 mt-2 hidden group-hover:block">
            At PTU Study Zone, we ensure every student has access to top-notch academic resources. Our extensive collection of notes, sample papers, and textbooks covers a broad range of PTU subjects and courses, helping you prepare for exams and enhance your understanding.
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
        <div className="flex-shrink-0">
          <svg
            className="h-8 w-8 text-[#323290]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13h-1v4h1m-2 0h1m-2 0h1m-5.45 0a1.99 1.99 0 00-1.85-1.1c-1.2 0-2.2.95-2.2 2.1v.25h2.5v-1.25h.55zm11.2 1.1h-5v-1.25h2.5v-1.1c0-1.15-1-2.1-2.2-2.1-.5 0-.98.2-1.35.55-.36-.34-.85-.55-1.35-.55-.65 0-1.25.27-1.7.75.4.23.75.53 1.1.9.4-.4.85-.6 1.3-.6.7 0 1.25.55 1.25 1.25v.25h-2.5v1.1h2.5v1.25h-5v-.25c0-1.15 1-2.1 2.2-2.1.5 0 .98.2 1.35.55.36-.34.85-.55 1.35-.55.65 0 1.25.27 1.7.75-.4.23-.75.53-1.1.9-.4-.4-.85-.6-1.3-.6-.7 0-1.25.55-1.25 1.25v.25h5v-.25c0-1.15 1-2.1 2.2-2.1.85 0 1.6.4 2.05 1h2.45v-.25c0-1.15-1-2.1-2.2-2.1a1.99 1.99 0 00-1.85 1.1z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#323290] cursor-pointer">
            A Community-Driven Learning Experience
          </h3>
          <p className="text-gray-600 mt-2 hidden group-hover:block">
            PTU Study Zone fosters a collaborative learning community where students and educators share and update resources. Join us to access the latest materials and enhance your academic journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* what we offer */}
<section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-16 ">

<div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl ">

  <h2 className="text-3xl font-bold text-gray-800 mb-6">
    What We Offer !
  </h2>
  <div className="space-y-6">
    <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
      <div className="flex-shrink-0">
        <img src={notesLogo} className='w-14 h-14' />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">Comprehensive Notes</h3>
        <p className="text-gray-600 group-hover:block hidden">
          A well-curated collection of notes aligned with the latest syllabus, ensuring you study the right material.
        </p>
      </div>
    </div>

    <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
      <div className="flex-shrink-0">
        <img src={pyqLogo} className='w-14 h-14' />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">Previous Year Questions (PYQ)</h3>
        <p className="text-gray-600 group-hover:block hidden">
          A vast repository of previous year question papers to help you understand exam patterns and prepare effectively.
        </p>
      </div>
    </div>

    <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
      <div className="flex-shrink-0">
        <img src={syllabusLogo} className='w-14 h-14'/>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">Syllabus Information</h3>
        <p className="text-gray-600 group-hover:block hidden">
          Stay informed with the most recent syllabus updates to plan your studies efficiently.
        </p>
      </div>
    </div>

    <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
      <div className="flex-shrink-0">
        <img src={blogLogo1} className='w-14 h-14' />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">Blogs</h3>
        <p className="text-gray-600 group-hover:block hidden">
          Engage with the community by writing and reading blogs that share insights, tips, and experiences.
        </p>
      </div>
    </div>

    <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
      <div className="flex-shrink-0">
        <img src={youtubeLogo} className='w-14 h-14' />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">Curated YouTube Channels</h3>
        <p className="text-gray-600 group-hover:block hidden">
          Explore our curated YouTube channels for video lectures and tutorials tailored to Punjab Technical University's syllabus.
        </p>
      </div>
    </div>

    <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group">
      <div className="flex-shrink-0">
        <img src={bookLogo} className='w-14 h-14'/>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">Books Available</h3>
        <p className="text-gray-600 group-hover:block hidden">
          Access a collection of recommended books for each subject to enhance your learning and understanding.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="w-full md:w-1/2 flex justify-center md:justify-start">
  <img
    src={about1}
    alt="Person with Laptop"
    className="w-full h-auto object-cover rounded-lg scale-75 "
  />
</div>
</section>




          {/* Vision Section */}

          <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-16 md:space-x-10   ">

            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl ">

              <div className="flex items-center mb-4">
                <img src={bulb} className='w-20 h-20' />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>


              <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                <div className="ml-4">

                  <p className="text-gray-600">
                  We're expanding PTU Study Zone to include a Teacher Panel for real-time communication, assignment submissions, and feedback.
                  Future updates will offer personalized learning paths, interactive materials, and a discussion forum to foster collaboration and support,  creating a more engaged and supportive academic community.
                  </p>
                </div>
              </div>

            </div>


            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl ">

              <div className="flex items-center mb-4">
                <img src={brain} className='w-20 h-20' />
                <h2 className="text-3xl font-bold">The Inspiration Behind PTU Study Zone</h2>
              </div>


              <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                <div className="ml-4">

                  <p className="text-gray-600">
PTU Study Zone was born from our own challenges as first-year students. We faced issues like finding what and where to study and navigating the syllabus. To address this, we created a centralized platform offering all essential academic resources in one place, aiming to make the academic journey smoother for future students.
                  </p>
                </div>
              </div>

            </div>

          </section>

          <div className="w-full p-12 rounded-3xl border-2 shadow-2xl flex flex-col bg-gray-50">
  <div className="flex items-center space-x-5 self-center mb-10">
    <img src={brains} className='w-20 h-20' alt="Brains" />
    <h2 className="text-4xl font-extrabold text-center text-[#6a1b9a]">Meet The Developers!</h2>
  </div>

  <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 md:space-x-10">
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10">
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 mx-auto bg-white">
        <img
          className="w-auto h-64 m-auto"
          src={profilePicVikash}
          alt="Vikash Bharal"
        />
        <div className="px-6 py-4">
          <div className="font-extrabold text-2xl mb-2 text-center text-[#6a1b9a]">Vikash Bharal</div>
          <p className="text-lg font-semibold text-center text-gray-800">Student</p>
          <p className="text-lg font-semibold text-center text-gray-800">BTech CSE (3rd Year)</p>
          <p className="text-lg font-semibold text-center text-gray-800">Punjab Technical University</p>
        </div>
        <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="https://www.linkedin.com/in/vikash-bharal-5a2a49238/" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={LinkdeinLogo} className='w-11 h-11' alt="LinkedIn" />
          </a>
          <a href="https://github.com/Vikash4110" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={githubLogo} className='w-11 h-11' alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/its_me_vikash18/" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={instagramLogo} className='w-11 h-11' alt="Instagram" />
          </a>
          <a href="https://geteternalknowledge.blogspot.com" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={blogLogo} className='w-11 h-11' alt="Blog" />
          </a>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10">
      <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 mx-auto bg-white">
        <img
          className="w-auto h-64 m-auto"
          src={profilePicSahil}
          alt="Sahil Jamwal"
        />
        <div className="px-6 py-4">
          <div className="font-extrabold text-2xl mb-2 text-center text-[#6a1b9a]">Sahil Jamwal</div>
          <p className="text-lg font-semibold text-center text-gray-800">Student</p>
          <p className="text-lg font-semibold text-center text-gray-800">BTech CSE (3rd Year)</p>
          <p className="text-lg font-semibold text-center text-gray-800">Punjab Technical University</p>
        </div>
        <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="https://www.linkedin.com/in/sahil-jamwal/" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={LinkdeinLogo} className='w-11 h-11' alt="LinkedIn" />
          </a>
          <a href="https://github.com/sahiljamwal" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={githubLogo} className='w-11 h-11' alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/sahiljamwal/" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={instagramLogo} className='w-11 h-11' alt="Instagram" />
          </a>
          <a href="https://sahiljamwal.wordpress.com" className="block my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
            <img src={blogLogo} className='w-11 h-11' alt="Blog" />
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

<br />

        </div>
      </div>

    </>
  );
};

export default About;