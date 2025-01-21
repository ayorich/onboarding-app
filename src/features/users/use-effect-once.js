import { useEffect, useRef } from 'react';

export function useEffectOnce(effect) {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount) {
      isFirstMount.current = false;

      return effect();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
