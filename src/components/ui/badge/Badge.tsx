import React, { HTMLAttributes } from 'react';

import './Badge.scss';

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const Badge: React.FC<IBadgeProps> = ({ label, ...props }) => {
  return <div className='badge' {...props}>{label}</div>;
};
