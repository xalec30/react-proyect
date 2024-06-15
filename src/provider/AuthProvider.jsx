import { useContext, createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token,setToken] = useState(localStorage.getItem('token') || null);
    const [user,setUser] = useState(localStorage.getItem('user') || null);
   
    const logout = () => {
        setUser();
        setToken();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return;
    }

    const login = () => {
        setUser(localStorage.getItem('user'));
        setToken(localStorage.getItem('token'));
        return;
    }


    return (
        <AuthContext.Provider value={{token,setToken,user,setUser,logout,login}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};