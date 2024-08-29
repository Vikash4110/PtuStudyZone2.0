import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainVideo from "../assets/ptuvid.mp4";

const slides = [
  {
    title: "Your path to success begins with the right knowledge.",
    description: "– Francis Bacon"
  },
  {
    title: "Learning never exhausts the mind.",
    description: "– Leonardo da Vinci"
  },
  {
    title: "Education is the key to unlock the golden door of freedom.",
    description: "– George Washington Carver"
  },
  {
    title: "Empower your dreams with education.",
    description: "Learn at your own pace"
  },
  {
    title: "Unlock your potential, one chapter at a time.",
    description: "Quality education at a great price"
  },
];

const MainSlider = () => {
  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute('preload', 'auto');
    }
  }, []);

  return (
    <div className="relative md:h-screen lg:h-screen h-[70vh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute left-0 w-full md:h-full h-[70vh] object-cover scale-125"
        src={MainVideo}
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        style={{
          filter: 'brightness(60%) contrast(120%)',
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-500"></div>

      <Slider {...settings} ref={sliderRef} className="z-10">
        {slides.map((slide, index) => (
          <div key={index} className="md:h-screen lg:h-screen h-[70vh] flex justify-center items-center text-center md:px-20 px-4">
            <div className="text-white flex items-center justify-between md:mt-[40vh] sm:mt-[30vh] mt-[30vh]">
              <div className="z-20 cursor-pointer text-white" onClick={() => sliderRef.current.slickPrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:px-10 px-5">
                {slide.title}
              </h1>
              <div className="z-20 cursor-pointer text-white" onClick={() => sliderRef.current.slickNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </Slider>

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
