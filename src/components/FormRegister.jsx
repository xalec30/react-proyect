import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import codeigniter from "../utils/axios";

export default function FormRegisterContent(){

    const [error,setError] = useState('');
    const [success,setSuccess] = useState('Usuario Registrado');
    const navigate = useNavigate();

    const RegisterUser = async() => {
       
        let username = document.getElementById('username').value;
        let password = document.getElementById('current_password').value;
        let name = document.getElementById('name').value;
        let middle_name = document.getElementById('middle_name').value;
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

        CloseNotification();

        await codeigniter.post('/users',{
            'username': username,
            'name': name,
            'middle_name': middle_name,
            'last_name': last_name,
            'email': email,
            'password': password
        }).then((response) => {
            document.getElementById('notice-success').classList.remove('is-hidden');
            setTimeout(() => {
                navigate("/account/login");
            },2000);
            return;
        }).catch(function (error) {

            if(error.response){

                let errors = error.response.data.messages;
                let message = Object.values(errors)[0];
                if(Object.values(errors)[0] == 'The email field must contain a valid email address.'){
    
                    message = "Correo Electronico no valido";
                }
    
                setError(message);
                OpenNotification();
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
            <div className="columns" style={{justifyContent:"center",paddingBottom:'100px'}}>
                <div className="column is-6">
                    <section className="mt-4 p-3" style={{height:"700px"}}>
                        <h2 className="title has-text-centered">Registrarse</h2>
                        <div className="notification is-danger is-light is-hidden">
                            <button className="delete" onClick={() => CloseNotification()}></button>
                            {error}
                        </div>
                        <div id='notice-success' className="notification is-success is-light is-hidden">
                            {success}
                        </div>
                        <div className="field mt-4">
                            <label className="label">Usuario <span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="username" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Nombre <span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Segundo Nombre </label>
                            <div className="control">
                                <input className="input" id="middle_name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Apellido <span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="last_name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Correo Electronico <span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="email" type="email" placeholder="" />
                            </div>
                        </div>

                        <div className="field mt-4">
                            <label className="label">Contraseña <span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="current_password" type="password" placeholder="" />
                            </div>
                        </div>
                        
                        <button className="button is-link is-fullwidth" onClick={() => RegisterUser()}>Registrarse</button>
                        <p className="has-text-centered pt-2 pb-2">O</p>
                        <Link className="button  is-fullwidth mt-4" to={'/account/login'}>Iniciar Sesion</Link>
                    </section>
                </div>
            </div>
        </div>
    )
}