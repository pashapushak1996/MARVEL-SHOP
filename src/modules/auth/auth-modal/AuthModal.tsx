import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';


import { Modal } from '../../../components/ui';
import { Overlay } from '@/components/shared';


import { getIsOpenModal, getModalType, setIsOpen, setModalType } from '../store';
import { SignIn, SignUp } from '../components';


import './AuthModal.scss';

export const AuthModal = () => {
  const dispatch = useAppDispatch();
  const modalType = useAppSelector(getModalType);
  const isOpen = useAppSelector(getIsOpenModal);

  const onOverlayClick = () => {
    dispatch(setIsOpen(false));
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(setModalType('sign-in'));
      document.body.classList.add('lock');
    }

    return () => {
      document.body.classList.remove('lock');
      dispatch(setModalType(null));
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
            {modalType !== null && <Component />}
          </Modal>
        </div>
      </div>
      , document.body)
  );
};