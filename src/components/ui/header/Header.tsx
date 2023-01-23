import React from 'react';

import './Header.scss';

import logoSrc from '../../../assets/icons/logo.svg';


export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logoSrc} alt='logo' />
      </div>
      <div className='header__menu'>

      </div>
      <div className='header__controls'>

      </div>
    </header>
  );
};
