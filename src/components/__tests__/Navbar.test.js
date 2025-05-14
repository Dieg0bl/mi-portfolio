import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar toggleDarkMode={() => {}} darkMode={false} />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
    expect(screen.getByText('Experiencia')).toBeInTheDocument();
    expect(screen.getByText('Formación')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('calls toggleDarkMode when button is clicked', () => {
    const toggleDarkMode = jest.fn();
    render(<Navbar toggleDarkMode={toggleDarkMode} darkMode={false} />);
    fireEvent.click(screen.getByText('Modo Oscuro'));
    expect(toggleDarkMode).toHaveBeenCalled();
  });
});
