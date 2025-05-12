import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  // Mostrar el HTML renderizado para depuración
  // screen.debug();
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading).toBeInTheDocument();
});
