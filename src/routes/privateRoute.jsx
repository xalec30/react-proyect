import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../provider/AuthProvider';
import Navbar from "../components/Nav";
import FooterContent from "../components/footer";
import NavAccount from "../components/NavAccount";

const PrivateRoute = () => {
    const user = useAuth();
    
    if (!user.token){
        return <Navigate to="/account/login" />;
    }

    return (
        <>
            <Navbar/>
                <div className="columns" style={{height:'100vh'}}>
                    <NavAccount/>
                    <Outlet />
                </div>
            <FooterContent/>
        </>
    );  

};

export default PrivateRoute; 