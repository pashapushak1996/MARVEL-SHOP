import React from 'react';
import { useFormik } from 'formik';

import { Button, ConfigurableLink, Input, Typography } from '@/components/shared';
import authThunks from '@/modules/auth/store/auth.actions';
import { signInValidationSchema as validationSchema } from '../../helpers';
import { setIsOpen, setModalType } from '../../store/';
import { useAppDispatch } from '@/app/hooks';

import { FieldError } from '@/modules/auth/components/field-error';

import './SignIn.scss'

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const { handleSubmit, handleChange, values, resetForm, submitForm, errors }
    = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(authThunks.loginUser(values));
      dispatch(setIsOpen(false));
      resetForm();
    },
  });

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
      <form className='sign-in__form' onSubmit={handleSubmit}>
        <Input
          id={'email'}
          value={values.email}
          onChange={handleChange}
          inputVariants={['white']}
          placeholder='Username' />
        <FieldError errorMessage={errors.email || ''} isVisible={!!errors.email} />
        <Input
          id={'password'}
          value={values.password}
          type='password'
          onChange={handleChange}
          placeholder='Password' />
        <FieldError errorMessage={errors.password || ''} isVisible={!!errors.password} />
        <Button onClick={submitForm} modifiers={['stretched']}>
          Login
        </Button>
      </form>
    </div>
  );
};