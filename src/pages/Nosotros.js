import './Nosotros.css';
import nosotrosImg from '../img/nosotros.jpg';


function Nosotros() {
    return(
        <main className="contenedor">
            <h3 className='centrar-texto'>Sobre nosotros</h3>

            <div className='sobre-nosotros'>
                <div className='sobre-nosotros__imagen'>
                    <img src={nosotrosImg} alt='Imagen nosotros' />
                </div>

                <div className='sobre-nosotros__texto'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent eu suscipit orci. Sed eget sodales velit,
                    </p>
                    <p>
                        quis egestas arcu dictum vitae. Aenean id posuere arcu.
                        Duis ut nibh viverra, aliquet diam ac, facilisis sapien.
                    </p>
                </div>
            </div>

        </main>
    );
}

export default Nosotros;