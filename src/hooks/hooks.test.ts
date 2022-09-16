import React from 'react';
import { render, screen } from '@testing-library/react';

test('useToggle', () => {
  const titleElement = screen.getByText(/todo/i);
  expect(titleElement).toBeInTheDocument();
});
