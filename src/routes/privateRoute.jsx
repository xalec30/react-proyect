import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../provider/AuthProvider';

const PrivateRoute = () => {
    const user = useAuth();
    
    if (!user.token){
        return <Navigate to="/account/login" />;
    }

    return <Outlet />;

};

export default PrivateRoute; 