// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./pages/Error"; // Ensure this is imported
import Syllabus from "./pages/Syllabus";
import Pyq from "./pages/Pyq";
import Notes from "./pages/Notes";
import UserDashboard from "./pages/UserDashboard"; 

import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminUpdate from "./pages/AdminUpdate";
import AdminSyllabus from "./pages/AdminSyllabus";
import AdminAddSyllabus from "./pages/AdminAddSyllabus";
import AdminEditSyllabus from "./pages/AdminEditSyllabus";
import AdminPyq from "./pages/AdminPyq";
import AdminEditPyq from "./pages/AdminEditPyq";
import AdminAddPyq from "./pages/AdminAddPyq";
import AdminNotes from "./pages/AdminNotes";
import AdminEditNotes from "./pages/AdminEditNotes";
import AdminAddNotes from "./pages/AdminAddNotes";
import AdminBlogs from "./pages/AdminBlogs";
import AdminYoutube from "./pages/AdminYoutube";
import AdminAddYoutube from "./pages/AdminAddYoutube";
import AdminEditYoutube from "./pages/AdminEditYoutube";

import MyBlog from './pages/MyBlog';
import PTUBlog from './pages/PTUBlog';
import EditBlog from './pages/EditBlog';
import SingleBlog from './pages/SingleBlog';
import ComposeBlog from './pages/ComposeBlog';
import UpdateUser from "./pages/UpdateUser";
import Youtube from "./pages/Youtube";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/pyq" element={<Pyq />} />
          <Route path="/notes" element={<Notes />} />
          {/* Dashboard */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/update-profile" element={<UpdateUser />} />
          {/* Blogs */}
          <Route path="/my-blogs" element={<MyBlog />} />
          <Route path="/blogs" element={<PTUBlog />} />
          <Route path="/compose-blog" element={<ComposeBlog />} />
          <Route path="/my-blogs/edit/:id" element={<EditBlog />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
          {/* Youtube */}
          <Route path="/youtube" element={<Youtube />} />

          <Route path="/contact" element={<Contact />} />
          {/* Admin Panel */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/users" />} />
            {/* Users */}
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            {/* Contact */}
            <Route path="contacts" element={<AdminContacts />} />
            {/* Syllabus */}
            <Route path="syllabus" element={<AdminSyllabus />} />
            <Route path="syllabus/add" element={<AdminAddSyllabus />} />
            <Route path="syllabus/:id/edit" element={<AdminEditSyllabus />} />
            {/* Pyq */}
            <Route path="pyq" element={<AdminPyq />} />
            <Route path="pyq/add" element={<AdminAddPyq />} />
            <Route path="pyq/:id/edit" element={<AdminEditPyq />} />
            {/* Notes */}
            <Route path="notes" element={<AdminNotes />} />
            <Route path="notes/add" element={<AdminAddNotes />} />
            <Route path="notes/:id/edit" element={<AdminEditNotes />} />
            {/* Blogs */}
            <Route path="blogs" element={<AdminBlogs />} />
            {/* Youtube */}
            <Route path="youtube" element={<AdminYoutube />} />
            <Route path="youtube/add" element={<AdminAddYoutube />} />
            <Route path="youtube/:id/edit" element={<AdminEditYoutube />} />

          </Route>
          <Route path="*" element={<Error />} /> {/* This will catch all undefined routes */}
        </Routes>
    </BrowserRouter>
  );
};

export default App;
