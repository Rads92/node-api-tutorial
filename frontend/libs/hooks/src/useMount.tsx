import { useEffect } from 'react';

export const useMount = (cb: () => void) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
