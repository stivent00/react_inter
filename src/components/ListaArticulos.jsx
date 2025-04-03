import React from "react";
import Articulo from "./Articulo";

export default function ListaArticulos ({ articulos, busqueda }) {
    //Se filtran articulos según el estado de busqueda (Buscador)
    const filtroArticulos = articulos.filter((articulo) =>
        articulo.title.toLowerCase().includes(busqueda.toLowerCase())
    ).map((articulo) => (
        //Se contruye listado con el componente Articulo
        <Articulo key={articulo.id} articulo={articulo} />
    ));

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {filtroArticulos}
        </div>
    );
};
