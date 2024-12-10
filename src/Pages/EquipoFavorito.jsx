import React, { useEffect, useState } from "react";
import Equipo from "../Components/Equipo";

const EquipoFavorito = () => {
  const [equipo, setEquipo] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
    )
      .then((response) => response.json())
      .then((data) => {
        const favorito = data.teams[0]; 
        setEquipo(favorito);
      })
      .catch((error) => console.error("Error al cargar el equipo favorito:", error));
  }, []);

  return equipo ? <Equipo equipo={equipo} /> : <p>Cargando...</p>;
};

export {EquipoFavorito};