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
} from 'react-icons/fa';
import {
  SiSpring,
  SiApachemaven,
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiIntellijidea,
  SiAndroidstudio,
  SiPostman
} from 'react-icons/si';
import heroBackground from './images/hero-background.jpg';
import profileImage from './images/profile.jpg';

// --- Componente Navbar ---
const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

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

// --- Componente Hero ---
const Hero = () => (
  <section
    id="home"
    className="hero"
    style={{ backgroundImage: `url(${heroBackground})` }}
  >
    <div className="hero-overlay">
      <h1>Hola, soy Diego Barreiro</h1>
      <p>Desarrollador de Software Junior en Aplicaciones Multiplataforma</p>
      <a href="#about" className="btn">Conóceme</a>
    </div>
  </section>
);

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

// --- Componente Projects ---
const Projects = () => {
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
        { icon: <FaJsSquare size={20} color="#F7DF1E" />, name: 'JavaScript' }
      ],
      image: heroBackground,
      codeLink: 'https://github.com/Dieg0bl/mi-portfolio'
    },
    {
      id: 2,
      title: 'ALDComputerService',
      platform: 'Desktop',
      description:
        'Aplicación de escritorio para la gestión integral de equipos informáticos y reparaciones. Incluye gestión de inventario, seguimiento de reparaciones, y reportes automáticos.',
      tech: [
        { icon: <FaJava size={20} color="#007396" />, name: 'Java' },
        { icon: <SiSpring size={20} color="#6DB33F" />, name: 'Spring Boot' },
        { icon: <FaDatabase size={20} color="#4DB33D" />, name: 'MySQL' }
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
        { icon: <FaReact size={20} color="#61DAFB" />, name: 'React' },
        { icon: <FaJsSquare size={20} color="#F7DF1E" />, name: 'JavaScript' },
        { icon: <FaDatabase size={20} color="#4DB33D" />, name: 'PostgreSQL' }
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
          <div className="project-item" key={project.id}>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="platform-tag">{project.platform}</span>
                <p>{project.description}</p>
                <p className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} style={{ marginLeft: '10px' }}>
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Componente Skills ---
const Skills = () => (
  <section id="skills" className="skills container">
    <h2>Habilidades Técnicas</h2>
    {/* Franja Superior con 5 Skills Destacados */}
    <div className="top-skills-grid">
      <div className="skill-item top">
        <FaJava size={50} color="#007396" /> Java
      </div>
      <div className="skill-item top">
        <SiKotlin size={50} color="#A97BFF" /> Kotlin
      </div>
      <div className="skill-item top">
        <FaDatabase size={50} color="#4DB33D" /> SQL
      </div>
      <div className="skill-item top">
        <FaHtml5 size={50} color="#E34F26" /> HTML5
      </div>
      <div className="skill-item top">
        <FaCss3Alt size={50} color="#1572B6" /> CSS3
      </div>
    </div>
    {/* Resto de habilidades en tamaño estándar */}
    <div className="skills-grid">
      <div className="skill-item">
        <FaLinux size={40} color="#FCC624" /> Linux (Ubuntu, Debian)
      </div>
      <div className="skill-item">
        <FaWindows size={40} color="#00A4EF" /> Windows
      </div>
      <div className="skill-item">
        <SiIntellijidea size={40} color="#000000" /> IntelliJ IDEA
      </div>
      <div className="skill-item">
        <SiAndroidstudio size={40} color="#3DDC84" /> Android Studio
      </div>
      <div className="skill-item">
        <SiPostman size={40} color="#FF6C37" /> Postman
      </div>
      <div className="skill-item">
        <FaReact size={40} color="#61DAFB" /> React
      </div>
      <div className="skill-item">
        <SiSpring size={40} color="#6DB33F" /> Spring Boot
      </div>
      <div className="skill-item">
        <SiApachemaven size={40} color="#C71A36" /> Maven
      </div>
      <div className="skill-item">
        <SiJetpackcompose size={40} color="#3DDC84" /> Jetpack Compose
      </div>
      <div className="skill-item">
        <SiAndroid size={40} color="#3DDC84" /> Android
      </div>
      <div className="skill-item">
        <FaGitAlt size={40} color="#F05032" /> Git, Subversion
      </div>
    </div>
  </section>
);


// --- Componente Experience ---
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Desarrollador de Software (Prácticas)',
      company: 'ATOS IT Solutions & Services',
      location: 'Santiago de Compostela, España',
      description: `Participé en el desarrollo del proyecto 'Logas' y 'Logas Conta' para el SERGAS, con enfoque full-stack: interfaces en JavaScript/Dojo y backend con Java, Spring Boot y Hibernate. Gestioné bases de datos Oracle y realicé pruebas de APIs REST con Postman.`
    },
    {
      id: 2,
      role: 'Experiencia en otros Sectores',
      company: 'Diferentes Empresas',
      location: 'Galicia, España',
      description: `Cuento con más de 8 años de experiencia en sectores no tecnológicos, lo que me ha dotado de habilidades como trabajo en equipo, adaptabilidad y resolución de problemas.`
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

// --- Componente Education ---
const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      institution: 'I.E.S. Plurilingüe Antón Losada Dieguéz',
      location: 'A Estrada, España',
      period: 'Septiembre 2022 - Junio 2024',
      description: `Formación centrada en desarrollo multiplataforma Android (Kotlin, Jetpack Compose), Java, Spring Boot, metodologías ágiles (Scrum, Kanban) y uso de control de versiones (Git).`
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
