import React, { useEffect } from 'react';
import Img1 from '../assets/mainImg1.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ComponentName = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration
    }, []);

    return (
        <div className="bg-white">
            <section className="bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:justify-center">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 
                                className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl text-center lg:text-left"
                                data-aos="fade-up"
                            >
                                WELCOME TO
                                <span className='text-[#ed1f26] block'>
                                    PTU STUDY ZONE
                                </span>
                            </h1>
                            <p 
                                className="mt-4 text-base text-black lg:mt-8 sm:text-xl text-center lg:text-left"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Navigate the Realm of Engineering Education : <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 font-bold">
                                    Explore, Learn, Excel - Once at PTU STUDY ZONE
                                </span>
                            </p>

                            <Link
                                to="/register"
                                title=""
                                className="inline-flex items-center px-6 py-4 mt-8 font-bold text-[#323290] transition-all duration-200 bg-transparent border-2 border-[#323290] rounded-full lg:mt-8 hover:bg-[#323290] hover:text-white focus:bg-[#323290] focus:text-white"
                                role="button"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                Join Us
                                <svg
                                    className="w-6 h-6 ml-8 -mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </Link>
                        </div>

                        <div className="w-5/6 md:w-2/3 lg:w-full m-auto">
                            <img 
                                className="w-full" 
                                src={Img1} 
                                alt="Study Zone" 
                                data-aos="zoom-out"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
       
    );
}

export default ComponentName;