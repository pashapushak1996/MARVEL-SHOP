import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserLoginData } from '@/modules/auth/types';
import { authApi } from '@/modules/auth/api/auth.api';
import { UserRegisterData } from '@/modules/auth/types/auth.types';
import { normalizeUser } from '@/helpers/firebase.helper';
import { UserData } from '@/types';

const loginUser = createAsyncThunk<UserData, UserLoginData>(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await authApi.login({ email, password });

      return normalizeUser(data.user);
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
    { email, password, username }: UserRegisterData, { rejectWithValue }) => {
    try {
      const data = await authApi.register({ email, password, username });

      return normalizeUser(data.user);
    } catch (e: any) {
      if (e.response?.data?.message) {
        return rejectWithValue(e);
      }

      return rejectWithValue(e);
    }
  },
);

const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();

      localStorage.removeItem('access_token');
    } catch (e: any) {
      if (e.response?.data?.message) {
        return rejectWithValue(e);
      }

      return rejectWithValue(e);
    }
  },
);

export default { loginUser, registerUser, logoutUser };