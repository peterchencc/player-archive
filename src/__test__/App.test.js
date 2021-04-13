import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../containers/App';

it('should renders Title', () => {
  render(<App />);
  const title = screen.getByText('Player Archive');
  expect(title).toBeInTheDocument();
});
