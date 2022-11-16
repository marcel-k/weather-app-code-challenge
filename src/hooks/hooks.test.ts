import { act, renderHook } from '@testing-library/react';

import { useToggle } from './hooks';



test('useToggle toggles', () => {
  const { result } = renderHook(() => useToggle(false));

  let [open, toggleOpen] = result.current;
  expect(open).toBe(false);

  act(() => {
    toggleOpen();
  });

  [open, toggleOpen] = result.current;
  expect(open).toBe(true);
});
