import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  return (
    <header className="navbar">
      <div className="logo">Diego Barreiro</div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        &#9776;
      </div>
      <nav className={menuOpen ? 'nav-links nav-active' : 'nav-links'}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Formación</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/Dieg0bl" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </header>
  );
};

export default Navbar;
