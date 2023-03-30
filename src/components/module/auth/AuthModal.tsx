import React, { useEffect } from 'react';

import { Modal } from '../../ui';
import { useSelector } from 'react-redux';
import { getIsOpenModal, getModalType } from '../../../features/auth-modal/auth-modal.selector';
import { SignIn } from './sign-in';
import { SignUp } from './sign-up';
import { useAppDispatch } from '../../../hooks/rtk.hooks';
import { setIsOpen } from '../../../features/auth-modal/auth-modal.slice';
import { Overlay } from '../../shared/overlay';
import { createPortal } from 'react-dom';

import './AuthModal.scss';

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const modalType = useSelector(getModalType);
  const isOpen = useSelector(getIsOpenModal);

  const onOverlayClick = () => {
    dispatch(setIsOpen(false));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lock');
    }

    return () => {
      document.body.classList.remove('lock');
    };
  }, [isOpen]);


  const Component = modalType === 'sign-in'
    ? SignIn
    : SignUp;

  return (
    createPortal(
      <div className={'auth-modal'}>
        <Overlay onClick={onOverlayClick} isVisible={isOpen} />
        <div className='auth-modal__modal'>
          <Modal isOpen={isOpen}>
            <Component />
          </Modal>
        </div>
      </div>
      , document.body)
  );
};