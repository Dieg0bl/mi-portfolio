import { render, screen } from '@testing-library/react';
import Education from '../Education';

describe('Education', () => {
  it('renders education section', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { name: /Formación relacionada con Desarrollo de Software/i })).toBeInTheDocument();
  });
});
