import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";
import MainLogo from "../assets/mainlogo.png";

const Nav = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
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
      if (window.scrollY >50 || location.pathname !== "/") {
        setNavbarBg("bg-white shadow-md");
        setTextColor("text-[#ed1f26]");
        setPadding("py-2 md:py-4"); // Decreased height
        setUnderlineColor("before:bg-[#ed1f26]");
        setJoinBtnHoverBg("hover:bg-[#ed1f26]");
        setJoinBtnHoverText("hover:text-white");
        setDropdownBg("bg-white");
      } else {
        setNavbarBg("bg-transparent");
        setTextColor("text-white");
        setPadding("py-4 md:py-6"); // Default height
        setUnderlineColor("before:bg-white");
        setJoinBtnHoverBg("hover:bg-white");
        setJoinBtnHoverText("hover:text-black");
        setDropdownBg("bg-transparent");
      }
    };

    if (location.pathname !== "/") {
      setNavbarBg("bg-white shadow-md");
      setTextColor("text-[#ed1f26]");
      setPadding("py-2 md:py-4");
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
    <header
      className={`fixed w-full z-30 transition-all duration-300 ease-in-out ${navbarBg} ${padding}`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to="/"
              title="home"
              className={`text-2xl font-bold transition-all duration-200 rounded font-pj hover:text-opacity-50 ${textColor}`}
            >
              <img
                src={MainLogo}
                alt="Main Logo"
                style={{ height: "70px", width: "auto" }}
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className={`${textColor}`}>
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
            <Link
              to="/about"
              title="About"
              className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              ref={dropdownRef}
            >
              <button
                className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                onClick={() => setIsResourcesOpen((prev) => !prev)}
              >
                Resources
              </button>

              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div
                  className={`absolute left-0 z-20 w-48  origin-top-left rounded-md shadow-2xl ${dropdownBg} ${textColor}`}
                >
                  <Link
                    to="/notes"
                    className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                  >
                    Notes
                  </Link>
                  <Link
                    to="/pyq"
                    className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                  >
                    PYQs
                  </Link>
                  <Link
                    to="/syllabus"
                    className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                  >
                    Syllabus
                  </Link>
                  <Link
                    to="/book"
                    className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                  >
                    Books
                  </Link>
                  <Link
                    to="/youtube"
                    className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                  >
                    Youtube
                  </Link>
                </div>
              )}
            </div>
            {isLoggedIn && (
              <>
                <Link
                  to="/blogs"
                  title="Blogs"
                  className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                >
                  Blogs
                </Link>

                <Link
                  to="/contact"
                  title="Contact"
                  className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                >
                  Contact
                </Link>
              </>
            )}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  title="Dashboard"
                  className={`
          px-5
          py-2
          text-base
          font-semibold
          leading-7
          transition-all
          duration-200
          bg-transparent
          border border-current
          rounded-xl
          font-pj
          ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`}
                >
                  Dashboard
                </Link>


<Link
to="/logout"
title="Join Community"
className={`
          px-5
          py-2
          text-base
          font-semibold
          leading-7
          transition-all
          duration-200
          bg-transparent
          border border-current
          rounded-xl
          font-pj
          ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`}
role="button"
>
Logout
</Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  title="Sign In"
                  className={`
          px-5
          py-2
          text-base
          font-semibold
          leading-7
          transition-all
          duration-200
          bg-transparent
          border border-current
          rounded-xl
          font-pj
          ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  title="Sign Up"
                  className={`
          px-5
          py-2
          text-base
          font-semibold
          leading-7
          transition-all
          duration-200
          bg-transparent
          border border-current
          rounded-xl
          font-pj
          ${joinBtnHoverBg} ${joinBtnHoverText} ${textColor}`}
                >
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

