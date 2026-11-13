const Footer = () => {
  return (
    <footer data-layout="footer" className="footer-principal">
      <div className="footer-contenedor">
        <p>© {new Date().getFullYear()} Sazón. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;