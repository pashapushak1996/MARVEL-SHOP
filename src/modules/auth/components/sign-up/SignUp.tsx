import React from 'react';
import { Field, Form } from 'react-final-form';

import { Button, Checkbox, ConfigurableLink, Input, Typography } from '@/components/shared';
import { setModalType } from '../../store';
import { useAppDispatch } from '@/app/hooks';

import { isRequired } from '@/modules/auth/helpers';
import { FieldError } from '@/modules/auth/components/field-error';

import './SignUp.scss';


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
          <Field name={'username'}
                 validate={isRequired}
                 render={({ input, meta }) => (
                   <>
                     <Input onChange={input.onChange}
                            value={input.value}
                            placeholder='Username'
                            inputVariants={['white']} />
                     {meta.touched &&
                       <FieldError isVisible={!!meta.error}
                                   errorMessage={meta.error}
                                   className={'sign-up__error-info'} />
                     }
                   </>
                 )} />
          <div className='sign-up__rounded-inputs'>
            <Field name={'firstName'}
                   validate={isRequired}
                   render={({ input }) => (
                     <Input placeholder='First name'
                            value={input.value}
                            onChange={input.onChange}
                            inputVariants={['left-rounded']} />
                   )} />
            <Field name={'lastName'}
                   validate={isRequired}
                   render={({ input }) => (
                     <Input placeholder='Last name'
                            value={input.value}
                            onChange={input.onChange}
                            inputVariants={['right-rounded']} />
                   )} />
          </div>
          <Field name={'email'}
                 validate={isRequired}
                 render={({ input, meta }) => (
                   <>
                     <Input
                       placeholder='E-mail'
                       value={input.value}
                       onChange={input.onChange} />
                     {meta.touched &&
                       <FieldError isVisible={!!meta.error}
                                   errorMessage={meta.error}
                                   className={'sign-up__error-info'} />
                     }
                   </>
                 )} />
          <Field name={'password'}
                 validate={isRequired}
                 type={'password'}
                 render={({ input, meta }) => (
                   <>
                     <Input
                       placeholder='Password'
                       type={'password'}
                       value={input.value}
                       onChange={input.onChange} />
                     {meta.touched &&
                       <FieldError isVisible={!!meta.error}
                                   errorMessage={meta.error}
                                   className={'sign-up__error-info'} />
                     }
                   </>
                 )} />
          <Button modifiers={['stretched']} onClick={form.submit}>Register</Button>
          <div className='sign-up__terms'>
            <Field name={'terms'}
                   type={'checkbox'}
                   render={({ input }) =>
                     (
                       <Checkbox isChecked={input.checked} onChange={input.onChange} />
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
