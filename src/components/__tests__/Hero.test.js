import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders main heading and button', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: /Diego Barreiro/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Conóceme/i })).toBeInTheDocument();
  });
});
