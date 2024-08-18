import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainVideo from "../assets/ptuvid.mp4";

// Sample slide content
const slides = [
  { 
    title: "Comprehensive Study Material", 
    description: "Access all your course notes, previous year questions, and books in one place" 
  },
  { 
    title: "Interactive Learning Community", 
    description: "Connect with peers, share knowledge, and get support from fellow students" 
  },
  { 
    title: "Resourceful Book Library", 
    description: "Explore a wide range of textbooks and reference materials for every subject" 
  },
  { 
    title: "Detailed Syllabus Insights", 
    description: "Stay organized with thorough syllabus breakdowns tailored to your coursework" 
  },
];

// Custom arrow components
const SampleNextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer text-white" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer text-white" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={MainVideo}
        autoPlay
        loop
        muted
        style={{ 
          filter: 'brightness(60%) contrast(120%) ' // Additional filters
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500"></div> {/* Adjust opacity for better text visibility */}

      <Slider {...settings} className="relative z-10">
        {slides.map((slide, index) => (
          <div key={index} className="h-screen flex justify-center items-center text-center">
            <div className="text-white max-w-3xl mx-auto px-4 mt-60">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Curvy Background */}
      <div
        className="relative inline-block w-full h-[150px] -mt-[100px] overflow-hidden z-5"
        style={{
          animation: 'move-wave 3s ease-in-out 1s both',
          WebkitAnimation: 'move-wave 3s ease-in-out 1s both',
        }}
      >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#ffffff' }}
          />
        </svg>
      </div>
    </div>
  );
};

export default MainSlider;
