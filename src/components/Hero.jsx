import React from "react";

export default function Hero() {
  return (
    <section id="hero" aria-label="Presentación principal" className="hero-section">
      {/* <img src="/static/media/profile.jpg" alt="Foto de Diego Barreiro" className="hero-img" /> */}
      <div className="hero-content">
        <h1>¡Hola! Soy <span className="highlight">Diego Barreiro</span></h1>
        <p>Desarrollador web full stack, apasionado por la tecnología y la innovación.</p>
        <a className="cv-link" href="/static/media/CV_Diego_Barreiro.pdf" download>Descargar CV</a>
      </div>
    </section>
  );
}
