import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SourcesIcon from '../assets/resource-allocation.svg';
import underline from '../assets/underline.png';
import { ClipLoader } from 'react-spinners'; // Import the loader
import './RadioBtn.css';
import BookLoader from '../components/BookLoader'
const Youtube = () => {
  const { youtube } = useAuth();
  const [selectedSemester, setSelectedSemester] = useState("1"); // Default to first semester
  const [filteredYoutube, setFilteredYoutube] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loader

      try {
        // Simulate a delay for fetching data
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Filter YouTube channels based on selected semester
        const filtered = youtube.filter((curElem) => curElem.semester === selectedSemester);
        setFilteredYoutube(filtered);
      } catch (error) {
        toast.error("Failed to fetch YouTube channels.");
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchData();
  }, [selectedSemester, youtube]);

  const handleDownloadClick = (link, event) => {
    if (link.length === 0) {
      event.preventDefault();
      toast.error("Sorry 😢, This Subject YouTube Channel is not available!");
    }
  };

  return (
    <>
      <br /><br />
      <section className="py-12">
        <div className="container mx-auto text-center px-4">
          <div className='relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6' data-aos="zoom-out" data-aos-duration="1000">
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center sm:justify-start text-center'>
              <span className='mr-2'>Youtube</span>
            </h1>
            <img src={underline} className='absolute top-[-4rem] sm:top-[-4rem] md:top-[-5rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72' alt="underline" />
          </div>

          <p className="text-lg md:text-xl text-[#323290] mb-12 font-semibold" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
            Explore YouTube channel links to enhance your understanding and master PTU subjects with ease.
          </p>

          {/* Radio Buttons for larger screens */}
          <div className="hidden md:block mb-6 text-center" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200">
            <div className="radio-inputs">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <label key={sem} className="radio">
                  <input
                    type="radio"
                    value={sem.toString()}
                    checked={selectedSemester === sem.toString()}
                    onChange={() => setSelectedSemester(sem.toString())}
                    className="form-radio h-5 w-5 text-[#323290]"
                  />
                  <span className="name">Semester {sem}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Dropdown for mobile screens */}
          <div className="dropdown-container block md:hidden" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="200">
            <select
              className="custom-select"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem.toString()}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <BookLoader color="#323290" loading={loading} size={50} />
          </div>
        ) : (
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-5/6 h-full justify-center">
            {filteredYoutube.length > 0 ? (
              filteredYoutube.map((curElem, index) => (
                <div
                  key={index}  // Ensure each element has a unique key
                  className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-32 flex flex-col items-center hover:scale-105 transition-transform duration-300 lg:w-5/6 md:w-5/6 sm:w-full w-5/6"
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <div className="bg-[#323290] w-28 h-28 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 -right-16 sm:-right-6 md:-right-16 lg:-right-16">
                    <img src={SourcesIcon} className="w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" alt="source icon" />
                  </div>

                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center sm:pt-4">
                    <strong>Semester:</strong> {curElem.semester}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center">
                    <strong>Subject:</strong> {curElem.subject}
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 leading-relaxed text-center">
                    <strong>Subject Code:</strong> {curElem.subjectcode}
                  </p>
                  <a
                    href={curElem.link}
                    onClick={(e) => handleDownloadClick(curElem.link, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300"
                  >
                    YouTube Channel
                  </a>
                </div>
              ))
            ) : (
              <div className='relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6 col-start-1 col-span-3'>
                <h1 className='text-base sm:text-lg md:text-xl font-bold flex items-center justify-center sm:justify-start'>
                  <span className='mr-2 text-[#ed1f26]'>No YouTube channel for this semester at the moment.</span>
                </h1>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Youtube;
