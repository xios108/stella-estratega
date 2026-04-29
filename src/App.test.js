import { render, screen } from '@testing-library/react';
import App from './App';

test('renders linktree mockup headline', () => {
  render(<App />);
  const headline = screen.getByText(/aprende a facturar tus primeros 2k por whatsapp/i);
  expect(headline).toBeInTheDocument();
});
