import React from "react";

const Equipo = ({ equipo }) => (
  <div className="equipo">
    <h2>{equipo.strTeam}</h2>
    <p>Año: {equipo.intFormedYear}</p>
    <p>Estadio: {equipo.strStadium}</p>
    <img src={equipo.strBadge}/>
    <p>
      Redes sociales:{" "}
      <a href={`https://${equipo.strFacebook}`} target="_blank">
        Facebook
      </a>
    </p>
  </div>
);

export {Equipo};