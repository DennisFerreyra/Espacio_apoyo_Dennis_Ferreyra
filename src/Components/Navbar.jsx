import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/equipoFavorito">Ver equipo favorito</Link>
    <Link to="/equipos">Ver todos los equipos</Link>
  </nav>
);

export default Navbar;