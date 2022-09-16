import { useState } from 'react';

/**
 * Hook that toggles a boolean value
 * @param initialValue 
 * @returns 
 */
export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState((state) => !state);

  return [state, toggle] as const;
};

