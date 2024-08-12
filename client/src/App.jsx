// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./components/Error"; // Ensure this is imported
import Syllabus from "./pages/Syllabus";
import Pyq from "./pages/Pyq";
import Notes from "./pages/Notes";
import Book from "./pages/Book";
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

import MyBlog from './components/MyBlog';
import PTUBlog from './pages/PTUBlog';
import EditBlog from './components/EditBlog';
import SingleBlog from './components/SingleBlog';
import ComposeBlog from './components/ComposeBlog';
import UpdateUser from "./components/UpdateUser";
import Youtube from "./pages/Youtube";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/pyq" element={<Pyq />} />
          <Route path="/book" element={<Book />} />
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
              {/* Books */}
              <Route path="book" element={<AdminBook />} />
            <Route path="book/add" element={<AdminAddBook />} />
            <Route path="book/:id/edit" element={<AdminEditBook />} />

          </Route>
          <Route path="*" element={<Error />} /> {/* This will catch all undefined routes */}
        </Routes>
    </BrowserRouter>
  );
};

export default App;
