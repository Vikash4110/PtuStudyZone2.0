import React, { useEffect, useState } from 'react';
import {
    FaBook, FaCode, FaUniversity, FaCalendarAlt, FaUser, FaLink, FaStickyNote, FaTrash, FaClock
} from 'react-icons/fa';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { toast } from "react-toastify";

const AdminMaterial = () => {
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await fetch(`${backendUrl}/api/data/material/all`);
                if (response.ok) {
                    const data = await response.json();
                    setMaterials(data);
                } else {
                    setError('Failed to fetch materials');
                }
            } catch (error) {
                setError('An error occurred while fetching materials');
            } finally {
                setLoading(false);
            }
        };
        fetchMaterials();
    }, []);

    // Function to handle deletion of a material
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${backendUrl}/api/data/material/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                toast.success("Material Deleted Successfully");
                setMaterials(materials.filter(material => material._id !== id));
            } else {
                setError('Failed to delete material');
            }
        } catch (error) {
            setError('An error occurred while deleting material');
        }
    };

    return (
        <>
        <br /><br /><br />
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-800">Submitted Materials</h2>

            {loading ? (
                <p className="text-center text-lg text-gray-600">Loading materials...</p>
            ) : error ? (
                <p className="text-center text-lg text-red-600">{error}</p>
            ) : materials.length === 0 ? (
                <p className="text-center text-lg text-gray-600">No materials found.</p>
            ) : (
                <div className="space-y-6"> {/* Replacing grid with space between cards */}
                    {materials.map((material) => (
                        <div
                            key={material._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300  hover:shadow-2xl flex items-center p-6 border-l-4 border-blue-600"
                        >
                          
                            <div className="flex-grow">
                          <p className="text-lg text-gray-600 mb-4 flex items-center">
                            <FaBook className="text-3xl mr-2 text-blue-600" />
                                <h3 className="text-2xl font-bold mb-4 text-gray-700 flex items-center">
                                    {material.subject}
                                </h3>
                                </p>
                                <p className="text-lg text-gray-600 mb-2 flex items-center">
                                    <FaUser className="mr-2 text-purple-500" /> <span className="font-semibold mr-1">Added by: </span> {material.yourName}
                                </p>
                                <p className="text-base text-gray-600 mb-2 flex items-center">
                                    <FaCode className="mr-2 text-green-500" /> <span className="font-semibold mr-1">Subject Code:</span> {material.subjectCode || 'N/A'}
                                </p>
                                <p className="text-base text-gray-600 mb-2 flex items-center">
                                    <FaUniversity className="mr-2 text-red-500" /> <span className="font-semibold mr-1">Department:</span> {material.department}
                                </p>
                                <p className="text-base text-gray-600 mb-2 flex items-center">
                                    <FaCalendarAlt className="mr-2 text-yellow-500" /><span className="font-semibold mr-1">Semester:</span> {material.semester}
                                </p>
                                <p className="text-base text-gray-600 mb-2 flex items-center">
                                    <FaClock className="mr-2 text-gray-500" /> <span className="font-semibold mr-1">Date Added:</span> {new Date(material.dateCreated).toLocaleDateString()}
                                </p>

                                {material.link && (
                                    <p className="text-sm mb-4 flex items-center">
                                        <FaLink className="mr-2 text-blue-500" />
                                        <a
                                            href={material.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg font-mono inline-block hover:bg-gray-200"
                                        >
                                            {material.link}
                                        </a>
                                    </p>
                                )}
                                {material.note && (
                                    <p className="text-base text-gray-600 mb-4 flex items-center">
                                        <FaStickyNote className="mr-2 text-orange-400" /> {material.note}
                                    </p>
                                )}
                            </div>
                            <div className="flex-shrink-0 text-center">
                                <button
                                    onClick={() => handleDelete(material._id)} 
                                    className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 inline-flex items-center"
                                >
                                    <FaTrash className="mr-2" /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
};

export default AdminMaterial;
