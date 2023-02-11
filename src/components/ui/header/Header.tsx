import React from 'react';

import './Header.scss';

import logoSrc from '../../../assets/icons/logo.svg';
import { NavMenu } from '../nav-menu';


const navMenuItems = [{ label: 'News', isActive: false }, { label: 'Characters', isActive: true }, {
  label: 'Series',
  isActive: false,
}];

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logoSrc} alt='logo' />
      </div>
      <div className='header__menu'>
        <NavMenu items={navMenuItems} />
      </div>
      <div className='header__controls'>

      </div>
    </header>
  );
};
