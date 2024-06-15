import ItemMenu from "./ItemMenu";


export default function Menu(){

    return(
        <aside className="column is-one-fifth menu p-3">
             <div className="p-3">
                <p className="pb-2 has-text-centered">Categorias</p>
                <ul className="menu-list">
                    <ItemMenu name="3D" href="/3D" />
                    <ItemMenu name="Blogs" href="/Blogs" />
                    <ItemMenu name="Colores" href="/Colours" />
                    <ItemMenu name="Componentes" href="/Components" />
                    <ItemMenu name="Fondos" href="/Backgrounds" />
                    <ItemMenu name="Ilustraciones" href="/Illustrator" />
                    <ItemMenu name="Librerias" href="/Library" />
                    <ItemMenu name="Fotografias" href="Photos" />
                    <ItemMenu name="Tipografias" href="/Tipography" />
                    <ItemMenu name="Videos" href="videos" />
                    <ItemMenu name="Herramientas" href="tools" />
                </ul>
             </div>
        </aside>
    )
}