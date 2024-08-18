import React from 'react';
import MainLogo from "../assets/mainlogo.png"; // Replace with your logo's path

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="relative overflow-hidden">
        <img
          src={MainLogo}
          alt="Logo"
          className="h-32 w-32 animate-logo-create"
        />
      </div>
    </div>
  );
};

export default Loader;

