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
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 rounded-3xl border-2 shadow-2xl " >
              <p className="text-[#323290] uppercase font-semibold text-sm mb-4">
                Learn Anything
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Welcome to PTU Study Zone !
              </h2>
              <div className="space-y-6">
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                  <div className="flex-shrink-0">
                  <img src={studyLogo} className='w-14 h-14' />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Your Ultimate Study Companion</h3>
                    <p className="text-gray-600">
                      PTU Study Zone is dedicated to providing students with a comprehensive and accessible platform for all their academic needs. We understand the challenges students face in gathering reliable study materials, past papers, and other academic resources. Our platform is designed to bridge this gap by offering a one-stop solution where students can access high-quality study materials, practice papers, and books that are curated specifically for PTU courses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105 ">
                  <div className="flex-shrink-0">
                  <img src={resourceLogo} className='w-14 h-14' />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Empowering Students with Quality Resources</h3>
                    <p className="text-gray-600">
                      At PTU Study Zone, we believe that every student deserves access to the best resources to excel in their studies. That's why we have meticulously compiled a vast collection of notes, sample papers, and textbooks that cover a wide range of subjects and courses offered by Punjab Technical University. Whether you're preparing for exams or looking to deepen your understanding of a particular topic, PTU Study Zone has got you covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2 hover:scale-105">
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
                    <h3 className="text-xl font-semibold text-gray-800">A Community-Driven Learning Experience</h3>
                    <p className="text-gray-600">
                      Our platform isn't just about providing resources—it's about building a community of learners who can support and motivate each other. PTU Study Zone encourages collaboration and sharing of knowledge among students. We are constantly updating our repository with the latest materials, and we welcome contributions from students and educators alike to ensure that our content remains relevant and helpful. Join us at PTU Study Zone and take your academic journey to the next level.
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
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                  <div className="flex-shrink-0">
                 
                <img src={notesLogo} className='w-14 h-14' />
                
              
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comprehensive Notes</h3>
                    <p className="text-gray-600">
                      A well-curated collection of notes aligned with the latest syllabus, ensuring you study the right material.
                    </p>
                  </div>
                </div>
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                  <div className="flex-shrink-0">
                  <img src={pyqLogo} className='w-14 h-14' />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Previous Year Questions (PYQ)</h3>
                    <p className="text-gray-600">
                      A vast repository of previous year question papers to help you understand exam patterns and prepare effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                  <div className="flex-shrink-0">
                  <img src={syllabusLogo} className='w-14 h-14'/>

                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Syllabus Information</h3>
                    <p className="text-gray-600">
                      Stay informed with the most recent syllabus updates to plan your studies efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                  <div className="flex-shrink-0">
                  <img src={blogLogo1} className='w-14 h-14' />

                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Blogs</h3>
                    <p className="text-gray-600">
                      Engage with the community by writing and reading blogs that share insights, tips, and experiences.
                    </p>
                  </div>
                </div>


                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                  <div className="flex-shrink-0">
                  <img src={youtubeLogo} className='w-14 h-14' />

                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Curated YouTube Channels</h3>
                    <p className="text-gray-600">
                      Explore our curated YouTube channels for each subject, where you can access video lectures and tutorials tailored to the syllabus of Punjab Technical University.
                    </p>
                  </div>
                </div>

                <div className="flex items-start shadow-2xl p-4 rounded-3xl border-2  hover:scale-105">
                  <div className="flex-shrink-0">
                  <img src={bookLogo} className='w-14 h-14'/>

                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Books Available</h3>
                    <p className="text-gray-600">
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
                    As we continue to grow, we aim to expand PTU Study Zone into a more integrated platform, including a Teacher Panel that will further enhance communication between students and teachers. This future feature will allow teachers to take attendance, assign tasks, and upload exam results, while students will be able to submit assignments, receive feedback, and stay connected with their educators in real-time. Additionally, we plan to introduce personalized learning paths, interactive study materials, and a discussion forum where students and teachers can collaborate and share knowledge, creating a more engaged and supportive academic community.
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
                    The idea for PTU Study Zone came from the challenges we personally faced during our initial days at college. As a first-year student, we struggled with common questions like Where to study? What to study? What is the syllabus? and more. The lack of a centralized resource made the experience overwhelming.

                    To solve this problem, We created PTU Study Zone—a platform where all the essential resources related to student study and growth are available in one place. Our aim is to ensure that future students don't face the same struggles we did, and instead have a seamless, supportive environment to aid their academic journey.
                  </p>
                </div>
              </div>

            </div>

          </section>





          <div className=" w-full  p-12 rounded-3xl border-2 shadow-2xl flex flex-col">

            <div className="flex items-center space-x-5 self-center" >
              <img src={brains} className='w-20 h-20' />
              <h2 className="text-3xl font-bold text-center">Meet The Brains !</h2>
            </div>

            <section className="flex flex-col md:flex-row items-center justify-between  px-4 md:px-16 md:space-x-10   ">

              <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 ">

                <div className="max-w-sm rounded-3xl border-2 overflow-hidden shadow-2xl group relative hover:scale-105 mx-auto">
                  <img
                    className="w-auto  h-64 m-auto"
                    src={profilePicVikash} // Replace this with your image source
                    alt="Profile"
                  />
                  <div className="px-6 py-4 bg-gradient-to-r from-purple-500 to-red-500 ">
                    <div className="font-bold text-xl mb-2 text-white">Vikash Bharal</div>
                    <p className="text-base text-white">
                      Student
                    </p>
                    <p className="text-base text-white">
                      BTech CSE (3rd Year)
                    </p>
                    <p className="text-base text-white">
                      Punjab Technical University
                    </p>
                  </div>
                  <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <a href="https://www.linkedin.com/in/vikash-bharal-5a2a49238/" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={LinkdeinLogo} className='text-4xl    p-2  w-14 h-14' />
                    </a>
                    <a href="https://github.com/Vikash4110" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={githubLogo} className='text-4xl  p-2  w-14 h-14' />
                    </a>
                    <a href="https://www.instagram.com/its_me_vikash18/" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={instagramLogo} className='text-4xl   p-2  w-14 h-14' />
                    </a>
                    <a href="https://geteternalknowledge.blogspot.com" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={blogLogo} className='text-4xl  p-2  w-14 h-14' />
                    </a>

                  </div>
                </div>

              </div>


              <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 p-10 ">

                <div className="max-w-sm rounded-3xl border-2 overflow-hidden shadow-2xl group relative hover:scale-105 mx-auto">
                  <img
                    className="w-auto h-64 m-auto"
                    src={profilePicSahil} // Replace this with your image source
                    alt="Profile"
                  />
                  <div className="px-6 py-4  bg-gradient-to-r from-purple-500 to-red-500 ">
                    <div className="font-bold text-xl mb-2 text-white">Sahil Jamwal</div>
                    <p className="text-base text-white">
                      Student
                    </p>
                    <p className="text-base text-white">
                      BTech CSE (3rd Year)
                    </p>
                    <p className="text-base text-white">
                      Punjab Technical University
                    </p>
                  </div>
                  <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <a href="https://www.linkedin.com/in/sahil-jamwal-227509238/" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={LinkdeinLogo} className='text-4xl    p-2  w-14 h-14' />
                    </a>
                    <a href="https://github.com/s-jamwal" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={githubLogo} className='text-4xl  p-2  w-14 h-14' />
                    </a>
                    <a href="#" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={instagramLogo} className='text-4xl   p-2  w-14 h-14' />
                    </a>
                    <a href="#" className="block my-2 text-white hover:scale-105" target='_blank'>
                      <img src={blogLogo} className='text-4xl  p-2  w-14 h-14' />
                    </a>

                  </div>
                </div>

              </div>


            </section>
          </div>






































        </div>
      </div>

    </>
  );
};

export default About;
