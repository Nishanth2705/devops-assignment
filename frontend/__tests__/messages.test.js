import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Mocked message from backend' }),
  })
);

test('displays mocked backend message', async () => {
  render(<Home />);
  await waitFor(() => {
    expect(screen.getByText(/Mocked message from backend/i)).toBeInTheDocument();
  });
});
