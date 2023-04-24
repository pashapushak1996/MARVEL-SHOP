import React from 'react';
import { Button, ConfigurableLink, Input, Typography } from '@/components/shared';

import { Field, Form } from 'react-final-form';

import { setModalType } from '../../store/';
import { useAppDispatch } from '@/app/hooks';
import { FieldError } from '@/modules/auth/components/field-error';
import { isRequired } from '@/modules/auth/helpers';

import './SignIn.scss';

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const onSignUpClick = () => dispatch(setModalType('sign-up'));

  const onFormSubmit = async (values: { username: string, password: string, }) => {
    // Todo Create api call
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
            render={({ handleSubmit, form, valid }) =>
              (<form className='sign-in__form' onSubmit={handleSubmit}>
                <Field name={'username'}
                       validate={isRequired}
                       render={({ input, meta }) =>
                         (<>
                             <Input value={input.value}
                                    onChange={input.onChange}
                                    inputVariants={['white']}
                                    placeholder='Username' />
                             {meta.touched &&
                               <FieldError isVisible={!!meta.error}
                                           errorMessage={meta.error}
                                           className={'sign-in__error-info'} />
                             }
                           </>
                         )} />

                <Field name={'password'}
                       type={'password'}
                       validate={isRequired}
                       render={({ input, meta }) =>
                         (<>
                             <Input
                               value={input.value}
                               type='password'
                               onChange={input.onChange}
                               placeholder='Password' />
                             {meta.touched &&
                               <FieldError isVisible={!!meta.error}
                                           errorMessage={meta.error}
                                           className={'sign-in__error-info'} />
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