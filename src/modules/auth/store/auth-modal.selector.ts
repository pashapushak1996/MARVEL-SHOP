import { RootState } from '@/app/store';

export const authModalSelectors = {
  getModalType:(state: RootState) => state.authModal.modalType,
  getIsOpenModal:(state: RootState) => state.authModal.isOpen
}