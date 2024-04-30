import type { ForwardedRef } from 'react';
import type { TFlexProps } from './Flex.types';
import { useMemo, forwardRef } from 'react';
import { Box } from '@/atoms/Box';
import { clsx } from 'clsx';

/**
 * @component Flex
 * @description
 * The Flex component is used to create flexible layouts using the CSS flexbox model.
 *
 * @props
 * - `justifyContent`: Controls the `justify-content` CSS property within the Flex component. Options: 'start', 'end', 'center', 'between', 'around', 'evenly'.
 * - `alignItems`: Controls the `align-items` CSS property within the Flex component. Options: 'start', 'end', 'center', 'stretch', 'baseline'.
 * - `flexDirection`: Controls the `flex-direction` CSS property within the Flex component. Options: 'row', 'row-reverse', 'column', 'column-reverse'.
 * - `wrap`: Controls the `flex-wrap` CSS property within the Flex component. Options: 'wrap', 'nowrap', 'wrap-reverse'.
 * - `className`: Provides custom className to the Flex component.
 * - `children`: The content to be rendered inside the Flex component.
 *
 * @example
 *
 * <Flex
 *  justifyContent="center"
 *  alignItems="center"
 *  flexDirection="row"
 *  wrap="wrap"
 *  className="custom-class"
 * >
 *   {children}
 * </Flex>
 */

const Flex = forwardRef((props: TFlexProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { justifyContent, alignItems, flexDirection, wrap, className = '', children, ...restProps } = props;

  const computeDirection = useMemo(() => (flexDirection ? `flex-${flexDirection}` : 'flex-row'), [flexDirection]);
  const computeContent = useMemo(
    () => (justifyContent ? `justify-content-${justifyContent}` : 'justify-content-center'),
    [justifyContent]
  );
  const computeItems = useMemo(() => (alignItems ? `align-items-${alignItems}` : 'align-items-center'), [alignItems]);
  const computedWrap = useMemo(
    () => (wrap ? (typeof props.wrap == 'string' ? `flex-${props.wrap}` : 'flex-wrap') : ''),
    [props.wrap]
  );
  const classes = clsx(
    'wd-flex',
    { [className]: Boolean(className) },
    computeDirection,
    computeContent,
    computeItems,
    computedWrap
  );

  return (
    <Box
      ref={ref}
      data-testid="wd-flex"
      display="flex"
      className={classes}
      {...restProps}
    >
      {children}
    </Box>
  );
});

Flex.displayName = 'Flex';
export default Flex;
