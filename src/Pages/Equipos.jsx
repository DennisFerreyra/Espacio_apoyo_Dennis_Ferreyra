import { useEffect, useState } from "react";
import { Equipo } from "../Components/Equipo";
import './index.css';

function Equipos() {
  const [equipos, setEquipos] = useState([]);
  useEffect(() => {
    async function obtenerDatos() {
      const response = await fetch(
        "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
      );
      const data = await response.json();
      console.log("data", data);
      setEquipos(data.teams);
    }
    obtenerDatos();
  }, []);
  return equipos.map((equipo) => (
    <Equipo
      nombreEquipo={equipo.strTeam}
      year={equipo.intFormedYear}
      nombreEstadio={equipo.strStadium}
      imgEquipo={equipo.strBadge}
      strTwitter={equipo.strTwitter}
      key={equipo.idTeam}
    />
  ));
}

export { Equipos };