import ItemMenu from "./ItemMenu";


export default function Menu(){

    return(
        <aside className="column is-one-fifth menu p-3">
             <div className="p-3">
                <p className="pb-2 has-text-centered">Categorias</p>
                <ul className="menu-list">
                    <ItemMenu name="3D" isActive="1" />
                    <ItemMenu name="Blogs" isActive="0" />
                    <ItemMenu name="Colores" isActive="0" />
                    <ItemMenu name="Componentes" isActive="0" />
                    <ItemMenu name="Fondos" isActive="0" />
                    <ItemMenu name="Ilustraciones" isActive="0" />
                    <ItemMenu name="Librerias" isActive="0" />
                    <ItemMenu name="Fotografias" isActive="0" />
                    <ItemMenu name="Tipografias" isActive="0" />
                    <ItemMenu name="Videos" isActive="0" />
                    <ItemMenu name="Herramientas" isActive="0" />
                </ul>
             </div>
        </aside>
    )
}