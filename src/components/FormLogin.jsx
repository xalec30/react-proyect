import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import codeigniter from "../utils/axios";
import { useAuth } from "../provider/AuthProvider";

export default function FormLoginContent(){

    const [error,setError] = useState();
    const navigate = useNavigate();
    const Auth = useAuth();

    const AuthLoginUser = async() => {

        document.getElementById('button-submit-login').classList.add('is-loading');
        let username = document.getElementById('username').value;
        let password = document.getElementById('user-password').value;

    
        
        if(username == ""){
            setError('El campo usuario es requerido');
            OpenNotification();
            document.getElementById('button-submit-login').classList.remove('is-loading');
            return;
        }

        if(password == ""){
            setError('El campo contraseña es requerido');
            OpenNotification();
            document.getElementById('button-submit-login').classList.remove('is-loading');
            return;
        }

        await codeigniter.post('/auth',{
            'username': username,
            'password': password
        }).then((response) => {
            localStorage.setItem('token',1);
            localStorage.setItem('user',JSON.stringify(response.data.user_data));
            Auth.login();
            navigate("/dashboard/overview");
            return;
        }).catch(function (error) {

            if(error.response){
                let errors = error.response.data.messages;
        
                setError(Object.values(errors)[0]);
                OpenNotification();
                document.getElementById('button-submit-login').classList.remove('is-loading');
            }

           
        })
    }

    const OpenNotification = () => {
        document.querySelector('.notification').classList.remove('is-hidden');
    }

    const CloseNotification = () => {
        document.querySelector('.notification').classList.add('is-hidden');
    }

    return(
        <div className="container mt-4">
            <div className="columns" style={{justifyContent:"center"}}>
                <div className="column is-6">
                    <section className="mt-4 p-3" style={{height:"550px"}}>
                        <h2 className="title has-text-centered">Iniciar Sesion</h2>
                        <div className="notification is-danger is-light is-hidden">
                            <button className="delete" onClick={() => CloseNotification()}></button>
                            {error}
                        </div>
                        <form method='post'>
                            <div className="field mt-4">
                                <label className="label">Usuario</label>
                                <div className="control">
                                    <input className="input" id="username" onKeyDown={() => CloseNotification()} type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="field mt-4">
                                <label className="label">Contraseña</label>
                                <div className="control">
                                    <input className="input" id="user-password" onKeyDown={() => CloseNotification()} autoComplete="off" type="password" placeholder="" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <label className="checkbox">
                                    <input type="checkbox" />
                                        &nbsp;Recuerdame
                                    </label>
                                </div>
                            </div>  
                            <div className="field mt-2">
                                <Link to="/account/lostpassword">¿Olvidaste tu contraseña?</Link>
                            </div>
                        </form>
                        <button id="button-submit-login" className="button is-link is-fullwidth mt-4" onClick={() => AuthLoginUser()}>Iniciar Sesion</button>
                        <p className="has-text-centered pt-2 pb-2">O</p>
                        <Link className="button  is-fullwidth mt-4" to={ '/account/register' }>Registrarse</Link>
                    </section>
                </div>
            </div>
        </div>
    )
}