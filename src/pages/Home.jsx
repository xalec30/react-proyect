import Navbar from "../components/Nav";
import Menu from "../components/Aside";
import FooterContent from "../components/footer";
import MainContent from "../components/main";

export default function Home(){

    return(
        <>
            <Navbar isButtonDashboard="true" />
            <div className="columns">
                <Menu/>
                <MainContent />
            </div>
            <FooterContent/>
        </>
    )
}