import Navbar from "../components/Nav";
import FooterContent from "../components/footer";
import FormRegisterContent from "../components/FormRegister"
import { useEffect } from "react";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Register(){

    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        const checkAuth = () => {

            if(auth.token){
                navigate('/dashboard/overview');
            }
        }

        checkAuth();
    })

    return(
        <>  
            <Navbar hiddenAuth="1" />
            <FormRegisterContent />
            <FooterContent/>
        </>
    )
}