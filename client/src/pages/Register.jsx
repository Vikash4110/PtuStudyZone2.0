import { useState } from "react";
import PtuImg from "../assets/PTULogo.gif";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import BackImg from "../assets/ptu-main-building.jpg";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Register = () => {
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
    }
  };

  return (
    <>
    <br />
    <br />
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="lg:w-1/2 bg-black flex items-center justify-center">
          <img src={PtuImg} alt="PTU Logo" className="object-cover h-full" />
        </div>
        <div className="lg:w-1/2 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInput}
                placeholder="Enter your username"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rollno" className="block text-gray-700">Roll Number</label>
              <input
                type="text"
                name="rollno"
                value={user.rollno}
                onChange={handleInput}
                placeholder="Enter your Roll Number"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="department" className="block text-gray-700">Department</label>
              <select
                name="department"
                value={user.department}
                onChange={handleInput}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                <option value="B.Tech Computer Science Engineering">B.Tech Computer Science Engineering</option>
                <option value="B.Tech Electronics and Communication Engineering">B.Tech Electronics and Communication Engineering</option>
                <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="semester" className="block text-gray-700">Semester</label>
              <select
                name="semester"
                value={user.semester}
                onChange={handleInput}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Enter your phone number"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Register Now
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  
  );
};

export default Register;
