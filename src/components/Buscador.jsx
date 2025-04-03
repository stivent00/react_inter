import React from "react";

export default function Buscador ({ busqueda, enCambioBusqueda }) {
  return (
        <div className="col-lg-8">
            <div className="alert bg-inter my-4" id="searchbar" role="alert">
                <input
                type="text"
                className="form-control"
                placeholder="Buscar Artículo..."
                value={busqueda}
                onChange={(e) => enCambioBusqueda(e.target.value)}
                />
            </div>
        </div>
  );
};
