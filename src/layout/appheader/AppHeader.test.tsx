import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppHeader } from './AppHeader';

test('renders appheader text', () => {
  render(<AppHeader />);
  const linkElement = screen.getByText(/Marcel's Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
