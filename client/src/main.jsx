import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from "./store/auth";
import App from './App.jsx';
import './index.css';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggablenpm list react-quill

        pauseOnHover
        theme="colored"
        transition={Bounce} // Corrected transition prop
      />
  </AuthProvider>
);
