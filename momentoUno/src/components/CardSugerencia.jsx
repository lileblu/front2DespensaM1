
const CardSugerencia = ({ receta }) => {
  const {
    titulo,
    porcentajeCoincidencia,
    tiempoPreparacionMinutos,
    dificultad,
    marcaDestacada,
    imagen,
    ingredientesDisponibles,
    ingredientesFaltantes,
  } = receta;

  return (
    <article className="tarjeta-sugerencia">
      <img className="tarjeta-sugerencia-imagen" src={imagen} alt={titulo} />
      <div className="tarjeta-sugerencia-contenido">
        <div className="tarjeta-sugerencia-etiquetas">
          <span className="tarjeta-sugerencia-marca">{marcaDestacada}</span>
          <span className="tarjeta-sugerencia-dificultad">{dificultad}</span>
        </div>

        <h2 className="tarjeta-sugerencia-titulo">{titulo}</h2>
        <p className="tarjeta-sugerencia-tiempo">
          <span aria-hidden="true">◷</span> {tiempoPreparacionMinutos} min
        </p>

        <div className="tarjeta-sugerencia-coincidencia">
          <div className="tarjeta-sugerencia-coincidencia-texto">
            <span>Coincidencia con tu despensa</span>
            <strong>{porcentajeCoincidencia}%</strong>
          </div>
          <div
            className="tarjeta-sugerencia-progreso"
            role="progressbar"
            aria-label={`Coincidencia con tu despensa: ${porcentajeCoincidencia}%`}
            aria-valuenow={porcentajeCoincidencia}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span style={{ width: `${porcentajeCoincidencia}%` }} />
          </div>
        </div>

        <div className="tarjeta-sugerencia-ingredientes">
          <h3>Tienes ({ingredientesDisponibles.length})</h3>
          <ul>
            {ingredientesDisponibles.map((ingrediente) => (
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </ul>
        </div>

        <div className="tarjeta-sugerencia-faltantes">
          <h3>{ingredientesFaltantes.length ? "Te falta" : "¡Tienes todo!"}</h3>
          {ingredientesFaltantes.length > 0 ? (
            <ul>
              {ingredientesFaltantes.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>
          ) : (
            <p>No faltan ingredientes para esta receta.</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardSugerencia