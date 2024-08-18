import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import About from '../components/AboutHome'
import { useAuth } from "../store/auth";
import Footer from "../components/Footer" 
import {Link} from "react-router-dom";
import '../index.css'
const Home = ()=>{

  const { isAdmin } = useAuth(); // Get the isAdmin status from auth

    return(
        <>       
       <Section1 />
       <Section2 />
       <Section4 />
       <About />
       <Section3 />
       {isAdmin && (
    <Link
      to="/admin"
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 mt-6 rounded transition duration-300 block md:inline-block"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      Access Admin Panel
    </Link>
  )}
  <Footer/>
        </>

    )
}
export default Home
