const Header = () => {
  return (
    <header data-layout="header" className="header-principal">
      <div className="header-contenedor">
        <div className="logo">
          <h2>Sazón</h2>
        </div>
        <nav className="navegacion">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/despensa">Mi Despensa</a></li>
            <li><a href="/sugerencias" className="activo">Sugerencias</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;