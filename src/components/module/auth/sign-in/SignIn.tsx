import React from 'react';
import { Typography, ConfigurableLink, Input, Button } from '../../../shared';

import './SignIn.scss';
import { useAppDispatch } from '../../../../hooks/rtk.hooks';
import { setModalType } from '../../../../features/auth-modal/auth-modal.slice';

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const onSignUpClick = () => dispatch(setModalType('sign-up'));

  return (
    <div className='sign-in'>
      <div className='sign-in__title'>
        <Typography variant={'heading-lg'} as={'h3'}>Signin</Typography>
      </div>
      <div className='sign-in__question'>
        Already have an account?
        <div className='sign-in__link'>
          <ConfigurableLink onClick={onSignUpClick}>Sign up</ConfigurableLink>
        </div>
      </div>
      <form className='sign-in__form'>
        <Input inputVariants={['white']} placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <Button modifiers={['stretched']}>Login</Button>
      </form>
    </div>
  );
};