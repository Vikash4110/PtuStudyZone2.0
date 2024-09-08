import React, { useEffect, useState } from 'react';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { Instagram } from 'react-content-loader'; 

const AdminYoutube = () => {
  const [syllabus, setSyllabus] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authorizationToken } = useAuth();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllSyllabusData = async () => {
    if (!authorizationToken) {
      toast.error("Unauthorized. Please login again.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/admin/youtube`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.status === 401) {
        toast.error('Unauthorized. Please login again.');
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSyllabus(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching Syllabus:', error);
      toast.error('Failed to fetch Syllabus');
    } finally {
      setLoading(false);
    }
  };

  const deleteSyllabus = async (id) => {
    if (!authorizationToken) {
      toast.error("Unauthorized. Please login again.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/admin/youtube/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.status === 401) {
        toast.error('Unauthorized. Please login again.');
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Youtube Channel Deleted Successfully");
      setSyllabus(prevSyllabus => prevSyllabus.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting Syllabus:', error);
      toast.error('Failed to delete Syllabus');
    }
  };

  useEffect(() => {
    getAllSyllabusData();
  }, []);

  if (loading) {
    return <Instagram />;
  }

  return (
    <>
    <br />
    <br />
    <br />
    <section className="bg-white shadow-md rounded my-6">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Admin Youtube Data</h1>
        <div className="mb-4">
          <Link to="/admin/youtube/add" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            Add New Youtube
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200">Service</th>
                <th className="py-2 px-4 bg-gray-200">Semester</th>
                <th className="py-2 px-4 bg-gray-200">Subject</th>
                <th className="py-2 px-4 bg-gray-200">Subject Code</th>
                <th className="py-2 px-4 bg-gray-200">Link</th>
                <th className="py-2 px-4 bg-gray-200">Edit</th>
                <th className="py-2 px-4 bg-gray-200">Delete</th>
              </tr>
            </thead>
            <tbody>
              {syllabus.map((curService) => (
                <tr key={curService._id} className="text-center">
                  <td className="py-2 px-4 border">{curService.service}</td>
                  <td className="py-2 px-4 border">{curService.semester}</td>
                  <td className="py-2 px-4 border">{curService.subject}</td>
                  <td className="py-2 px-4 border">{curService.subjectcode}</td>
                  <td className="py-2 px-4 border"><a href={curService.link} target="_blank" rel="noopener noreferrer">Link</a></td>
                  <td className="py-2 px-4 border">
                    <Link to={`/admin/youtube/${curService._id}/edit`} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700">Edit</Link>
                  </td>
                  <td className="py-2 px-4 border">
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700" onClick={() => deleteSyllabus(curService._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
    </> 
  );
};

export default AdminYoutube;
