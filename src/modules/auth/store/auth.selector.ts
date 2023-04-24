import { RootState } from '@/app/store';

export const getAuth = (state: RootState) => state.auth.authenticated;
export const getUser = (state: RootState) => state.auth.user;