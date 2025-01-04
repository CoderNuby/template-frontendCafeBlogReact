import { useLocation } from "react-router-dom";


function Entrada() {
    const location = useLocation();
    const { titulo, descripcion, imagen } = location.state || {};
  
    return (
        <main className="contenedor">
            <h2 className="centrar-texto">{titulo}</h2>

            <img src={imagen} alt="imagen" />

            <p>
                {descripcion}
            </p>
        </main>
    );
}

export default Entrada;