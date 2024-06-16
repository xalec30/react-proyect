import polihaven from '../assets/3d/polyhaven.webp';
import itchio from '../assets/3d/itchio.webp';
import kenney from '../assets/3d/kenney.webp';
import ambientcg from '../assets/3d/ambientcg.webp';
import blenderkit from '../assets/3d/blenderkit.webp';
import quaternius from '../assets/3d/quaternius.webp';

export default function Resources(){

    return(
        <>
        <div className="column is-4">
            <div className="card pulse">
                <div className="card-image">
                    <a target="_blank" href="https://polyhaven.com/">
                        <figure className="image is-3by2">
                            <img src={polihaven} alt="polyhaven"/>
                        </figure>
                    </a>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="content-description">
                            <div className="w-50">
                                <h6 className="mb-0">Polyhaven</h6>
                            </div>
                            <div className="w-50 has-text-right">
                                <span>5</span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-comment"></i>
                                    </span>
                                </span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                </span>
                            </div>
                            <div className="w-100">
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                            </div>
                            <div className="w-100 mt-2">
                                <p>Poly Haven es una biblioteca de contenido 3D gratuito que ofrece una amplia gama de recursos para artistas y desarrolladores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="column is-4">
            <div className="card">
                <div className="card-image">
                    <a target="_blank" href="https://itch.io/game-assets/free">
                        <figure className="image is-3by2">
                            <img src={itchio} alt="itchio" />
                        </figure>
                    </a>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="content-description">
                            <div className="w-50">
                                <h6 className="mb-0">Itchio</h6>
                            </div>
                            <div className="w-50 has-text-right">
                                <span>5</span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-comment"></i>
                                    </span>
                                </span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                </span>
                            </div>
                            <div className="w-100">
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                            </div>
                            <div className="w-100 mt-2">
                                <p>Itch.io, también conocida como Itch.io, es una plataforma en línea que permite a los usuarios subir, distribuir y descargar videojuegos de forma gratuita o con un precio determinado por el desarrollador</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="column is-4">
            <div className="card">

                <div className="card-image">
                    <a target="_blank" href="https://kenney.nl/">
                        <figure className="image is-3by2">
                            <img src={kenney} placeholder="kenney" />
                        </figure>
                    </a>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="content-description">
                            <div className="w-50">
                                <h6 className="mb-0">Kenney</h6>
                            </div>
                            <div className="w-50 has-text-right">
                                <span>5</span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-comment"></i>
                                    </span>
                                </span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                </span>
                            </div>
                            <div className="w-100">
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                            </div>
                            <div className="w-100 mt-2">
                                <p>Kenney es un recurso invaluable para desarrolladores de juegos de todos los niveles, ofreciendo recursos, herramientas y kits iniciales </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="column is-4">
            <div className="card">
                <div className="card-image">
                    <a target="_blank" href="https://ambientcg.com/">
                        <figure className="image is-3by2">
                            <img src={ambientcg} alt="ambientcg"/>
                        </figure>
                    </a>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="content-description">
                            <div className="w-50">
                                <h6 className="mb-0">Ambient CG</h6>
                            </div>
                            <div className="w-50 has-text-right">
                                <span>5</span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-comment"></i>
                                    </span>
                                </span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                </span>
                            </div>
                            <div className="w-100">
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                            </div>
                            <div className="w-100 mt-2">
                                <p>Ambient CG se refiere a un tipo específico de gráficos por computadora que se centra en la creación de entornos realistas e inmersivos, utilizados a menudo en videojuegos, películas y visualizaciones arquitectónicas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="column is-4">
            <div className="card">
                <div className="card-image">
                    <a target="_blank" href="https://www.blenderkit.com/">
                        <figure className="image is-3by2">
                            <img src={blenderkit} alt="blenderkit" />
                        </figure>
                    </a>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="content-description">
                            <div className="w-50">
                                <h6 className="mb-0">Blender Kit</h6>
                            </div>
                            <div className="w-50 has-text-right">
                                <span>5</span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-comment"></i>
                                    </span>
                                </span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                </span>
                            </div>
                            <div className="w-100">
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                            </div>
                            <div className="w-100 mt-2">
                                <p>BlenderKit es un complemento gratuito y de código abierto para Blender que te permite acceder y descargar fácilmente una amplia biblioteca de recursos 3D de alta calidad directamente dentro del software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="column is-4">
            <div className="card">
                <div className="card-image">
                    <a target="_blank" href="https://quaternius.com/">
                        <figure className="image is-3by2">
                            <img src={quaternius} alt="quaternius" />
                        </figure>
                    </a>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="content-description">
                            <div className="w-50">
                                <h6 className="mb-0">Quaternius</h6>
                            </div>
                            <div className="w-50 has-text-right">
                                <span>5</span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-comment"></i>
                                    </span>
                                </span>
                                <span className="icon-text">
                                    <span className="icon">
                                        <i className="fa-regular fa-heart"></i>
                                    </span>
                                </span>
                            </div>
                            <div className="w-100">
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                                <a className="tag">Tag</a>
                            </div>
                            <div className="w-100 mt-2">
                                <p>BlenderKit es un complemento gratuito y de código abierto para Blender que te permite acceder y descargar fácilmente una amplia biblioteca de recursos 3D de alta calidad directamente dentro del software</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="column is-12 has-text-centered">
            <button className="button">Cargar Mas</button>
        </div>
        </>
    )
}