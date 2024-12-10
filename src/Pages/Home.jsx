import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Bienvenido</h1>
    <Link to="/equipoFavorito">Ver equipo favorito</Link>
    <br />
    <Link to="/equipos">Ver todos los equipos</Link>
  </div>
);

export {Home};