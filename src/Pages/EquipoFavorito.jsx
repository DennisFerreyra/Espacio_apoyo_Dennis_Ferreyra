import { useEffect, useState } from "react"
import { Equipo } from "../Components/Equipo"

const EquipoFavorito = () => {
    const [equipo, setEquipo] = useState({});
    useEffect( () => {
        async function obtenerDatos() {
            const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division')
            const data = await response.json();
            setEquipo(data); 
        }
        obtenerDatos()
    }, [] )
    return (

    <div>
        <h1>Esto es el EquipoFavorito </h1>
        <Equipo
        nombreEquipo={"Racing"}
        year={"1940"}
        nombreEstadio={"Parque batlle"}
        urlEquipo={"mikasa>>>"}
        />
    </div>
    ) 

    
}

export {EquipoFavorito}