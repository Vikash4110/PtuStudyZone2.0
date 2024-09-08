import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminEditPyq = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { authorizationToken } = useAuth();
  const [service, setService] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectcode, setSubjectcode] = useState("");
  const [linka, setLinka] = useState("");
  const [linkb, setLinkb] = useState("");
  const [linkc, setLinkc] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/admin/pyq/${id}`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data) {
          setService(data.service || '');
          setSemester(data.semester || '');
          setSubject(data.subject || '');
          setSubjectcode(data.subjectcode || '');
          setLinka(data.linka || '');
          setLinkb(data.linkb || '');
          setLinkc(data.linkc || '');
        }
      } catch (error) {
        console.error('Error fetching pyq details:', error);
        toast.error('Failed to fetch pyq details');
      }
    };

    fetchServiceDetails();
  }, [id, authorizationToken, backendUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/admin/pyq/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
        body: JSON.stringify({ service, semester, subject, subjectcode, linka, linkb, linkc }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      toast.success(data.message);
      navigate('/admin/pyq');
    } catch (error) {
      console.error('Error updating pyq:', error);
      toast.error('Failed to update pyq');
    }
  };

  return (
    <section className="bg-white shadow-md rounded my-6 p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit PYQ</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Service Name</label>
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Semester</label>
          <input
            type="text"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subject Code</label>
          <input
            type="text"
            value={subjectcode}
            onChange={(e) => setSubjectcode(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Link 1</label>
          <input
            type="url"
            value={linka}
            onChange={(e) => setLinka(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Link 2</label>
          <input
            type="url"
            value={linkb}
            onChange={(e) => setLinkb(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Link 3</label>
          <input
            type="url"
            value={linkc}
            onChange={(e) => setLinkc(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Update PYQ
        </button>
      </form>
    </section>
  );
};

export default AdminEditPyq;
