import React from "react";

export default function Projects() {
  return (
    <section id="projects" aria-label="Proyectos destacados" className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-list">
        <div className="project-card">
          {/* <img src="/static/media/profindersImage.jpg" alt="ProFinders App" className="project-img" /> */}
          <h3>ProFinders</h3>
          <p>Plataforma para conectar profesionales y clientes. React, Node.js, MongoDB.</p>
          <a href="https://github.com/Dieg0bl/profinders" target="_blank" rel="noopener noreferrer">Ver repositorio</a>
        </div>
        <div className="project-card">
          {/* <img src="/static/media/aldComputerServiceImage.jpg" alt="ALD Computer Service" className="project-img" /> */}
          <h3>ALD Computer Service</h3>
          <p>Gestión de servicios técnicos y clientes. React, Express, MongoDB.</p>
          <a href="https://github.com/Dieg0bl/ald-computer-service" target="_blank" rel="noopener noreferrer">Ver repositorio</a>
        </div>
        {/* Agrega más proyectos aquí */}
      </div>
    </section>
  );
}
