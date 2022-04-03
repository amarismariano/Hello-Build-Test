import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clientAxios from "../config/clientAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State for Auth of users
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  // Check if there ir a token
  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");

      // Validation of the token
      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      // Valid Token
      try {
        const { data } = await clientAxios("/users/profile", config);
        setAuth(data);
        navigate("/home-page");
      } catch (error) {
        setAuth({}); // SI expira token
      }
      setLoading(false);
    };
    authUser();
  }, []);

  const logOutAuth = () => {
    setAuth({});
  };

  const navigate = useNavigate();

  return (
    <AuthContext.Provider
      value={{
        setAuth,
        logOutAuth,
        auth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
