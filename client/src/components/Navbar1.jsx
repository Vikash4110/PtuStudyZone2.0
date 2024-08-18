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

      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button
          type="button"
          className={`${textColor}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
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

      {/* Main Menu */}
      <div className="hidden lg:flex lg:items-center lg:space-x-6">
        <Link
          to="/about"
          title="About"
          className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}
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
              className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              title="Contact"
              className={`relative text-base font-medium transition-all duration-200 rounded font-pj ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300}`}
            >
              Contact
            </Link>
          </>
        )}
      </div>

      {/* Hamburger Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div
            className={`fixed top-0 left-0 z-50 w-64 p-4 bg-white h-full transition-transform duration-300 transform ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <button
              type="button"
              className="text-black"
              onClick={() => setIsMenuOpen(false)}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="mt-4 space-y-4">
              <Link
                to="/about"
                className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
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
                    className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/contact"
                    className={`block px-4 py-2 text-base transition-all duration-200 relative ${textColor} ${underlineColor} before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300`}
                  >
                    Contact
                  </Link>
                </>
              )}
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
            </nav>
          </div>
        </div>
      )}
    </div>
  </div>
</header>
