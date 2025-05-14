import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  return (
    <header className="navbar" aria-label="Barra de navegación principal de Diego Barreiro">
      <div className="logo">Diego Barreiro</div>
      <div className="menu-icon" onClick={handleMenuToggle} aria-label="Abrir/cerrar menú de navegación" tabIndex={0} role="button">
        &#9776;
      </div>
      <nav className={menuOpen ? 'nav-links nav-active' : 'nav-links'} aria-label="Navegación principal">
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)} aria-label="Ir a inicio">Inicio</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} aria-label="Ir a sobre mí">Sobre mí</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} aria-label="Ir a proyectos">Proyectos</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)} aria-label="Ir a habilidades">Habilidades</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)} aria-label="Ir a experiencia">Experiencia</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)} aria-label="Ir a formación">Formación</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} aria-label="Ir a contacto">Contacto</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Diego Barreiro">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/Dieg0bl" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Diego Barreiro">
          <FaGithub size={40} />
        </a>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode} aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </header>
  );
};

Navbar.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Navbar;
