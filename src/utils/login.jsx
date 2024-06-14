import { useNavigate } from "react-router-dom";

export const logout = () => {

    navigate = useNavigate();

    localStorage.removeItem("token");
    localStorage.removeItem('user');
    navigate('/account/login');
}