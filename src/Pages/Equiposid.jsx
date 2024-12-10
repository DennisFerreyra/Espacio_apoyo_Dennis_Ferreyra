import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Equipo from "../Components/Equipo";

const Equiposid = () => {
  const { id } = useParams();
  const [equipo, setEquipo] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
    )
      .then((response) => response.json())
      .then((data) => {
        const encontrado = data.teams.find((team) => team.idTeam === id);
        setEquipo(encontrado);
      })
      .catch((error) => console.error("Error al cargar equipo:", error));
  }, [id]);

  return equipo ? <Equipo equipo={equipo} /> : <p>Equipo no encontrado</p>;
};

export {Equiposid};