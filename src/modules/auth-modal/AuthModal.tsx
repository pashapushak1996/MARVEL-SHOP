import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';


import { Modal } from '../../components/ui';
import { Overlay } from '../../components/shared/overlay';


import { getIsOpenModal, getModalType, setIsOpen } from './store';
import { SignIn, SignUp } from './components';


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