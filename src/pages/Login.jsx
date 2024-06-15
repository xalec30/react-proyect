import Navbar from "../components/Nav";
import FooterContent from "../components/footer";
import FormLoginContent from "../components/FormLogin";
import { useEffect } from "react";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login(){

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
            <FormLoginContent />
            <FooterContent/>
        </>
    )
}

