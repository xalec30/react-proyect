import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";

export default function ModalAddTags(){

    const [errorCreate,setErrorCreate] = useState("");
    const [successCreate,setSuccessCreate] = useState("");

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
          (document.querySelectorAll('.modal-background,.delete-close') || []).forEach(($close) => {
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

    const createTags = async() => {

      let name_tag = document.getElementById('name_tag').value;
      document.getElementById('button-submit-tag').classList.add('is-loading');
     
      if(name_tag == ""){
        
        setErrorCreate("Campo nombre de etiqueta es requerido");
        OpenNotificationCreated();
        document.getElementById('button-submit-tag').classList.remove('is-loading');
        return;
      }

      await codeigniter.post('/tags',{
        'name' : name_tag,
      }).then((response) => {
        //getCategories();
        setSuccessCreate('Categoria creada');
        
        OpenNotificationSuccessCreated();
        setTimeout(() => {
          CloseNotificationSuccessCreated();
          window.location.reload();

        },1000);
        return;
      }).catch((error) => {

        if(error.response){
          let errors = error.response.data.messages;
          setErrorCreate(Object.values(errors)[0]);
          OpenNotificationCreated();
          document.getElementById('button-submit-tag').classList.remove('is-loading');
        }
      });
    }

    const OpenNotificationCreated = () => {
      document.getElementById('notification-error-tag').classList.remove('is-hidden');
    }

    const CloseNotificationCreated = () => {
      document.getElementById('notification-error-tag').classList.add('is-hidden');
    }

    const OpenNotificationSuccessCreated = () => {
      document.getElementById('notification-success-tag').classList.remove('is-hidden');
    }

    const CloseNotificationSuccessCreated = () => {
      document.getElementById('notification-success-tag').classList.add('is-hidden');
    }
   
    return(
        <div className="modal" id="modal-js-add-tag">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
            <p className="modal-card-title">Agregar Etiqueta</p>
                <button className="delete delete-close" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-tag" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationCreated()}></button>
                        {errorCreate}
                    </div>
                    <div id="notification-success-tag" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessCreated()}></button>
                        {successCreate}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de Etiqueta</label>
                            <div className="control">
                                <input className="input" id="name_tag" type="text" placeholder="" />
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button id="button-submit-tag" className="button is-link is-fullwidth" onClick={() => createTags()}>Agregar</button>

                </footer>
            </div>
        </div>
    )
}