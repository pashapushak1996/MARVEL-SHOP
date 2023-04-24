import { createSlice } from '@reduxjs/toolkit';


interface InitialState {
  authenticated: boolean,
  user: null | { email: string, name: string, photo: string };
}

const initialState: InitialState = {
  authenticated: false,
  user: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authenticated = true;

      state.user = action.payload;
    },
    logout: (state) => {
      state.authenticated = false;

      state.user = null;
    },
  },
});


export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;