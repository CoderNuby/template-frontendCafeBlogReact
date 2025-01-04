import './NuestroBlog.css';
import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';
import { Link } from 'react-router-dom';


function NuestroBlog() {

    let textoLorem = 
    `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec laoreet turpis sit amet turpis feugiat porttitor.
        Cras mattis eros a libero hendrerit commodo.
        Mauris molestie id felis eget porttitor.
        Nam elit sapien, congue eget fermentum non, commodo et libero.
    `;

    return(
        <div className='contenedor contenido-principal'>
            <main className='blog'>
                <h3>Nuestro blog</h3>

                <article className='entrada'>
                    <div className='entrada__imagen'>
                        <img src={blog1} alt='Imagen de café'/>
                    </div>

                    <div className='entrada__contenido'>
                        <h4 className='no-margin'>Tipos de grano de café</h4>
                        <p>
                            {textoLorem}
                        </p>
                        <Link
                            to="/nuestroblog/entrada"
                            className='boton boton--primario'
                            state={{
                                titulo: 'Tipos de grano de café',
                                descripcion: textoLorem,
                                imagen: blog1
                            }}>Leer entrada</Link>
                    </div>
                </article>

                <article className='entrada'>
                    <div className='entrada__imagen'>
                        <img src={blog2} alt='Imagen de café'/>
                    </div>

                    <div className='entrada__contenido'>
                        <h4 className='no-margin'>Tres deliciosas recetas de café</h4>
                        <p>
                            {textoLorem}
                        </p>
                        <Link
                            to="/nuestroblog/entrada"
                            className='boton boton--primario'
                            state={{
                                titulo: 'Tres deliciosas recetas de café',
                                descripcion: textoLorem,
                                imagen: blog2
                            }}>Leer entrada</Link>
                    </div>
                </article>

                <article className='entrada'>
                    <div className='entrada__imagen'>
                        <img src={blog3} alt='Imagen de café'/>
                    </div>

                    <div className='entrada__contenido'>
                        <h4 className='no-margin'>Beneficios del café</h4>
                        <p>
                            {textoLorem}
                        </p>
                        <Link
                            to="/nuestroblog/entrada"
                            className='boton boton--primario'
                            state={{
                                titulo: 'Beneficios del café',
                                descripcion: textoLorem,
                                imagen: blog3
                            }}>Leer entrada</Link>
                    </div>
                </article>
            </main>
            <aside className='sidebar'>
                <h3>Nuestros cursos y talleres</h3>

                <ul className='cursos no-padding'>
                    <li className='widget-curso'>
                        <h4 className='no-margin'>Técnicas de extracion de café</h4>
                        <p className='widget-curso__label'>Precio: 
                            <span className='widget-curso__info'>
                                Gratis
                            </span>
                        </p>
                        <p className='widget-curso__label'>Cupo: 
                            <span className='widget-curso__info'>
                                20
                            </span>
                        </p>
                        <Link to="/" className='boton boton--secundario'>Leer entrada</Link>
                    </li>

                    <li className='widget-curso'>
                        <h4 className='no-margin'>4 recetas de café para principiantes</h4>
                        <p className='widget-curso__label'>Precio: 
                            <span className='widget-curso__info'>
                                Gratis
                            </span>
                        </p>
                        <p className='widget-curso__label'>Cupo: 
                            <span className='widget-curso__info'>
                                20
                            </span>
                        </p>
                        <Link to="/" className='boton boton--secundario'>Leer entrada</Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
}


export default NuestroBlog;
