import { useState,useEffect } from "react"
import codeigniter from "../utils/axios";


export default function Roles(){

    const [roles,setRoles] = useState([]);


    
    return(
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Roles</span>
                </div>
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
                            (!roles) ? 

                                roles.map((role) => {

                                    return(
                                        <tr key={role.id} id={'role_' + role.id}>
                                            <th>{role.name}</th>
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
        </main>
    )
}