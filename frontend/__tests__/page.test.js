import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders heading', () => {
  render(<Home />);
  expect(screen.getByText(/Frontend-Backend Integration/i)).toBeInTheDocument();
});
