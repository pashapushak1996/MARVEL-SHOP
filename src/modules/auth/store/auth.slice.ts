import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '@/modules/auth/store/auth.actions';
import { UserData } from '@/types';


interface InitialState {
  authenticated: boolean,
  loading: boolean,
  error: null | string,
  user: null | UserData;
}

const initialState: InitialState = {
  authenticated: false,
  loading: false,
  user: null,
  error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.error = null;
        state.user = payload;
      })
      .addCase(loginUser.pending, (state, { payload }) => {
        state.loading = true;
      });
  },
});

export const authReducer = authSlice.reducer;