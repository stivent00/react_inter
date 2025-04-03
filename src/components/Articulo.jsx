import { useEffect, useState } from 'react';

export default function Articulo ({ articulo }) {
    const [autor, setAutor] = useState({});
  
    //Obtiene los recursos de usuario de el API JSONPlaceholder con fetch
    useEffect(() => {
        // Evita hacer la petición si userId es indefinido
        if (!articulo.userId) return; 

        fetch("https://jsonplaceholder.typicode.com/users/" + articulo.userId)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener el autor.");
                }
                return response.json();
            })
            .then((data) => setAutor(data))
            .catch((error) => console.error("Error cargando el autor: ", error));
    }, [articulo.userId]);

    return (
        <div className="col">
            <div className="card mb-3">
                <div className="card-header">
                    {articulo.title.toUpperCase()}
                </div>
                <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{articulo.body}</p>
                    <footer className="blockquote-footer mt-4">
                            {autor.name ? autor.name : "Autor desconocido"} - 
                            <cite title="Source Title">
                                <a href={'mailto:' +  autor.email }>{autor.email || "No disponible"}</a>
                            </cite>
                        </footer>
                </blockquote>
                </div>
            </div>
        </div>
    );
};
