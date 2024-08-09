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
import UserDashboard from "./pages/UserDashboard"; // Import UserDashboard
import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminUpdate from "./pages/AdminUpdate";
import AdminServices from "./pages/AdminServices";
import AdminAddService from "./pages/AdminAddService";
import AdminEditService from "./pages/AdminEditService";
import UpdateUser from "./pages/UpdateUser";
import { Link, Navigate} from "react-router-dom";
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
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/update-profile" element={<UpdateUser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/users" />} />

          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
          <Route path="syllabus" element={<AdminServices />} />
          <Route path="syllabus/add" element={<AdminAddService />} />
          <Route path="syllabus/:id/edit" element={<AdminEditService />} />
        </Route>
        <Route path="*" element={<Error />} />{" "}
        {/* This will catch all undefined routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
