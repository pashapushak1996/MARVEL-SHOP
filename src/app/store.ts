import { configureStore } from '@reduxjs/toolkit';

import { authModalReducer, authReducer } from '@/modules/auth';
import { comicsReducer } from '@/modules/comics';
import { charactersReducer } from '@/modules/characters';
import { cartReducer } from '@/modules/cart';

import { fetchCharacters } from '@/modules/characters/store/characters.thunk';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    authModal: authModalReducer,
    comics: comicsReducer,
    characters: charactersReducer,
    cart: cartReducer,
  },
});

// Initializing store
store.dispatch(fetchCharacters());

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
