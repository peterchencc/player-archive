import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from '../components/SearchForm';

test('rendering <SearchForm>', () => {
  const searchPlayer = jest.fn();
  render(<SearchForm searchPlayer={searchPlayer} />);

  expect(screen.getByText('GO').closest('button')).toBeDisabled();
  expect(screen.getByText("Enter player's id:")).toBeInTheDocument();
  expect(screen.getByRole('searchbox')).toBeInTheDocument();
});

test('can submit when searchbox has input', () => {
  const searchPlayer = jest.fn();
  render(<SearchForm searchPlayer={searchPlayer} />);

  const submitButton = screen.getByText('GO').closest('button');
  expect(submitButton).toBeDisabled();
  userEvent.type(screen.getByRole('searchbox'), 'fabio');
  expect(submitButton).toBeEnabled();
});

test('handleSubmit will call searchPlayer', async () => {
  const searchPlayer = jest.fn();
  render(<SearchForm searchPlayer={searchPlayer} />);

  userEvent.type(screen.getByRole('searchbox'), 'fabio');
  const submitButton = screen.getByText('GO').closest('button');

  userEvent.click(submitButton);
  await waitFor(() => {
    expect(searchPlayer).toHaveBeenCalledTimes(1);
  });
});
