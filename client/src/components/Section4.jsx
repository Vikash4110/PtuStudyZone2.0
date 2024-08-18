import React from 'react';
import backgroundImage from '../assets/slider-image1.jpg'; // Replace with the correct path to your background image
import {Link} from "react-router-dom";
import { useAuth } from "../store/auth";

function Section4() {
  const { isAdmin } = useAuth();
  return (
    <div
      className="h-96 flex items-center justify-center "
      style={{
        backgroundImage: `url(${backgroundImage}), linear-gradient(to right, #5b429c, #28486e)`, // Darker gradient colors
        backgroundBlendMode: 'overlay', // Combines the image and gradient
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: "fixed"
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          START LEARNING NOW
        </h1>
        <h2 className="text-2xl font-medium text-white mb-8">
          Enhance your skills with best available resources
        </h2>
        <div className="flex gap-4 justify-center">
          <Link to="/login" className="bg-[#323290] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get started now
          </Link>
          <Link to="/contact" className="bg-[#ed1f26] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </Link>
          {isAdmin && (
    <Link
      to="/admin"
      className="bg-[#34be19] hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
      Access Admin Panel
    </Link>
  )}
        </div>
      </div>
    </div>
  );
}

export default Section4;
