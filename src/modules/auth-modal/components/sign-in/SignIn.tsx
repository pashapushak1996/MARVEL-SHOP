import React from 'react';
import { Typography, ConfigurableLink, Input, Button } from '../../../../components/shared';

import './SignIn.scss';

import { setModalType } from '../../store/auth-modal.slice';
import { useAppDispatch } from '../../../../app/hooks';

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
