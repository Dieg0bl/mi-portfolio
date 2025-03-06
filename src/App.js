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
  FaReact
} from 'react-icons/fa';
import { SiSpring, SiApachemaven, SiKotlin, SiAndroid } from 'react-icons/si';

// --- Componente Navbar ---
const Navbar = ({ toggleDarkMode, darkMode }) => (
  <header className="navbar">
    <div className="logo">Diego Barreiro</div>
    <nav>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#education">Formación</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} />
      </a>
      <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} />
      </a>
    </div>
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  </header>
);

// --- Componente Hero ---
const Hero = () => (
  <section id="home" className="hero" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
    <div className="hero-overlay">
      <h1>Hola, soy Diego Barreiro</h1>
      <p>Desarrollador Junior en Aplicaciones Multiplataforma</p>
      <a href="#about" className="btn">Conóceme</a>
    </div>
  </section>
);

// --- Componente About ---
const About = () => (
  <section id="about" className="about container">
    <div className="about-content">
      <img src="https://via.placeholder.com/200" alt="Foto de perfil de Diego Barreiro" className="profile-picture" />
      <h2>Sobre mí</h2>
      <p>
        Soy Diego Barreiro, desarrollador de software especializado en Aplicaciones Multiplataforma. Elegí esta profesión como resultado de una decisión meditada y consciente de reinventarme, apostando por un ámbito que me permite expresar mi creatividad, aprender continuamente, sentirme realizado y aportar valor tangible.
      </p>
      <p>
        Actualmente cuento con un título oficial de Técnico Superior en Desarrollo de Aplicaciones Multiplataforma. Si bien no tengo una amplia experiencia laboral en el sector, dispongo de conocimientos sólidos en Java, Kotlin, desarrollo web, y frameworks como Spring y Jetpack Compose. Desde que terminé mis prácticas, he estado desarrollando proyectos personales, realizando cursos extraoficiales, siguiendo tutoriales y explorando activamente las tendencias tecnológicas actuales. Todo esto me ha permitido formar mi propio criterio sobre el camino que deseo seguir, aunque como desarrollador soy resiliente y estoy abierto a adaptarme a nuevos retos y circunstancias.
      </p>
      <p>
        Busco un entorno laboral que respete y valore la conciliación familiar, dado que mi familia es mi prioridad. Me interesa especialmente la flexibilidad laboral, objetivos bien definidos y una interacción profesional clara y eficiente. Anteriormente, en otros sectores, he demostrado capacidad para trabajar en equipo de manera eficaz y comprometida, cumpliendo con eficiencia y autonomía cada tarea asignada.
      </p>
      <p>
        Soy autónomo, práctico y directo en la comunicación, aportando activamente en tareas concretas dentro del ámbito profesional. Soy consciente de mis áreas de mejora personales, como mi carácter inquieto y ambicioso, que gestionadas adecuadamente y en un entorno de confianza pueden convertirse en cualidades muy positivas para cualquier equipo de trabajo.
      </p>
      <p>
        Mi objetivo es ser un activo valioso a largo plazo para una empresa que confíe en mí, creciendo juntos mediante una relación basada en la innovación, la confianza y el respeto mutuo. Si la empresa reconoce y respeta mis necesidades y estilo de trabajo, contará con mi absoluto compromiso y fidelidad, permitiéndonos alcanzar juntos objetivos ambiciosos y creativos.
      </p>
      <div className="contact-details">
        <p>Email: <a href="mailto:Dieg0Barreir01@hotmail.com">Dieg0Barreir01@hotmail.com</a></p>
        <p>Teléfono: <a href="tel:+34684070703">684070703</a></p>
        <p>Domicilio: Villalbarro 21, 15688 Oroso (España)</p>
      </div>
      <div className="cv-download">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn">Descargar CV (PDF)</a>
      </div>
    </div>
  </section>
);

// --- Componente Projects (Placeholders) ---
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Proyecto Placeholder 1',
      description: 'Próximamente: Descripción del proyecto.',
      tech: 'Tecnologías a utilizar',
      image: 'https://via.placeholder.com/300x200',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Proyecto Placeholder 2',
      description: 'Próximamente: Descripción del proyecto.',
      tech: 'Tecnologías a utilizar',
      image: 'https://via.placeholder.com/300x200',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Proyecto Placeholder 3',
      description: 'Próximamente: Descripción del proyecto.',
      tech: 'Tecnologías a utilizar',
      image: 'https://via.placeholder.com/300x200',
      codeLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects container">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-item" key={project.id}>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="tech-stack"><strong>Tecnologías:</strong> {project.tech}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Componente Skills con iconos ---
