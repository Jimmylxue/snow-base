import { useEffect } from 'react';
import { isDev, isFunction } from 'snow-base/utils';

export default function useMount(fn: () => void) {
  if (isDev) {
    if (isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    fn?.();
  }, []);
}
