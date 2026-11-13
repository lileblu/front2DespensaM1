
import "../../../../src/assets/estilos.css";

const Sugerencia = () => {
  return (
    <>
      
      
      <main className="contenedor pagina-modulo">
        <section className="bloque-modulo">
          <h1>Sugerencias de Preparación</h1>
          <p>Descubre recetas deliciosas basadas en los ingredientes que tienes en tu despensa.</p>
          
          {/* Contenedor para mostrar mensajes de estado de la API */}
          <div id="despensa-estado" className="mensaje-estado" role="status"></div>

          {/* Aquí puedes mapear tu lista de sugerencias que viene del backend */}
          <div className="grid-sugerencias">
             {/* Ejemplo de tarjeta estática, luego la reemplazarás con el map() de tus datos */}
             <article className="tarjeta-sugerencia">
                <h3>Pasta con Salchichas Ranchera</h3>
                <p>Aprovecha los productos Nutresa de tu inventario para esta receta rápida.</p>
                <button className="btn-primario">Ver preparación</button>
             </article>
          </div>
        </section>
      </main>

      
    </>
  );
};

export default Sugerencia;
