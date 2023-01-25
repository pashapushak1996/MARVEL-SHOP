import React from 'react';

import './Icon.scss';

interface IICon {
  iconSrc: string;
  iconAlt?: string;
  width: number;
  height: number;
}

export const Icon: React.FC<IICon> = (props) => {
  const {
    iconSrc,
    iconAlt,
    width,
    height,
  } = props;

  return <img className='icon' src={iconSrc} width={width} height={height} alt={iconAlt} />;
};
