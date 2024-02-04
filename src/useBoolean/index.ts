import useToggle from '../useToggle';

export default function useBoolean(defaultValue = false) {
  const res = useToggle({
    stateRange: [true, false],
    defaultValue,
  });

  return { ...res };
}
