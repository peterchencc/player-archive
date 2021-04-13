import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

beforeEach(() => {
  const mockUseContext = jest.fn().mockImplementation(() => ({
    theme: 'dark',
  }));

  React.useContext = mockUseContext;
});

test('render <Header />', () => {
  render(<Header />);
  expect(screen.getByText(/OneFootball/)).toBeInTheDocument();
  expect(screen.getByText(/Dark Mode/)).toBeInTheDocument();
});
