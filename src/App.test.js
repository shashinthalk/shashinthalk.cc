import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site title link', () => {
  render(<App />);
  const linkElement = screen.getByText(/shashinthalk\.cc/i);
  expect(linkElement).toBeInTheDocument();
});
