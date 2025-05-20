import React from "react";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contacto" className="contact-section">
      <h2>Contacto</h2>
      <form className="contact-form" autoComplete="off" onSubmit={e => e.preventDefault()}>
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" required />
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:diego.barreiro@email.com">diego.barreiro@email.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/dieg0bl" target="_blank" rel="noopener noreferrer">dieg0bl</a></p>
      </div>
    </section>
  );
}
