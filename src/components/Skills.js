/**
 * Skills.js
 *
 * Componente de React para mostrar las habilidades técnicas principales y adicionales de Diego Barreiro.
 * Incluye accesibilidad, estructura semántica y diseño responsive.
 *
 * Uso: Este componente se utiliza en la sección principal del portfolio para destacar tecnologías, herramientas y metodologías dominadas.
 *
 * Autor: Diego Barreiro
 * Última actualización: mayo 2025
 */

import React, { useState } from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaCode, FaDatabase, FaMobileAlt, FaCubes, FaLinux, FaWindows, FaLaptopCode, FaGitAlt } from 'react-icons/fa';
import { SiKotlin, SiSpring, SiIntellijidea, SiAndroidstudio, SiOdoo, SiApachemaven, SiPostman, SiGradle, SiEclipseide, SiJunit5, SiScrumalliance } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);
  return (
    <section id="skills" className="skills container" aria-labelledby="skills-heading" role="region" aria-label="Habilidades técnicas de Diego Barreiro">
      <h2 id="skills-heading">Habilidades Técnicas</h2>
      <div className="top-skills-highlight">
        <div className="top-skills-row">
          <div className="skill-item top"><FaJava size={70} color="#007396" style={{width: 70, height: 70}} aria-label="Java" /><span>Java</span></div>
          <div className="skill-item top"><SiSpring size={70} color="#6DB33F" style={{width: 70, height: 70}} aria-label="Spring Boot" /><span>Spring Boot</span></div>
          <div className="skill-item top"><FaHtml5 size={70} color="#E34F26" style={{width: 70, height: 70}} aria-label="HTML5" /><span>HTML5</span></div>
          <div className="skill-item top"><FaCss3Alt size={70} color="#1572B6" style={{width: 70, height: 70}} aria-label="CSS3" /><span>CSS3</span></div>
          <div className="skill-item top"><FaJsSquare size={70} color="#F7DF1E" style={{width: 70, height: 70}} aria-label="JavaScript" /><span>JavaScript</span></div>
          <div className="skill-item top"><SiKotlin size={70} color="#A97BFF" style={{width: 70, height: 70}} aria-label="Kotlin" /><span>Kotlin</span></div>
        </div>
      </div>
      {showMore && (
        <div data-testid="extra-skills">
          <div className="stack-section">
            <h3>Back-end Java</h3>
            <div className="skills-grid">
              <div className="skill-item"><FaJava size={30} color="#007396" aria-label="Java" /><span>Java (8–17)</span></div>
              <div className="skill-item"><SiSpring size={30} color="#6DB33F" aria-label="Spring" /><span>Spring MVC / Boot</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="JSP + JSTL" /><span>JSP + JSTL</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="Java Swing" /><span>Java Swing</span></div>
              <div className="skill-item"><FaDatabase size={30} color="#4DB33D" aria-label="JDBC" /><span>JDBC (MySQL, Oracle)</span></div>
              <div className="skill-item"><FaCubes size={30} color="#4caf50" aria-label="Hibernate" /><span>Hibernate (ORM)</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="APIs RESTful" /><span>APIs RESTful</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>Bases de Datos</h3>
            <div className="skills-grid">
              <div className="skill-item"><DiMysql size={30} color="#00758F" aria-label="MySQL" /><span>MySQL</span></div>
              <div className="skill-item"><FaDatabase size={30} color="#4DB33D" aria-label="Oracle SQL" /><span>Oracle SQL</span></div>
              <div className="skill-item"><FaDatabase size={30} color="#4DB33D" aria-label="JDBC" /><span>JDBC</span></div>
              <div className="skill-item"><FaCubes size={30} color="#4caf50" aria-label="Hibernate" /><span>Hibernate</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>Front-end Web</h3>
            <div className="skills-grid">
              <div className="skill-item"><FaHtml5 size={30} color="#E34F26" aria-label="HTML5" /><span>HTML5</span></div>
              <div className="skill-item"><FaCss3Alt size={30} color="#1572B6" aria-label="CSS3" /><span>CSS3</span></div>
              <div className="skill-item"><FaJsSquare size={30} color="#F7DF1E" aria-label="JavaScript" /><span>JavaScript (vanilla)</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="Dojo" /><span>Dojo</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>Mobile Android</h3>
            <div className="skills-grid">
              <div className="skill-item"><SiKotlin size={30} color="#A97BFF" aria-label="Kotlin" /><span>Kotlin</span></div>
              <div className="skill-item"><FaMobileAlt size={30} color="#F7DF1E" aria-label="Jetpack Compose" /><span>Jetpack Compose</span></div>
              <div className="skill-item"><FaCubes size={30} color="#6B8E23" aria-label="MVVM + Clean Architecture" /><span>MVVM + Clean Architecture</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="Dagger-Hilt" /><span>Dagger-Hilt</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="Retrofit" /><span>Retrofit (Moshi/Gson)</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>Sistemas e Infraestructura</h3>
            <div className="skills-grid">
              <div className="skill-item"><FaLinux size={30} color="#FCC624" aria-label="Linux" /><span>Linux (Red Hat, Ubuntu, Debian)</span></div>
              <div className="skill-item"><FaWindows size={30} color="#00A4EF" aria-label="Windows" /><span>Windows/Server</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="Administración, redes, permisos" /><span>Administración, redes, permisos</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>ERP y Gestión Empresarial</h3>
            <div className="skills-grid">
              <div className="skill-item"><SiOdoo size={30} color="#003366" aria-label="Odoo" /><span>Odoo (módulos básicos)</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>Testing & Calidad</h3>
            <div className="skills-grid">
              <div className="skill-item"><SiJunit5 size={30} color="#25A162" aria-label="JUnit" /><span>JUnit 4 & 5</span></div>
              <div className="skill-item"><SiPostman size={30} color="#FF6C37" aria-label="Postman" /><span>Postman (APIs)</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>Herramientas y Metodologías</h3>
            <div className="skills-grid">
              <div className="skill-item"><FaGitAlt size={30} color="#F05032" aria-label="Git" /><span>Git</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="SVN" /><span>SVN</span></div>
              <div className="skill-item"><SiApachemaven size={30} color="#C71A36" aria-label="Maven" /><span>Maven</span></div>
              <div className="skill-item"><SiGradle size={30} color="#02303A" aria-label="Gradle" /><span>Gradle</span></div>
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="Ant" /><span>Ant</span></div>
              <div className="skill-item"><SiIntellijidea size={30} color="#000000" aria-label="IntelliJ IDEA" /><span>IntelliJ IDEA</span></div>
              <div className="skill-item"><SiAndroidstudio size={30} color="#3DDC84" aria-label="Android Studio" /><span>Android Studio</span></div>
              <div className="skill-item"><SiEclipseide size={30} color="#2C2255" aria-label="Eclipse" /><span>Eclipse</span></div>
              <div className="skill-item"><FaLaptopCode size={30} color="#5C2D91" aria-label="Visual Studio" /><span>Visual Studio</span></div>
              <div className="skill-item"><SiScrumalliance size={30} color="#6DB33F" aria-label="Scrum, Kanban" /><span>Scrum, Kanban</span></div>
              <div className="skill-item"><FaCubes size={30} color="#6B8E23" aria-label="SOLID, Clean Code, MVC, MVVM" /><span>SOLID, Clean Code, MVC, MVVM</span></div>
            </div>
          </div>
          <div className="stack-section">
            <h3>IA y Productividad</h3>
            <div className="skills-grid">
              <div className="skill-item"><FaCode size={30} color="#1B6AC6" aria-label="Live Coding con IA" /><span>Live Coding con IA</span></div>
            </div>
          </div>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <button 
          className="btn" 
          onClick={toggleShowMore} 
          aria-expanded={showMore}
          data-testid="toggle-skills-btn"
        >
          {showMore ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </section>
  );
};

export default Skills;
