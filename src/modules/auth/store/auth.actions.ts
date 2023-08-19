import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserLoginData } from '@/modules/auth/types';
import { authApi } from '@/modules/auth/api/auth.api';
import { UserData } from '@/types';

const loginUser = createAsyncThunk<UserData, UserLoginData>(
  'auth/login',
  async ({ email, password }: UserLoginData, { rejectWithValue }) => {
    try {
      const data = await authApi.login({ email, password });

      const { access_token, refresh_token, user }:
        {
          access_token: string,
          refresh_token: string,
          user: UserData
        } = data;


      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);


      return user;
    } catch (e: any) {
      if (e.response?.data?.message) {
        return rejectWithValue(e);
      }

      return rejectWithValue(e);
    }
  },
);

const registerUser = createAsyncThunk(
  'auth/register',
  async (
    { username, email, password }: { username: string, email: string, password: string }) => {

  },
);

export { loginUser };