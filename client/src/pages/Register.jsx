import { useState } from "react";
import PtuImg from "../assets/PTULogo.gif";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faListOl } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import { RotatingLines } from "react-loader-spinner"; // Import the loader component

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Register = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    rollno: "",
    department: "B.Tech Computer Science Engineering",
    semester: "1",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!backendUrl) {
      toast.error("Backend URL is not defined. Please check your environment variables.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch(`${backendUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (!response.ok) {
        throw new Error(res_data.extraDetails || res_data.message || "Registration failed");
      }

      storeTokenInLS(res_data.token);
      setUser({
        username: "",
        rollno: "",
        department: "B.Tech Computer Science Engineering",
        semester: "1",
        email: "",
        phone: "",
        password: "",
      });
      toast.success("Registered Successfully");
      navigate("/");
    } catch (error) {
      console.error("Register error: ", error);
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-md mx-auto mt-6  text-center border-2 rounded-3xl py-10 lg:py-12 px-6 lg:px-10 shadow-2xl ">

        <div className="grid grid-cols-2 gap-6">


          <div className="relative h-11 w-full">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInput}
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              required
            />
            <label
              className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]"
            >
              <span><FontAwesomeIcon icon={faUser} /></span><span>Username</span>
            </label>
          </div>

          <div className="relative h-11 w-full">
            <input
              type="text"
              name="rollno"
              value={user.rollno}
              onChange={handleInput}
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              required
            />
            <label
              className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]"
            >
              <span><FontAwesomeIcon icon={faMobile} /></span><span>Roll No.</span>
            </label>
          </div>

          <div className="relative h-11 w-full">
            <select
              name="department"
              value={user.department}
              onChange={handleInput}
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              required
            >
              <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
              <option value="B.Tech Electronics and Communication Engineering">B.Tech Electronics and Communication Engineering</option>
              <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
            </select>

            <label
              className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]"
            >
              <span><FontAwesomeIcon icon={faBuilding} /></span><span>Department</span>
            </label>
          </div>




          <div className="relative h-11 w-full">
            <select
              name="semester"
              value={user.semester}
              onChange={handleInput}
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              required
            >

              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>{sem}</option>
              ))}
            </select>
            <label
              className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]"
            >
              <span><FontAwesomeIcon icon={faListOl} /></span><span>Semester</span>
            </label>
          </div>

          <div className="relative h-11 w-full">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              required
            />

            <label
              className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]"
            >
              <span><FontAwesomeIcon icon={faEnvelope} /></span><span>Email</span>
            </label>
          </div>


          <div className="relative h-11 w-full">
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleInput}
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              required
            />

            <label
              className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]"
            >
              <span><FontAwesomeIcon icon={faPhone} /></span><span>Phone</span>
            </label>
          </div>


          <div className="relative h-11 w-full col-start-1 col-span-2">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder=""
              className="shadow-xl peer h-full w-full rounded-xl border border-gray-300 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-[#ed1f26] focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent disabled:border-0 disabled:bg-gray-50"
              required
            />


            <label
              className="pointer-events-none absolute left-3 -top-1.5 flex items-center space-x-2  select-none text-[12px] font-medium leading-tight text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-1.5 peer-focus:text-[12px] peer-focus:text-[#ed1f26]"
            >
              <span><FontAwesomeIcon icon={faLock} /></span><span>Password</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="py-2 px-4 rounded-full mt-6 font-medium text-white w-1/2 mx-auto  block  bg-gradient-to-r from-purple-500 to-red-500   transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            </div>
          ) : (
            "Register Now"
          )}
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already registered? <Link to="/login" className="text-[#ed1f26] font-semibold hover:underline">Login</Link>
        </p>


      </form>
    </>
  );
};

export default Register;
