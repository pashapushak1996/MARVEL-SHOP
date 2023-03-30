import React from 'react';
import { createPortal } from 'react-dom';

import './Overlay.scss';
import cn from 'classnames';

interface IOverlayProps {
  /** It's click handle function */
  onClick: () => void;

  /** It defines if overlay is visible*/
  isVisible: boolean;
}

export const Overlay: React.FC<IOverlayProps> = ({ onClick, isVisible }) => {
  const className = cn(
    'overlay',
    { ['overlay--is-visible']: isVisible });

  return createPortal(
    <div onClick={onClick} className={className}></div>,
    document.body,
  );
};