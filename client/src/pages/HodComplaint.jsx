import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaTrashAlt, FaUser, FaEnvelope, FaCalendarAlt, FaBuilding, FaExclamationCircle } from "react-icons/fa";
import { useAuth } from "../store/auth";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const HodComplaint = () => {
  const [complaintData, setComplaintData] = useState([]);
  const { authorizationToken } = useAuth();

  const getComplaintsData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/hod/complaint`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken, // Ensure the token is sent properly
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.complaints)) {
          setComplaintData(data.complaints); // Update state with the complaints array
        } else {
          toast.error("Unexpected data format received");
        }
      } else {
        const errorData = await response.json();
        toast.error(`Failed to fetch complaints: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while fetching complaints");
    }
  };

  const deleteComplaintById = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/hod/complaint/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken, // Ensure the token is sent properly
        },
      });

      if (response.ok) {
        toast.success("Complaint deleted successfully");
        getComplaintsData();
      } else {
        const errorData = await response.json();
        toast.error(`Failed to delete complaint: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the complaint");
    }
  };

  useEffect(() => {
    getComplaintsData();
  }, []);

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Student Grievances</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {Array.isArray(complaintData) && complaintData.length > 0 ? (
            complaintData.map((curComplaintData) => {
              const { _id, username, email, department, date, problem } = curComplaintData;
              return (
                <div key={_id} className="mb-6 p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center space-x-2">
                      <FaUser className="text-blue-500" />
                      <span>{username}</span>
                    </h2>
                    <p className="text-gray-600 mb-1 flex items-center space-x-2">
                      <FaEnvelope className="text-blue-500" />
                      <span>{email}</span>
                    </p>
                    <p className="text-gray-600 mb-1 flex items-center space-x-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{new Date(date).toLocaleDateString()}</span>
                    </p>
                    <p className="text-gray-600 mb-1 flex items-center space-x-2">
                      <FaBuilding className="text-blue-500" />
                      <span>{department}</span>
                    </p>
                    <p className="text-gray-600 mb-4 flex items-center space-x-2">
                      <FaExclamationCircle className="text-blue-500" />
                      <span>{problem}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => deleteComplaintById(_id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition duration-300"
                  >
                    <FaTrashAlt />
                    <span>Delete</span>
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600 text-center">No complaints found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HodComplaint;
