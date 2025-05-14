import { render, screen } from '@testing-library/react';
import About from '../About';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('About', () => {
  it('renders heading and profile image', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /Sobre mí/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Foto de perfil/i)).toBeInTheDocument();
  });

  it('renders about section', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /Sobre mí/i })).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<About />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
