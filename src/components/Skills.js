import React, { useState } from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaCode, FaDatabase, FaMobileAlt, FaCubes, FaLinux, FaWindows, FaLaptopCode, FaGitAlt } from 'react-icons/fa';
import { SiKotlin, SiSpring, SiIntellijidea, SiAndroidstudio, SiOdoo, SiApachemaven, SiPostman, SiGradle, SiEclipseide, SiJunit5, SiScrumalliance } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const toggleShowMore = () => setShowMore(!showMore);
  return (
    <section id="skills" className="skills container" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Habilidades Técnicas</h2>
      <div className="top-skills-highlight">
        <div className="top-skills-row">
          <div className="skill-item top"><FaJava size={70} color="#007396" style={{width: 70, height: 70}} /><span>Java</span></div>
          <div className="skill-item top"><SiSpring size={70} color="#6DB33F" style={{width: 70, height: 70}} /><span>Spring Boot</span></div>
          <div className="skill-item top"><FaHtml5 size={70} color="#E34F26" style={{width: 70, height: 70}} /><span>HTML5</span></div>
          <div className="skill-item top"><FaCss3Alt size={70} color="#1572B6" style={{width: 70, height: 70}} /><span>CSS3</span></div>
          <div className="skill-item top"><FaJsSquare size={70} color="#F7DF1E" style={{width: 70, height: 70}} /><span>JavaScript</span></div>
          <div className="skill-item top"><SiKotlin size={70} color="#A97BFF" style={{width: 70, height: 70}} /><span>Kotlin</span></div>
        </div>
      </div>
      {(!isMobile || showMore) && (
        <>
          <div className="stack-section">
            <h4 className="stack-title">Back-end Java</h4>
            <div className="skills-grid">
              <div className="skill-item"><FaJava size={30} color="#007396" /><span>Java (8–17)</span></div>
              <div className="skill-item"><SiSpring size={30} color="#6DB33F" /><span>Spring MVC / Boot</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>JSP + JSTL</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>Java Swing</span></div>
              <div className="skill-item"><FaDatabase size={30} color="#4DB33D" /><span>JDBC (MySQL, Oracle)</span></div>
              <div className="skill-item"><FaCubes size={30} color="#4caf50" /><span>Hibernate (ORM)</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>APIs RESTful</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">Bases de Datos</h4>
            <div className="skills-grid">
              <div className="skill-item"><DiMysql size={30} color="#00758F" /><span>MySQL</span></div>
              <div className="skill-item"><FaDatabase size={30} color="#4DB33D" /><span>Oracle SQL</span></div>
              <div className="skill-item"><FaDatabase size={30} color="#4DB33D" /><span>JDBC</span></div>
              <div className="skill-item"><FaCubes size={30} color="#4caf50" /><span>Hibernate</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">Front-end Web</h4>
            <div className="skills-grid">
              <div className="skill-item"><FaHtml5 size={30} color="#E34F26" /><span>HTML5</span></div>
              <div className="skill-item"><FaCss3Alt size={30} color="#1572B6" /><span>CSS3</span></div>
              <div className="skill-item"><FaJsSquare size={30} color="#F7DF1E" /><span>JavaScript (vanilla)</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>Dojo</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">Mobile Android</h4>
            <div className="skills-grid">
              <div className="skill-item"><SiKotlin size={30} color="#A97BFF" /><span>Kotlin</span></div>
              <div className="skill-item"><FaMobileAlt size={30} color="#F7DF1E" /><span>Jetpack Compose</span></div>
              <div className="skill-item"><FaCubes size={30} color="#6B8E23" /><span>MVVM + Clean Architecture</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>Dagger-Hilt</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>Retrofit (Moshi/Gson)</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">Sistemas e Infraestructura</h4>
            <div className="skills-grid">
              <div className="skill-item"><FaLinux size={30} color="#FCC624" /><span>Linux (Red Hat, Ubuntu, Debian)</span></div>
              <div className="skill-item"><FaWindows size={30} color="#00A4EF" /><span>Windows/Server</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>Administración, redes, permisos</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">ERP y Gestión Empresarial</h4>
            <div className="skills-grid">
              <div className="skill-item"><SiOdoo size={30} color="#003366" /><span>Odoo (módulos básicos)</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">Testing & Calidad</h4>
            <div className="skills-grid">
              <div className="skill-item"><SiJunit5 size={30} color="#25A162" /><span>JUnit 4 & 5</span></div>
              <div className="skill-item"><SiPostman size={30} color="#FF6C37" /><span>Postman (APIs)</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">Herramientas y Metodologías</h4>
            <div className="skills-grid">
              <div className="skill-item"><FaGitAlt size={30} color="#F05032" /><span>Git</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>SVN</span></div>
              <div className="skill-item"><SiApachemaven size={30} color="#C71A36" /><span>Maven</span></div>
              <div className="skill-item"><SiGradle size={30} color="#02303A" /><span>Gradle</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>Ant</span></div>
              <div className="skill-item"><SiIntellijidea size={30} color="#000000" /><span>IntelliJ IDEA</span></div>
              <div className="skill-item"><SiAndroidstudio size={30} color="#3DDC84" /><span>Android Studio</span></div>
              <div className="skill-item"><SiEclipseide size={30} color="#2C2255" /><span>Eclipse</span></div>
              <div className="skill-item"><FaLaptopCode size={30} color="#5C2D91" /><span>Visual Studio</span></div>
              {/* <div className="skill-item"><SiVisualstudiocode size={30} color="#007ACC" /><span>VS Code</span></div> */}
              <div className="skill-item"><SiScrumalliance size={30} color="#6DB33F" /><span>Scrum, Kanban</span></div>
              <div className="skill-item"><FaCubes size={30} color="#6B8E23" /><span>SOLID, Clean Code, MVC, MVVM</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h4 className="stack-title">IA y Productividad</h4>
            <div className="skills-grid">
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" /><span>Live Coding con IA</span></div>
            </div>
          </div>
        </>
      )}
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

export default Skills;
