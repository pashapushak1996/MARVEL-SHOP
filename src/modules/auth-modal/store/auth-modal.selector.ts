import { RootState } from '../../../app/store';

export const getModalType = (state: RootState) => state.authModal.modalType;
export const getIsOpenModal = (state: RootState) => state.authModal.isOpen;