import React from 'react';

import { NavMenu } from '../nav-menu';
import { LoginButton } from '../login-button';
import { Logo } from '../../shared';

import './Header.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to={'/'}>
          <Logo width={150} />
        </Link>
      </div>
      <div className='header__menu'>
        <NavMenu />
      </div>
      <div className='header__controls'>
        <LoginButton />
      </div>
    </header>
  );
};
