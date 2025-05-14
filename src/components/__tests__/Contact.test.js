import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  it('renders contact section and email', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /Contacto/i })).toBeInTheDocument();
    expect(screen.getByText(/contacto@diegobarreiro.dev/i)).toBeInTheDocument();
  });
});
