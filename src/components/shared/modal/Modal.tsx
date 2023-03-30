import React from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import './Modal.scss';

interface IModalProps {
  /** It defines if modal is open */
  isOpen: boolean;

  /** It will place on the right side */
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ isOpen, children }) => {
  const classNames = cn('custom-modal', {
    ['custom-modal--is-open']: isOpen,
  });

  return createPortal(
    <div className={classNames}>
      <div className='custom-modal__body'>
        {children}
      </div>
    </div>,
    document.body,
  );
};
