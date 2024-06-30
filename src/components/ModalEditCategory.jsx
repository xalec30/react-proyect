import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";

export default function ModalEditCategory(){

    const [errorUpdate,setErrorUpdate] = useState("");
    const [successUpdate,setSuccessUpdate] = useState("");

    const UpdateCategory = async() => {

        document.getElementById('button-update-category').classList.add('is-loading');
        let category_update_name = document.getElementById('update_category_name').value;
        let category_id = document.getElementById('category_id').value;
        let is_update_new = 0;
        let is_update_hidden = 0;

        if(document.getElementById('update_is_new').checked == true){
            is_update_new = 1;
          }
  
          if(document.getElementById('update_is_hidden').checked == true){
            is_update_hidden = 1 ;
          }
  
        if(category_update_name == ""){
            setErrorUpdate("Campo nombre de categorias es requerido");
            OpenNotificationUpdate();
            document.getElementById('button-update-category').classList.remove('is-loading');
            return;
        }
       
        await codeigniter.put('/categories/' + category_id,{
            'name' : category_update_name,
            'is_new':is_update_new,
            'is_hidden' : is_update_hidden 
          }).then((response) => {
            setSuccessUpdate('Categoria actualizada');
            
            OpenNotificationSuccessUpdate();
            setTimeout(() => {
              CloseNotificationSuccessUpdate();
              window.location.reload();
  
            },1000);
            return;
          }).catch((error) => {
  
            if(error.response){
              let errors = error.response.data.messages;
              setErrorCreate(Object.values(errors)[0]);
              OpenNotificationCreated();
              document.getElementById('button-update-category').classList.remove('is-loading');
            }
          });
    }

    const OpenNotificationSuccessUpdate = () => {
        document.getElementById('notification-success-update-category').classList.remove('is-hidden');
      }
  
    const CloseNotificationSuccessUpdate = () => {
        document.getElementById('notification-success-update-category').classList.add('is-hidden');
    }

    const OpenNotificationUpdate = () => {
        document.getElementById('notification-error-update-category').classList.remove('is-hidden');
      }
  
    const CloseNotificationUpdate = () => {
        document.getElementById('notification-error-update-category').classList.add('is-hidden');
    }

    return(
        <div className="modal" id="modal-js-edit-category">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Editar Categoria</p>
                <button className="delete delete-close" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-update-category" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationUpdate()}></button>
                        {errorUpdate}
                    </div>
                    <div id="notification-success-update-category" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessUpdate()}></button>
                        {successUpdate}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de categoria</label>
                            <div className="control">
                                <input className="input" id="update_category_name" type="text" placeholder="" />
                                <input type="hidden" id="category_id" />
                            </div>
                        </div>
                        <div className="field mt-4">
                          <label className="checkbox">
                            <input type="checkbox" id="update_is_new" />
                            &nbsp; Marcar como nueva categoria
                          </label>
                        </div>
                        <div className="field mt-4">
                          <label className="checkbox">
                            <input type="checkbox" id="update_is_hidden" />
                             &nbsp; Ocultar
                          </label>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button id="button-update-category" className="button is-link is-fullwidth" onClick={() => UpdateCategory()}>Actualizar</button>
                </footer>
            </div>
        </div>
    )
}