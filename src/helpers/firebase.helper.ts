import { UserInfo } from 'firebase/auth';
import { UserData } from '@/types';

export const normalizeUser = (user: UserInfo): UserData =>
  ({ uid: user.uid,
    email: user.email,
    photoURL: user.photoURL,
    username: user.displayName });