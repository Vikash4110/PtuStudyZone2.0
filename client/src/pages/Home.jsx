import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import About from '../components/AboutHome'
import Footer from "../components/Footer" 

import '../index.css'
const Home = ()=>{


    return(
        <>       
       <Section1 />
       <Section2 />
       <Section4 />
       <About />
       <Section3 />
       <Footer/>
        </>

    )
}
export default Home
