import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Diego Barreiro. Todos los derechos reservados.</p>
      <small>Desarrollado con React.</small>
    </footer>
  );
}
