export default function Filter(){
    return(
        <div className="column is-6 has-text-right">
            <div className="dropdown is-right">
                <div className="dropdown-trigger">
                    <button className="button dropdown-button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Ordernar por</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a href="#" className="dropdown-item">Mas recientes</a>
                        <a className="dropdown-item">Mas antiguo</a>
                        <a href="#" className="dropdown-item is-active">Mejor valorado</a>
                        <a href="#" className="dropdown-item">Mas comentado</a>
                    </div>
                </div>
            </div>
        </div>
    )
}