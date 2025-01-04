import './Header.css';
import { Link } from 'react-router-dom';


function Header() {

    return(
        <header className='header'>
            <div className='contenedor'>
                <div className='barra'>
                    <Link to='/' className='logo'>
                        <h1 className='logo__nombre no-margin centrar-texto'>Blog<span className='logo__bold'>DeCafé</span></h1>
                    </Link>

                    <nav className='navegacion'>
                        <Link to='/nosotros' className='navegacion__enlace'>Nosotros</Link>
                        <Link to='/cursos' className='navegacion__enlace'>Cursos</Link>
                        <Link to='/contacto' className='navegacion__enlace'>Contacto</Link>
                    </nav>
                </div>
            </div>

            <div className='header__texto'>
                <h2 className='no-margin'>Blog de café con consejos y cursos</h2>
                <p className='no-margin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Curabitur sit amet placerat mauris.
                    Aliquam iaculis dui ut condimentum sodales.
                </p>
            </div>
        </header>
    );
}

export default Header;