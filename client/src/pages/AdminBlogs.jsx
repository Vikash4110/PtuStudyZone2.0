import { useAuth } from "../store/auth";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Instagram } from 'react-content-loader';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminBlogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authorizationToken } = useAuth();

  // Fetch blog data from the backend 
  const getBlogData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/admin/blogs`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log("Blog Data:", data);

      if (response.ok) {
        // Set the blog data directly
        if (Array.isArray(data.blogs)) { // Use data.blogs as it's returned in an object
          setBlogData(data.blogs);
        } else {
          console.error("Unexpected data format:", data);
          toast.error("Unexpected data format received from the server.");
        }
      } else {
        console.error("Failed to fetch blogs:", data);
        toast.error(`Failed to fetch blogs: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("An error occurred while fetching the blogs.");
    } finally {
      setLoading(false);
    }
  };

  // Delete a blog by ID
  const deleteBlogById = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/admin/blogs/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
  
      if (response.ok) {
        toast.success("Blog deleted successfully.");
        // Refresh the blog data after deletion
        getBlogData();
      } else {
        const errorData = await response.json();
        console.error("Failed to delete blog:", errorData);
        toast.error(`Failed to delete blog: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("An error occurred while deleting the blog.");
    }
  };
  
  // Fetch blog data when the component is mounted
  useEffect(() => {
    getBlogData();
  }, []);

  if (loading) {
    return <Instagram />;
  }

  return (
    <>
    <br /><br />
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Admin Blogs</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {Array.isArray(blogData) && blogData.length > 0 ? (
            blogData.map((curBlogData) => {
              const { _id, title, content, authorName, createdAt } = curBlogData;
              return (
                <div key={_id} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
                    <button
                      onClick={() => deleteBlogById(_id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-600"><strong>Author:</strong> {authorName}</p>
                  <p className="text-gray-600"><strong>Created At:</strong> {new Date(createdAt).toLocaleDateString()}</p>
                  <p className="text-gray-600"><strong>Content:</strong> {content}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600 text-center">No blogs found.</p>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default AdminBlogs;
