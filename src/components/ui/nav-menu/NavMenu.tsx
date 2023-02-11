import React, { useState } from 'react';
import { Link } from '../link';

import './NavMenu.scss';
import cn from 'classnames';

interface INavMenuProps<T> {
  /** Items which will be rendered like ul list */
  items: Array<T>;
}

export const NavMenu = <T extends { label: string, route: string }>({ items }: INavMenuProps<T>) => {
  const [activeLink, setActiveLink] = useState<string>('');


  const onClickLink = (item: T) => {
    setActiveLink(item.label);
  };

  const listItems = items.map((item, index) => {
    const onClickLinkHandler = () => {
      onClickLink(item);
    };

    const navLinkClassNames =
      cn('nav-menu__link', { ['nav-menu__link--is-active']: item.label === activeLink });

    return <li key={item.label + index} className='nav-menu__list-item'>
      <div className={
        navLinkClassNames
      }>
        <Link onClick={onClickLinkHandler} to={item.route}>{item.label}</Link>
      </div>
    </li>;
  });

  return (
    <nav className='nav-menu'>
      <ul className='nav-menu__list'>
        {listItems}
      </ul>
    </nav>
  );
};
