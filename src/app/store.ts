import { configureStore } from '@reduxjs/toolkit';

import { authModalReducer } from '@/modules/auth';
import { comicsReducer } from '@/modules/comics';
import { charactersReducer } from '@/modules/characters';
import { searchReducer } from '@/modules/search';

import { fetchComics } from '@/modules/comics/store/comics.thunk';
import { fetchCharacters } from '@/modules/characters/store/characters.thunk';


export const store = configureStore({
  reducer: {
    authModal: authModalReducer,
    comics: comicsReducer,
    characters: charactersReducer,
    search: searchReducer,
  },
});

// Initializing store
store.dispatch(fetchCharacters());

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
