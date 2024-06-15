import { useContext, createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token,setToken] = useState(localStorage.getItem('token') || null);
    const [user,setUser] = useState(localStorage.getItem('user') || null);
   
    
    return (
        <AuthContext.Provider value={{token,setToken,user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

export const logout = () => {
    
}
