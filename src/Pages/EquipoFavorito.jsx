import React, { useEffect, useState } from "react";
import {Equipo} from "../Components/Equipo"; 


const EquipoFavorito = () => {
  const [equipo, setEquipo] = useState({});

  useEffect(() => {
    async function obtenerDatos() {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
        );
        const data = await response.json();
        const equipoFavorito = data.teams.find(
          (equipo) => equipo.strTeam === "Peñarol"
        ); 
        console.log("data", data)
        console.log("equipoFavorito", equipoFavorito)
        setEquipo(equipoFavorito);
      
    };

    obtenerDatos();
  }, []);

  return (
    <>
      <h1>Este es tu Equipo Favorito</h1>
        <Equipo
          nombreEquipo={equipo.strTeam}
          year={equipo.intFormedYear}
          nombreEstadio={equipo.strStadium}
          imgEquipo={equipo.strBadge}
          strTwitter={equipo.strTwitter}
        />
    </>
  );
}

export {EquipoFavorito};