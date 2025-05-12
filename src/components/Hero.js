import React from 'react';
import heroBackgroundWebp from '../images/hero-background.webp';

const Hero = () => (
  <section id="home" className="hero">
    <picture>
      <img src={heroBackgroundWebp} alt="Fondo hero Diego Barreiro" className="hero-bg" loading="lazy" style={{width:'100%',height:'auto',position:'absolute',zIndex:-1,top:0,left:0}} />
    </picture>
    <div className="hero-overlay">
      <h1>Diego Barreiro – Desarrollador Full-Stack</h1>
      <p>Desarrollador de Software Junior</p>
      <a href="#about" className="btn">Conóceme</a>
    </div>
  </section>
);

export default Hero;
