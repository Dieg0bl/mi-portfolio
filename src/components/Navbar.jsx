import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((v) => !v);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">Diego Barreiro</div>
      <div className="menu-icon" onClick={handleMenuToggle} tabIndex={0} aria-label="Abrir menú" role="button">
        &#9776;
      </div>
      <nav className={menuOpen ? "nav-links nav-active" : "nav-links"}>
        <ul onClick={handleCloseMenu}>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#education">Formación</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/Dieg0bl" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={28} />
        </a>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Alternar modo oscuro/claro">
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </header>
  );
}

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
