import React from 'react';
import { Button } from '../../shared';
import iconSrc from '../../../assets/icons/spiderman-icon.svg';

import './LoginButton.scss';

export const LoginButton = () => {
  return (
    <div className='login-button'>
      <div className='login-button__column'>
        <Button modifiers={['stretched']}>Signin</Button>
      </div>
      <div className='login-button__icon'>
        <img src={iconSrc} alt='' />
      </div>
      <div className='login-button__column'>
        <Button modifiers={['stretched', 'white']}>Signup</Button>
      </div>
    </div>
  );
};
