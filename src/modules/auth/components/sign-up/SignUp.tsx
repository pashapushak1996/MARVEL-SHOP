import React from 'react';

import { Button, Checkbox, Input, ConfigurableLink, Typography } from '@/components/shared';
import { setModalType } from '../../store';
import { useAppDispatch } from '@/app/hooks';

import './SignUp.scss';
import { Field, Form } from 'react-final-form';


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
      <Form onSubmit={(values) => {
        console.log(values);
      }} render={({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit} className='sign-up__form'>
          <Field name={'username'} render={({ input }) => (
            <Input onChange={input.onChange} value={input.value} placeholder='Username' inputVariants={['white']} />
          )} />
          <div className='sign-up__rounded-inputs'>
            <Field name={'firstName'} render={({ input }) => (
              <Input placeholder='First name'
                     value={input.value}
                     onChange={input.onChange}
                     inputVariants={['left-rounded']} />
            )} />
            <Field name={'lastName'} render={({ input }) => (
              <Input placeholder='Last name'
                     value={input.value}
                     onChange={input.onChange}
                     inputVariants={['right-rounded']} />
            )} />
          </div>
          <Field name={'email'} render={({ input }) => (
            <Input
              placeholder='E-mail'
              value={input.value}
              onChange={input.onChange} />
          )} />
          <Field name={'password'} type={'password'} render={({ input }) => (
            <Input
              placeholder='Password'
              type={'password'}
              value={input.value}
              onChange={input.onChange} />
          )} />

          <Button modifiers={['stretched']} onClick={form.submit}>Register</Button>
          <div className='sign-up__terms'>
            <Field name={'terms'}
                   type={'checkbox'}
                   render={({ input }) =>
                     (
                       <Checkbox isChecked={input.cshecked} onChange={input.onChange} />
                     )} />
            <Typography variant={'body-sm'}> I have read and agree to the</Typography>
            <ConfigurableLink>Terms of Service</ConfigurableLink>
          </div>
        </form>
      )
      } />
    </div>
  );
};
