import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";


export default function ModalEditRoles(){

    const [errorUpdate,setErrorUpdate] = useState("");
    const [successUpdate,setSuccessUpdate] = useState("");

    useEffect(() => {

        function openModal($el) {
            $el.classList.add('is-active');
          }
        
          function closeModal($el) {
            $el.classList.remove('is-active');
          }
        
          function closeAllModals() {
            (document.querySelectorAll('.modal') || []).forEach(($modal) => {
              closeModal($modal);
            });
          }
        
          // Add a click event on buttons to open a specific modal
          (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
            const modal = $trigger.dataset.target;
            const $target = document.getElementById(modal);
        
            $trigger.addEventListener('click', () => {
              openModal($target);
            });
          });
        
          // Add a click event on various child elements to close the parent modal
          (document.querySelectorAll('.modal-background,.delete-modal') || []).forEach(($close) => {
            const $target = $close.closest('.modal');
        
            $close.addEventListener('click', () => {
              closeModal($target);
            });
          });
        
          // Add a keyboard event to close all modals
          document.addEventListener('keydown', (event) => {
            if(event.key === "Escape") {
              closeAllModals();
            }
          });
    });

    const UpdateRole = async() => {
        CloseNotificationUpdate();
        document.getElementById('button-update-role').classList.add('is-loading');
        let name = document.getElementById('update_rol').value;
        let role_id = document.getElementById('role_id').value;
        let capabilities = [];

        if(name == ""){
          setErrorUpdate('campo nombre de rol es requerido');
          OpenNotificationUpdate();
          document.getElementById('button-update-role').classList.remove('is-loading');
          return;
        }

        await codeigniter.put('/roles/' + role_id,{
          'name' : name,
          'capabilities': capabilities, 
        }).then((response) => {
          //getCategories();
          setSuccessUpdate('Rol actualizado');
          
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
            OpenNotificationUpdate();
            document.getElementById('button-update-role').classList.remove('is-loading');
          }
        });
    }

    const OpenNotificationUpdate = () => {
      document.getElementById('notification-error-update-rol').classList.remove('is-hidden');
    }

    const CloseNotificationUpdate = () => {
      document.getElementById('notification-error-update-rol').classList.add('is-hidden');
    }

    const OpenNotificationSuccessUpdate = () => {
      document.getElementById('notification-success-update-rol').classList.remove('is-hidden');
    }

    const CloseNotificationSuccessUpdate = () => {
      document.getElementById('notification-success-update-rol').classList.add('is-hidden');
    }
   
    return(
        <div className="modal" id="modal-js-edit-role">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
            <p className="modal-card-title">Editar Rol</p>
                <button className="delete delete-modal" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-update-rol" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationUpdate()}></button>
                        {errorUpdate}
                    </div>
                    <div id="notification-success-update-rol" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessUpdate()}></button>
                        {successUpdate}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de Rol</label>
                            <div className="control">
                                <input className="input" id="update_rol" type="text" placeholder="" />
                                <input type="hidden" name="role_id" id="role_id" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label>Capacidades del rol</label>
                            <p>No se encuentra capacidades disponibles</p>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button id="button-update-role" className="button is-link is-fullwidth" onClick={() => UpdateRole()}>Actualizar</button>
                </footer>
            </div>
        </div>
    )
}