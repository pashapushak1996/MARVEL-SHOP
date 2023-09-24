import { createSlice } from '@reduxjs/toolkit';

import authThunks from '@/modules/auth/store/auth.actions';
import { UserData } from '@/types';

interface InitialState {
  authenticated: boolean,
  loading: boolean,
  error: string | null,
  user: UserData | null;
}

const initialState: InitialState = {
  authenticated: false,
  loading: false,
  user: null,
  error: null,
};

const { loginUser, logoutUser, registerUser } = authThunks;


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user =  action.payload.user;
      state.authenticated = action.payload.user !== null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.error = null;
        state.user = payload;
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.error = null;
        state.user = payload;
      })
      .addCase(logoutUser.fulfilled, (state, _) => {
        state.authenticated = false;
        state.user = null;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setUser } = authSlice.actions;