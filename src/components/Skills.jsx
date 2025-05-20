import React from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaGitAlt, FaReact, FaLinux, FaWindows, FaCode, FaLaptopCode, FaCubes, FaMobileAlt, FaLeaf } from "react-icons/fa";
import { SiSpring, SiKotlin, SiAndroidstudio, SiIntellijidea, SiAndroid, SiApachemaven, SiPostman, SiOdoo } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-grid">
        <div className="skill-item"><FaJava size={40} color="#007396" /><span>Java</span></div>
        <div className="skill-item"><SiKotlin size={40} color="#A97BFF" /><span>Kotlin</span></div>
        <div className="skill-item"><FaMobileAlt size={40} color="#F7DF1E" /><span>Jetpack Compose</span></div>
        <div className="skill-item"><FaDatabase size={40} color="#4DB33D" /><span>SQL</span></div>
        <div className="skill-item"><FaHtml5 size={40} color="#E34F26" /><span>HTML5</span></div>
        <div className="skill-item"><FaCss3Alt size={40} color="#1572B6" /><span>CSS3</span></div>
        <div className="skill-item"><FaJsSquare size={40} color="#F7DF1E" /><span>JavaScript</span></div>
        <div className="skill-item"><FaReact size={40} color="#61DAFB" /><span>React</span></div>
        <div className="skill-item"><SiSpring size={40} color="#6DB33F" /><span>Spring Boot</span></div>
        <div className="skill-item"><FaGitAlt size={40} color="#F05032" /><span>Git</span></div>
        <div className="skill-item"><FaLinux size={40} color="#FCC624" /><span>Linux</span></div>
        <div className="skill-item"><FaWindows size={40} color="#00A4EF" /><span>Windows</span></div>
        <div className="skill-item"><FaCode size={40} color="#1B6AC6" /><span>NetBeans</span></div>
        <div className="skill-item"><FaLaptopCode size={40} color="#5C2D91" /><span>Visual Studio</span></div>
        <div className="skill-item"><SiIntellijidea size={40} color="#000000" /><span>IntelliJ IDEA</span></div>
        <div className="skill-item"><SiAndroidstudio size={40} color="#3DDC84" /><span>Android Studio</span></div>
        <div className="skill-item"><SiOdoo size={40} color="#003366" /><span>Odoo ERP</span></div>
        <div className="skill-item"><SiApachemaven size={40} color="#C71A36" /><span>Maven</span></div>
        <div className="skill-item"><SiPostman size={40} color="#FF6C37" /><span>Postman</span></div>
        <div className="skill-item"><FaLeaf size={40} color="#4caf50" /><span>Hibernate</span></div>
        <div className="skill-item"><FaCubes size={40} color="#6B8E23" /><span>MVC</span></div>
        <div className="skill-item"><FaCubes size={40} color="#6B8E23" /><span>MVVM</span></div>
        <div className="skill-item"><FaCubes size={40} color="#6B8E23" /><span>Clean Arch.</span></div>
      </div>
    </section>
  );
}
