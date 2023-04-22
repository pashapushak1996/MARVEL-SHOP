import * as Yup from 'yup';
import { USER_REGEX, PWD_REGEX } from '@/modules/auth/helpers/auth.regex';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().matches(USER_REGEX).required('Username is required'),
  password: Yup.string().matches(PWD_REGEX).required('Password is required'),
});