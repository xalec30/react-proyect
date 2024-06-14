import Navbar from "../components/Nav";
import Menu from "../components/Aside";
import FooterContent from "../components/footer";
import MainContent from "../components/main";

export default function Home(){

    return(
        <>
            <Navbar/>
            <div className="columns">
                <Menu/>
                <MainContent />
            </div>
            <FooterContent/>
        </>
    )
}