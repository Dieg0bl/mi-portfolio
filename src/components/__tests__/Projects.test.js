import { render, screen, fireEvent } from '@testing-library/react';
import Projects from '../Projects';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('Projects', () => {
  it('renders projects section and at least one project', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Proyectos/i })).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });

  it('renders projects section', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /Proyectos Destacados/i })).toBeInTheDocument();
  });

  it('expands and collapses tech stack', () => {
    render(<Projects />);
    const expandBtn = screen.getByRole('button', { name: /ver más/i });
    fireEvent.click(expandBtn);
    expect(screen.getByRole('button', { name: /ver menos/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /ver menos/i }));
    expect(screen.getByRole('button', { name: /ver más/i })).toBeInTheDocument();
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Projects />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
