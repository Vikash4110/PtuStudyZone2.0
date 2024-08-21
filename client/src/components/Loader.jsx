import React from 'react';
import MainLogo from "../assets/mainlogo.png"; // Replace with your logo's path

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-violet-100 to-red-100 ">
      <div className="relative overflow-hidden">
        <img
          src={MainLogo}
          alt="Logo"
          className="h-40 w-44 animate-logo-create"
        />
      </div>
    </div>
  );
};

export default Loader;

