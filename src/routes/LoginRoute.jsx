import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../provider/AuthProvider';

const LoginRoute = () => {
    const user = useAuth();
    
    if (user.token){
        return <Navigate to="/dashboard/overview" />;
    }

    return (
        <>
            <Outlet />
        </>
    );  

};

export default LoginRoute; 