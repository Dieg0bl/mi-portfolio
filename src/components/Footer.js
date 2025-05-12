import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container">
      <p>© {new Date().getFullYear()} Diego Barreiro. Todos los derechos reservados.</p>
      <div className="social-links-footer">
        <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Diego Barreiro">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/Dieg0bl" target="_blank" rel="noopener noreferrer" aria-label="GitHub Diego Barreiro">
          <FaGithub size={20} />
        </a>
        <a href="mailto:contacto@diegobarreiro.dev" aria-label="Enviar correo a Diego Barreiro">
          <FaEnvelope size={25} />
        </a>
      </div>
      <div style={{marginTop: '10px'}}>
        <strong>Correo alternativo:</strong> <a href="mailto:diegobarreirodev@gmail.com">diegobarreirodev@gmail.com</a>
      </div>
    </div>
  </footer>
);

export default Footer;
