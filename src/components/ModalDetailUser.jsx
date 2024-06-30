import { useEffect } from "react";


export default function ModalDetailUser(){

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

    return(
        <div className="modal" id="modal-js-detail-user">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
            <p className="modal-card-title">Detalles del Usuario</p>
                <button className="delete delete-modal" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <form method='post'>
                        <div className="field-body">    
                            <div className="field mt-4">
                                <label className="label">Usuario</label>
                                <div className="control">
                                    <input className="input" id="username_user" type="text" placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div className="field-body">    
                            <div className="field mt-4">
                                <label className="label">Primer Nombre</label>
                                <div className="control">
                                    <input className="input" id="first_name_user" type="text" placeholder="" readOnly />
                                </div>
                            </div>
                            <div className="field mt-4">
                                <label className="label">Segundo Nombre</label>
                                <div className="control">
                                    <input className="input" id="middle_name_user" type="text" placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                        <div className="field-body">
                            <div className="field mt-4">
                                <label className="label">Apellido</label>
                                <div className="control">
                                    <input className="input" id="last_name_user" type="text" placeholder="" readOnly />
                                </div>
                            </div>
                            <div className="field mt-4">
                                <label className="label">Correo Electronico</label>
                                <div className="control">
                                    <input className="input" id="email_user" type="text" placeholder="" readOnly />
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                   
                </footer>
            </div>
        </div>
    )
}