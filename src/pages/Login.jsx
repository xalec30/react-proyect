import Navbar from "../components/Nav";
import FooterContent from "../components/footer";
import FormLoginContent from "../components/FormLogin";


export default function Login(){

    return(
        <>
            <Navbar hiddenAuth="1" />
            <FormLoginContent />
            <FooterContent/>
        </>
    )
}

