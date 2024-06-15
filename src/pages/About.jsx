import Navbar from "../components/Nav";
import Menu from "../components/Aside";
import FooterContent from "../components/footer";
import MainContent from "../components/main";

export default function About(){
    return(
        <>
            <Navbar isButtonDashboard="true" />
            <div class="container is-widescreen p-4" style={{height:'100vh'}}>
                <h1 class="title has-text-centered">Acerca del proyecto</h1>
            </div>
            <FooterContent />
        </>
    )
}