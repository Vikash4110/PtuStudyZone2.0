import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPhone } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
import MainLogo from "../assets/mainlogo.png";

const Footer = () => {
  return (
    <div className='bg-[#f1f0fe]'>
      <div
        className="relative inline-block w-full h-[100px] sm:h-[150px] -mt-[50px] sm:-mt-[100px] overflow-hidden z-5"
        style={{
          animation: 'move-wave 3s ease-in-out 1s both',
          WebkitAnimation: 'move-wave 3s ease-in-out 1s both',
        }}
      >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#f1f0fe' }}
          />
        </svg>
      </div>

      <footer className="p-6 sm:p-10 text-black flex flex-wrap justify-evenly">
        <div className="mb-6 max-w-xs text-center sm:text-left">
          <img src={MainLogo} alt="Hoping Minds" className="w-32 sm:w-40 mb-6 sm:mb-10 mx-auto sm:mx-0" />
          <p className="text-sm sm:text-base">
            PTU Study Zone is a comprehensive platform designed to simplify the academic experience for students at Punjab Technical University. Whether you're looking for well-organized notes, previous year questions (PYQ), the latest syllabus, or educational resources, everything you need is available in one place.
          </p>
          
        </div>
        <div className="mb-6 text-center sm:text-left">
          <h4 className="mb-4 font-semibold text-lg sm:text-xl">GET HELP</h4>
          <ul>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/about" className="hover:underline">About</Link></li>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div className="mb-6 text-center sm:text-left">
          <h4 className="mb-4 font-semibold text-lg sm:text-xl">RESOURCES</h4>
          <ul>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/" className="hover:underline">Home</Link></li>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/notes" className="hover:underline">Notes</Link></li>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/syllabus" className="hover:underline">Syllabus</Link></li>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/pyq" className="hover:underline">PYQ</Link></li>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/youtube" className="hover:underline">YouTube</Link></li>
            <li className="mb-2 text-sm sm:text-lg"><Link to="/blogs" className="hover:underline">Blogs</Link></li>
          </ul>
        </div>
        <div className="mb-6 text-center sm:text-left">
          <h4 className="mb-4 font-semibold text-lg sm:text-xl">CONTACT US</h4>
          <p className="text-sm sm:text-lg mb-2"><strong><FontAwesomeIcon icon={faPhone} /></strong> +91 7973117120</p>
          <p className="text-sm sm:text-lg mb-2"><strong><FontAwesomeIcon icon={faEnvelope} /></strong> bharal224@gmail.com</p>
          <p className="text-sm sm:text-lg mb-2"><strong><FontAwesomeIcon icon={faPhone} /></strong> +91 7837189549</p>
          <p className="text-sm sm:text-lg"><strong><FontAwesomeIcon icon={faEnvelope} /></strong> sahiljamwal2720@gmail.com</p>
        </div>
        <div className="w-full text-center mt-6 text-sm sm:text-lg">
          <p>COPYRIGHT &copy; ALL RIGHTS RESERVED 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
