import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders todo', () => {
  // render(<AppHeader />);
  const titleElement = screen.getByText(/todo/i);
  expect(titleElement).toBeInTheDocument();
});
