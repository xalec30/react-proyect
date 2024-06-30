import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";


export default function ModalAddTags(){

    const [errorCreated,setErrorCreated] = useState("");
    const [successCreated,setSuccessCreated] = useState("");

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

    const AddRole = async() => {
        CloseNotificationCreated();
        document.getElementById('button-create-role').classList.add('is-loading');
        let name = document.getElementById('name').value;
        let capabilities = [];

        if(name == ""){
          setErrorCreated('campo nombre de rol es requerido');
          OpenNotificationCreated();
          document.getElementById('button-create-role').classList.remove('is-loading');
          return;
        }

        await codeigniter.post('/roles',{
          'name' : name,
          'capabilities': capabilities, 
        }).then((response) => {
          //getCategories();
          setSuccessCreated('Rol creada');
          
          OpenNotificationSuccessCreated();
          setTimeout(() => {
            CloseNotificationSuccessCreated();
            window.location.reload();

          },1000);
          return;
        }).catch((error) => {

          if(error.response){
            let errors = error.response.data.messages;
            setErrorCreated(Object.values(errors)[0]);
            OpenNotificationCreated();
            document.getElementById('button-create-role').classList.remove('is-loading');
          }
        });
    }

    const OpenNotificationCreated = () => {
      document.getElementById('notification-error-rol').classList.remove('is-hidden');
    }

    const CloseNotificationCreated = () => {
      document.getElementById('notification-error-rol').classList.add('is-hidden');
    }

    const OpenNotificationSuccessCreated = () => {
      document.getElementById('notification-success-rol').classList.remove('is-hidden');
    }

    const CloseNotificationSuccessCreated = () => {
      document.getElementById('notification-success-rol').classList.add('is-hidden');
    }
   
    return(
        <div className="modal" id="modal-js-add-role">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
            <p className="modal-card-title">Agregar Rol</p>
                <button className="delete delete-modal" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-rol" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationCreated()}></button>
                        {errorCreated}
                    </div>
                    <div id="notification-success-rol" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessCreated()}></button>
                        {successCreated}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de Rol</label>
                            <div className="control">
                                <input className="input" id="name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label>Capacidades del rol</label>
                            <p>No se encuentra capacidades disponibles</p>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button id="button-create-role" className="button is-link is-fullwidth" onClick={() => AddRole()}>Agregar</button>
                </footer>
            </div>
        </div>
    )
}