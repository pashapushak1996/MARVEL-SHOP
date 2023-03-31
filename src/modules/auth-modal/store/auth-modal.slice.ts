import { createSlice } from '@reduxjs/toolkit';

interface IAuthModalState {
  isOpen: boolean;
  modalType: 'sign-in' | 'sign-up';
}

const initialState = {
  isOpen: false,
  modalType: 'sign-up',
} as IAuthModalState;

export const authModal = createSlice({
  name: 'auth-modal',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
  },
});

export const { setIsOpen, setModalType } = authModal.actions;

export default authModal.reducer;