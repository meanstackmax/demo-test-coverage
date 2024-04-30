import type { FC } from 'react';
import type { TAlignmentContainerProps } from './AlignmentContainer.types';
import React from 'react';
import clsx from 'clsx';
import { Flex, FlexItem } from '@/atoms';

/**
 * @component AlignmentContainer
 * @description
 * Renders a container that aligns its children based on the specified alignment properties.
 *
 * @props
 * - `className`: Additional class name for the container.
 * - `children`: Multiple children elements to be aligned.
 * - `justifyContent`: Horizontal alignment of the children. Options: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'.
 * - `alignItems`: Vertical alignment of the children. Options: 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'.
 * - `itemClassName`: Additional class name for the children items.
 *
 * @throws Error - When AlignmentContainer is rendered without multiple children.
 *
 * @example
 * ```jsx
 * <AlignmentContainer
 *   justifyContent="center"
 *   alignItems="flex-start"
 *   className="custom-container"
 *   itemClassName="custom-item"
 * >
 *   <div>Child 1</div>
 *   <div>Child 2</div>
 *   <div>Child 3</div>
 * </AlignmentContainer>
 * ```
 */

const AlignmentContainer: FC<TAlignmentContainerProps> = (props) => {
  const { className, children, justifyContent, alignItems, itemClassName, ...rest } = props;
  const classes = clsx('wd-alignment-container', className);
  const itemClasses = clsx('wd-alignment-container__item', itemClassName);

  if (!children) {
    throw Error('AlignmentContainer needs multiple children!');
  }

  return (
    <Flex
      className={classes}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {React.Children.map(children, (child, index) => (
        <FlexItem
          key={index}
          className={itemClasses}
        >
          {child}
        </FlexItem>
      ))}
    </Flex>
  );
};

AlignmentContainer.displayName = 'AlignmentContainer';
export default AlignmentContainer;
