import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import Buscador from "./components/Buscador";
import ListaArticulos from "./components/ListaArticulos";

export default function App() {
  const [articulos, setArticulos] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  //Obtiene los recursos de el API JSONPlaceholder con fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los artículos.");
      }
      return response.json();
    })
    .then((data) => setArticulos(data))
    .catch((error) => console.error("Error cargando los artículos: ", error));
  }, []);

  return (
    <>
      <nav className="navbar bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand text-white" href="https://react.dev" target="_blank">
            <img src={reactLogo} className="d-inline-block align-text-top mr-2" alt="React logo" width="30" height="24" />
            SPA React - Prueba Inter Rapidísimo
          </a>
        </div>
      </nav>      
      <h1 className="text-center text-white mt-4 mb-4 pt-2">Lista de <span class="t-green">Artículos</span></h1>
      <div className="container d-lg-flex justify-content-center mb-4">
        <Buscador busqueda={busqueda} enCambioBusqueda={setBusqueda} />
      </div>
      <div className="container">
        <ListaArticulos articulos={articulos} busqueda={busqueda} />
      </div>
    </>
  );
}
