import React from "react";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experiencia profesional" className="experience-section">
      <h2>Experiencia</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Desarrollador Full Stack</h3>
          <span>Empresa Ejemplo (2022 - Presente)</span>
          <ul>
            <li>Desarrollo de aplicaciones web modernas y escalables.</li>
            <li>Implementación de buenas prácticas de accesibilidad y SEO.</li>
            <li>Trabajo en equipo ágil y comunicación efectiva.</li>
          </ul>
        </div>
        {/* Agrega más experiencias aquí */}
      </div>
    </section>
  );
}
