import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "aos/dist/aos.css";
import ServiceImg from "../assets/PTULogo.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Book = () => {
  const { book } = useAuth();
  const [selectedSemester, setSelectedSemester] = useState("1"); // Default to first semester
  const [filteredSyllabus, setFilteredSyllabus] = useState([]);

  useEffect(() => {
    // Filter Book based on selected semester
    const filtered = book.filter((curElem) => curElem.semester === selectedSemester);
    setFilteredSyllabus(filtered);
  }, [selectedSemester, book]);

  const handleDownloadClick = (link, event) => {
    if (link.length === 0) {
      event.preventDefault();
      toast.error("Sorry 😢, No Book available now!");
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
      <ToastContainer />
      <br /><br />
      <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900">Books</h1>
          <p className="text-base md:text-lg text-blue-700 mb-12">
            Download your course Books and stay organized for the semester.
          </p>
          <div className="mb-6">
            <label htmlFor="semester" className="mr-2 text-lg text-blue-700">
              Select Semester:
            </label>
            <select
              id="semester"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="border rounded-md p-2"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredSyllabus.length > 0 ? (
            filteredSyllabus.map((curElem, index) => (
              <div
                className={`bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-100 p-6 border-t-4 ${
                  index % 2 === 0 ? "border-blue-500" : "border-green-500"
                }`}
                key={index}
              >
                <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={ServiceImg}
                    alt={curElem.service}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">{curElem.service}</h2>
                <p className="text-sm md:text-base text-gray-600 mb-2">
                  <strong>Semester:</strong> {curElem.semester}
                </p>
                <p className="text-sm md:text-base text-gray-600 mb-2">
                  <strong>Subject:</strong> {curElem.subject}
                </p>
                <p className="text-sm md:text-base text-gray-600 mb-2">
                  <strong>Subject Code:</strong> {curElem.subjectcode}
                </p>
                <a
                  href={curElem.link}
                  onClick={(e) => handleDownloadClick(curElem.link, e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-4 px-3 py-2 text-sm md:text-base text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Download Books
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No Book available for this semester.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Book;
