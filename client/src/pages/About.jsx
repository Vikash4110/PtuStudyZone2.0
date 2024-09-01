import React from 'react';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Importing an icon from react-icons

import underline from '../assets/underline.png';
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
import communityLogo from '../assets/community.png';


const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <br /><br />
      <div className="min-h-screen bg-white mt-20 ">
        <div className="max-w-7xl mx-auto">
          <div className='relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6' data-aos="zoom-out" data-aos-duration="1000">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center sm:justify-start text-center'>
              <span className='mr-2'>About Us</span>
            </h1>
            <img src={underline} className='absolute top-[-4rem]  sm:top-[-5rem] md:top-[-6rem] lg:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72' />
          </div>
          {/* Title Section */}
          <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-16 md:mt-20 ">
            <div className="z-20 w-4/6 sm:w-3/5 md:w-3/6 lg:w-1/2 flex justify-center lg:justify-start" data-aos="zoom-out" data-aos-duration="1000">
              <img
                src={about}
                alt="Person with Laptop"
                className="w-full h-auto object-cover rounded-lg scale-150"
              />
            </div>
            <div className="w-full sm:w-5/6 lg:w-1/2 mt-4 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl" data-aos="fade-up" data-aos-duration="1000">
              <p className="text-[#323290] uppercase font-semibold text-sm sm:text-base lg:text-lg mb-4">
                Learn Anything
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Welcome to PTU Study Zone!
              </h2>
              <div className="space-y-6" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                {/* First Card */}
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={studyLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" alt="Study Logo" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className='flex justify-between items-center'>
                      <h3
                        className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 hover:text-[#323290] cursor-pointer"
                        onClick={() => toggleOpen(0)}
                      >
                        Your Comprehensive All-in-One Study Powerhouse
                      </h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(0)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 0 ? 'transform rotate-180 transition-all duration-700' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 0 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2 ">
                        PTU Study Zone offers a streamlined platform for students to access essential academic resources. We provide curated study materials, past papers, and practice books specifically for PTU courses, making it easy to find reliable resources in one place.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={resourceLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className='flex justify-between items-center'>
                      <h3
                        className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 hover:text-[#323290] cursor-pointer"
                        onClick={() => toggleOpen(1)}
                      >
                        Empowering Students with Quality Resources
                      </h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(1)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 1 ? 'transform rotate-180 transition-all duration-700' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                        At PTU Study Zone, we ensure every student has access to top-notch academic resources. Our extensive collection of notes, sample papers, and textbooks covers a broad range of PTU subjects and courses, helping you prepare for exams and enhance your understanding.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third Card */}
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={communityLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className='flex justify-between items-center'>
                      <h3
                        className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 hover:text-[#323290] cursor-pointer"
                        onClick={() => toggleOpen(2)}
                      >
                        A Community-Driven Learning Experience
                      </h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(2)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 2 ? 'transform rotate-180 transition-all duration-700' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                        PTU Study Zone fosters a collaborative learning community where students and educators share and update resources. Join us to access the latest materials and enhance your academic journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* what we offer */}
          <section className="flex flex-col lg:flex-row items-center justify-between lg:py-12 px-4 lg:px-16 lg:mt-8 -mt-20">

            <div className="w-full sm:w-5/6 lg:w-1/2 lg:pl-12 p-10 rounded-3xl border-2 shadow-2xl order-2 lg:order-1 -mt-20 sm:-mt-32 md:-mt-36 lg:-mt-0" data-aos="zoom-out" data-aos-duration="1000">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                What We Offer!
              </h2>

              <div className="space-y-6" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={notesLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]" onClick={() => toggleOpen(3)}>Student Grievances</h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(3)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 3 ? 'transform rotate-180 transition-all duration-300' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                      Easily submit your grievances or issues. Our system ensures that each submission is reviewed by the Head of Department (HOD), who will take the necessary steps to address and resolve your concerns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={pyqLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]" onClick={() => toggleOpen(4)}>Previous Year Questions (PYQ)</h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(4)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 4 ? 'transform rotate-180 transition-all duration-300' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 4 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                        A vast repository of previous year question papers to help you understand exam patterns and prepare effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={syllabusLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]" onClick={() => toggleOpen(5)}>Syllabus Information</h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(5)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 5 ? 'transform rotate-180 transition-all duration-300' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 5 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                        Stay informed with the most recent syllabus updates to plan your studies efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={blogLogo1} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]" onClick={() => toggleOpen(6)}>Blogs</h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(6)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 6 ? 'transform rotate-180 transition-all duration-300' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 6 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                        Engage with the community by writing and reading blogs that share insights, tips, and experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={youtubeLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]" onClick={() => toggleOpen(7)}>Curated YouTube Channels</h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(7)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 7 ? 'transform rotate-180 transition-all duration-300' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 7 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                        Explore our curated YouTube channels for video lectures and tutorials tailored to Punjab Technical University's syllabus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 group transition-all duration-300">
                  <div className="flex-shrink-0">
                    <img src={bookLogo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base  sm:text-lg lg:text-xl font-semibold text-gray-800 group-hover:text-[#323290]" onClick={() => toggleOpen(8)}>Books Available</h3>
                      <div className="flex items-center cursor-pointer ml-auto" onClick={() => toggleOpen(8)}>
                        <FaChevronDown className={`text-gray-600 ${openIndex === 8 ? 'transform rotate-180 transition-all duration-300' : 'transition-all duration-700'}`} />
                      </div>
                    </div>
                    <div className={`transition-all duration-700 overflow-hidden ${openIndex === 8 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                        Access a range of textbooks and reference books recommended for your courses.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className=" z-10 w-4/6 sm:w-3/5 md:w-3/6 lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-2" data-aos="zoom-out" data-aos-duration="1000" >
              <img
                src={about1}
                alt="Person with Laptop"
                className="w-full h-auto object-cover rounded-lg scale-75"
              />
            </div>

          </section>





          {/* Vision Section */}

          <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 lg:px-16 lg:space-x-10 md:space-x-2">

            <div className="sm:w-5/6 md:w-full lg:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl" data-aos="zoom-out" data-aos-duration="1000" >

              <div className="flex items-center mb-4">
                <img src={bulb} className="w-16 h-16 sm:w-20 sm:h-20" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-4">Our Vision</h2>
              </div>

              <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 transition-all duration-300" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                <div className="ml-4">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                    We're expanding PTU Study Zone to include a Teacher Panel for real-time communication, assignment submissions, and feedback.
                    Future updates will offer personalized learning paths, interactive materials, and a discussion forum to foster collaboration and support, creating a more engaged and supportive academic community.
                  </p>
                </div>
              </div>

            </div>

            <div className="sm:w-5/6 md:w-full lg:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl" data-aos="zoom-out" data-aos-duration="1000" >

              <div className="flex items-center mb-4">
                <img src={brain} className="w-16 h-16 sm:w-20 sm:h-20" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ml-4">Core Inspiration</h2>
              </div>

              <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 transition-all duration-300" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                <div className="ml-4">
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                    PTU Study Zone was created out of our own first-year challenges with finding study resources and understanding the syllabus. We wanted to solve these issues by providing a centralized platform that offers all essential academic materials in one place, making the academic journey smoother and more accessible for future students.
                  </p>
                </div>
              </div>

            </div>

          </section>


          <div className="w-full p-2 md:p-8 lg:p-12 rounded-3xl border-2 shadow-2xl flex flex-col bg-gray-50 ml-2 mr-2"  >
            <div className="flex items-center space-x-2 md:space-x-5 self-center mb-8 md:mb-10" data-aos="zoom-out" data-aos-duration="1000">
              <img src={brains} className='w-16 md:w-20 h-16 md:h-20' alt="Brains" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#323290]">Meet The Developers!</h2>
            </div>

            <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-0  lg:px-16 md:space-x-0 lg:space-x-10">
              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-12 p-6 md:p-0" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                <div className="max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 bg-white">
                  <img
                    className="w-auto h-48 md:h-64 m-auto"
                    src={profilePicVikash}
                    alt="Vikash Bharal"
                  />
                  <div className="px-4 md:px-6 py-4">
                    <div className="font-extrabold text-xl md:text-2xl mb-2 text-center text-[#323290]"><a href="https://vikashbharal.vercel.app/">Vikash Bharal</a></div>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Student</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">BTech CSE (3rd Year)</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Punjab Technical University</p>
                  </div>
                  <div className="absolute left-4 top-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                    <a href="https://www.linkedin.com/in/vikash-bharal-5a2a49238/" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={LinkdeinLogo} className='w-8 md:w-11 h-8 md:h-11' alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Vikash4110" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={githubLogo} className='w-8 md:w-11 h-8 md:h-11' alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/its_me_vikash18/" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={instagramLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Instagram" />
                    </a>
                    <a href="https://geteternalknowledge.blogspot.com" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={blogLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Blog" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 lg:pl-12 p-6 md:p-0" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
                <div className="max-w-xs md:max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl group relative hover:scale-105 transition-transform duration-300 bg-white">
                  <img
                    className="w-auto h-48 md:h-64 m-auto"
                    src={profilePicSahil}
                    alt="Sahil Jamwal"
                  />
                  <div className="px-4 md:px-6 py-4">
                    <div className="font-extrabold text-xl md:text-2xl mb-2 text-center text-[#323290]">Sahil Jamwal</div>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Student</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">BTech CSE (3rd Year)</p>
                    <p className="text-base md:text-lg font-semibold text-center text-gray-800">Punjab Technical University</p>
                  </div>
                  <div className="absolute left-4 top-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700">
                    <a href="https://www.linkedin.com/in/sahil-jamwal-227509238/" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={LinkdeinLogo} className='w-8 md:w-11 h-8 md:h-11' alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/s-jamwal" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={githubLogo} className='w-8 md:w-11 h-8 md:h-11' alt="GitHub" />
                    </a>
                    <a href="https://www.instagram.com/_sahil.jamwal_/?next=%2F" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={instagramLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Instagram" />
                    </a>
                    <a href="#" className="block my-1 md:my-2 text-white hover:scale-105" target='_blank' rel="noopener noreferrer">
                      <img src={blogLogo} className='w-8 md:w-11 h-8 md:h-11' alt="Blog" />
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