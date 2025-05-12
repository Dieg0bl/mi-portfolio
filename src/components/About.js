import React from 'react';
import profileImageWebp from '../images/profile.webp';
import cvFile from '../documents/CV_Diego_Barreiro.pdf';

const About = () => (
  <section id="about" className="about container" aria-labelledby="about-heading">
    <div className="about-content">
      <picture>
        <img src={profileImageWebp} alt="Foto de perfil de Diego Barreiro, desarrollador full-stack" className="profile-picture" loading="lazy" width="180" height="180" />
      </picture>
      <h2 id="about-heading">Sobre mí</h2>
      <p>Soy Diego Barreiro, desarrollador de software especializado en aplicaciones multiplataforma.</p>
      <p>Con más de 8 años de experiencia en diversos sectores, en 2022 se me presentó una oportunidad única para impulsar mi carrera profesional. Decidí dejar un empleo estable, en el que había desempeñado mis labores durante años, para formarme en el desarrollo de software. Fue una decisión meditada y estratégica, motivada por el deseo de sentirme realizado y liberar mi creatividad en un campo que me apasiona: crear soluciones innovadoras desde cero y contribuir a la mejora continua de la eficiencia, tanto para empresas como para particulares en su camino hacia el futuro.</p>
      <p>Mi incursión formal en el mundo del desarrollo comenzó ese mismo año, iniciando mi formación y culminando con prácticas en ATOS IT Solutions & Services, proceso en el que adquirí una sólida base y valiosa experiencia. Desde entonces, he estado ampliando mis conocimientos de forma autodidacta mientras desarrollo proyectos personales, lo que me mantiene en constante aprendizaje. A lo largo de mi formación y experiencia, he consolidado habilidades en Java, Kotlin, Spring, Jetpack Compose y SQL, entre otras, y me esfuerzo día a día por ser un profesional en constante evolución.</p>
      <p>Me inspira la forma en que referentes del sector transmiten confianza y autonomía. Aunque actualmente me encuentro en una etapa inicial, aspiro a trabajar con el mismo enfoque, libertad y responsabilidad de un profesional experimentado: sin prisa pero sin pausa, sin distracciones y siempre en ascenso, en un entorno que me permita crecer y aprender, tanto de forma autodidacta como en equipo.</p>
      <p>Al trabajar en equipo, valoro profundamente la confianza y la comunicación directa en el grupo de desarrollo. Mientras se reconozca mi verdadero valor, me comprometo a dar siempre mi cien por cien; de lo contrario, si no aporto un valor tangible, optaré por explorar nuevos horizontes.</p>
      <p>Mi filosofía es avanzar de manera constante, combinando creatividad, compromiso y curiosidad, con la calidad como pilar central en cada proyecto.</p>
      <div className="button-group">
        <a href="#contact" className="btn" aria-label="Ir a la sección de contacto">Contáctame</a>
        <a href={cvFile} download="CV_Diego_Barreiro.pdf" className="btn" target="_blank" rel="noopener noreferrer" aria-label="Descargar CV en PDF">Descargar CV</a>
      </div>
    </div>
  </section>
);

export default About;
