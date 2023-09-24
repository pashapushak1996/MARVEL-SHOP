import { RootState } from '@/app/store';

export const authSelectors = {
  getAuth:(state: RootState) => state.auth.authenticated,
  getUser:(state: RootState) => state.auth.user
}
