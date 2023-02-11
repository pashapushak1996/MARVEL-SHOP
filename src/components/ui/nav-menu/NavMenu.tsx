import React from 'react';
import cn from 'classnames';

import { Link } from '../link';
import './NavMenu.scss';

interface INavMenuProps {
  /** Items which will be rendered like ul list */
  items: Array<{ label: string, isActive: boolean, route: string }>;
}

export const NavMenu: React.FC<INavMenuProps> = ({ items }) => {
  const menuListItems = items.map((item, index) => {
    const navLinkClassNames =
      cn('nav-menu__link', { ['nav-menu__link--is-active']: item.isActive });

    return <li key={item.label + index} className='nav-menu__list-item'>
      <div className={navLinkClassNames}>
        <Link to={item.route}>{item.label}</Link>
      </div>
    </li>;
  });

  return (
    <nav className='nav-menu'>
      <ul className='nav-menu__list'>
        {menuListItems}
      </ul>
    </nav>
  );
};
