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
}

export const Button: React.FC<IButtonProps> = ({
                                                 children,
                                                 icon,
                                                 modifiers = [],
                                                 disabled,
                                                 ...props
                                               }) => {

  if (disabled) {
    modifiers.push('disabled');
  }

  return (
    <Link {...props} modifiers={modifiers} as='button'>
      {icon && <div className='button__icon'>
        <Icon iconSrc={icon}
              width={20}
              height={20} />
      </div>}
      <div className='button__text'>
        {children}
      </div>
    </Link>
  );
};
