import React from 'react';
import { useFormik } from 'formik';

import { Button, ConfigurableLink, Input, Typography } from '@/components/shared';
import { setIsOpen, setModalType } from '@/modules/auth/store';
import { FieldError } from '@/modules/auth/components/field-error';
import { useAppDispatch } from '@/app/hooks';
import { signUpValidationSchema as validationSchema } from '../../helpers';

import './SignUp.scss';
import authThunks from '@/modules/auth/store/auth.actions';


export const SignUp = () => {
  const dispatch = useAppDispatch();

  const onSignInClick = () => dispatch(setModalType('sign-in'));

  const initialValues = {
    username: '',
    confirmPassword: '',
    password: '',
    email: '',
  };

  const {
    handleSubmit,
    handleChange,
    values,
    resetForm,
    submitForm,
    errors,
    touched,
  }
    = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(authThunks.registerUser(values));
      dispatch(setIsOpen(false));
      resetForm();
    },
  });

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
      <form className='sign-up__form' onSubmit={handleSubmit}>
        <Input
          id='username'
          value={values.username}
          onChange={handleChange}
          placeholder='Username'
          inputVariants={['white']} />
        <FieldError errorMessage={errors.username || ''}
                    isVisible={touched.username && !!errors.username} />
        <Input
          id='email'
          value={values.email}
          onChange={handleChange}
          placeholder='E-mail' />
        <FieldError errorMessage={errors.email || ''}
                    isVisible={touched.email && !!errors.email} />
        <Input
          id='password'
          value={values.password}
          onChange={handleChange}
          placeholder='Password'
          type={'password'} />
        <FieldError errorMessage={errors.password || ''}
                    isVisible={touched.password && !!errors.password} />
        <Input
          id='confirmPassword'
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm password'
          type={'password'} />
        <FieldError errorMessage={errors.confirmPassword || ''}
                    isVisible={!!errors.confirmPassword} />
        <Button modifiers={['stretched']} onClick={submitForm}>Register</Button>
      </form>
    </div>
  );
};
