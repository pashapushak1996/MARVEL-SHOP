import React from 'react';

import { NavMenu } from '../nav-menu';
import { LoginButton } from '../login-button';
import { Logo } from '../../shared';

import './Header.scss';


const navMenuItems = [{
  label: 'News',
  route: '',
  isActive: false,
}, {
  label: 'Characters',
  route: '',
  isActive: true,
}, {
  label: 'Series',
  route: '',
  isActive: false,
}];

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Logo width={150} />
      </div>
      <div className='header__menu'>
        <NavMenu items={navMenuItems} />
      </div>
      <div className='header__controls'>
        <LoginButton />
      </div>
    </header>
  );
};
