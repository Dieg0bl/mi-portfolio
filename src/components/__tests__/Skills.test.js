import { render, screen, fireEvent } from '@testing-library/react';
import Skills from '../Skills';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('Skills', () => {
  it('renders skills section', () => {
    render(<Skills />);
    expect(screen.getByRole('heading', { name: /Habilidades Técnicas/i })).toBeInTheDocument();
  });

  it('toggles show more/less', () => {
    render(<Skills />);
    const btn = screen.getByRole('button', { name: /ver más/i });
    fireEvent.click(btn);
    expect(screen.getByRole('button', { name: /ver menos/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /ver menos/i }));
    expect(screen.getByRole('button', { name: /ver más/i })).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Skills />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
