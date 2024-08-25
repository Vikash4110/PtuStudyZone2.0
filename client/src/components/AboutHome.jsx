import React, { useState, useRef, useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about from '../assets/about.png';
import underline from '../assets/underline.png';
import backgroundImage from '../assets/bg-integratedweb-2.svg';

const AboutItem = ({ title, isOpen, onClick, content }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="mb-4">
      <div
        className={`bg-[#323290] text-white flex items-center justify-between p-4 rounded-full cursor-pointer ${isOpen ? 'shadow-lg' : ''}`}
        onClick={onClick}
      >
        <h3 className="font-semibold text-base md:text-lg lg:text-xl">{title}</h3>
        <div className="w-8 h-8 bg-white text-[#323290] rounded-full flex items-center justify-center text-lg md:text-xl">
          {isOpen ? '-' : '+'}
        </div>
      </div>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: contentHeight }}
      >
        <div
          className="bg-white text-[#323290] p-4 rounded-3xl shadow-inner"
          ref={contentRef}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Our Mission",
      content: "At PTU Study Zone, we are driven by a singular mission: to empower PTU students pursuing B.Tech in Computer Science and Engineering with the tools and resources they need to excel in their studies. We believe that access to quality educational materials and a supportive community can make all the difference in your educational experience."
    },
    {
      title: "What We Offer",
      content: "Our platform provides a centralized hub for students to access essential study resources, including lecture notes, previous year question papers, and comprehensive syllabus information. We've designed our website to simplify the search for study materials, making it easy for you to find the resources you need to succeed in your coursework."
    },
    {
      title: "Subject-Specific YouTube Channels",
      content: "We understand that learning extends beyond the classroom, which is why we've curated a collection of subject-specific YouTube channels to supplement your studies. These channels cover a range of topics, offering video lectures and tutorials to enhance your understanding and support your academic growth."
    },
    {
      title: "Community and Support",
      content: "Education is a collaborative journey, and we encourage the exchange of ideas and experiences. Our discussion forums provide a platform for you to engage with fellow students, ask questions, and share valuable insights. We believe in the strength of community-driven learning."
    },
    {
      title: "Your Success Is Our Priority",
      content: "PTU Study Zone is committed to helping you succeed in your academic pursuits. We are continuously working to expand and improve our offerings to meet your evolving needs. Your feedback and suggestions are invaluable in shaping the future of our platform."
    },
    {
      title: "Join Our Community",
      content: "We invite you to explore the wealth of resources we have to offer, engage with your peers, and make the most of your time at PTU. We are here to support your educational journey and provide you with the tools you need to thrive. Thank you for choosing PTU Study Zone. We look forward to being part of your academic success story."
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
}, []);

  return (
    <div className="max-w-md mx-auto rounded-2xl p-8 bg-white shadow-lg background" data-aos="fade-up" >
      {items.map((item, index) => (
        <AboutItem
          key={index}
          title={item.title}
          isOpen={activeIndex === index}
          onClick={() => toggleItem(index)}
          content={item.content}
        />
      ))}
    </div>
  );
};

const ContentSection = () => (
 
  
    <div className='relative flex justify-center items-center flex-col text-center sm:text-left' data-aos="zoom-out">
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center sm:justify-start' >
        <span className='mr-2'>About</span>
        <span className='text-[#ed1f26]'>US</span>
      </h1>
      <img src={underline} className='absolute top-[-4rem] sm:top-[-4rem] md:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72' />
      <img src={about} className='pt-10 sm:pt-12 md:pt-20 mx-auto' />
    </div>
  
  
  
  
);

const AboutLayout = () => (
  
  <div className="relative overflow-hidden ">
    <div className="absolute inset-0 z-[-1]" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '120vh',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      transform: 'scaleX(-1)',
    }}></div>
    <div className="flex  flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl mx-auto py-12 px-4 mt-16 mb-0   md:mt-32 md:mb-0 lg:mt-32 lg:mb-24">
     <div className='mt-8 lg:mt-0 lg:ml-8 w-5/6 flex-grow lg:w-full order-2 lg:order-1 ' >
      <About />

     </div>
     
      <div className="mt-8 lg:mt-0 lg:ml-8 flex-grow order-1 lg:order-2 w-5/6 m-auto lg:w-full">
        <ContentSection />
      </div>
    </div>
  </div>
);

export default AboutLayout;
