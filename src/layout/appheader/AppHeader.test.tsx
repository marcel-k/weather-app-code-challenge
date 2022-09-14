import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppHeader } from './AppHeader';

test('renders appheader text', () => {
  render(<AppHeader />);
  const titleElement = screen.getByText(/Marcel's Weather App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders "go to home" link', () => {
  render(<AppHeader />);
  const linkElement = screen.getByTitle(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
