import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";
import codeigniter from "../utils/axios";



export default function Profile(){
    const [error,setError] = useState();
    const [success,setSuccess] = useState();
    const Auth = useAuth();
    const Data = JSON.parse(Auth.user);

    const updateUser = async() => {

        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let first_name = document.getElementById('name').value;
        let last_name = document.getElementById('last_name').value;
        let middle_name = document.getElementById('middle_name').value;
        let password = document.getElementById('password').value;
        let confirm_password = document.getElementById('confirm_password').value;

        if(!username){
            setError('Nombre de usuario requerido');
            OpenNotification();
            return;
        }

        if(!email){
            setError('Correo electronico requerido');
            OpenNotification();
            return;
        }

        if(!first_name){
            setError('Primer nombre es requerido');
            OpenNotification();
            return;
        }

        if(!last_name){
            setError('segundo nombre es requerido');
            OpenNotification();
            return;
        }

        if(password){

            if(!confirm_password){
                setError('contraseña confirmada es requerida');
                OpenNotification();
                return;
            }

            if(password != confirm_password){
                setError('contraseñas no coinciden');
                OpenNotification();
                return;
            }
        }else{

            password = Data.password;
        }

        await codeigniter.put('/users/' + Data.id,{
            'id': Data.id,
            'username' : username,
            'email' : email,
            'name' : first_name,
            'middle_name' : middle_name,
            'last_name' : last_name,
            'password': password
        }).then((response) => {
            setSuccess('Datos Actualizados');
            Auth.setUser(JSON.stringify(response.data.user));
            localStorage.setItem('user',JSON.stringify(response.data.user));
            document.querySelector('.notification-success').classList.remove('is-hidden');

            setTimeout(() => {
                document.querySelector('.notification-success').classList.add('is-hidden');
            },2000);
        });
    }

    const OpenNotification = () => {
        document.querySelector('.notification-error').classList.remove('is-hidden');
    }

    const CloseNotification = () => {
        document.querySelector('.notification-error').classList.add('is-hidden');
    }

    return(
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Perfil</span>
                </div>
            </div>
            <div className="column is-12">
                <form method="post" href="">
                    <div className="container has-background-white p-3">
                        <div className="column">
                        <div className="notification notification-error is-hidden is-danger is-light">
                            <button type="button" onClick={() => CloseNotification()} className="delete"></button>
                            {error}
                        </div>
                        <div className="notification notification-success is-hidden is-success is-light">
                            {success}
                        </div>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Usuario <span className="has-text-danger">*</span></label>
                                    <div className="control">
                                        <input className="input" id="username" defaultValue={Data.username} type="text" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Correo Electronico <span className="has-text-danger">*</span></label>
                                    <div className="control">
                                        <input className="input" id="email" defaultValue={Data.email} type="text" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Primer Nombre <span className="has-text-danger">*</span></label>
                                    <div className="control">
                                        <input className="input" id="name" defaultValue={Data.name} type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Segundo Nombre</label>
                                    <div className="control">
                                        <input className="input" id="middle_name" defaultValue={Data.middle_name} type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Apellido <span className="has-text-danger">*</span></label>
                                    <div className="control">
                                        <input className="input" id="last_name" defaultValue={Data.last_name} type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-12">
                                <h4 className="title is-5">Cambiar Contraseña</h4>
                            </div>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Contraseña</label>
                                    <div className="control">
                                        <input className="input" id="password" type="password" autoComplete="off" />
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Confirmar Contraseña</label>
                                    <div className="control">
                                        <input className="input" id="confirm_password" type="password" autoComplete="off" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-right">
                            <button type="button" className="button is-link" onClick={() => updateUser()}>Guardar cambios</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}