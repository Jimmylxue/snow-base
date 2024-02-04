import { useState } from 'react';

export default function useUpdate() {
  const [_, setState] = useState<number>(0);
  const update = () => setState((cur) => ++cur);

  return {
    update,
  };
}
