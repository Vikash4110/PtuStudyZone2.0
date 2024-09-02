import { Link, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

const HodLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user || !user.isHod) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <br /><br /><br />
      <header className="bg-blue-800 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">HOD Panel</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:bg-blue-900 transition duration-300 rounded-lg">
                <Link to="/hod/complaints" className="flex items-center px-4 py-2">
                  <FaUser className="text-lg mr-2" />
                  <span className="hidden md:inline">Student Grievances</span>
                </Link>
              </li>
              <li className="hover:bg-blue-900 transition duration-300 rounded-lg">
                <Link to="/" className="flex items-center px-4 py-2">
                  <FaHome className="text-lg mr-2" />
                  <span className="hidden md:inline">Home</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
    </>
  );
};

export default HodLayout;
