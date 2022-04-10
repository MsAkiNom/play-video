import { render, screen } from '@testing-library/react';
import App from './App';

test('renders for gotoAndPlay', () => {
  render(<App />);
  const linkElement = screen.getByText(/gotoAndPlay/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders for repo', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub repo here!/i);
  expect(linkElement).toBeInTheDocument();
});


