import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="contact container" aria-labelledby="contact-heading" role="region" aria-label="Contacto profesional de Diego Barreiro">
    <h2 id="contact-heading">Contacto</h2>
    <div className="contact-info">
      <p>
        <FaEnvelope size={40} color="#D44638" />
        <a href="mailto:contacto@diegobarreiro.dev" itemProp="email" aria-label="Enviar email a Diego Barreiro">contacto@diegobarreiro.dev</a>
      </p>
      <p>
        <FaPhone size={40} color="#25D366" />
        <a href="tel:+34684070703" itemProp="telephone" aria-label="Llamar a Diego Barreiro">+34 684070703</a>
      </p>
      <p>
        <FaWhatsapp size={40} color="#25D366" />
        <a href="tel:+34684070703" aria-label="Contactar por WhatsApp con Diego Barreiro">+34 684070703</a>
      </p>
    </div>
    <h3>¿Quieres enviarme un mensaje?</h3>
    <p>Utiliza el siguiente formulario:</p>
    <form className="contact-form" action="https://formspree.io/f/xwkgqjzv" method="POST" aria-label="Formulario de contacto">
      <input type="text" name="nombre" placeholder="Nombre" required aria-label="Nombre" />
      <input type="email" name="email" placeholder="Email" required aria-label="Email" />
      <textarea name="mensaje" placeholder="Mensaje" required aria-label="Mensaje"></textarea>
      <button type="submit" className="btn" aria-label="Enviar mensaje">Enviar Mensaje</button>
    </form>
  </section>
);

export default Contact;
