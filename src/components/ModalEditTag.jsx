import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";

export default function ModalEditTag(){

    const [errorUpdate,setErrorUpdate] = useState("");
    const [successUpdate,setSuccessUpdate] = useState("");

    const UpdateTags = async() => {

        let name_update_tag = document.getElementById('name_update_tag').value;
        let tag_id = document.getElementById('tag_id').value;
        document.getElementById('button-update-tag').classList.add('is-loading');

        if(name_update_tag == ""){
        
            setErrorUpdate("Campo nombre de etiqueta es requerido");
            OpenNotificationUpdate();
            document.getElementById('button-update-tag').classList.remove('is-loading');
            return;
        }

        await codeigniter.put('/tags/' + tag_id,{
            'name' : name_update_tag,
          }).then((response) => {
            setSuccessUpdate('Etiqueta actualizada');
            
            OpenNotificationSuccessUpdate();
            setTimeout(() => {
              CloseNotificationSuccessUpdate();
              window.location.reload();
    
            },1000);
            return;
          }).catch((error) => {
    
            if(error.response){
              let errors = error.response.data.messages;
              setErrorUpdate(Object.values(errors)[0]);
              OpenNotificationCreated();
              document.getElementById('button-submit-tag').classList.remove('is-loading');
            }
          });
    }

    const OpenNotificationUpdate = () => {
        document.getElementById('notification-error-update-tag').classList.remove('is-hidden');
    }
  
    const CloseNotificationUpdate  = () => {
        document.getElementById('notification-error-update-tag').classList.add('is-hidden');
    }
  
    const OpenNotificationSuccessUpdate = () => {
        document.getElementById('notification-success-update-tag').classList.remove('is-hidden');
    }
  
    const CloseNotificationSuccessUpdate = () => {
        document.getElementById('notification-success-update-tag').classList.add('is-hidden');
    }

    return(
        <div className="modal" id="modal-js-edit-tag">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
            <p className="modal-card-title">Editar Etiqueta</p>
                <button className="delete delete-close" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-update-tag" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationUpdate()}></button>
                        {errorUpdate}
                    </div>
                    <div id="notification-success-update-tag" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessUpdate()}></button>
                        {successUpdate}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de Etiqueta</label>
                            <div className="control">
                                <input className="input" id="name_update_tag" type="text" placeholder="" />
                                <input type="hidden" id="tag_id" />
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button id="button-update-tag" className="button is-link is-fullwidth" onClick={() => UpdateTags()}>Actualizar</button>

                </footer>
            </div>
        </div>
    )
}