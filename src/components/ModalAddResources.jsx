import { useEffect, useState } from "react";
import codeigniter from "../utils/axios";


export default function ModalAddResources(){

    const [errorCreated,setErrorCreated] = useState("");
    const [successCreated,setSuccessCreated] = useState("");
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
        document.getElementById('button-create-resource').classList.add('is-loading');
        let name = document.getElementById('name').value;
        let url = document.getElementById('url').value;
        let short_description = document.getElementById('short_description').value;
        let description = document.getElementById('description').value;
        let categories = document.getElementById('categories').value;

        if(name == ""){
            setErrorCreated('Campo nombre es requerido')
            OpenNotificationCreated();
            document.getElementById('button-create-resource').classList.remove('is-loading');
            return
        }

        if(url == ""){
            setErrorCreated('Campo URL es requerido')
            OpenNotificationCreated();
            document.getElementById('button-create-resource').classList.remove('is-loading');
            return
        }

        if(short_description == ""){
            setErrorCreated('Campo descripcion corta es requerido')
            OpenNotificationCreated();
            document.getElementById('button-create-resource').classList.remove('is-loading');
            return
        }

        if(description == ""){
            setErrorCreated('Campo descripcion es requerido')
            OpenNotificationCreated();
            document.getElementById('button-create-resource').classList.remove('is-loading');
            return
        }

        if(categories == ""){
          setErrorCreated('Campo categories es requerido')
          OpenNotificationCreated();
          document.getElementById('button-create-resource').classList.remove('is-loading');
          return
        }

        await codeigniter.post('/assets',{
            'name' : name,
            'url': url,
            'short_description' : short_description,
            'description': description 
          }).then((response) => {
            setSuccessCreated('Categoria creada');
            
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
              document.getElementById('button-submit-category').classList.remove('is-loading');
            }
          });
        
    }

    const OpenNotificationCreated = () => {
        document.getElementById('notification-error-resource').classList.remove('is-hidden');
      }
  
      const CloseNotificationCreated = () => {
        document.getElementById('notification-error-resource').classList.add('is-hidden');
      }
  
      const OpenNotificationSuccessCreated = () => {
        document.getElementById('notification-success-resource').classList.remove('is-hidden');
      }
  
      const CloseNotificationSuccessCreated = () => {
        document.getElementById('notification-success-resource').classList.add('is-hidden');
      }
   
    return(
        <div className="modal" id="modal-js-add-resource">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
            <p className="modal-card-title">Agregar Recurso</p>
                <button className="delete delete-modal" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    <div id="notification-error-resource" className="notification is-danger is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationCreated()}></button>
                        {errorCreated}
                    </div>
                    <div id="notification-success-resource" className="notification is-success is-light is-hidden">
                        <button className="delete" onClick={() => CloseNotificationSuccessCreated()}></button>
                        {successCreated}
                    </div>
                    <form method='post'>
                        <div className="field mt-4">
                            <label className="label">Nombre de Recurso<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="name" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">URL<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <input className="input" id="url" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Descripcion Corta<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <textarea id="short_description" className="textarea" style={{resize:"none"}} placeholder=""></textarea>
                            </div>
                        </div>
                        <div className="field mt-4">
                            <label className="label">Descripcion<span className="has-text-danger">*</span></label>
                            <div className="control">
                                <textarea id="description" className="textarea" style={{resize:"none"}} placeholder=""></textarea>
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
                    <button id="button-create-resource" className="button is-link is-fullwidth" onClick={() => AddResources()}>Agregar</button>
                </footer>
            </div>
        </div>
    )
}