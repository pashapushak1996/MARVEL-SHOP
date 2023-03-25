import React from 'react';

import './Button.scss';

import { Icon } from '../icon';
import { Link } from '../link';

interface IButtonProps {
  /** There are modifiers which can be added according to BEM as (button--$modifier) */
  modifiers?: Array<string>;

  /** This is a path to the icon */
  icon?: string;

  /** This is a children which will be added into button*/

  children?: React.ReactNode;

  /** This is the reference path for button link */

  to?: string;

  /** This is disabled button state */
  disabled?: boolean;

  /** This is onClick handler */

  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

  /** This is icon width */

  iconSize?: number;
}

export const Button: React.FC<IButtonProps> = ({
                                                 children,
                                                 icon,
                                                 modifiers = [],
                                                 disabled,
                                                 iconSize,
                                                 ...props
                                               }) => {

  if (disabled) {
    modifiers.push('disabled');
  }

  const isIconExist = icon && iconSize;

  return (
    <Link {...props} modifiers={modifiers} as='button'>
      {isIconExist && <div className='button__icon'>
        <Icon iconSrc={icon}
              width={iconSize}
              height={iconSize} />
      </div>}
      <div className='button__text'>
        {children}
      </div>
    </Link>
  );
};
