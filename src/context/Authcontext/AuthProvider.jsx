import { createContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const login = async (mobileNumberOrEmail, pin) => {
    const response = await axiosPublic.post("/login", {
      mobileNumberOrEmail,
      pin,
    });
    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
