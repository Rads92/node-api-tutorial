import { FC, ReactNode } from 'react';

export const Button: FC<{ children: string | ReactNode }> = ({ children }) => (
  <button>{children}</button>
);
