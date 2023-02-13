import React from 'react';

import { Logo } from '../logo';
import { Typography } from '../typography';
import { Icon } from '../icon';
import { VerticalLinks } from './vertical-links';
import { Link } from '../link';

import './Footer.scss';

import instagramIcon from '../../../assets/icons/instagram-icon.svg';
import facebookIcon from '../../../assets/icons/facebook-icon.svg';
import twitterIcon from '../../../assets/icons/twitter-icon.svg';


export const Footer: React.FC = () => {
  const footerIcons = [instagramIcon, facebookIcon, twitterIcon];

  const iconsToRender = footerIcons.map((iconSrc, index) =>
    <Link key={iconSrc + index} to='#'>
      <Icon iconSrc={iconSrc} width={38} height={38} />
    </Link>,
  );

  const listItems = [
    { label: 'Home', route: '#' },
    { label: 'News', route: '#' },
    { label: 'Characters', route: '#' },
  ];

  return (
    <footer className='footer'>
      <div className='footer__right-column'>
        <div className='footer__logo'>
          <Logo width={233} />
        </div>
        <div className='footer__copyright-text'>
          <Typography size={12}
                      weight={500}
                      color={'#7C7C7C'}>Copyright 2022 Super-Heroes Shop</Typography>
        </div>
        <div className='footer__icons'>
          {iconsToRender}
        </div>
      </div>
      <div className='footer__menu'>
        <VerticalLinks listTitle={'Menu'} itemsList={listItems} />
      </div>
    </footer>
  );
};
