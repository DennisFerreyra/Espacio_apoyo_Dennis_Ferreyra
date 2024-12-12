import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la aplicación</h1>
      <p>Haz clic en uno de los botones para navegar:</p>
      <button>
        <Link to="/EquipoFavorito">Ir a Equipo Favorito</Link>
      </button>
      <br />
      <button>
        <Link to="/Equipos">Ir a Equipos</Link>
      </button>
      <br />
      <button>
        <Link to="/Equiposid">Ir a Equipos ID</Link>
      </button>
    </div>
  );
};

export {Home};