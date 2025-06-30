import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";
import MainLogo from "../assets/mainlogo.png";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // State for hamburger menu
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [padding, setPadding] = useState("py-4 md:py-6");
  const [underlineColor, setUnderlineColor] = useState("before:bg-white");
  const [joinBtnHoverBg, setJoinBtnHoverBg] = useState("hover:bg-white");
  const [joinBtnHoverText, setJoinBtnHoverText] = useState("hover:text-black");
  const [dropdownBg, setDropdownBg] = useState("bg-transparent");

  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsResourcesOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || location.pathname !== "/") {
        setNavbarBg("bg-white border-b-2 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl");
        setTextColor("text-[#ed1f26] transition-colors duration-300 ease-in-out hover:text-[#d10b22]");
        setPadding("py-2 transition-all duration-1000 ease-in-out"); // Adjusted height for different devices
        setUnderlineColor("before:bg-[#ed1f26] before:scale-x-0 group-hover:before:scale-x-100 transition-transform duration-300 ease-in-out");
        setJoinBtnHoverBg("hover:bg-[#ed1f26] hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out");
        setJoinBtnHoverText("hover:text-white transition-colors duration-300 ease-in-out");
        setDropdownBg("bg-white border border-[#ed1f26] border-t-transparent shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105");
        

      } else {
        setNavbarBg("bg-transparent");
        setTextColor("text-white");
        setPadding("py-4 transition-all duration-300 ease-in-out"); // Default height
        setUnderlineColor("before:bg-white");
        setJoinBtnHoverBg("hover:bg-white");
        setJoinBtnHoverText("hover:text-black");
        setDropdownBg("bg-black");


      }
    };

    if (location.pathname !== "/") {
      setNavbarBg("bg-white shadow-md");
      setTextColor("text-[#ed1f26]");
      setPadding("py-2");
      setUnderlineColor("before:bg-[#ed1f26]");
      setJoinBtnHoverBg("hover:bg-[#ed1f26]");
      setJoinBtnHoverText("hover:text-white");
      setDropdownBg("bg-white");
    } else {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location.pathname]);

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ease-in-out  ${navbarBg} ${padding}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" title="home" className={`text-2xl font-bold transition-all duration-200 rounded font-pj hover:text-opacity-50 ${textColor}`}>
              <img src={MainLogo} alt="Main Logo" style={{ height: "50px", width: "auto" }} />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className={`focus:outline-none ${textColor}`}
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Hamburger Menu Content */}
          <div className={`fixed inset-0 z-40 bg-white text-black transition-transform duration-300 ease-in-out ${isHamburgerOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsHamburgerOpen(false)}
                className="text-black"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-4 text-[#ed1f26] font-semibold ">
              <Link
                to="/"
                onClick={() => setIsHamburgerOpen(false)}
                className="relative inline-block text-[#ed1f26] group"
              >
                Home
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/about" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                About Us
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/material" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                Contribute
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
             
              {isLoggedIn && (
                <>
                   {/* <Link to="/notes" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                Notes
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link> */}
              <Link to="/pyq" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                PYQs
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/syllabus" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                Syllabus
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/book" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                Books
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/youtube" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                Youtube
                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
              <Link to="/complaints" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
Complaints                <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
              </Link>
                  <Link to="/blogs" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                    Blogs
                    <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
                  </Link>
                  <Link to="/contact" onClick={() => setIsHamburgerOpen(false)} className="relative inline-block text-[#ed1f26] group">
                    Contact Us
                    <span className="absolute left-0 bottom-0 h-0.5 bg-red-500 transition-transform transform scale-x-0 group-hover:scale-x-100 w-full"></span>
                  </Link>  
                  <button class>
                    <button
                      onClick={() => setIsHamburgerOpen(false)}
                      className=" py-2 px-4 rounded-full mt-6 font-medium text-white w-28 mx-auto  block  bg-gradient-to-r from-purple-500 to-red-500   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                    >
                      <Link to="/dashboard">
                        Dashboard
                      </Link>
                    </button>
                  </button>
                  <button class>
                    <button
                      onClick={() => setIsHamburgerOpen(false)}
                      className=" py-2 px-4 rounded-full  font-medium text-white w-28 mx-auto  block  bg-gradient-to-r from-purple-500 to-red-500   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                    >
                      <Link to="/logout">
                        Logout
                      </Link>
                    </button>
                  </button>

                </>
              )}
              {!isLoggedIn && (
                <>

                  <button class>
                    <button
                      onClick={() => setIsHamburgerOpen(false)}
                      className=" py-2 px-4 rounded-full mt-6 font-medium text-white w-28 mx-auto  block  bg-gradient-to-r from-purple-500 to-red-500   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                    >
                      <Link to="/login">
                        Login
                      </Link>
                    </button>
                  </button>
                  <button class>
                    <button
                      onClick={() => setIsHamburgerOpen(false)}
                      className=" py-2 px-4 rounded-full  font-medium text-white w-28 mx-auto  block  bg-gradient-to-r from-purple-500 to-red-500   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                    >
                      <Link to="/register">
                        Register
                      </Link>
                    </button>
                  </button>
                </>
              )}
            </nav>
          </div>

          <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
            <Link to="/about" title="About" className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
              About Us
            </Link>
            <Link to="/material" title="About" className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
              Contribute
            </Link>
            
            {isLoggedIn && (
              <>
              <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              ref={dropdownRef}
            >
              <button
                className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor}  before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}
                onClick={() => setIsResourcesOpen((prev) => !prev)}
              >
                <span>Resources</span> <span><FontAwesomeIcon icon={faCaretDown} /> </span>
              </button>

              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className={`absolute left-0 z-20 w-24 origin-top-left rounded-md shadow-2xl flex flex-col text-center ${dropdownBg} ${textColor}`}>
                  {/* <Link to="/notes" className={` px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                    Notes
                  </Link> */}
                  <Link to="/pyq" className={` px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                    PYQs
                  </Link>
                  <Link to="/syllabus" className={` px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                    Syllabus
                  </Link>
                  <Link to="/book" className={` px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                    Books
                  </Link>
                  <Link to="/youtube" className={` px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                    Youtube
                  </Link>
                </div>
              )}
            </div>
          
                <Link to="/blogs" title="Blogs" className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                  Blogs
                </Link>
                {/* <Link to="/complaints" title="Blogs" className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                Complaints                </Link> */}

                <Link to="/contact" title="Contact" className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}>
                  Contact Us
                </Link>
              </>
            )}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" title="Dashboard" className={`px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`}>
                  Dashboard
                </Link>

                <Link to="/logout" title="Logout" className={`px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`} role="button">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" title="Login" className={`px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`}>
                  Login
                </Link>

                <Link to="/register" title="Register" className={`px-5 py-2 text-base font-semibold leading-7 transition-all duration-200 bg-transparent border border-current rounded-xl font-pj ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
