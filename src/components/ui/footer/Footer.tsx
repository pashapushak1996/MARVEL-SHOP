import React from 'react';

import { Logo, ConfigurableLink, Typography, Icon } from '../../shared';
import { VerticalLinks } from './vertical-links';

import './Footer.scss';

import instagramIcon from '../../../assets/icons/instagram-icon.svg';
import facebookIcon from '../../../assets/icons/facebook-icon.svg';
import twitterIcon from '../../../assets/icons/twitter-icon.svg';
import { Link } from 'react-router-dom';


export const Footer: React.FC = () => {
  const footerIcons = [instagramIcon, facebookIcon, twitterIcon];

  const iconsToRender = footerIcons.map((iconSrc, index) =>
    <ConfigurableLink key={iconSrc + index} href={'https://github.com/pashapushak1996'}>
      <Icon iconSrc={iconSrc} width={38} height={38} />
    </ConfigurableLink>,
  );

  const listItems = [
    { label: 'Home', route: '/' },
    { label: 'Characters', route: '/characters' },
    { label: 'Comics', route: '/comics' },
  ];

  return (
    <footer className='footer'>
      <div className='footer__right-column'>
        <div className='footer__logo'>
          <Link to={'/'}>
            <Logo width={233} />
          </Link>
        </div>
        <div className='footer__copyright-text'>
          <Typography variant={'body-sm'} weight={'semi-bold'}>Copyright 2022 Super-Heroes Shop</Typography>
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
