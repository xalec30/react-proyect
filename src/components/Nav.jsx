import { Link } from "react-router-dom";
import { useAuth} from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function Navbar(props){

    const Auth = useAuth();
    let linkAccount = ""
    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem("token");
        localStorage.removeItem('user');
        navigate('/account/login');
    }

    if(props.hiddenAuth == 1){
        return(
            <>
                <nav className="navbar border-bottom">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to={'/'}>TecnoHub</Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item has-text-weight-medium" to={"/"}>Inicio</Link>
                            <Link className="navbar-item has-text-weight-medium" to={"/about"}>Acerca de </Link>
                        </div>
                    </div>
                    <div className="navbar-end">
                    </div>
                </nav>
            </>
        )
    }else{
        return(
            <>
                <nav className="navbar border-bottom">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">TecnoHub</a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item has-text-weight-medium" to={"/"}>Inicio</Link>
                            <Link className="navbar-item has-text-weight-medium" to={"/about"}>Acerca de </Link>
                        </div>
                    </div>
                    {
                        (Auth.token) ? 
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <Link className="button is-link is-white" to={'/dashboard/overview'}><strong>Panel del usuario</strong></Link>
                                        <button className="button" onClick={() => logout()}>Cerrar Sesion</button>
                                    </div>
                                </div>
                            </div>
                        :

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link className="button is-white" to={'/account/login'}><strong>Iniciar Sesion</strong></Link>
                                    <Link className="button is-link has-text-white" to={'/account/register'}>Registarse</Link>
                                </div>
                            </div>
                        </div>

                    }
                </nav>
            </>
        )
    }

}