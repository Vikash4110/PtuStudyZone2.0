import { createContext, useContext, useState, useEffect } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [syllabus, setSyllabus] = useState([]);
  const [pyq, setPyq] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
  };

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser(null);
  };

  const userAuthentication = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${backendUrl}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSyllabusData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/data/syllabus`, {
        method: "GET",
      });
      if (response.ok) {
        const syllabus = await response.json();
        setSyllabus(syllabus.msg);
      } else {
        console.error("Error fetching Syllabus data");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const getPyqData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/data/pyq`, {
        method: "GET",
      });
      if (response.ok) {
        const pyq = await response.json();
        setPyq(pyq.msg);
      } else {
        console.error("Error fetching Pyq data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
    getSyllabusData();
    getPyqData();
  }, [authorizationToken]);

  // Determine if the user is an admin based on the user data
  const isAdmin = user && user.isAdmin === true;

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, user, syllabus, pyq, authorizationToken, isLoading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
