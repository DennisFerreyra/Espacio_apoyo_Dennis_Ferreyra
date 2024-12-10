import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Equipo from "../Components/Equipo";

const Equipos = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
    )
      .then((response) => response.json())
      .then((data) => setEquipos(data.teams))
      .catch((error) => console.error("Error al cargar equipos:", error));
  }, []);

  return (
    <div>
      <h1>Equipos</h1>
      {equipos.map((equipo) => (
        <div key={equipo.idTeam}>
          <Equipo equipo={equipo} />
          <Link to={`/equipos/${equipo.idTeam}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export {Equipos};