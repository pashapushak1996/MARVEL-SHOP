import React from 'react';
import { Typography } from '../../typography';
import { Link } from '../../link';
import { Input } from '../../input';
import { Button } from '../../button';

import './SignUp.scss';
import { Checkbox } from '../../checkbox';

export const SignUp = () => {

  return (
    <div className='sign-up'>
      <Typography className='sign-up__title'
                  size={36}>Signup</Typography>
      <div className='sign-up__question'>
        Already have an account?
        <div className='sing-in__link'>
          <Link to={'#'}>Sign in</Link>
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
          <Typography size={12}> I have read and agree to the</Typography>
          <Link to={'#'}>Terms of Service</Link>
        </div>
      </form>
    </div>
  );
};
