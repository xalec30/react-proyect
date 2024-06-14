import Navbar from "../components/Nav";
import FooterContent from "../components/footer";
import FormRegisterContent from "../components/FormRegister"


export default function Register(){
    return(
        <>  
            <Navbar hiddenAuth="1" />
            <FormRegisterContent />
            <FooterContent/>
        </>
    )
}