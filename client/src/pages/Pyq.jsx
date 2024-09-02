import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PyqIcon from '../assets/paper.svg';
import underline from '../assets/underline.png';
import { ClipLoader } from 'react-spinners'; // Import the loader
import './RadioBtn.css';
import BookLoader from '../components/BookLoader'

const Pyq = () => {
  const { pyq } = useAuth();
  const [selectedSemester, setSelectedSemester] = useState("1"); // Default to first semester
  const [filteredPyq, setFilteredPyq] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    // Simulate fetching data with a delay
    const fetchData = async () => {
      setLoading(true); // Start loader

      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Filter Pyq based on selected semester
        const filtered = pyq.filter((curElem) => curElem.semester === selectedSemester);
        setFilteredPyq(filtered);
      } catch (error) {
        toast.error("Failed to fetch previous year question papers.");
      } finally {
        setLoading(false); // Stop loader
      }
    };

    fetchData();
  }, [selectedSemester, pyq]);

  const handleDownloadClick = (link, event) => {
    if (link.length === 0) {
      event.preventDefault();
      toast.error("Sorry 😢, This Subject Question Paper is not available!");
    } else if (!isValidDriveLink(link)) {
      event.preventDefault();
      toast.error("Invalid Drive link. Please contact the administrator.");
    }
    // If the link is valid, no need to preventDefault, and the link will open in a new tab
  };

  const isValidDriveLink = (link) => {
    const driveRegex = /^(https:\/\/)?(drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)/;
    return driveRegex.test(link);
  };

  return (
    <>
      <br /><br />
      <section className="py-12">
        <div className="container mx-auto text-center px-4">
          <div className='relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6' data-aos="zoom-out" data-aos-duration="1000">
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold flex items-center justify-center sm:justify-start text-center'>
              <span className='mr-2'>Previous Year Question Papers</span>               
            </h1>
            <img src={underline} className='absolute top-[-1rem] sm:top-[-1rem] lg:top-[-5rem] md:top-[-1rem] left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-72' />
          </div>

          <p className="text-lg md:text-xl text-[#323290] mb-12 font-semibold" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100">
            Access previous year question papers to enhance your preparation and boost your confidence for PTU exams.
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

        {loading ? (
          <div className="flex justify-center items-center mt-20">
            <BookLoader color={"#323290"} loading={loading} size={50} />
          </div>
        ) : (
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-5/6 h-full justify-center">
            {filteredPyq.length > 0 ? (
              filteredPyq.map((curElem, index) => (
                <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="100"
                  key={index}
                  className="bg-white rounded-2xl shadow-md shadow-[#323290] p-6 relative mt-32 flex flex-col items-center hover:scale-105 transition-transform duration-300 lg:w-5/6  md:w-5/6 sm:w-full w-5/6">
                  
                  <div className="bg-[#323290] w-28 h-28 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-6 rounded-full text-white flex items-center justify-center absolute -top-12 md:-top-16 lg:-top-20 -right-16 sm:-right-6 md:-right-16 lg:-right-16">
                    <img src={PyqIcon} className="w-12 h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16" />
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
                    href={curElem.linka}
                    onClick={(e) => handleDownloadClick(curElem.linka, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 mb-1 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300"
                  >
                    Download PYQ 1
                  </a>
                  <a
                    href={curElem.linkb}
                    onClick={(e) => handleDownloadClick(curElem.linkb, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 mb-1 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300"
                  >
                    Download PYQ 2
                  </a>
                  <a
                    href={curElem.linkc}
                    onClick={(e) => handleDownloadClick(curElem.linkc, e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#323290] font-semibold border-2 border-[#323290] py-2 mb-1 px-4 md:py-2.5 md:px-6 rounded-full shadow hover:bg-[#323290] hover:text-white transition-colors duration-300"
                  >
                    Download PYQ 3
                  </a>
                </div>
              ))
            ) : (
              <div className='relative flex justify-center items-center flex-col text-center sm:text-left mb-10 mt-6 col-start-1 col-span-3'>
                <h1 className='text-base sm:text-lg md:text-xl font-bold flex items-center justify-center sm:justify-start'>
                  <span className='mr-2 text-[#ed1f26]'>No PYQ available for this semester.</span>
                </h1>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Pyq;
