import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";

export default function ModalAddTag(){

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

    const createCategory = async() => {
        CloseNotificationCreated();
        document.getElementById('button-submit-category').classList.add('is-loading');
        let category_name = document.getElementById('category_name').value;
        let is_new = 0;
        let hidden = 0;


        if(document.getElementById('is_new').checked == true){
          is_new = 1;
        }

        if(document.getElementById('is_hidden').checked == true){
          hidden = 1 ;
        }

        if(category_name == ""){
          
          setErrorCreate("Campo nombre de categorias es requerido");
          OpenNotificationCreated();
          document.getElementById('button-submit-category').classList.remove('is-loading');
          return;
        }

        await codeigniter.post('/categories',{
          'name' : category_name,
          'is_new': is_new,
          'is_hidden' : hidden 
        }).then((response) => {
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
            document.getElementById('button-submit-category').classList.remove('is-loading');
          }
        });
    }

    const OpenNotificationCreated = () => {
      document.getElementById('notification-error-category').classList.remove('is-hidden');
    }

    const CloseNotificationCreated = () => {
      document.getElementById('notification-error-category').classList.add('is-hidden');
    }

    const OpenNotificationSuccessCreated = () => {
      document.getElementById('notification-success-category').classList.remove('is-hidden');
    }

    const CloseNotificationSuccessCreated = () => {
      document.getElementById('notification-success-category').classList.add('is-hidden');
    }

    return(
        <div className="modal" id="modal-js-add-category">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Agregar Categoria</p>
                <button className="delete delete-close" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-category" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationCreated()}></button>
                        {errorCreate}
                    </div>
                    <div id="notification-success-category" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessCreated()}></button>
                        {successCreate}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de categoria</label>
                            <div className="control">
                                <input className="input" id="category_name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                          <label className="checkbox">
                            <input type="checkbox" id="is_new" />
                            &nbsp; Marcar como nueva categoria
                          </label>
                        </div>
                        <div className="field mt-4">
                          <label className="checkbox">
                            <input type="checkbox" id="is_hidden" />
                             &nbsp; Ocultar
                          </label>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button id="button-submit-category" className="button is-link is-fullwidth" onClick={() => createCategory()}>Agregar</button>
                </footer>
            </div>
        </div>
    )
}