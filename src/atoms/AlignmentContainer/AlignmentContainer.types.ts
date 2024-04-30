import type { PropsWithChildren } from 'react';
import type { TFlexProps } from '@/atoms';

export type TAlignmentContainerProps = {
  className?: string;
  itemClassName?: string;
} & PropsWithChildren &
  TFlexProps;
