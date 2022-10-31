import { useEffect } from 'react';

export const useUnmount = (cb: () => void) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    return cb;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
