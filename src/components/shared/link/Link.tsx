import React from 'react';

import cn from 'classnames';

import './Link.scss';

interface ILinkProps {
  /** This is a variant of link  */
  as?: 'button';

  /** This is onClick handler*/
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

  /** This is children */
  children: React.ReactNode;

  /** This is modifiers according to BEM Methodology (link--$modifier, button--$modifier})*/
  modifiers?: Array<string>;

  /** This is route path */
  to?: string;
}

export const Link: React.FC<ILinkProps> = ({
                                             as,
                                             to,
                                             modifiers,
                                             children,
                                             ...props
                                           }) => {

  const className = as ? as : 'link';

  const classNames = modifiers?.map(modifier => `${className}--${modifier}`);

  if (!to) {
    return <a className={cn(className, classNames)} {...props}>{children}</a>;
  }

  return <a href={`/${to}`} className={cn(className, classNames)} {...props}>{children}</a>;
};
