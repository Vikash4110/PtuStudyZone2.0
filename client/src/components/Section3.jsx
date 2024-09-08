import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth'; // Ensure correct path to your useAuth hook
import underline from '../assets/underline.png';

import NotesIcon from '../assets/notes.svg';
import PYQIcon from '../assets/paper.svg';
import SyllabusIcon from '../assets/work-checklist.svg';
import BooksIcon from '../assets/books.svg';
import SourcesIcon from '../assets/resource-allocation.svg';
import BlogsIcon from '../assets/edit.svg';

const Card = ({ icon, title, description, link }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (isLoggedIn) {
      navigate(link);
    } else {
      navigate('/login');
    }
  };


  return (
    <div className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mb-24 flex flex-col items-center hover:scale-105 transition-transform duration-300" data-aos="zoom-out" data-aos-duration="1000">
      <div className="bg-[#323290] w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 right-0" data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="100">
        <img src={icon} alt={`${title} Icon`} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
      </div>
      <h2 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-800 pt-16" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">{title}</h2>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center justify" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100" data-aos-offset="100">{description}</p>
      <button 
        onClick={handleExploreClick}
        className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300"
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="100"
      >
        Explore
      </button>
    </div>
  );
};

const CardsSection = () => (
  <div className="px-4 py-8 md:px-8 lg:px-16 lg:mt-0 md:mt-24 mt-16">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 md:mb-28 lg:mb-36 relative" data-aos="fade-up" data-aos-duration="1000">
      Resources We <span className="text-[#ed1f26]">Offer</span>
      <div className="flex justify-center">
        <img src={underline} alt="Underline" className="w-[15rem] -top-20 sm:w-[20rem] sm:-top-28 md:w-[30rem] md:-top-48 absolute" />
      </div>
    </h1>

    <div className="max-w-7xl min-w-2xl mx-auto py-12 px-4 grid gap-8 grid-cols-1 w-5/6 sm:w-2/3 md:w-full lg:w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
    <Card 
  icon={NotesIcon} 
  title="Student Grievances" 
  description="Submit your complaints or issues here. The Head of Department (HOD) will review them, take appropriate action, and work towards resolving them."
  link="/complaints" 
/>
<Card 
        icon={BlogsIcon} 
        title="Blogs" 
        description="Engage with the community by writing and reading blogs that share insights, tips, and experiences."
        link="/blogs" 
      />
      <Card 
        icon={PYQIcon} 
        title="Previous Year Questions (PYQ)" 
        description="A vast repository of previous year question papers to help you understand exam patterns and prepare effectively."
        link="/pyq" 
      />
      <Card 
        icon={SyllabusIcon} 
        title="Syllabus" 
        description="Stay on track with our comprehensive syllabus guide. Tailored to your curriculum, it’s your roadmap to mastering every subject."
        link="/syllabus" 
      />
      <Card 
        icon={BooksIcon} 
        title="Books Available" 
        description="Access a collection of recommended books for each subject to enhance your learning and understanding."
        link="/book" 
      />
      <Card 
        icon={SourcesIcon} 
        title="Curated YouTube Channels" 
        description="Explore our curated YouTube channels for each subject, where you can access video lectures and tutorials tailored to the syllabus of Punjab Technical University."
        link="/youtube" 
      />
   
    </div>
  </div>
);

export default CardsSection;
