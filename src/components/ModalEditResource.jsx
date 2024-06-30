import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";


export default function ModalEditResources(){

    const [errorCreated,setErrorUpdated] = useState("");
    const [successCreated,setSuccessUpdated] = useState("");
    const [categories,setCategories] = useState([]);

    const getCategories = async() => {
        
        await codeigniter.get('/categories').then((response) => {
            setCategories(response.data);
        })
    }

    useEffect(() => {

        getCategories();

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

    const AddResources = async() => {
        document.getElementById('button-update-resource').classList.add('is-loading');
        let resource_id = document.getElementById('resource_id').value;
        let name = document.getElementById('name_updated').value;
        let url = document.getElementById('url_updated').value;
        let short_description = document.getElementById('short_description_updated').value;
        let description = document.getElementById('description_updated').value;
        let categories = document.getElementById('categories').value;

        if(name == ""){
            setErrorUpdated('Campo nombre es requerido')
            OpenNotificationUpdated();
            document.getElementById('button-update-resource').classList.remove('is-loading');
            return
        }

        if(url == ""){
            setErrorUpdated('Campo URL es requerido')
            OpenNotificationUpdated();
            document.getElementById('button-update-resource').classList.remove('is-loading');
            return
        }

        if(short_description == ""){
            setErrorUpdated('Campo descripcion corta es requerido')
            OpenNotificationUpdated();
            document.getElementById('button-update-resource').classList.remove('is-loading');
            return
        }

        if(description == ""){
            setErrorUpdated('Campo descripcion es requerido')
            OpenNotificationUpdated();
            document.getElementById('button-update-resource').classList.remove('is-loading');
            return
        }

        if(categories == ""){
          setErrorUpdated('Campo categories es requerido')
          OpenNotificationUpdated();
          document.getElementById('button-update-resource').classList.remove('is-loading');
          return
        }

        await codeigniter.put('/assets/' + resource_id,{
            'name' : name,
            'url': url,
            'short_description' : short_description,
            'description': description 
          }).then((response) => {
            setSuccessUpdated('Recurso actualizado');
            
            OpenNotificationSuccessUpdated();
            setTimeout(() => {
              CloseNotificationSuccessUpdated();
              window.location.reload();
  
            },1000);
            return;
          }).catch((error) => {
  
            if(error.response){
              let errors = error.response.data.messages;
              setErrorUpdated(Object.values(errors)[0]);
              OpenNotificationUpdated();
              document.getElementById('button-submit-category').classList.remove('is-loading');
            }
          });
        
    }

    const OpenNotificationUpdated = () => {
        document.getElementById('notification-error-update-resource').classList.remove('is-hidden');
      }
  
      const CloseNotificationUpdated = () => {
        document.getElementById('notification-error-update-resource').classList.add('is-hidden');
      }
  
      const OpenNotificationSuccessUpdated = () => {
        document.getElementById('notification-success-update-resource').classList.remove('is-hidden');
      }
  
      const CloseNotificationSuccessUpdated = () => {
        document.getElementById('notification-success-update-resource').classList.add('is-hidden');
      }
   
    return(
        <div className="modal" id="modal-js-edit-resource">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
            <p className="modal-card-title">Actualizar Recurso</p>
                <button className="delete delete-modal" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-update-resource" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationUpdated()}></button>
                        {errorCreated}
                    </div>
                    <div id="notification-success-update-resource" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessUpdated()}></button>
                        {successCreated}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de Recurso<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="name_updated" type="text" placeholder="" />
                                <input type="hidden" id="resource_id" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">URL<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="url_updated" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Descripcion Corta<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <textarea id="short_description_updated" className="textarea" style={{resize:"none"}} placeholder=""></textarea>
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Descripcion<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <textarea id="description_updated" className="textarea" style={{resize:"none"}} placeholder=""></textarea>
                            </div>
                        </div>
                        <div className="field mt-4"> 
                          <label className="label">Categorias<span className="has-text-danger">*</span></label>
                          <div className="select">
                            <select id="categories">
                              {
                                categories.map((category) => 
                                  <option key={category.id} value={category.id}>{category.name}</option>
                                )
                              }
                            </select>
                          </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button id="button-update-resource" className="button is-link is-fullwidth" onClick={() => AddResources()}>Actualizar</button>
                </footer>
            </div>
        </div>
    )
}