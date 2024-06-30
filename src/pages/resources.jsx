import { useState,useEffect } from "react";
import codeigniter from "../utils/axios";
import ModalAddResources from "../components/ModalAddResources";
import ModalEditResources from "../components/ModalEditResource";

export default function Resources(){

    const [resources,setResources] = useState([]);

    const getResources = async() => {
        await codeigniter.get('/assets').then((response) => {
            setResources(response.data);
        })
    }

    useEffect(() => {
        getResources();
    },[]);

    const EditResource = () => {
        document.getElementById('modal-js-edit-resource').classList.add('is-active');
    }

    const deleteResouces= async(id) => {

        await codeigniter.delete('/assets/' + id).then((response) => {
            getResources();
            document.getElementById('notificationResource').classList.remove('is-hidden');

            setTimeout(() => {
                document.getElementById('notificationResource').classList.add('is-hidden');
            },1000);
        })
    }

    const EditResources = (e) => {
        let resource_id = e.target.getAttribute('data-id');
        let name = e.target.getAttribute('data-name');
        let url = e.target.getAttribute('data-url');
        let short_description = e.target.getAttribute('data-short-description');
        let description = e.target.getAttribute('data-description');

        document.getElementById('resource_id').value = resource_id;
        document.getElementById('name_updated').value = name;
        document.getElementById('url_updated').value = url;
        document.getElementById('short_description_updated').value = short_description;
        document.getElementById('description_updated').value = description;

        document.getElementById('modal-js-edit-resource').classList.add('is-active');
    }
    
    return(
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Recursos</span>
                </div>
            </div>
            <div className="column is-12 has-text-right">
                <button className="button is-link js-modal-trigger" data-target="modal-js-add-resource">Agregar Recurso</button>
            </div>
            <div className="column is-12">
                <div id="notificationResource" className="notification is-danger is-hidden has-text-white">Recurso Eliminado</div>
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
                            (resources.length > 0) ? 

                                resources.map((resource) => {
                                    console.log(resource);
                                    return(
                                        <tr key={resource.id} id={'reosurce_' + resource.id}>
                                            <th>{resource.name}</th>
                                            <td>
                                                <button data-id={resource.id} data-name={resource.name} data-url={resource.url} data-short-description={resource.short_description} data-description={resource.description} className="button is-success mr-3 has-text-white" onClick={(e) => EditResources(e)}>Editar</button>
                                                <button className="button is-danger has-text-white" onClick={() => deleteResouces(resource.id)}>Eliminar</button>
                                            </td>
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
            <ModalEditResources/>
            <ModalAddResources/>
        </main>
    )
}