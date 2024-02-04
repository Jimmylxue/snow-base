import { useMemo, useState } from 'react';

type Options<T> = {
  stateRange: T[];
  defaultValue?: T;
  direction?: 'LEFT' | 'RIGHT';
};

export default function useToggle<T extends any>({
  stateRange,
  defaultValue,
  direction = 'RIGHT',
}: Options<T>) {
  const [state, setState] = useState<T>(() => defaultValue || stateRange?.[0]);

  const current_index = stateRange.findIndex((cur) => cur === state);

  const next_index = useMemo(() => {
    if (direction === 'RIGHT') {
      return current_index === stateRange.length - 1 ? 0 : current_index + 1;
    }
    return current_index === 0 ? stateRange.length - 1 : current_index - 1;
  }, [current_index, defaultValue, direction]);

  const toggle = () => {
    setState(stateRange[next_index]);
  };

  const set = (val: T) => {
    setState(val);
  };

  return { state, toggle, set };
}
