import { useState, useEffect } from "react";
import codeigniter from "../utils/axios";
import ModalAddTags from "../components/modalAddTag";
import ModalEditTag from "../components/ModalEditTag";

export default function Tags(){

    const [tags,setTags] = useState([]); 

    const getTags = async() => {
        
        await codeigniter.get('/tags').then((response) => {
            setTags(response.data);
        })
    }

    useEffect(() => {
        getTags();
    },[])

    const deleteTags = async(id) => {
        document.getElementById('button_delete_' + id).classList.add('is-loading');   
        await codeigniter.delete('/tags/' + id ).then((response) => {
            getTags();
            document.getElementById('notificationTag').classList.remove('is-hidden');

            setTimeout(() => {
                document.getElementById('notificationTag').classList.add('is-hidden');
            },1000);
        })
    }

    const EditTag = (e) => {

        let name_tag = e.target.getAttribute('data-name');
        let tag_id = e.target.getAttribute('data-id');
        document.getElementById('name_update_tag').value = name_tag;
        document.getElementById('tag_id').value = tag_id;

        document.getElementById('modal-js-edit-tag').classList.add('is-active');
    }

    return (
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Etiquetas</span>
                </div>
            </div>
            <div className="column is-12 has-text-right">
                <button className="button is-link js-modal-trigger" data-target="modal-js-add-tag">Agregar Etiqueta</button>
            </div>
            <div className="column is-12">
                <div id="notificationTag" className="notification is-danger is-hidden has-text-white">Etiqueta Eliminada Eliminado</div>
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
                            (tags.length > 0) ? 

                                tags.map((tag) => {

                                    return(
                                        <tr key={tag.id} id={'tag_' + tag.id}>
                                            <th style={{alignContent:"center"}}>{tag.name}</th>
                                            <td>
                                                <button className="button is-success m-1 has-text-white" data-id={tag.id} data-name={tag.name} onClick={(e) => EditTag(e)}>Editar</button>
                                                <button id={"button_delete_" + tag.id} className="button is-danger m-1 has-text-white" onClick={() => deleteTags(tag.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ) 
                                })
                            : (
                                <tr>
                                    <td colSpan="2" className="has-text-centered">No existen etiquetas registradas.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <ModalEditTag/>
            <ModalAddTags/>
        </main>
    )
}