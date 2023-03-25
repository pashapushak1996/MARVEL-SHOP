import React from 'react';

import './Logo.scss';

import logoSrc from '../../../assets/icons/marvel-logo.png';

interface ILogoProps {
  width?: number;
  height?: number;
}

export const Logo: React.FC<ILogoProps> = ({ width, height }) => {
  return (
    <div className='logo' style={{ width, height }}>
      <img className='logo__cover'
           src={logoSrc}
           alt='logo' />
    </div>
  );
};
