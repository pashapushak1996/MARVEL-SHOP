import React from 'react';
import './Grid.scss';
import cn from 'classnames';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';
type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch';

interface IGridProps {
  /** There can be any ReactNode child*/
  children: React.ReactNode;

  /** There you should define should this component be grid-container */
  container?: boolean;

  /** There you should define should this component be grid-item */
  item?: boolean;

  /** How much space grid-item needs for extra-small screens */
  xs?: Cols;

  /** How much space grid-item needs for small screens */
  sm?: Cols;

  /** How much space grid-item needs for medium screens  */
  md?: Cols;

  /** How much space grid-item needs for large screens */
  lg?: Cols;

  /** How much space grid-item needs for xtra-large screens */
  xlg?: Cols;

  /** This is property for gap spacing */
  spacing?: Spacing;

  /** This determines how the elements will be located along the x-axis (horizontal) */
  justifyContent?: JustifyContent;

  /** This determines how the elements will be located along the y-axis (vertical) */
  alignItems?: AlignItems;
}

export const Grid: React.FC<IGridProps> = ({
                                             children,
                                             container,
                                             item,
                                             xs,
                                             sm,
                                             md,
                                             lg,
                                             xlg,
                                             spacing,
                                             justifyContent,
                                             alignItems,
                                             ...props
                                           }) => {
  const classNames = cn({
    ['Grid_container']: container,
    ['Grid_item']: item,
    [`Grid_xs_${xs}`]: xs,
    [`Grid_sm_${sm}`]: sm,
    [`Grid_md_${md}`]: md,
    [`Grid_lg_${lg}`]: lg,
    [`Grid_xlg_${xlg}`]: xlg,
    [`Grid_spacing_${spacing}`]: spacing,
    [`Grid_justifyContent_${justifyContent}`]: justifyContent,
    [`Grid_alignItems_${alignItems}`]: alignItems,
  });

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
