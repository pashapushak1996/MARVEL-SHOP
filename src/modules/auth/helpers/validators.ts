import * as yup from 'yup';
import { PWD_REGEX } from '@/modules/auth/helpers/auth.regex';

export const signInValidationSchema = yup.object({
  email: yup.string()
    .required('Username is required')
    .min(3, 'Min length is 3')
    .max(30, 'Max length is 30'),
  password: yup.string()
    .required('Password is required')
});

export const signUpValidationSchema = yup.object({
  username: yup.string()
    .required('Username is required')
    .min(3, 'Min length is 3')
    .max(30, 'Max length is 30'),
  password: yup.string()
    .required('Password is required')
    .matches(PWD_REGEX, 'This is not valid password'),
  email: yup.string()
    .email('Email is not valid')
    .required('Email is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Password mismatch'),
});