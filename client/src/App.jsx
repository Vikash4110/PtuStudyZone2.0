// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"; 
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import Error from "./pages/Error"; // Ensure this is imported

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} /> {/* This will catch all undefined routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
