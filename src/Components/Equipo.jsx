import React from "react";
import "./Equipo.css";

const Equipo = ({nombreEquipo, year, nombreEstadio, imgEquipo, strTwitter}) => {
return(
<div>
    <p>{nombreEquipo}</p>
    <p>{year}</p>
    <p>{nombreEstadio}</p>
    <img src={imgEquipo}></img>
    
    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>
    
</div>
)
}

export {Equipo};