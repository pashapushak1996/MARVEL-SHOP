import { USER_REGEX, PWD_REGEX } from '@/modules/auth/helpers/auth.regex';

export const validateUsername = (username: string) => {
  return USER_REGEX.test(username);
};
export const validatePassword = (password: string) => {
  return PWD_REGEX.test(password);
};

export const isRequired = (value: string) => !value ? 'Required' : null;