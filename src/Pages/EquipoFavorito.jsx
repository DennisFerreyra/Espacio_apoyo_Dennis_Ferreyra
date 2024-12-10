import React, { useEffect, useState } from "react";
import Equipo from "../Components/Equipo"; // Se asume que Equipo es un componente por defecto

// Definimos solo un componente EquipoFavorito
const EquipoFavorito = () => {
  const [equipo, setEquipo] = useState(null);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
        );
        const data = await response.json();
        const favorito = data.teams ? data.teams[0] : null; // Verificamos que existan equipos
        setEquipo(favorito);
      } catch (error) {
        console.error("Error al cargar el equipo favorito:", error);
      }
    }

    obtenerDatos();
  }, []);

  return (
    <div>
      <h1>Esto es el Equipo Favorito</h1>
      {equipo ? (
        <Equipo
          nombreEquipo={equipo.strTeam || "Desconocido"}
          year={equipo.intFormedYear || "N/A"}
          nombreEstadio={equipo.strStadium || "Estadio no disponible"}
          urlEquipo={equipo.strTeamBadge || ""}
        />
      ) : (
        <p>Cargando equipo favorito...</p>
      )}
    </div>
  );
};

export  {EquipoFavorito};