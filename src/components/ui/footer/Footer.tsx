import React from 'react';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__right-column'>
        <div className='footer__logo'>
          <img src='https://placehold.co/233x65' alt='' />
        </div>
        <div className='footer__copyright-text'>
          <img src='https://placehold.co/195x16' alt='' />
        </div>
        <div className='footer__icons'>
          <img src='https://placehold.co/165x45' alt='' />
        </div>
      </div>
      <div className='footer__menu'>
        <img src='https://placehold.co/52x98' alt='' />
      </div>
    </footer>
  );
};
