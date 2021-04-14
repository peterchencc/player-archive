import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayerProfile from '../components/PlayerProfile';

jest.mock('../components/LoadingIndicator', () => () => (
  <div data-testid="loading-indicator" />
));

describe('render <PlayerProfile />', () => {
  it('should display loading indicator', async () => {
    const { getByTestId } = render(<PlayerProfile profileId="fabio" />);
    expect(getByTestId(/loading-indicator/)).toBeInTheDocument();
  });
});
