import React, { useState } from 'react';
import { FaReact, FaCss3Alt, FaJava, FaCubes, FaGithub, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { SiKotlin, SiAndroid } from 'react-icons/si';
import Image from 'next/image';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const toggleExpand = (id) => setExpandedProject(expandedProject === id ? null : id);
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Desktop': return <FaMobileAlt size={16} aria-label="Desktop" />;
      case 'Android': return <SiAndroid size={16} aria-label="Android" />;
      default: return <FaReact size={16} aria-label="Web" />;
    }
  };
  const handleRepoClick = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };
  const projects = [
    {
      id: 1,
      title: 'Portfolio Personal',
      platform: 'Web',
      description: 'Mi portafolio, desarrollado con React y desplegado en GitHub Pages, muestra mis habilidades y proyectos. Diseño responsivo, modo oscuro y claro, y secciones que reflejan mi formación y experiencia.',
      tech: [
        { icon: <FaReact size={20} color="#61DAFB" aria-label="React" />, name: 'React' },
        { icon: <FaCss3Alt size={20} color="#1572B6" aria-label="CSS" />, name: 'CSS' },
      ],
      imageWebp: "/images/hero-background.webp",
      codeLink: 'https://github.com/Dieg0bl/mi-portfolio'
    },
    {
      id: 2,
      title: 'ALDComputerService',
      platform: 'Desktop',
      description: 'Aplicación de escritorio para la gestión integral de equipos informáticos y reparaciones. Incluye gestión de inventario, seguimiento de reparaciones y reportes automáticos.',
      tech: [
        { icon: <FaJava size={20} color="#007396" aria-label="Java" />, name: 'Java' },
        { icon: <FaCubes size={20} color="#4DB33D" aria-label="MVC" />, name: 'MVC' },
      ],
      imageWebp: "/images/aldComputerServiceImage.webp",
      codeLink: 'https://github.com/Dieg0bl/ALDComputerService'
    },
    {
      id: 3,
      title: 'FindPRO',
      platform: 'Android',
      description: 'Plataforma enfocada a la búsqueda y localización de profesionales en diversas áreas. Permite filtrar por sector, ver ubicaciones en tiempo real y contactar con profesionales de forma rápida.',
      tech: [
        { icon: <SiKotlin size={20} color="#A97BFF" aria-label="Kotlin" />, name: 'Kotlin' },
        { icon: <FaMobileAlt size={20} color="#F7DF1E" aria-label="Jetpack Compose" />, name: 'Jetpack Compose' },
        { icon: <FaCubes size={20} color="#4DB33D" aria-label="MVVM" />, name: 'MVVM' },
        { icon: <FaDatabase size={20} color="#4DB33D" aria-label="Firebase" />, name: 'Firebase' }
      ],
      imageWebp: "/images/profindersImage.webp",
      codeLink: 'https://github.com/Dieg0bl/FindPRO'
    }
  ];
  return (
    <section id="projects" className="projects container" aria-labelledby="projects-heading" role="region" aria-label="Sección de proyectos destacados">
      <h2 id="projects-heading">Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id} itemScope itemType="https://schema.org/CreativeWork" aria-label={`Proyecto: ${project.title} – ${project.platform}`}> 
            <header className="project-card-header">
              <div className="project-platform">
                {getPlatformIcon(project.platform)}
                <span>{project.platform}</span>
              </div>
              <h3 className="project-title" itemProp="name">{project.title}</h3>
            </header>
            <picture>
              <Image
                src={project.imageWebp}
                alt={`Miniatura del proyecto ${project.title} (${project.platform})`}
                className="project-card-image"
                width={320}
                height={180}
                loading="lazy"
                style={{aspectRatio: '16/9', objectFit: 'cover', borderRadius: '8px'}}
                itemProp="image"
              />
            </picture>
            <div className="project-card-body">
              <div className="description-box">
                <p className="project-description" itemProp="description">{project.description}</p>
              </div>
              <div className="tech-stack" id={`tech-list-${project.id}`}>
                {(expandedProject === project.id ? project.tech : project.tech.slice(0, 3)).map((tech, index) => (
                  <span key={index} className="tech-item">{tech.icon} {tech.name}</span>
                ))}
              </div>
              {project.tech.length > 3 && (
                <button 
                  className="expand-btn" 
                  onClick={() => toggleExpand(project.id)} 
                  aria-expanded={expandedProject === project.id} 
                  aria-controls={`tech-list-${project.id}`} 
                  aria-label={expandedProject === project.id ? 'Ver menos' : 'Ver más'}
                >
                  {expandedProject === project.id ? 'Ver menos' : 'Ver más'}
                </button>
              )}
              <button className="repo-btn" onClick={() => handleRepoClick(project.codeLink)} aria-label={`Abrir repositorio GitHub de ${project.title}`} itemProp="url">
                <FaGithub size={20} style={{ marginRight: '8px' }} />Repositorio GitHub
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
