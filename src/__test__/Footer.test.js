import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('render <Footer />', () => {
  render(<Footer />);
  expect(screen.getByText(/Player Archive/)).toBeInTheDocument();
});
