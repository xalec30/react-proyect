import codeigniter from "../utils/axios"
import { useState, useEffect } from "react";
import { useAuth } from "../provider/AuthProvider";


export default function Users(){
    const [users,setUsers] = useState([]); 
    const data = useAuth();
    
    const auth = JSON.parse(data.user);

    useEffect(() => {

        const getUsers = async() => {
        
            await codeigniter.get('/users').then((response) => {
                setUsers(response.data);
            })
        }

        getUsers();
    },[])

    const deleteUser = async(id) => {

        await codeigniter.delete('/users/' + id).then((response) => {
            document.getElementById('user_' + id).remove();
            document.getElementById('notificationDelete').classList.remove('is-hidden');

            setTimeout(() => {
                document.getElementById('notificationDelete').classList.add('is-hidden');
            },1000);
        })
    }

    return(
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Usuarios Registrados</span>
                </div>
            </div>
            <div className="column is-12">
                <div id="notificationDelete" class="notification is-danger is-hidden">Usuario Eliminado</div>
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
                       
                            {users.map((user) => {

                                if(user.id != auth.id){

                                    return(
                                        <tr key={user.id} id={'user_' + user.id}>
                                            <th>{user.username}</th>
                                            <td>{user.name + ' ' + user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td><button onClick={() => deleteUser(user.id)} className="button is-danger">Eliminar</button></td>
                                        </tr>
                                    )
                                }   
                            })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}