import { useEffect, useState } from "react";
import Navbar from "../components/Nav";
import FooterContent from "../components/footer";
import { Link, useNavigate } from "react-router-dom";

export default function LostPassword(){

    const [error,setError] = useState("");
    const [success,setSuccess] = useState("Se ha enviado un link a su correo electronico.");

    const OpenNotification = () => {
        document.querySelector('.notification-danger').classList.remove('is-hidden');
    }

    const CloseNotification = () => {
        document.querySelector('.notification-danger').classList.add('is-hidden');
    }

    const recoveryPassword = () => {
        document.getElementById('button-submit-lostpassword').classList.add('is-loading');
        let username = document.getElementById('username').value;

        if(username == ""){
            setError("Usuario o contraseña son requeridos");
            OpenNotification();
            document.getElementById('button-submit-lostpassword').classList.remove('is-loading');
            return;
        }

        document.querySelector('.notification-success').classList.remove('is-hidden');

        setTimeout(() => {
            document.querySelector('.notification-success').classList.add('is-hidden');
            document.getElementById('button-submit-lostpassword').classList.remove('is-loading');
        },2000);
    }


    return(
        <>
            <Navbar hiddenAuth="1" />
            <div className="container mt-4">
                <div className="columns" style={{justifyContent:"center"}}>
                    <div className="column is-6">
                        <section className="mt-4 p-3" style={{height:"550px"}}>
                            <div className="notification notification-danger is-danger is-light is-hidden">
                                <button className="delete" onClick={() => CloseNotification()}></button>
                                {error}
                            </div>
                            <div className="notification notification-success is-success is-light is-hidden">
                                {success}
                            </div>
                            <h2 className="title has-text-centered">Recuperar contrasena</h2>
                            <form method='post'>
                                <div className="field mt-4">
                                    <label className="label">Usuario o correo electronico</label>
                                    <div className="control">
                                        <input className="input" id="username" type="text" placeholder="" />
                                    </div>
                                </div>
                            </form>
                            <button id="button-submit-lostpassword" className="button is-link is-fullwidth mt-4" onClick={() => recoveryPassword()}>Recuperar Contraseña</button>
                            <p className="has-text-centered pt-2 pb-2">O</p>
                            <Link className="button  is-fullwidth mt-4" to={ '/account/login' }>Iniciar Sesion</Link>
                        </section>
                    </div>
                </div>
            </div>
            <FooterContent/>
        </>
    )
}

