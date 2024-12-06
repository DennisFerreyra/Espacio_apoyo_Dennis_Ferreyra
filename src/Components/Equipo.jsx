const Equipo = ({nombreEquipo, year, nombreEstadio, urlEquipo}) => {
<div>
    <p>{nombreEquipo}</p>
    <p>{year}</p>
    <p>{nombreEstadio}</p>
    <img src={urlEquipo}></img>
</div>

}
export { Equipo }