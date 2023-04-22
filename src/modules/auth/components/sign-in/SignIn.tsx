import React from 'react';
import { Button, ConfigurableLink, Input, Typography } from '@/components/shared';

import { Field, Form } from 'react-final-form';

import './SignIn.scss';

import { setModalType } from '../../store/';
import { useAppDispatch } from '@/app/hooks';
import { loginValidationSchema } from '@/modules/auth/helpers';
import { FieldError } from '@/modules/auth/components/field-error';

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const onSignUpClick = () => dispatch(setModalType('sign-up'));

  const onFormSubmit = (values: { username: string, password: string, }) => {

    // Todo Create api call
  };

  const validateLoginData = async (values: { username: string, password: string, }) => {
    try {
      const loginData = await loginValidationSchema.validate(values);

      return loginData;
    } catch (e) {
      return e;
    }
  };


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
      <Form onSubmit={onFormSubmit}
            validate={validateLoginData}
            render={({ handleSubmit, form, valid }) =>
              (<form className='sign-in__form' onSubmit={handleSubmit}>
                <Field name={'username'}
                       render={({ input, meta }) =>
                         (<>
                             <Input value={input.value}
                                    onChange={input.onChange}
                                    inputVariants={['white']}
                                    placeholder='Username' />
                             {meta.touched && meta.error &&
                               <div className={'sign-in__error-info'}>
                                 <FieldError errorMessage={meta.error} />
                               </div>
                             }
                           </>
                         )} />

                <Field name={'password'}
                       type={'password'}
                       render={({ input, meta }) =>
                         (<>
                             <Input
                               value={input.value}
                               type='password'
                               onChange={input.onChange}
                               placeholder='Password' />
                             {meta.touched && meta.error &&
                               <div className={'sign-in__error-info'}>
                                 <FieldError errorMessage={meta.error} />
                               </div>
                             }
                           </>
                         )}
                />
                <Button onClick={form.submit} modifiers={['stretched']} disabled={valid}>
                  Login
                </Button>
              </form>)
            }
      />
    </div>
  );
};