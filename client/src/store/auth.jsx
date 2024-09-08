import { createContext, useContext, useState, useEffect } from "react";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [syllabus, setSyllabus] = useState([]);
  const [pyq, setPyq] = useState([]);
  const [notes, setNotes] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [book, setBook] = useState([]);
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

  const getNotesData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/data/notes`, {
        method: "GET",
      });
      if (response.ok) {
        const notes = await response.json();
        setNotes(notes.msg);
      } else {
        console.error("Error fetching Notes data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getYoutubeData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/data/youtube`, {
        method: "GET",
      });
      if (response.ok) {
        const youtube = await response.json();
        setYoutube(youtube.msg);
      } else {
        console.error("Error fetching Youtube data");
      }
    } catch (error) {
      console.log(error);
    }
  };



  const getBookData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/data/book`, {
        method: "GET",
      });
      if (response.ok) {
        const book = await response.json();
        setBook(book.msg);
      } else {
        console.error("Error fetching Book data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
    getSyllabusData();
    getPyqData();
    getNotesData();
    getYoutubeData();
    getBookData();
  }, [authorizationToken]);

  // Determine if the user is an admin based on the user data
  const isAdmin = user && user.isAdmin === true;

  const isLoggedIn = !!token;

    // Determine if the user is an Hod based on the user data
    const isHod = user && user.isHod === true;

    const isLoggedInHod = !!token;

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoggedInHod, storeTokenInLS, logoutUser, user, syllabus, pyq, notes, youtube,book, authorizationToken, isLoading, isAdmin, isHod }}>
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
