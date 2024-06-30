import { Link } from "react-router-dom";
import { useAuth} from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function Navbar(props){

    const Auth = useAuth();
    let linkAccount = ""
    const navigate = useNavigate();

    function toggleBurguer(){
        document.getElementById('navbar-burguer').classList.toggle('is-active');
        document.getElementById('navbarmenu').classList.toggle('is-active');
    }

    function logout(){
        Auth.logout();
        navigate('/account/login');
    }

    if(props.hiddenAuth == 1){
        return(
            <>
                <nav className="navbar border-bottom">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to={"/"}>TecnoHub</Link>
                        <a role="button" onClick={() => toggleBurguer()} id="navbar-burguer" className="navbar-burger" aria-label="menu" data-target="navbarmenu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarmenu" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item has-text-weight-medium" to={"/"}>Inicio</Link>
                            <Link className="navbar-item has-text-weight-medium" to={"/about"}>Acerca de proyecto</Link>
                        </div>
                        <div className="navbar-end">
                        </div>
                    </div>
                </nav>
            </>
        )
    }else{
        return(
            <>
                <nav className="navbar border-bottom">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to={"/"}>TecnoHub</Link>
                        <a role="button" className="navbar-burger" onClick={() => toggleBurguer()} id="navbar-burguer" aria-label="menu" data-target="navbarmenu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarmenu" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item has-text-weight-medium" to={"/"}>Inicio</Link>
                            <Link className="navbar-item has-text-weight-medium" to={"/about"}>Acerca del proyecto</Link>
                        </div>
                        {
                            (Auth.token) ? 
                                
                            <div className="navbar-end">
                                {
                                        (props.isButtonDashboard) ? (
                                        <input className="input input-search mr-3 mt-2" style={{width:'100%'}} placeholder="Que desea encontrar?" type="text" id="search"></input>
                                    ) : ''
                                }
                                <div className="navbar-item">
                                    
                                    <div className="buttons">
                                        {
                                            (props.isButtonDashboard) ? (
                                                <Link className="button is-link is-white" to={'/dashboard/overview'}><strong>Panel del usuario</strong></Link>
                                            ) : ''
                                        }
                                        <button className="button" onClick={() => logout()}>Cerrar Sesion</button>
                                    </div>
                                    </div>
                                </div>
                            :

                            <div className="navbar-end">
                                <input className="input input-search mr-3 mt-2" style={{minWidth:'100%'}} placeholder="Que desea encontrar?" type="text" id="search" />
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <Link className="button is-white" to={'/account/login'}><strong>Iniciar Sesion</strong></Link>
                                        <Link className="button is-link has-text-white" to={'/account/register'}>Registarse</Link>
                                    </div>
                                </div>
                            </div>

                        }
                    </div>
                </nav>
            </>
        )
    }

}