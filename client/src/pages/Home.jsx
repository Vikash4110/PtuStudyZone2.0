import AOS from "aos";
import { useEffect } from "react";
import BackImg from "../assets/ptu-main-building.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
          Welcome to PTU Study Zone
        </h1>
        <p className="text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
          Your one-stop destination for study materials, resources, and community support.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300" data-aos="fade-up" data-aos-delay="400">
          Get Started
        </button>
      </div>
      <div className="relative z-10 mt-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white" data-aos="fade-up">
          Explore Our Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {["Notes", "Previous Year Questions", "Books"].map((item, index) => (
            <div key={index} className="bg-white bg-opacity-80 rounded-lg p-4 shadow-lg" data-aos="fade-up" data-aos-delay={index * 200}>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item}</h3>
              <p className="text-gray-600">Discover a wide range of {item.toLowerCase()} to help you excel in your studies.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
