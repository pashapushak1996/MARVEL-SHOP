import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

import './Button.scss';
import { Icon } from '../icon';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** There are modifiers which can be added according to BEM as (button--$modifier) */
  modifiers?: Array<string>;

  /** This is a path to the icon */
  icon?: string;
}

export const Button: React.FC<IButtonProps> = ({ modifiers, children, icon, ...props }) => {

  const buttonClasses = modifiers?.map((btnType: string) => `button--${btnType}`);

  return (
    <button className={cn('button', buttonClasses)} {...props}>
      {icon && <Icon iconSrc={icon}
                     width={20}
                     height={20} />}
      {children}
    </button>
  );
};
