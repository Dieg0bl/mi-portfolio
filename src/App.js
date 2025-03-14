import React, { useState } from 'react';
import './App.css';
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaEnvelope,
  FaReact,
  FaLinux,
  FaWindows,
  FaGlobe,
  FaLaptop,
  FaCode,
  FaLaptopCode,    // Para Visual Studio
  FaCubes,
  FaMobileAlt,      // Reemplaza icono inexistente de Jetpack Compose
  FaLeaf 
} from 'react-icons/fa';

import {
  SiSpring,
  SiKotlin,
  SiAndroidstudio,
  SiIntellijidea,
  SiAndroid,
  SiApachemaven,
  SiPostman
} from 'react-icons/si';

import heroBackground from './images/hero-background.jpg';
import profileImage from './images/profile.jpg';

//
// --- Componente Projects (rediseñado estilo "mockup Paint") ---
//
const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Ícono según la plataforma
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Desktop':
        return <FaLaptop size={16} />;
      case 'Android':
        return <SiAndroid size={16} />;
      default:
        return <FaGlobe size={16} />;
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Portfolio Personal',
      platform: 'Web',
      description:
        'Mi portafolio, desarrollado con React y desplegado en GitHub Pages, muestra mis habilidades y proyectos. Diseño responsivo, modo oscuro y claro, y secciones que reflejan mi formación y experiencia.',
      tech: [
        { icon: <FaReact size={20} color="#61DAFB" />, name: 'React' },
        { icon: <FaCss3Alt size={20} color="#1572B6" />, name: 'CSS' },
      ],
      image: heroBackground,
      codeLink: 'https://github.com/Dieg0bl/mi-portfolio'
    },
    {
      id: 2,
      title: 'ALDComputerService',
      platform: 'Desktop',
      description:
        'Aplicación de escritorio para la gestión integral de equipos informáticos y reparaciones. Incluye gestión de inventario, seguimiento de reparaciones y reportes automáticos.',
      tech: [
        { icon: <FaJava size={20} color="#007396" />, name: 'Java' },
      
      ],
      image: heroBackground,
      codeLink: 'https://github.com/Dieg0bl/ALDComputerService'
    },
    {
      id: 3,
      title: 'FindPRO',
      platform: 'Android',
      description:
        'Plataforma enfocada a la búsqueda y localización de profesionales en diversas áreas. Permite filtrar por sector, ver ubicaciones en tiempo real y contactar con profesionales de forma rápida.',
      tech: [
        { icon: <SiKotlin size={20} color="#A97BFF" />, name: 'Kotlin' },
        { icon: <FaJsSquare size={20} color="#F7DF1E" />, name: 'Jetpack Compose' },
        { icon: <FaDatabase size={20} color="#4DB33D" />, name: 'MVVM' },
        { icon: <FaDatabase size={20} color="#4DB33D" />, name: 'Firebase' }
      ],
      image: heroBackground,
      codeLink: 'https://github.com/Dieg0bl/FindPRO'
    }
  ];

  return (
    <section id="projects" className="projects container">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {/* Barra superior negra con plataforma e ícono a la izquierda, título centrado */}
            <div className="project-card-header">
              <div className="project-platform">
                {getPlatformIcon(project.platform)}
                <span>{project.platform}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
            </div>
            {/* Imagen */}
            <img
              src={project.image}
              alt={project.title}
              className="project-card-image"
            />
            {/* Cuerpo */}
            <div className="project-card-body">
              <div className="description-box">
                <p className="project-description">{project.description}</p>
              </div>
              <div className="tech-stack">
                {(expandedProject === project.id
                  ? project.tech
                  : project.tech.slice(0, 3)
                ).map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
              {project.tech.length > 3 && (
                <button className="expand-btn" onClick={() => toggleExpand(project.id)}>
                  {expandedProject === project.id ? 'Ver menos...' : 'Ver más...'}
                </button>
              )}
              <button className="repo-btn" onClick={() => window.open(project.codeLink, '_blank')}>
                <FaGithub size={20} style={{ marginRight: '8px' }} /> Visitar repositorio GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//
// --- Componente Navbar ---
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

//
// --- Componente Hero ---
const Hero = () => (
  <section id="home" className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
    <div className="hero-overlay">
      <h1>Hola, soy Diego Barreiro</h1>
      <p>Desarrollador de Software Junior en Aplicaciones Multiplataforma</p>
      <a href="#about" className="btn">Conóceme</a>
    </div>
  </section>
);

//
// --- Componente About ---
const About = () => (
  <section id="about" className="about container">
    <div className="about-content">
      <img src={profileImage} alt="Perfil de Diego Barreiro" className="profile-picture" />
      <h2>Sobre mí</h2>
      <p>
        Soy Diego Barreiro, desarrollador de software especializado en aplicaciones multiplataforma.
      </p>
      <p>
        Con más de 8 años de experiencia en diversos sectores, en 2022 se me presentó una oportunidad única para impulsar mi carrera profesional. Decidí dejar un empleo estable, en el que había desempeñado mis labores durante años, para formarme en el desarrollo de software. Fue una decisión meditada y estratégica, motivada por el deseo de sentirme realizado y liberar mi creatividad en un campo que me apasiona: crear soluciones innovadoras desde cero y contribuir a la mejora continua de la eficiencia, tanto para empresas como para particulares en su camino hacia el futuro.
      </p>
      <p>
        Mi incursión formal en el mundo del desarrollo comenzó ese mismo año, iniciando mi formación y culminando con prácticas en ATOS IT Solutions & Services, proceso en el que adquirí una sólida base y valiosa experiencia. Desde entonces, he estado ampliando mis conocimientos de forma autodidacta mientras desarrollo proyectos personales, lo que me mantiene en constante aprendizaje. A lo largo de mi formación y experiencia, he consolidado habilidades en Java, Kotlin, Spring, Jetpack Compose y SQL, entre otras, y me esfuerzo día a día por ser un profesional en constante evolución.
      </p>
      <p>
        Me inspira la forma en que referentes del sector transmiten confianza y autonomía. Aunque actualmente me encuentro en una etapa inicial, aspiro a trabajar con el mismo enfoque, libertad y responsabilidad de un profesional experimentado: sin prisa pero sin pausa, sin distracciones y siempre en ascenso, en un entorno que me permita crecer y aprender, tanto de forma autodidacta como en equipo.
      </p>
      <p>
        Al trabajar en equipo, valoro profundamente la confianza y la comunicación directa en el grupo de desarrollo. Mientras se reconozca mi verdadero valor, me comprometo a dar siempre mi cien por cien; de lo contrario, si no aporto un valor tangible, optaré por explorar nuevos horizontes.
      </p>
      <p>
        Mi filosofía es avanzar de manera constante, combinando creatividad, compromiso y curiosidad, con la calidad como pilar central en cada proyecto.
      </p>
      <div className="button-group">
        <a href="#contact" className="btn">Contáctame</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn">Descargar CV</a>
      </div>
    </div>
  </section>
);


//
// --- Componente Skills ---
//   Organizado por Stacks: Web, Mobile, Development Tools, Arquitecturas
//

const Skills = () => {
  // Estado para controlar si se muestran o no las secciones en móvil
  const [showMore, setShowMore] = useState(false);

  // Media query sencilla para detectar móvil (max-width: 768px)
  // Podrías usar un hook o librería, pero aquí un truco: window.innerWidth
  // sin SSR. Para algo más robusto, usar un hook custom o react-responsive.
  const isMobile = window.innerWidth <= 768;

  // Handler para "Ver más" o "Ver menos"
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="skills" className="skills container">
      <h2>Habilidades Técnicas</h2>

      {/* Top Skills en horizontal (siempre visibles) */}
      <div className="top-skills-highlight">
        <div className="top-skills-row">
          {/* 1) Java */}
          <div className="skill-item top">
            <FaJava size={60} color="#007396" />
            <span>Java</span>
          </div>
          {/* 2) Kotlin */}
          <div className="skill-item top">
            <SiKotlin size={60} color="#A97BFF" />
            <span>Kotlin</span>
          </div>
          {/* 3) Jetpack Compose */}
          <div className="skill-item top">
            <FaMobileAlt size={60} color="#F7DF1E" />
            <span>Jetpack Compose</span>
          </div>
          {/* 4) SQL */}
          <div className="skill-item top">
            <FaDatabase size={60} color="#4DB33D" />
            <span>SQL</span>
          </div>
          {/* 5) HTML5 */}
          <div className="skill-item top">
            <FaHtml5 size={60} color="#E34F26" />
            <span>HTML5</span>
          </div>
          {/* 6) CSS3 */}
          <div className="skill-item top">
            <FaCss3Alt size={60} color="#1572B6" />
            <span>CSS3</span>
          </div>
        </div>
      </div>

      {/* 
        Secciones clasificadas: 
        - En móvil, se muestran sólo si showMore === true
        - En desktop, se muestran siempre
      */}
      {(!isMobile || showMore) && (
        <>
          {/* Frontend */}
          <div className="stack-section">
            <h4 className="stack-title">Frontend</h4>
            <div className="skills-grid">
              <div className="skill-item">
                <FaHtml5 size={30} color="#E34F26" />
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <FaCss3Alt size={30} color="#1572B6" />
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <FaJsSquare size={30} color="#F7DF1E" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <FaCode size={30} color="#61DAFB" />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="stack-section">
            <h4 className="stack-title">Backend</h4>
            <div className="skills-grid">
              <div className="skill-item">
                <FaJava size={30} color="#007396" />
                <span>Java</span>
              </div>
              <div className="skill-item">
                <SiSpring size={30} color="#6DB33F" />
                <span>Spring Boot</span>
              </div>
              <div className="skill-item">
                <FaDatabase size={30} color="#4DB33D" />
                <span>SQL</span>
              </div>
              <div className="skill-item">
                <SiKotlin size={30} color="#A97BFF" />
                <span>Kotlin</span>
              </div>
              {/* Hibernate */}
              <div className="skill-item">
                <FaLeaf size={30} color="#4caf50" />
                <span>Hibernate</span>
              </div>
            </div>
          </div>

          {/* Patrones de Desarrollo */}
          <div className="stack-section">
            <h4 className="stack-title">Patrones de Desarrollo</h4>
            <div className="skills-grid">
              <div className="skill-item">
                <FaCubes size={30} color="#6B8E23" />
                <span>MVC</span>
              </div>
              <div className="skill-item">
                <FaCubes size={30} color="#6B8E23" />
                <span>MVVM</span>
              </div>
              <div className="skill-item">
                <FaCubes size={30} color="#6B8E23" />
                <span>Clean Arch.</span>
              </div>
            </div>
          </div>

          {/* Herramientas y Plataformas */}
          <div className="stack-section">
            <h4 className="stack-title">Herramientas y Plataformas</h4>
            <div className="skills-grid">
              <div className="skill-item">
                <FaLinux size={30} color="#FCC624" />
                <span>Linux</span>
              </div>
              <div className="skill-item">
                <FaWindows size={30} color="#00A4EF" />
                <span>Windows</span>
              </div>
              <div className="skill-item">
                <FaCode size={30} color="#1B6AC6" />
                <span>NetBeans</span>
              </div>
              <div className="skill-item">
                <FaLaptopCode size={30} color="#5C2D91" />
                <span>Visual Studio</span>
              </div>
              <div className="skill-item">
                <SiIntellijidea size={30} color="#000000" />
                <span>IntelliJ IDEA</span>
              </div>
              <div className="skill-item">
                <SiAndroidstudio size={30} color="#3DDC84" />
                <span>Android Studio</span>
              </div>
              <div className="skill-item">
                <FaGitAlt size={30} color="#F05032" />
                <span>Git / SVN</span>
              </div>
              <div className="skill-item">
                <SiApachemaven size={30} color="#C71A36" />
                <span>Maven</span>
              </div>
              <div className="skill-item">
                <SiPostman size={30} color="#FF6C37" />
                <span>Postman</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Botón Ver más / Ver menos en móvil */}
      {isMobile && (
        <div style={{ marginTop: '20px' }}>
          <button className="btn" onClick={toggleShowMore}>
            {showMore ? 'Ver menos...' : 'Ver más...'}
          </button>
        </div>
      )}
    </section>
  );
};

//
// --- Componente Experience ---
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Desarrollador de Software Junior',
      company: 'ATOS IT Solutions & Services',
      location: 'Santiago de Compostela, España',
      description: `"Participé en el desarrollo de proyectos destinados a la logística y contabilidad. Con enfoque full-stack, adquirí experiencia tanto en frontend como en backend (Java, Spring, APIs REST), y el manejo de Oracle y Postman."`
    }
  ];

  return (
    <section id="experience" className="experience container">
      <h2>Experiencia Laboral</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <div className="experience-info">
              <h3>{exp.role}</h3>
              {exp.company && <p className="company">{exp.company} | {exp.location}</p>}
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//
// --- Componente Education ---
const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      institution: 'I.E.S. Plurilingüe Antón Losada Dieguéz'
    }
  ];

  return (
    <section id="education" className="education container">
      <h2>Formación</h2>
      <div className="education-grid">
        {educationList.map((edu) => (
          <div className="education-item" key={edu.id}>
            <div className="education-info">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution} | {edu.location}</p>
              <p>{edu.period}</p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//
// --- Componente Contact ---
const Contact = () => (
  <section id="contact" className="contact container">
    <h2>Contacto</h2>
    <div className="contact-info">
      <p>
        <FaEnvelope size={40} color="#D44638" />
        <a href="mailto:contacto@diegobarreiro.dev">contacto@diegobarreiro.dev</a>
      </p>
      <p>
        <FaWhatsapp size={40} color="#25D366" />
        <a href="tel:+34684070703">+34 684070703</a>
      </p>
    </div>
    <h3>¿Quieres enviarme un mensaje?</h3>
    <p>Utiliza el siguiente formulario:</p>
    <form className="contact-form">
      <input type="text" placeholder="Nombre" required aria-label="Nombre" />
      <input type="email" placeholder="Email" required aria-label="Email" />
      <textarea placeholder="Mensaje" required aria-label="Mensaje"></textarea>
      <button type="submit" className="btn">Enviar Mensaje</button>
    </form>
  </section>
);

//
// --- Componente Footer ---
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>© {new Date().getFullYear()} Diego Barreiro. Todos los derechos reservados.</p>
      <div className="social-links-footer">
        <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/Dieg0bl" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="mailto:contacto@diegobarreiro.dev">
          <FaEnvelope size={25} />
        </a>
      </div>
    </div>
  </footer>
);

//
// --- Componente principal App ---
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
