import React from 'react';
import { Typography, Link, Input, Button } from '../../../shared';

import './SignIn.scss';

export const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='sign-in__title'>
        <Typography variant={'heading-lg'} as={'h3'}>Signin</Typography>
      </div>
      <div className='sign-in__question'>
        Already have an account?
        <div className='sing-in__link'>
          <Link to={'#'}>Sign up</Link>
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
