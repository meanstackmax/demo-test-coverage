import type { HTMLProps, PropsWithChildren } from 'react';
import type { TDisplayBox } from '@/atoms/Box';

export type TJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type TAlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type TFlexProps = {
  className?: string;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  flexDirection?: TFlexDirection;
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse';
} & PropsWithChildren &
  Omit<Partial<HTMLProps<HTMLDivElement>>, 'ref'>;

export type TFlexItemProps = {
  display?: TDisplayBox;
  flexShrink?: '0' | '1';
  flexGrow?: '0' | '1';
} & TFlexProps;
