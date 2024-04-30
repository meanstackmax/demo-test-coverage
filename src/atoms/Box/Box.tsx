import type { TBoxProps, TRefComponent } from './Box.types';
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { useForwardedRef } from '@/hooks/useForwardedRef';

/**
 * @component Box
 * @description
 * The Box component is a versatile container component that can be used to wrap and style content.
 *
 * @props
 * - `as`: Defines the HTML element or React component to be used as the root element. Options: 'div', 'a', 'button'. Default: 'div'.
 * - `display`: Defines the display property of the Box. Options: `'block', 'flex', 'grid', 'none'`. Default: 'block'.
 * - `className`: Provides a custom className to the Box.
 * - Other props specific to the HTML element or React component used as the root element can be passed as well.
 *
 * @example
 *
 * <Box
 *   as="div"
 *   display="flex"
 *   className="bg-blue-200 w-10rem h-10rem align-items-center justify-content-center"
 * >
 *   Test text
 * </Box>
 */

const Box = forwardRef((props: TBoxProps, ref: TRefComponent) => {
  const { display, as: asProp = 'div', className = '', children, ...restProps } = props;

  const innerRef = useForwardedRef(ref);

  const Component = asProp;

  const classes = clsx(
    { [className]: Boolean(className) },
    { block: display === 'block' },
    { flex: display === 'flex' },
    { grid: display === 'grid' },
    { hidden: display === 'none' },
    'wd-box'
  );

  return (
    <Component
      ref={innerRef as any}
      data-testid="wd-box"
      className={classes}
      {...restProps}
    >
      {children}
    </Component>
  );
});

Box.displayName = 'Box';
export default Box;
