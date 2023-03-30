import React from 'react';
import { Button } from '../../shared';
import iconSrc from '../../../assets/icons/spiderman-icon.svg';

import './LoginButton.scss';
import { useAppDispatch } from '../../../hooks/rtk.hooks';
import { setIsOpen, setModalType } from '../../../features/auth-modal/auth-modal.slice';

export const LoginButton = () => {
  const dispatch = useAppDispatch();

  const onSignInClick = () => {
    dispatch(setModalType('sign-in'));
    dispatch(setIsOpen(true));
  };

  const onSignUpClick = () => {
    dispatch(setModalType('sign-up'));
    dispatch(setIsOpen(true));
  };

  return (
    <div className='login-button'>
      <div className='login-button__column'>
        <Button modifiers={['stretched']} onClick={onSignInClick}>Signin</Button>
      </div>
      <div className='login-button__icon'>
        <img src={iconSrc} alt='' />
      </div>
      <div className='login-button__column'>
        <Button modifiers={['stretched', 'white']} onClick={onSignUpClick}>Signup</Button>
      </div>
    </div>
  );
};
