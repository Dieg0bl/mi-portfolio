import { render, screen, fireEvent } from '@testing-library/react';
import Experience from '../Experience';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('Experience', () => {
  it('renders experience section', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { name: /Experiencia Profesional/i })).toBeInTheDocument();
    expect(screen.getByLabelText('Experiencia profesional de Diego Barreiro')).toBeInTheDocument();
  });

  it('opens and closes details modal', () => {
    render(<Experience />);
    const btn = screen.getByRole('button', { name: /ver detalles de experiencia previa/i });
    fireEvent.click(btn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const closeBtn = screen.getByRole('button', { name: /cerrar detalles/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Experience />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
