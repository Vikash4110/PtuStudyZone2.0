import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function AdminUpdate() {
    
   const [data, setData] = useState({
    username: "",
    email: "", 
    phone: "",
    rollNo: "",
    department: "",
    semester: "",
   });

   const params = useParams();
   const { authorizationToken } = useAuth();
   const navigate = useNavigate();

   const getSingleUserData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/admin/user/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
    
      const data = await response.json();
      console.log(`user single data : ${JSON.stringify(data)}`);

      setData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

   useEffect(() => {
    getSingleUserData();
   }, []);

   const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
        ...data,
        [name]: value,
    });
   };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const response = await fetch(`${backendUrl}/api/admin/user/update/${params.id}`, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
       });
       if (response.ok) {
          toast.success("Updated Successfully");
          navigate('/admin/users'); // Redirect to /admin/users page upon successful update
       } else {
          toast.error("Not Updated");
       }
    } catch (error) {
     console.error('Error updating user:', error);
     toast.error("Not Updated");
    }
  };

  return (
    <>
      <section className="py-12"> 
        <div className="container mx-auto text-center flex justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Update User Data</h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="rollNo" className="block text-gray-700 mb-2">
                  Roll No
                </label>
                <input
                  type="text"
                  name="rollNo"
                  id="rollNo"
                  autoComplete="off"
                  value={data.rollno}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="department" className="block text-gray-700 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  autoComplete="off"
                  value={data.department}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="semester" className="block text-gray-700 mb-2">
                  Semester
                </label>
                <input
                  type="text"
                  name="semester"
                  id="semester"
                  autoComplete="off"
                  value={data.semester}
                  onChange={handleInput}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 ease-in-out">Update</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
