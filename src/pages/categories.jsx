import { useState, useEffect } from "react";
import codeigniter from "../utils/axios";
import ModalAddCategory from "../components/modalAddCategory";
import ModalEditCategory from "../components/ModalEditCategory";

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

    const editCategory = (e) => {
       
        let category_name = e.target.getAttribute('data-name');
        let category_is_new = e.target.getAttribute('data-new');
        let category_is_hidden = e.target.getAttribute('data-hidden');
        let category_id = e.target.getAttribute('data-id');
        document.getElementById('modal-js-edit-category').classList.add('is-active');

        document.getElementById('update_category_name').value = category_name;
        document.getElementById('category_id').value = category_id;
    
        if(category_is_new == 0){
            document.getElementById('update_is_new').checked = false;
        }else{
            document.getElementById('update_is_new').checked = true;
        }

        if(category_is_hidden == 0){
            document.getElementById('update_is_hidden').checked = false;
        }else{
            document.getElementById('update_is_hidden').checked = true;
        }
    }

    return (
        <main className="column is-four-fifths has-background-light pb-4">
             <div className="column is-6">
                <div className="tags are-large">
                    <span className="tag">Categorias</span>
                </div>
            </div>
            <div className="column is-12 has-text-right">
                <button className="button is-link js-modal-trigger" data-target="modal-js-add-category">Agregar Categorias</button>
            </div>
            <div className="column is-12">
                <div id="notificationCategory" className="notification is-danger is-hidden has-text-white">Categoria Eliminado</div>
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
                                                <button className="button is-success m-1 has-text-white" data-id={category.id} data-name={category.name} data-new={category.is_new} data-hidden={category.hidden} onClick={(e) => editCategory(e)}>Editar</button>
                                                <button className="button is-danger m-1 has-text-white" onClick={() => deleteCategories(category.id)}>Eliminar</button>
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
            <ModalAddCategory/>
            <ModalEditCategory/>
        </main>
    )
}