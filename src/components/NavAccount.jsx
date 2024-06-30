import { useAuth} from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import ItemMenu from "./ItemMenu";

export default function NavAccount(props){

    const Auth = useAuth();
    let data = JSON.parse(Auth.user);
    
    const navigate = useNavigate();

    return(
        <aside className="column is-one-fifth menu p-3">
             <div className="p-3">
                <p className="pb-2 has-text-centered "><strong className="tag is-link">{data.name + ' ' + data.last_name}</strong></p>
                <ul className="menu-list">
                    <ItemMenu name="Pagina Principal" href="/dashboard/overview"/>
                    {
                        (data.role_id == 1) ? (
                            <>
                            <ItemMenu name="Recursos" href="/dashboard/resources"/>
                            <ItemMenu name="Categorias" href="/dashboard/categories"/>
                            <ItemMenu name="Etiquetas" href="/dashboard/tags"/>
                            <ItemMenu name="Usuarios Registrados" href="/dashboard/users"/>
                            <ItemMenu name="Roles" href="/dashboard/roles"/>
                            </>
                        ): ''
                    }
                    <ItemMenu name="Perfil" href="/dashboard/profile"/>
                </ul>
             </div>
        </aside>
    )
}