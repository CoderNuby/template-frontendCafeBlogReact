import './Contacto.css';

function Contacto() {
    return(
        <main className='contenedor'>
            <h3 className='centrar-texto'>Contacto</h3>

            <div className='contacto-bg'></div>

            <form className='formulario'>
                <div className='campo'>
                    <label className='campo__label' for='nombre'>Nombre</label>
                    <input id='nombre' className='campo__field' type='text' placeholder='Tu nombre' />
                </div>

                <div className='campo'>
                    <label className='campo__label' for='email'>Email</label>
                    <input id='email' className='campo__field' type='email' placeholder='Tu email' />
                </div>

                <div className='campo'>
                    <label className='campo__label' for='mensaje'>Mensaje</label>
                    <textarea id='mensaje' className='campo__field campo__field--textarea'></textarea>
                </div>

                <div className='campo'>
                    <input type='submit' value='Enviar' className='boton boton--primario' />
                </div>
            </form>
        </main>
    );
}

export default Contacto;