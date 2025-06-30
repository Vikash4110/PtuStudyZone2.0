import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import Logout from "./components/Logout";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Syllabus from "./pages/Syllabus";
import Pyq from "./pages/Pyq";
import Notes from "./pages/Notes";
import Book from "./pages/Book";
import Complaint from "./pages/Complaint";
import HodComplaint from "./pages/HodComplaint";
import HodLayout from "./components/layouts/HodLayout";
import UserDashboard from "./pages/UserDashboard";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminUpdate from "./components/AdminUpdate";
import AdminSyllabus from "./pages/AdminSyllabus";
import AdminAddSyllabus from "./components/AdminAddSyllabus";
import AdminEditSyllabus from "./components/AdminEditSyllabus";
import AdminPyq from "./pages/AdminPyq";
import AdminEditPyq from "./components/AdminEditPyq";
import AdminAddPyq from "./components/AdminAddPyq";
import AdminNotes from "./pages/AdminNotes";
import AdminEditNotes from "./components/AdminEditNotes";
import AdminAddNotes from "./components/AdminAddNotes";
import AdminBlogs from "./pages/AdminBlogs";
import AdminYoutube from "./pages/AdminYoutube";
import AdminAddYoutube from "./components/AdminAddYoutube";
import AdminEditYoutube from "./components/AdminEditYoutube";
import AdminBook from "./pages/AdminBook";
import AdminAddBook from "./components/AdminAddBook";
import AdminEditBook from "./components/AdminEditBook";
import Loader from './components/Loader';
import MyBlog from './components/MyBlog';
import PTUBlog from './pages/PTUBlog';
import EditBlog from './components/EditBlog';
import SingleBlog from './components/SingleBlog';
import ComposeBlog from './components/ComposeBlog';
import UpdateUser from "./components/UpdateUser";
import Youtube from "./pages/Youtube";
import ScrollToTop from './components/ScrollToTop';
// import ForgotPassword from "./pages/ForgotPassword";
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

import Material from "./pages/Material";
import AdminMaterial from "./pages/AdminMaterial";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
// Initialize AOS
AOS.init();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/pyq" element={<Pyq />} />
        <Route path="/book" element={<Book />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/material" element={<Material/>} />
        <Route path="/complaints" element={<Complaint/>}/>
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/update-profile" element={<UpdateUser />} />
        <Route path="/my-blogs" element={<MyBlog />} />
        <Route path="/blogs" element={<PTUBlog />} />
        <Route path="/compose-blog" element={<ComposeBlog />} />
        <Route path="/my-blogs/edit/:id" element={<EditBlog />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/users" />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="syllabus" element={<AdminSyllabus />} />
          <Route path="syllabus/add" element={<AdminAddSyllabus />} />
          <Route path="syllabus/:id/edit" element={<AdminEditSyllabus />} />
          <Route path="pyq" element={<AdminPyq />} />
          <Route path="pyq/add" element={<AdminAddPyq />} />
          <Route path="pyq/:id/edit" element={<AdminEditPyq />} />
          <Route path="notes" element={<AdminNotes />} />
          <Route path="notes/add" element={<AdminAddNotes />} />
          <Route path="notes/:id/edit" element={<AdminEditNotes />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="youtube" element={<AdminYoutube />} />
          <Route path="youtube/add" element={<AdminAddYoutube />} />
          <Route path="youtube/:id/edit" element={<AdminEditYoutube />} />
          <Route path="book" element={<AdminBook />} />
          <Route path="book/add" element={<AdminAddBook />} />
          <Route path="book/:id/edit" element={<AdminEditBook />} />
          <Route path="material" element={<AdminMaterial />} />
        </Route>
        <Route path="/hod" element={<HodLayout />}>
        <Route index element={<Navigate to="/hod/complaints" />} />
        <Route path="complaints" element={<HodComplaint />} />
        </Route>
        <Route path="*" element={<Error />} /> {/* This will catch all undefined routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
