import { useEffect, useMemo, useState } from 'react';
import { isFunction } from 'snow-base/utils';

type TimeoutOption = {
  timeout: number;
  enable?: (() => boolean) | boolean;
  onStart?: () => void;
  onTimeStep?: (time: number) => void;
  onTimeEnd?: () => void;
};

export default function useTimeout({
  enable = true,
  timeout,
  onStart,
  onTimeStep,
  onTimeEnd,
}: TimeoutOption) {
  const [timeEnd, setTimeEnd] = useState(timeout);

  const _enable = useMemo(() => {
    if (isFunction(enable)) {
      return enable?.();
    }
    return !!enable;
  }, [enable]);

  useEffect(() => {
    if (!_enable) {
      return;
    }
    if (timeEnd === timeout) {
      onStart?.();
    }
    onTimeStep?.(timeEnd);
    if (timeEnd === 0) {
      onTimeEnd?.();
    }
  }, [timeEnd, _enable]);

  useEffect(() => {
    if (!_enable) {
      return;
    }

    if (timeEnd === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setTimeEnd((time) => --time);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeEnd, _enable]);

  const isFinish = timeEnd === 0;

  const refresh = () => {
    setTimeEnd(timeout);
  };

  return {
    time: timeEnd,
    isFinish,
    refresh,
  };
}
