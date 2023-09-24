import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth } from '@/firebase';
import { UserLoginData } from '@/modules/auth/types';
import { UserRegisterData } from '@/modules/auth/types/auth.types';

export const authApi = {
  login: async ({ email, password }: UserLoginData) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data;
  },
  register: async ({ email, password, username }: UserRegisterData) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(data.user, { displayName: username });

    return data;
  },
  logout: async () => {
    const data = await signOut(auth);

    return data;
  },
};

