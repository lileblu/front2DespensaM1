import sugerencias from "../data/sugerencias"
import CardSugerencia from "./CardSugerencia"

const ListaSugerencias = () => {
  return (
    <div className="grid-sugerencias">
      {sugerencias.map((receta) => (
        <CardSugerencia key={receta.id} receta={receta} />
      ))}
    </div>
  )
}

export default ListaSugerencias