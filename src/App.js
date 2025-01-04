import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NuestroBlog from './pages/NuestroBlog';
import Cursos from './pages/Cursos';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import './App.css';
import './styles/css/normalize.css';
import Entrada from './pages/Entrada';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<NuestroBlog />} />
        <Route path="/nuestroblog" element={<NuestroBlog />} />
        <Route path="/nuestroblog/entrada" element={<Entrada />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
