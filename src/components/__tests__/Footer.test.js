import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Diego Barreiro/i)).toBeInTheDocument();
  });
});