const Skills = () => (
  <section id="skills" className="skills container">
    <h2>Habilidades Técnicas</h2>
    <ul className="skills-list">
    <li><FaRobot size={40} color="#FF9900" /> IA </li>
      <li><FaHtml5 size={40} color="#E34F26" /> HTML5</li>
      <li><FaCss3Alt size={40} color="#1572B6" /> CSS3</li>
      <li><FaJsSquare size={40} color="#F7DF1E" /> JavaScript</li>
      <li><FaReact size={40} color="#61DAFB" /> React</li>
      <li><FaJava size={40} color="#007396" /> Java</li>
      <li><SiSpring size={40} color="#6DB33F" /> Spring Boot</li>
      <li><SiApachemaven size={40} color="#C71A36" /> Maven</li>
      <li><SiKotlin size={40} color="#A97BFF" /> Kotlin</li>
      <li><SiJetpackcompose size={40} color="#3DDC84" /> Jetpack Compose</li>
      <li><SiAndroid size={40} color="#3DDC84" /> Android</li>
      <li><FaDatabase size={40} color="#4DB33D" /> Oracle, MySQL, PostgreSQL, MariaDB</li>
      <li><FaGitAlt size={40} color="#F05032" /> Git, Subversion</li>
    </ul>
  </section>
);

// --- Componente Experience ---
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Desarrollador de Software (Prácticas)',
      company: 'ATOS IT Solutions & Services',
      period: 'Marzo 2024 - Junio 2024',
      location: 'Santiago de Compostela, España',
      description: `Participación en el proyecto Logas para el SERGAS:
      - Desarrollo full-stack: Interfaces frontend en JavaScript y Dojo, integración con backend en Java utilizando Spring y Hibernate.
      - Gestión de bases de datos: Configuración y optimización en Oracle.
      - Pruebas de APIs REST con Postman.`
    }
  ];

  return (
    <section id="experience" className="experience container">
      <h2>Experiencia Laboral en Software</h2>
      {experiences.map(exp => (
        <div className="experience-item" key={exp.id}>
          <h3>{exp.role}</h3>
          <p className="company">{exp.company} | {exp.location}</p>
          <p className="period">{exp.period}</p>
          <p className="description">{exp.description}</p>
        </div>
      ))}
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
      period: 'Septiembre 2022 - Junio 2024',
      location: 'A Estrada, España'
    },
    {
      id: 2,
      degree: 'Formación Complementaria en Seguridad y Soldadura',
      institution: 'Formación Complementaria',
      period: 'Varias fechas',
      location: 'España'
    }
  ];

  return (
    <section id="education" className="education container">
      <h2>Formación</h2>
      {educationList.map(edu => (
        <div className="education-item" key={edu.id}>
          <h3>{edu.degree}</h3>
          <p className="institution">{edu.institution} | {edu.location}</p>
          <p className="period">{edu.period}</p>
        </div>
      ))}
    </section>
  );
};

// --- Componente Contact con iconos ---
const Contact = () => (
  <section id="contact" className="contact container">
    <h2>Contacto</h2>
    <div className="contact-info">
      <p>
        <FaEnvelope size={40} color="#D44638" /> Email: <a href="mailto:Dieg0Barreir01@hotmail.com">Dieg0Barreir01@hotmail.com</a>
      </p>
      <p>
        <FaWhatsapp size={40} color="#25D366" /> Teléfono: <a href="tel:+34684070703">684070703</a>
      </p>
      <p>
        <FaLinkedin size={40} color="#0A66C2" /> LinkedIn: <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer">Diego Barreiro</a>
      </p>
    </div>
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
      <p>
        <a href="https://www.linkedin.com/in/diego-barreiro-20580826b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} color="#0A66C2" />
        </a>
      </p>
    </div>
  </footer>
);

// --- Componente principal App ---
function App() {
  const [darkMode, setDarkMode] = useState(false);
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
