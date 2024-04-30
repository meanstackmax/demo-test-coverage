import type { ForwardedRef } from 'react';
import { useMemo, forwardRef } from 'react';
import type { TFlexItemProps } from './Flex.types';
import { Box } from '@/atoms/Box';
import { clsx } from 'clsx';

/**
 * @component FlexItem
 * @description
 * Renders a flexible item within a Flex container with customizable properties.
 *
 * @props
 * - `flexShrink`: The flex shrink factor.
 * - `flexGrow`: The flex grow factor.
 * - `flexDirection`: The flex direction. Options: 'row', 'column', 'row-reverse', 'column-reverse'.
 * - `justifyContent`: Horizontal alignment of the item. Options: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'.
 * - `alignItems`: Vertical alignment of the item. Options: 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'.
 * - `wrap`: Specifies if the item should wrap. Options: boolean, 'wrap', 'nowrap', 'wrap-reverse'.
 * - `children`: The content of the FlexItem.
 * - `display`: The display type of the FlexItem. Default: 'flex'.
 * - `className`: Additional class name for the FlexItem.
 *
 * @example
 * ```jsx
 * <FlexItem
 *   flexShrink={0}
 *   flexGrow={1}
 *   flexDirection="row"
 *   justifyContent="center"
 *   alignItems="flex-start"
 *   wrap="wrap"
 *   className="custom-item"
 * >
 *   <div>Content</div>
 * </FlexItem>
 * ```
 */

const FlexItem = forwardRef((props: TFlexItemProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    flexShrink,
    flexGrow,
    flexDirection,
    justifyContent,
    alignItems,
    wrap,
    children,
    display = 'flex',
    className = '',
    ...restProps
  } = props;

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
  const computeShrink = useMemo(() => (flexShrink ? `flex-shrink-${flexShrink}` : ''), [flexShrink]);
  const computeGrow = useMemo(() => (flexGrow ? `flex-grow-${flexGrow}` : ''), [flexGrow]);
  const classes = clsx(
    { [className]: Boolean(className) },
    computeDirection,
    computeContent,
    computeItems,
    computedWrap,
    computeShrink,
    computeGrow
  );

  return (
    <Box
      ref={ref}
      className={classes}
      display={display}
      {...restProps}
    >
      {children}
    </Box>
  );
});

export default FlexItem;
