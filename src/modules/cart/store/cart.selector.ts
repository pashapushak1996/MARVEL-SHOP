import { RootState } from '@/app/store';

export const cartSelectors = {
  getCartItems:(state: RootState) => state.cart.cartItems
}
