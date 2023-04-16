import React from 'react';

import { Link } from 'react-router-dom';

import cn from 'classnames';

import './ConfigurableLink.scss';

interface ILinkProps {
  /** This is a variant of configurable-link  */
  as?: 'button';

  /** This is onClick handler*/
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

  /** This is children */
  children: React.ReactNode;

  /** This is modifiers according to BEM Methodology (configurable-link--$modifier, button--$modifier})*/
  modifiers?: Array<string>;

  /** This is route path */
  to?: string;

  /** This is href for configurable-link*/
  href?: string;
}

export const ConfigurableLink: React.FC<ILinkProps> = ({
                                                         as,
                                                         to,
                                                         modifiers,
                                                         children,
                                                         href,
                                                         ...props
                                                       }) => {

  const className = as ? as : 'link';

  const classNames = modifiers?.map(modifier => `${className}--${modifier}`);

  if (href) {
    return <a href={href} className={cn(className, classNames)} {...props}>{children}</a>;
  }

  if (!to) {
    return <a className={cn(className, classNames)} {...props}>{children}</a>;
  }

  return <Link to={to} className={cn(className, classNames)} {...props}>{children}</Link>;
};
