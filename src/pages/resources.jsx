import { useState,useEffect } from "react";
import codeigniter from "../utils/axios";


export default function Resources(){

    const [resources,setResources] = useState([]);

    const getResources = async() => {
        await codeigniter.get('/resources').then((response) => {
            setResources(response.data);
        })
    }

    useEffect(() => {
        getResources();
    });

    return(
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Recursos</span>
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
                            (resources > 0) ? 

                                resources.map((role) => {

                                    return(
                                        <tr key={resource.id} id={'role_' + resource.id}>
                                            <th>{resource.name}</th>
                                        </tr>
                                    ) 
                                })
                            : (
                                <tr>
                                    <td colSpan="2" className="has-text-centered">No existen Recursos registradas.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}