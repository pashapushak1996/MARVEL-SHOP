import { createSlice } from '@reduxjs/toolkit';
import { ICartItem } from '@/modules/cart/types/ICartItem';

interface ICartState {
  cartItems: ICartItem[],
}

const initialState = {
  cartItems: [],
} as ICartState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!action.payload.price) {
        return;
      }

      const cartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity += 1;

        return;
      }

      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;