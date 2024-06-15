import { useState, useEffect } from "react";
import codeigniter from "../utils/axios";

export default function Tags(){

    const [tags,setTags] = useState([]); 

    useEffect(() => {

        const getTags = async() => {
        
            await codeigniter.get('/tags').then((response) => {
                console.log(response)
                setTags(response.data);
            })
        }

        getTags();
    },[])

    return (
        <main className="column is-four-fifths has-background-light pb-4">
            <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Etiquetas</span>
                </div>
            </div>
            <div className="column is-12">
                <div id="notificationDelete" className="notification is-danger is-hidden">Usuario Eliminado</div>
            </div>
            <div className="column is-12">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (!tags) ? 

                                users.map((tag) => {

                                    return(
                                        <tr key={tag.id} id={'tag_' + tag.id}>
                                            <th>{tag.name}</th>
                                        </tr>
                                    ) 
                                })
                            : (
                                <tr>
                                    <td colSpan="4" className="has-text-centered">No existen etiquetas registradas.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}