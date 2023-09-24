import React from 'react';

import { Button } from '@/components/shared';
import iconSrc from '@/assets/icons/spiderman-icon.svg';

import { setIsOpen, setModalType } from '@/modules/auth/store/auth-modal.slice';
import { useAppDispatch } from '@/app/hooks';


import './LoginButton.scss';

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
