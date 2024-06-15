import { useState, useEffect } from "react";
import codeigniter from "../utils/axios";

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

        await codeigniter.delete('/tags/' + id ).then((response) => {
            getTags();
            document.getElementById('notificationTag').classList.remove('is-hidden');

            setTimeout(() => {
                document.getElementById('notificationTag').classList.add('is-hidden');
            },1000);
        })
    }

    return (
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Etiquetas</span>
                </div>
            </div>
            <div className="column is-12">
                <div id="notificationTag" className="notification is-danger is-hidden">Etiqueta Eliminada Eliminado</div>
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
                                                <button className="button is-success m-1">Editar</button>
                                                <button className="button is-danger m-1" onClick={() => deleteTags(tag.id)}>Eliminar</button>
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
        </main>
    )
}