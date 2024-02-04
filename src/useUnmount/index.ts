import { useEffect } from 'react';
import { isDev, isFunction } from 'snow-base/utils';

export default function useUnmount(fn: () => void) {
  if (isDev) {
    if (isFunction(fn)) {
      console.error(
        `useUnmount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    return () => {
      fn?.();
    };
  }, []);
}
