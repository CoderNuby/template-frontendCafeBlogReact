import { Link } from 'react-router-dom';
import './Footer.css';



function Footer() {
    return(
        <footer className='footer'>
            <div className='contenedor'>
                <div className='barra'>
                    <Link to='/' className='logo'>
                        <h1 className='logo__nombre no-margin centrar-texto'>Blog<span className='logo__bold'>DeCafé</span></h1>
                    </Link>

                    <nav className='navegacion'>
                        <Link to='/nuestroblog' className='navegacion__enlace'>Nosotros</Link>
                        <Link to='/cursos' className='navegacion__enlace'>Cursos</Link>
                        <Link to='/contacto' className='navegacion__enlace'>Contacto</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;