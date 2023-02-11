import React from 'react';
import { Typography } from '../../typography';
import { Link } from '../../link';
import { Input } from '../../input';
import { Button } from '../../button';

import './SignIn.scss';

export const SignIn = () => {
  return (
    <div className='sign-in'>
      <Typography className='sign-in__title' size={36} variant={'h3'}>Signin</Typography>
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
