import React from 'react';
import cn from 'classnames';

import './Modal.scss';

interface IModalProps {
  /** It defines visibility of modal */
  isOpen: boolean;

  /** It's image src for right side */
  imgSrc?: string;

  /** It will place on the right side */
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ isOpen, children, imgSrc }) => {
  const classNames = cn('custom-modal', {
    ['custom-modal--is-open']: isOpen,
  });

  return (
    <div className={classNames}>
      <div className='custom-modal__body-container'>
        <div className='custom-modal__body'>
          {children}
        </div>
      </div>
      <div className='custom-modal__cover'>
        {imgSrc && <img className='custom-modal__cover-img' src={imgSrc} alt='modal-image' />}
      </div>
    </div>
  );
};
