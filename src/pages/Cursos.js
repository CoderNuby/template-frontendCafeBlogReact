import './Cursos.css';
import curso1 from '../img/curso1.jpg';
import curso2 from '../img/curso2.jpg';
import curso3 from '../img/curso3.jpg';


function Cursos() {
    return(
        <main className='contenedor'>
            <h3 className='centrar-texto'>Nuestros próximos cursos y talleres</h3>

            <div className='curso'>
                <div className='curso__imagen'>
                    <img src={curso1} alt='curso 1'></img>
                </div>

                <div className='curso__informacion'>
                    <h4 className='no-margin'>Técnicas de extracion de café</h4>
                    <p className='curso__label'>Precio: 
                        <span className='curso__info'>
                            Gratis
                        </span>
                    </p>
                    <p className='curso__label'>Cupo: 
                        <span className='curso__info'>
                            20
                        </span>
                    </p>
                    <p className='curso__descripcion'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent eu suscipit orci. Sed eget sodales velit,
                    </p>
                </div>
            </div>

            <div className='curso'>
                <div className='curso__imagen'>
                    <img src={curso2} alt='curso 1'></img>
                </div>

                <div className='curso__informacion'>
                    <h4 className='no-margin'>Taller para Tostar y Moler Granos</h4>
                    <p className='curso__label'>Precio: 
                        <span className='curso__info'>
                            Gratis
                        </span>
                    </p>
                    <p className='curso__label'>Cupo: 
                        <span className='curso__info'>
                            20
                        </span>
                    </p>
                    <p className='curso__descripcion'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent eu suscipit orci. Sed eget sodales velit,
                    </p>
                </div>
            </div>

            <div className='curso'>
                <div className='curso__imagen'>
                    <img src={curso3} alt='curso 1'></img>
                </div>

                <div className='curso__informacion'>
                    <h4 className='no-margin'>4 Recetas de Café para principiantes</h4>
                    <p className='curso__label'>Precio: 
                        <span className='curso__info'>
                            Gratis
                        </span>
                    </p>
                    <p className='curso__label'>Cupo: 
                        <span className='curso__info'>
                            20
                        </span>
                    </p>
                    <p className='curso__descripcion'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent eu suscipit orci. Sed eget sodales velit,
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Cursos;