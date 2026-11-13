import { useState } from "react";

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header data-layout="header" className="header-principal">
      <div className="header-contenedor">
        <div className="header-menu-contenedor">
          <button
            className="header-menu-boton"
            type="button"
            aria-expanded={menuAbierto}
            aria-controls="header-drawer"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>Menú Drawer</span>
          </button>

          {menuAbierto && (
            <nav id="header-drawer" className="header-drawer" aria-label="Navegación principal">
              <a href="/" onClick={cerrarMenu}>Inicio</a>
              <a href="/despensa" onClick={cerrarMenu}>Mi despensa</a>
              <a href="/sugerencias" className="activo" onClick={cerrarMenu}>Sugerencias</a>
            </nav>
          )}
        </div>

        <a className="header-marca" href="/" aria-label="Sa-zón, inicio">
          <span className="header-marca-insignia" aria-hidden="true">i</span>
          <span className="header-marca-texto">
            <strong>Sa·zón</strong>
            <small>DESPENSA VIRTUAL NUTRESA</small>
          </span>
        </a>

        <label className="header-busqueda">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <input
            type="search"
            aria-label="Buscar recetas o marcas"
            placeholder="Buscar recetas o marcas (Salchicha Ranchera, Doria, Pietrán, Noel)..."
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
