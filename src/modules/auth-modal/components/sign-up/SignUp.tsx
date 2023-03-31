import React from 'react';
import { Button, Checkbox, Input, ConfigurableLink, Typography } from '../../../../components/shared';
import './SignUp.scss';
import { setModalType } from '../../store/auth-modal.slice';
import { useAppDispatch } from '../../../../app/hooks';

export const SignUp = () => {
  const dispatch = useAppDispatch();

  const onSignInClick = () => dispatch(setModalType('sign-in'));
  return (
    <div className='sign-up'>
      <div className='sign-up__title'>
        <Typography as={'h3'} variant={'heading-lg'}>Signup</Typography>
      </div>
      <div className='sign-up__question'>
        Already have an account?
        <div className='sign-up__link'>
          <ConfigurableLink onClick={onSignInClick}>Sign in</ConfigurableLink>
        </div>
      </div>
      <form action='#' className='sign-up__form'>
        <Input placeholder='Username' inputVariants={['white']} />
        <div className='sign-up__rounded-inputs'>
          <Input placeholder='First name' inputVariants={['left-rounded']} />
          <Input placeholder='Last name' inputVariants={['right-rounded']} />
        </div>
        <Input placeholder='E-mail' />
        <Input placeholder='Password' type={'password'} />
        <Button modifiers={['stretched']}>Register</Button>
        <div className='sign-up__terms'>
          <Checkbox />
          <Typography variant={'body-sm'}> I have read and agree to the</Typography>
          <ConfigurableLink>Terms of Service</ConfigurableLink>
        </div>
      </form>
    </div>
  );
};
