import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../containers/App';

test('renders Title', () => {
  render(<App />);
  const title = screen.getByText('Player Archive');
  expect(title).toBeInTheDocument();
});
