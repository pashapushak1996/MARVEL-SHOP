import React from 'react';

import './Icon.scss';

interface IICon {
  iconSrc: string;
  iconAlt?: string;
  width: number;
  height: number;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Icon: React.FC<IICon> = (props) => {
  const {
    iconSrc,
    iconAlt,
    width,
    height,
    onClick,
  } = props;

  return <img
    onClick={onClick}
    className='icon'
    src={iconSrc}
    width={width}
    height={height}
    alt={iconAlt} />;
};
