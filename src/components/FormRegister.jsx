import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import codeigniter from "../utils/axios";

export default function FormRegisterContent(){

    const [error,setError] = useState('');
    const navigate = useNavigate();

    const RegisterUser = () => {
       
        let username = document.getElementById('username').value;
        let password = document.getElementById('current_password').value;
        let name = document.getElementById('name').value;
        let last_name = document.getElementById('last_name').value;
        let email = document.getElementById('email').value;
       
        if(username == ""){
            setError('El campo usuario es requerido');
            OpenNotification();
            return;
        }

        if(name == ""){
            setError('El campo nombre es requerido');
            OpenNotification();
            return;
        }

        if(last_name == ""){
            setError('El campo apellido es requerido');
            OpenNotification();
            return;
        }

        if(email == ""){
            setError('El campo correo electronico es requerido');
            OpenNotification();
            return;
        }

        if(password == ""){
            setError('El campo contraseña es requerido');
            OpenNotification();
            return;
        }

        codeigniter.post('/users',{
            'username': username,
            'name': name,
            'last_name': last_name,
            'email': email,
            'password': password
        }).then((response) => {
            console.log(response);
            return;
        }).catch(function (error) {
            let errors = error.response.data.messages;
        
            setError(Object.values(errors)[0]);
            OpenNotification();
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
                    <section className="mt-4 p-3" style={{height:"700px"}}>
                        <h2 className="title">Registrarse</h2>
                        <div className="notification is-danger is-light is-hidden">
                            <button className="delete" onClick={() => CloseNotification()}></button>
                            {error}
                        </div>
                        <div className="field mt-4">
                            <label className="label">Usuario</label>
                            <div className="control">
                                <input className="input" id="username" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Nombre</label>
                            <div className="control">
                                <input className="input" id="name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Apellido</label>
                            <div className="control">
                                <input className="input" id="last_name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Correo Electronico</label>
                            <div className="control">
                                <input className="input" id="email" type="email" placeholder="" />
                            </div>
                        </div>

                        <div className="field mt-4">
                            <label className="label">Contraseña</label>
                            <div className="control">
                                <input className="input" id="current_password" type="text" placeholder="" />
                            </div>
                        </div>
                        
                        <button className="button is-link is-fullwidth" onClick={() => RegisterUser()}>Registrarse</button>
                        <Link className="button  is-fullwidth mt-4" to={'/account/login'}>Iniciar Sesion</Link>
                    </section>
                </div>
            </div>
        </div>
    )
}