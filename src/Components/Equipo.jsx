import React from "react";

const Equipo = ({nombreEquipo, year, nombreEstadio, imgEquipo, strTwitter}) => {
return(
<div>
    <p>{nombreEquipo}</p>
    <p>{year}</p>
    <p>{nombreEstadio}</p>
    <img src={imgEquipo}></img>
    <p>
    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer"></a>
    </p>
</div>
)
}

export {Equipo};