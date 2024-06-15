import { useState, useEffect } from "react";
import codeigniter from "../utils/axios";

export default function Categories(){

    const [categories,setCategories] = useState([]);

    const getCategories = async() => {
        
        await codeigniter.get('/categories').then((response) => {
            setCategories(response.data);
        })
    }

    useEffect(() => {

        getCategories();
    },[])

    const deleteCategories = async(id) => {

        await codeigniter.delete('/categories/' + id).then((response) => {
            getCategories();
            document.getElementById('notificationCategory').classList.remove('is-hidden');

            setTimeout(() => {
                document.getElementById('notificationCategory').classList.add('is-hidden');
            },1000);
        })
    }

    return (
        <main className="column is-four-fifths has-background-light pb-4">
             <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Categorias</span>
                </div>
            </div>
            <div className="column is-12">
                <div id="notificationCategory" className="notification is-danger is-hidden">Categoria Eliminado</div>
            </div>
            <div className="column">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (categories.length > 0) ? 

                                categories.map((category) => {

                                    return(
                                        <tr key={category.id} id={'category_' + category.id}>
                                            <th style={{alignContent:'center'}}>{category.name}</th>
                                            <td>
                                                <button className="button is-success m-1">Editar</button>
                                                <button className="button is-danger m-1" onClick={() => deleteCategories(category.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ) 
                                })
                            : (
                                <tr>
                                    <td colSpan="2" className="has-text-centered">No existen categorias registradas.</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}