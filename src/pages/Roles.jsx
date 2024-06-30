import { useState,useEffect } from "react"
import codeigniter from "../utils/axios"
import ModalAddRoles from '../components/ModalAddRole';
import ModalEditRoles from "../components/ModalEditRole";

export default function Roles(){

    const [roles,setRoles] = useState([]);

    useEffect(() => {
        getRoles();
    });

    const getRoles = async() => {
        
        await codeigniter.get('/roles').then((response) => {
            setRoles(response.data);
        })
    }

    const deleteRoles = async(id) => {


        await codeigniter.delete('/roles/' + id).then((response) => {
            getRoles();
            document.getElementById('notificationRole').classList.remove('is-hidden');

            setTimeout(() => {
                document.getElementById('notificationRole').classList.add('is-hidden');
            },1000);
        })
    }

    const EditRoles = async(e) => {

        let name = e.target.getAttribute('data-name');
        let role_id = e.target.getAttribute('data-id');

        document.getElementById('update_rol').value = name;
        document.getElementById('role_id').value = role_id;


        document.getElementById('modal-js-edit-role').classList.add('is-active');
    }


    return(
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Roles</span>
                </div>
            </div>
            <div className="column is-12 has-text-right">
                <button className="button is-link js-modal-trigger" data-target="modal-js-add-role">Agregar Rol</button>
            </div>
            <div className="column is-12">
                <div id="notificationRole" className="notification is-danger is-hidden has-text-white">Rol Eliminado</div>
            </div>
            <div className="column is-12">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (roles.length > 0) ? 

                                roles.map((role) => {

                                    return(
                                        <tr key={role.id} id={'role_' + role.id}>
                                            <th>{role.name}</th>
                                            <td>
                                                <button className="button is-success m-1 has-text-white" data-id={role.id} data-name={role.name} onClick={(e) => EditRoles(e)}>Editar</button>
                                                <button className="button is-danger m-1 has-text-white" onClick={() => deleteRoles(role.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ) 
                                })
                            : (
                                <tr>
                                    <td colSpan="2" className="has-text-centered">No existen roles registradas.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <ModalAddRoles/>
            <ModalEditRoles/>
        </main>
    )
}