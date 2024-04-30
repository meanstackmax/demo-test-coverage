import type { PropsWithChildren, HTMLProps, ForwardedRef } from 'react';

export type TDisplayBox = 'block' | 'flex' | 'grid' | 'none';

export type TRefComponent = ForwardedRef<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>;

export type TBoxProps = {
  display?: TDisplayBox;
  as?: 'div' | 'a' | 'button';
  className?: string;
} & PropsWithChildren &
  Omit<Partial<HTMLProps<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>>, 'ref' | 'type'> &
  Record<string, unknown>;
