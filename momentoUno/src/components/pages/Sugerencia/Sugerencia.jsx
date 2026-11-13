
import "../../../../src/assets/estilos.css";
import ListaSugerencias from "../../ListaSugerencias";

const Sugerencia = () => {
  return (
    <>
      <main className="contenedor pagina-modulo">
        <section className="bloque-modulo">
          <h1>Sugerencias de Preparación</h1>
          <p>Descubre recetas deliciosas basadas en los ingredientes que tienes en tu despensa.</p>
          <div id="despensa-estado" className="mensaje-estado" role="status"></div>
          <ListaSugerencias />
        </section>
      </main>
    </>
  );
};

export default Sugerencia;
