import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavMenu.scss';
import cn from 'classnames';

interface INavLink {
  isActive: boolean;
  isPending: boolean;
}

export const NavMenu: React.FC = () => {

  const className = (navLinkState: INavLink): string => {
    return cn(
      'nav-menu__link',
      { 'nav-menu__link--is-active': navLinkState.isActive }
    );
  };

  return (
    <nav className='nav-menu'>
      <ul className='nav-menu__list'>
        <NavLink to={'/comics'} className={className}>Comics</NavLink>
        <NavLink to={'/characters'} className={className}>Characters</NavLink>
        <NavLink to={'/series'} className={className}>Series</NavLink>
      </ul>
    </nav>
  );
};
