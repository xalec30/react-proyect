import Filter from "../components/filter"
import Resources from "../components/resource";

export default function Tipography(){

    return(
        <>
            <div className="columns is-multiline is-mobile pt-4">
                <div className="column is-6">
                    <div className="tags are-large">
                        <span className="tag is-link">Tipografias</span>
                    </div>
                </div>
                <Filter/>
                <Resources />
            </div>
        </>
    )
}