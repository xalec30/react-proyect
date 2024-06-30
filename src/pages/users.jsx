import codeigniter from "../utils/axios"
import { useState, useEffect } from "react";
import { useAuth } from "../provider/AuthProvider";
import ModalDetailUser from "../components/ModalDetailUser";

export default function Users(){
    const [users,setUsers] = useState([]); 
    const data = useAuth();
    
    const auth = JSON.parse(data.user);

    const getUsers = async() => {
        
        await codeigniter.get('/users').then((response) => {
            setUsers(response.data);
        })
    }

    useEffect(() => {
         getUsers();

         
    },[])

    const deleteUser = async(id) => {

        await codeigniter.delete('/users/' + id).then((response) => {
            document.getElementById('notificationDelete').classList.remove('is-hidden');
            getUsers();
            setTimeout(() => {
                document.getElementById('notificationDelete').classList.add('is-hidden');
            },1000);
        })
    }

    const ViewUser = (e) => {
        let username = e.target.getAttribute('data-username');
        let first_name = e.target.getAttribute('data-first-name');
        let middle_name = e.target.getAttribute('data-middle-name');
        let last_name = e.target.getAttribute('data-last-name');
        let email_user = e.target.getAttribute('data-email');

        document.getElementById('username_user').value = username;
        document.getElementById('first_name_user').value = first_name;

        if(middle_name == ""){
            document.getElementById('middle_name_user').value = "";
        }else{
            document.getElementById('middle_name_user').value = middle_name;
        }

        
        document.getElementById('last_name_user').value = last_name;
        document.getElementById('email_user').value = email_user

        document.getElementById('modal-js-detail-user').classList.add('is-active');
    }

    return(
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Usuarios Registrados</span>
                </div>
            </div>
            <div className="column is-12">
                <div id="notificationDelete" className="notification is-danger is-hidden">Usuario Eliminado</div>
            </div>
            <div className="column is-12">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (users.length > 0) ? 

                                users.map((user) => {
                                        return(
                                            <tr key={user.id} id={'user_' + user.id}>
                                                <th>{user.username}</th>
                                                <td>{user.name + ' ' + user.last_name}</td>
                                                <td>{user.email}</td>
                                                { (user.id == auth.id) ? 
                                                    <td>
                                                        <button data-username={user.username} data-email={user.email} data-last-name={user.last_name} data-first-name={user.name} data-middle-name={user.middle_name} onClick={(e) => ViewUser(e)} className="button m-1 is-success has-text-white">Editar</button>
                                                        <button className="button is-danger m-1 has-text-white" disabled>Eliminar</button></td>
                                                :
                                                <td>
                                                    <button data-username={user.username} data-email={user.email} data-last-name={user.last_name} data-first-name={user.name} data-middle-name={user.middle_name} onClick={(e) => ViewUser(e)} className="button is-success has-text-white">Editar</button>
                                                    <button onClick={() => deleteUser(user.id)} className="button is-danger has-text-white">Eliminar</button>
                                                </td>
                                                }
                                                
                                            </tr>
                                        ) 
                                })
                            : (
                                <tr>
                                    <td colSpan="4" className="has-text-centered">No existen usuarios registrados.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <ModalDetailUser/>
        </main>
    )
}