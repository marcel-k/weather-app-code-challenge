import { useCallback, useRef, useState } from 'react';

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

/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param func The function to be called
 * @param wait Wait period after function hasn't been called for
 * @returns A memoized function that is debounced
 */
export const useDebounce = <TArgs extends any[], TResult>(func: (...args: TArgs) => TResult, wait: number) => {
  // Use a ref to store the timeout between renders
  // and prevent changes to it from causing re-renders
  const timeout = useRef<number>();

  return useCallback(
  (...args: TArgs) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(later, wait);
    },
    [func, wait]
  );
};


