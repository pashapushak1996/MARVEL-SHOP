import { USER_REGEX, PWD_REGEX } from '@/modules/auth/helpers/auth.regex';

export const isRequired = (value: string) => !value ? 'This field is required' : null;